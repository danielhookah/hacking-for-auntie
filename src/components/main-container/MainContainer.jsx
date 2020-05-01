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
    };
  }

  componentDidMount() {
    getStoriesIds().then((response) => this.setState({ news: response.data }));
  }

  render() {
    return (
      <div className={"container"}>
        <Header />
        {this.state.news.slice(0, 50).map((storyId, index) => (
          <Row key={storyId} storyId={storyId} indexNumber={++index} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
