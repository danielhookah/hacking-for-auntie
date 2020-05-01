import React from "react";
import "./MainContainer.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  render() {
    console.log(process.env.REACT_APP_API_KEY);
    return (
      <div className={"container"}>
        <Header />
        <h1>qwe</h1>
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
