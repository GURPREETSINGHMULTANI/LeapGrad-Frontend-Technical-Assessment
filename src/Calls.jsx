import React, { Component } from "react";
import "./css/calls.css";
import "./css/inboxcalls.css"
import InboxCalls from "./InboxCalls.jsx";

class Calls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const dottedLine = [1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
      return(
        <div className="Calls">
            <div className="Calls-date-box">
                <div className="Calls-dotted-line">
                    {dottedLine.map((dot,i) => <div className="Calls-dot" key={`${i}`}></div>)}
                </div>
                <div className="Calls-date">{`${!this.props.date? "" : this.props.date[1]}, ${!this.props.date? "" : this.props.date[2]} ${!this.props.date? "" : this.props.date[3]}`}</div>
            </div>
            <InboxCalls addSpaceLastCall={this.props.addSpaceLastCall} direction={this.props.direction} from={this.props.from} to={this.props.to} time={!this.props.date? "" : this.props.date[4]}/>
        </div>
      );
  }
}

export default Calls;

