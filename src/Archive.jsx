import React, { Component } from "react";
import "./css/archive.css";
import regeneratorRuntime from "regenerator-runtime";

class Archive extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    for (let i = 0; i < this.props.callIds.length; i++) {
      let res = await fetch(
        `https://aircall-job.herokuapp.com/activities/${this.props.callIds[i]}`,
        {
          method: "POST",
          body: JSON.stringify({
            is_archived: true,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
    }

    this.props.forceUpdate();
  }

  render() {
    return (
      <div className="Archive" onClick={this.handleClick}>
        <div className="Inbox-archive-all-calls">
          <div className="Inbox-archive-logo">
            <img src="../public/images/icons8-box.svg" alt="" />
          </div>
          <div className="Inbox-archive-text">Archive all calls</div>
        </div>
      </div>
    );
  }
}

export default Archive;
