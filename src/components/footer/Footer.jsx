import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerItems: {
        Guidelines: "link1",
        FAQ: "link2",
        Support: "link3",
        API: "link4",
        Security: "link5",
        Lists: "link6",
        Bookmarklet: "link7",
        Legal: "link8",
        "Apply to YC": "link9",
        Contact: "link10",
      },
    };
  }

  render() {
    console.log(process.env.REACT_APP_API_KEY);
    return (
      <div className={"footer"}>
        <div className={"footer-link-wrapper"}>
          {Object.keys(this.state.footerItems).map((name, index) => {
            return name === "Contact" ? (
              <a
                key={name}
                className={"footer-link-item"}
                href={this.state.footerItems[name]}
              >
                {name}
              </a>
            ) : (
              <a
                key={name}
                className={"footer-link-item"}
                href={this.state.footerItems[name]}
              >
                {name}
                <span className={"footer-link-delimiter"}>|</span>
              </a>
            );
          })}
        </div>
        <div className={"footer-search"}>
          <label htmlFor="search">Search : </label>
          <input type="text" name="gender" id="search" />
        </div>
      </div>
    );
  }
}

export default Footer;
