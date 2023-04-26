---
title: "EmoLink - A backendless emoji URL shortener for the Edge"
excerpt: "How I used new(ish) Internationalization standards to make an offline-capable, collision-free URL shortener."
coverImage: "/assets/blog/emo-link/cover.png"
date: "2023-04-24T21:48:04.629Z"
author:
  name: Eric Baer
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

# Introducing [EmoLink](https://emol.ink/)

This is an EmoLink pointing to this blog post.
<br/>
[https://emol.ink/😻👩🏿‍🤝‍👨🏾👃🏾🛴👩🏾‍🎨🏍️🤷🏻‍♀🧑🏻‍🎨🧹🚚✋🏽](https://emol.ink/😻👩🏿‍🤝‍👨🏾👃🏾🛴👩🏾‍🎨🏍️🤷🏻‍♀🧑🏻‍🎨🧹🚚✋🏽)
<br/>
There are emojis in it, and you probably have some questions like:

- You can put emoji in a URL?
- I like this.
- Why aren't Unicode URLs everywhere?
- Did you say this works offline?
- Why?

Right. Some of those are questions. Let's take it from the top.

## Putting Emoji In An ~URL~ IRI

In 2005, the IETF decided that some fraction of the Internet may be interested in non-US-ASCII characters in their URIs. To do this, they created [Internationalized Resource Identifier (IRI)](https://www.ietf.org/rfc/rfc3987.txt), a protocol that extends the functionality of the Uniform Resource Identifier (URI) to include Unicode characters, including emoji!

## I like this.

Thanks! I worked pretty hard on it. It's always nice to hear nice things.

## Why aren't IRIs everywhere?

The short answer is that backward compatibility is a bitch, and nobody wants to [break the Internet](https://developer.chrome.com/blog/smooshgate/).

The longer answer is that a simple HTTP request passes through a LOT of [software and hardware](https://aws.amazon.com/blogs/mobile/what-happens-when-you-type-a-url-into-your-browser/), and there is no assurance that any of it will support IRIs. To maintain backward compatibility with existing URI infrastructure, IRIs are usually mapped to URIs using percent-encoded ASCII values before being sent. Basically, just a call to `encodeURIComponent`.

This may seem like a non-starter, but there is a trick! Modern browsers support IRIs by _displaying_ them in their native character sets but _converting them_ to URI before sending the request. So, while the actual URI over the wire may be long and ugly, all people see is the IRI.

So, Chrome, Firefox, and Arc will display this fun IRI in the address bar...

[https://emol.ink/😻👩🏿‍🤝‍👨🏾👃🏾🛴👩🏾‍🎨🏍️🤷🏻‍♀🧑🏻‍🎨🧹🚚✋🏽](https://emol.ink/😻👩🏿‍🤝‍👨🏾👃🏾🛴👩🏾‍🎨🏍️🤷🏻‍♀🧑🏻‍🎨🧹🚚✋🏽)

it will be converted into this nasty thing before it goes over the wire.

<br/>

```
https://emol.ink%F0%9F%98%BB%F0%9F%91%A9%F0%9F%8F%BF%E2%80%8D%F0%9F%A4%9D%E2%80%8D%F0%9F%91%A8%F0%9F%8F%BE%F0%9F%91%83%F0%9F%8F%BE%F0%9F%9B%B4%F0%9F%91%A9%F0%9F%8F%BE%E2%80%8D%F0%9F%8E%A8%F0%9F%8F%8D%EF%B8%8F%F0%9F%A4%B7%F0%9F%8F%BB%E2%80%8D%E2%99%80%F0%9F%A7%91%F0%9F%8F%BB%E2%80%8D%F0%9F%8E%A8%F0%9F%A7%B9%F0%9F%9A%9A%E2%9C%8B%F0%9F%8F%BD
```

### Okay, so why doesn't everybody use them?

Because browsers aren't the only things that handle links. Here are all the places IRIs do, and don't work that I've tested so far:

**Works**

- Chrome (MacOS) Address Bar
- Arc (MacOS) Address Bar
- Safari (MacOS) Address Bar
- Firefox (MacOS) Address Bar
- Gmail, but only when using an RTF link
- Signal - Android
- WhatsApp - Android
- Android Messages
- Android copy-paste
- Lunchclub Chat
- LinkedIn Chat

**Doesn't Work**

- Google Meet Chat
- Twitter
- Discord

## Did you say this works offline?

I did!

### How Most URL Shorteners Work

A URL shortener is essentially just a key-value (KV) store, and the only real challenge is figuring out how to generate a short, collision-free key. There are a few standard answers to this question:

- **A central, consistent ID generator** - Typically, this just means using an RDBMS's auto-incremented primary ID. This works, but a centralized ID generator can become a bottleneck when the system needs to scale horizontally, is a single point of failure, limits your DB choices, and is often incompatible with computing at the Edge - particularly if the Edge extends past CDNs onto devices.
- **Distribute ID ranges to persistent stateful servers with a coordination service** - This is your typical systems-design answer because it's maximally scalable and fault tolerant. But it's also stateful, serverfull, pretty complex to implement, and can lead to weird ID fragmentation in your DB.
- **A random ID + collision validation** - There are as many ways to do this as there are bugs in my code, but they all share the same weakness: the shorter they are, the more collisions you'll have, which is not a great tradeoff to have to make when the goal of a URL shortener is to produce the shortest possible ID.

### How the EmoLink URL shortener works

The problem those solutions are solving isn't generating a key; it's generating a _short_ key. If length wasn't an issue, you could just use a 128-bit UUID, which should be collision-free without coordination.

But a UUID is only too long if you encode it with a 62-char ASCII alphabet (`[A-Za-z0-9]`). By expanding the alphabet from 62 ASCII chars to 4,096 emojis, you can encode all 128 bits in just 11 characters.

EmoLink generates UUIDs on the client, encodes them to emoji, and uses that as a key. This gives it distributed, offline-capable, fault-tolerant, collision-free ID creation without any of the drawbacks of the other approaches.

The only cost is that where a typical URL shortener needs 7 chars, this requires 11. But you can't put a price on fun!

And if you were curious, here's some code:

```js
function hexToBinary(hexNum) {
  return parseInt(hexNum, 16).toString(2).padStart(8, "0");
}

function chunkString(str, length) {
  return str.match(new RegExp(".{1," + length + "}", "g")) || [];
}

function encodeUUIDAsEmoji(uuid) {
  // Convert the UUID to a binary string
  const uuidAsBinaryString = chunkString(uuid.replaceAll("-", ""), 2)
    .map(hexToBinary)
    .join("");

  // The alphabet size determines the number of bits required to encode the
  // complete set. The Unicode 15 Emoji set includes 4764 emojis. This
  // requires either 12 bits to encode a slightly truncated set (2^12 =
  // 4096), of 13 bits for the complete set. I've chosen to use 12 since
  // padding several thousand chars would considerably complicate the
  // problem for no real benefit
  const bitsPerEmoji = 12;

  // Convert the binary string to an emoji string using the emoji alphabet
  return chunkString(uuidAsBinaryString, bitsPerEmoji)
    .map((binaryNumber) => parseInt(binaryNumber, 2))
    .map((emojiIndex) => emoji_alphabet[emojiIndex])
    .join("");
}
```

## Why?

Well, one answer might be [because it's there](https://en.wikipedia.org/wiki/George_Mallory#:~:text=Mallory%20is%20famously%20quoted%20as,famous%20three%20words%20in%20mountaineering%22.). A better answer is that this is actually pretty novel and actually has a few real advantages:

- **It's backendless** - You run this on devices at the Edge, which may have limited, or intermittent connectivity.
- **It's simple and dependency-free** - The only servers that don't break in production are servers that don't exist.
- **Implementing it doesn't constrain your architecture** - ID generation requires specific types of DBs, and distributed hashing requires load balancing, health checking, and a coordination service.
- **It doesn't require Auth** - The standard approach to the problem uses an address space that is 7^62. This is very large, but because it's finite, you'll need to protect against bad actors filling up the space. This is typically done with an authentication layer, but it's not an issue when the address space is practically infinite.
- **You're cool, right?** - IRIs are modern, so if you use SvelteKit, wear a [teenie weenie beanie](https://youtu.be/9r5XVdKKcas), and don't think of the beach when you see a cartoon crab; you should probably be using IRIs.
- **Emoji is better** - Have fun!
