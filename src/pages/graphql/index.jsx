import React from "react";

import "./style.scss";

const Profile = () => {
  return (
    <div className="container profileMainContent">
      <main role="main">
        <div className="jumbotron">
          <p className="text-center">
            <ul>
              <li>
                <a href="https://github.com/chentsulin/awesome-graphql">
                  A list of GraphQL code and resources
                </a>
              </li>
              <li>
                <a href="https://facebook.github.io/graphql">
                  The GraphQL Spec
                </a>
              </li>
              <li>
                <a href="https://www.howtographql.com/">
                  An excellent interactive tutorial
                </a>
              </li>
              <li>
                <a href="https://www.ericbaer.com/graphql">GraphQL Demo Code</a>
              </li>
            </ul>
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; Eric Baer 2017</p>
      </footer>
    </div>
  );
};

export default Profile;
