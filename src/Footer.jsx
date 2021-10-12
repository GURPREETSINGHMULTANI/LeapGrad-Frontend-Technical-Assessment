import React, { Component } from "react";
import "./css/footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Footer">
        <div className="Footer-call-section">
          <img src="../public/images/16941631731553228387-24.png" alt=""/>
          <div className="Footer-alerts">{`12`}</div>
          <div className="Footer-call-section-bottom-highlight"></div>
        </div>
        <div className="Footer-call-section">
          <img src="../public/images/icons8-person-64.png" alt="" style={{height: '25px', width:'25px'}}/>
        </div>
        <div className="Footer-center-green-button">
            <div className="Footer-big-green-circle">
                <div className="Footer-big-green-circle-small-dots">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div className="Footer-call-section"></div>
        <div className="Footer-call-section">
          <img src="../public/images/icons8-setting-60.png" alt="" style={{height: '25px', width:'25px'}}/>
        </div>
        <div className="Footer-call-section Circle-dot">
            <div className="Footer-circle-icon">
                <div className="Footer-green-circle"></div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
