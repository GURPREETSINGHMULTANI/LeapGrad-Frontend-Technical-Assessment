import React, { Component } from "react";
import "./css/navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let stylesInbox = {};
    let stylesAllCalls = {};
    if(this.props.tabOpen === "Inbox"){
        stylesInbox = {
            fontWeight: "700",
            color: "black",
            borderBottom: "3px solid #FC5723"
        }
        stylesAllCalls = {};
    }else if(this.props.tabOpen === "All calls"){
        stylesAllCalls = {
            fontWeight: "700",
            color: "black",
            borderBottom: "3px solid #FC5723"
        }
        stylesInbox = {};
    }

    return (
      <div className="Navbar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
          viewBox="0 0 1170 180"
        >
          <path
            style={{ stroke: "lightgrey", strokeWidth: "3px" }}
            fill="#fff"
            fillOpacity="1"
            d="M 0 180 L 360 180 C 420 180 465 15 510 15 L 1125 15 C 1140 15 1155 30 1155 45 L 1155 180 L 1170 180 L 1170 0 L 1140 0 L 0 0 Z"
          ></path>
        </svg>
        <div className="Navbar-activity-title">
            <div className="Navbar-logo">
                <img src="../public/images/download.png" alt="" />
            </div>
            <div className="Navbar-activity">
                Activity
            </div>
          </div>
          <div className="Navbar-subheadings">
              <div className="Navbar-inbox" style={stylesInbox} onClick={(e) => this.props.changeTab("Inbox")}>Inbox</div>
              <div className="Navbar-3-doted-vertical-lines">
                    <div></div>
                    <div></div>
                    <div></div>
              </div>
              <div className="Navbar-all-calls" style={stylesAllCalls} onClick={(e) => this.props.changeTab("All calls")}>All calls</div>
              <div className="Navbar-3-doted-vertical-lines">
                    <div></div>
                    <div></div>
                    <div></div>
              </div>
              <div className="Navbar-settings"><img src="../public/images/10287591271586788035-128.png"/></div>
          </div>
      </div>
    );
  }
}

export default Navbar;
