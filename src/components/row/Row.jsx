import React from "react";
import "./Row.css";
import { getStory } from "../../services/ApiService";

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {},
    };
  }

  componentDidMount() {
    getStory(this.props.storyId).then((response) => {
      this.setState({ story: response.data });
    });
  }

  render() {
    const story = !!this.state.story.title ? this.state.story : {};
    const storyUrl = !!this.state.story.url ? `(${this.state.story.url})` : "";

    return (
      <div className={"rowWrapper"}>
        <p className={"index-number"}>{this.props.indexNumber}.</p>
        <p>{story.title}</p>
        <a className={"row-url"} href={this.state.story.url}>
          {storyUrl}
        </a>
      </div>
    );
  }
}

export default Row;
