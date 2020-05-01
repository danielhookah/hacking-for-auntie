import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerItems: {
        new: "link1",
        past: "link2",
        comments: "link3",
        ask: "link4",
        show: "link5",
        jobs: "link6",
        submit: "link7",
      },
    };
  }

  render() {
    console.log(this.state.headerItems);
    return (
      <div className={"header"}>
        <img className={"logo"} src={"/../../logo.gif"} alt={"logo"} />
        <a className={"bold-link"}>Hacker News</a>

        <div className={"header-link-wrapper"}>
          {Object.keys(this.state.headerItems).map((name, index) => {
            return name === "submit" ? (
              <a
                key={name}
                className={"header-link-item"}
                href={this.state.headerItems[name]}
              >
                {name}
              </a>
            ) : (
              <a
                key={name}
                className={"header-link-item"}
                href={this.state.headerItems[name]}
              >
                {name}
                <span className={"header-link-delimiter"}>|</span>
              </a>
            );
          })}
        </div>
        <div className={"header-login-link"}>
          <a href={"https://news.ycombinator.com/login?goto=news"}>Login</a>
        </div>
      </div>
    );
  }
}

export default Header;
