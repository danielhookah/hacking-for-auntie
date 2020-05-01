import React from "react";
import "./MainContainer.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Row from "../row/Row";
import { getStoriesIds } from "../../services/ApiService";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      storiesCount: 0,
    };
  }

  componentDidMount() {
    getStoriesIds().then((response) => this.setState({ news: response.data }));
  }

  loadNextStories() {
    this.setState({ storiesCount: this.state.storiesCount + 30 });
  }

  render() {
    return (
      <div className={"container"}>
        <Header />
        {this.state.news
          .slice(this.state.storiesCount, this.state.storiesCount + 30)
          .map((storyId, index) => (
            <Row
              key={storyId}
              storyId={storyId}
              indexNumber={this.state.storiesCount + ++index}
            />
          ))}
        <p className={"more-button"} onClick={() => this.loadNextStories()}>
          More
        </p>
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
