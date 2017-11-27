import React from "react";

import "./style.scss";

const Profile = () => {
  return (
    <div>
      <section className="jumbotron text-center mainContainer">
        <div className="container">
          <img
            src="../../img/book-cover.png"
            width="350"
            height="568"
            className="rounded float-left bookCover"
            alt="Technology Briefing: React book cover"
          />

          <h1 className="jumbotron-heading">Technology Briefing: React</h1>

          <p>
            The decision to change your underlying technologies is so critical
            to how teams function that it is essential to have buy-in from
            everybody at the table - not just developers.
          </p>
          <p>
            This book is not to teach you React; there are many excellent
            resources for that. Instead, its goal is to help to explain some of
            React’s core innovations with as little jargon as possible to help
            bring a more diverse set of interests into conversations about
            technology.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
