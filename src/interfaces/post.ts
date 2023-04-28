type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
    width: string;
    height: string;
  };
  content: string;
  html: string;
};

export default PostType;
