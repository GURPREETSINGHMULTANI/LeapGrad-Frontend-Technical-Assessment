import React, { Component } from "react";
import "./css/inboxcalls.css";

class InboxCalls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      let timeArray = this.props.time.split(":");
      const hour = parseInt(timeArray[0]);
      const minute = parseInt(timeArray[1]);
      let phoneNumber;
      let name;
      if(this.props.direction == "outbound"){
        phoneNumber = this.props.to;
        name = this.props.from;
      }else if(this.props.direction == "inbound"){
        phoneNumber = this.props.from;
        name = this.props.to;
      }
    return (
      <div className="InboxCalls" style={this.props.addSpaceLastCall}>
        <div className="InboxCalls-icon">
            <img src="../public/images/icons8-call-48.png" alt="" />
            <img src="../public/images/icons8-down-arrow-48.png" alt="" />
        </div>
        <div className="InboxCalls-caller-information">
            <div className="InboxCalls-incoming-call">
                <div className="InboxCalls-incoming-call-number">{`${phoneNumber}`}</div>
                <div className="InboxCalls-incoming-call-attempts">{`1`}</div>
            </div>
            {this.props.direction == "outbound" ? 
            <div className="InboxCalls-to-name">tried to call on <span>{`${name}`}</span></div> 
            : <div className="InboxCalls-to-name">call from <span>{`${name}`}</span></div>}
        </div>
        <div className="InboxCalls-3-dotted-vertical-lines">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="InboxCalls-time-and-time-period">
            <div className="InboxCalls-time">{`${hour < 12? '0' + hour: hour}:${minute}`}</div>
            <div className="InboxCalls-time-period">{`${Math.floor(hour/12) === 0? 'AM' : 'PM'}`}</div>
        </div>
      </div>
    );
  }
}

export default InboxCalls;
