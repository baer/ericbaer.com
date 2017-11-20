import React from "react";

import "./style.scss";

const Profile = () => {
  return (
    <div>
      <section className="jumbotron text-center">
        <div className="container">
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

          <div>
            <link
              href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
              rel="stylesheet"
              type="text/css"
            />

            <div id="mc_embed_signup">
              <form
                action="https://ericbaer.us17.list-manage.com/subscribe/post?u=ae61dc4ef28f7a97effd0d937&amp;id=af0ba244cb"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <div className="indicates-required">
                    <span className="asterisk">*</span> indicates required
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-NAME">
                      Name <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      value=""
                      name="NAME"
                      className="required"
                      id="mce-NAME"
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    />
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_ae61dc4ef28f7a97effd0d937_af0ba244cb"
                      tabIndex="-1"
                      value=""
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
