import React from "react";
import { siteMetadata } from "../../gatsby-config";
import Navigation from "../components/main-navigation";

import "./gatsrap.scss";
import "animate.css/animate.css";
import "font-awesome/css/font-awesome.css";
import "prismjs/themes/prism-okaidia.css";
import "devicon/devicon.min.css";

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navigation title={siteMetadata.title} {...this.props} />
        {children()}
      </div>
    );
  }
}

export default Template;
