import React from "react";
import "./style.scss";

class Page extends React.Component {
  render() {
    const post = this.props.data.post;
    return <div dangerouslySetInnerHTML={{ __html: post.html }} />;
  }
}

export default Page;
