import React from "react";

import "./style.scss";

const Profile = () => {
  return (
    <div className="container profileMainContent">
      <main role="main">
        <div className="jumbotron">
          <header>
            <span className="avatar">
              <img src="img/avatar.jpg" alt="Profile Picture" />
            </span>
            <h1 className="text-center">Eric Baer</h1>
            <p className="lead text-center">
              Director of Software Development @&nbsp;
              <a href="http://formidable.com/">Formidable, Inc</a>
            </p>
          </header>

          <p className="text-center">
            I'm a software engineer based in Seattle and over the last decade
            I've worked on projects ranging from embedded systems in C++ to high
            traffic APIs in Java to large JavaScript applications. For the past
            five years, I have been working to specialize in JavaScript and the
            associated ecosystem. Most recently, I have been consulting with
            companies like Starbucks and Walmart to drive large international
            e-commerce projects on the web.
          </p>

          <footer>
            <ul className="icons">
              <li>
                <a
                  href="https://twitter.com/ebaerbaerbaer"
                  className="fa fa-twitter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ericjbaer/"
                  className="fa fa-linkedin"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; Eric Baer 2017</p>
      </footer>
    </div>
  );
};

export default Profile;
