import React from "react";

import "./style.scss";

const ReactBook = () => {
  return (
    <div className="container">
      <section className="jumbotron text-center mainContainer">
        <div className="row">
          <div className="col-sm bookTitleWrapper">
            <h1 className="bookTitle">Technology Briefing: React</h1>
            <h2 className="bookSubTitle">What React is And Why It Matters</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <img
              src="../../img/book-cover-small.png"
              width="350"
              height="568"
              className="rounded float-left bookCover"
              alt="Technology Briefing: React book cover"
            />
          </div>
          <div className="col-sm">
            <div>
              <p>
                The decision to change your underlying technologies is so
                critical, that it is essential to have buy-in from everybody at
                the table - not just developers.
              </p>
              <p>
                The goal of this book is not to teach you React - there are lots
                amazing resources for that. The goal of this book is to explain
                how React came to be, it's main innovations, and its basic
                conccepts to <i>anybody</i>. Whether you're a PM who wants to be
                more conversational about your team's technology or an
                Engineering Manager who wants to understand how your apps are
                built, this book should give you everything you need to know to
                get started.
              </p>
            </div>

            <a href="http://eepurl.com/dab62H" className="btn btn-primary">
              Get Updates When It's Ready
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReactBook;
