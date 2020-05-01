import React from "react";
import "./MainContainer.css";
import Header from "../header/Header";

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
      </div>
    );
  }
}

export default MainContainer;
