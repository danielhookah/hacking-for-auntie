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

  calculateHours(date) {
    let delta = Math.abs(date - Date.now() / 1000);
    return Math.floor(delta / 3600) % 24;
  }

  render() {
    const story = !!this.state.story.title ? this.state.story : {};
    const storyUrl = !!this.state.story.url ? `(${this.state.story.url})` : "";
    const hoursAgo = !!this.state.story.time
      ? `${this.calculateHours(this.state.story.time)} hours ago`
      : "";

    return (
      <div>
        <div className={"data-wrapper"}>
          <p className={"index-number"}>{this.props.indexNumber}.</p>
          <p>{story.title}</p>
          <a className={"row-url"} href={this.state.story.url}>
            {storyUrl.length > 90
              ? storyUrl.substring(0, 90) + "...)"
              : storyUrl}
          </a>
        </div>
        <div className={"data-wrapper secondary"}>
          <p>{this.state.story.score} points by</p>
          <a href={this.state.story.by}>{this.state.story.by}</a>
          <a href={this.state.story.time}>{hoursAgo}</a>
          <a href={""}>| hide |</a>
          <a href={this.state.story.descendants}>
            {this.state.story.descendants} comments
          </a>
        </div>
      </div>
    );
  }
}

export default Row;
