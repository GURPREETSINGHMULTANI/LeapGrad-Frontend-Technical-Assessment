import React, { Component } from "react";
import Archive from "./Archive.jsx";
import Calls from "./Calls.jsx";
import "./css/inbox.css";

class Inbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let spaceBottom = {marginBottom: "15px"};
    console.log(this.props.dates.length);
    return (
      <div className="Inbox">
          {this.props.tabOpen === "Inbox" && <Archive forceUpdate={this.props.forceUpdate} callIds={this.props.callIds} />}

        {this.props.allCalls.map((call, i) => {
          if (!call.is_archived || this.props.tabOpen === "All calls") {
            return (
              <Calls
                direction={call.direction}
                to={call.to}
                from={call.from}
                date={this.props.dates[i]}
                addSpaceLastCall={this.props.allCalls.length == (i+1)? spaceBottom : {}}
              />
            );
          } else {
            return;
          }
        })}
      </div>
    );
  }
}

export default Inbox;
