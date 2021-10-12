import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import regeneratorRuntime from "regenerator-runtime";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Inbox from "./Inbox.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allCalls: [], dates: [], tabOpen: "Inbox" };
    this.forceUpdate = this.forceUpdate.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await fetch("https://aircall-job.herokuapp.com/activities");
      if (res.ok) {
        const data = await res.json();
        this.setState({ allCalls: data });
        let dates = this.state.allCalls.map((call, i) => {
          return new Date(call.created_at);
        });
        dates = dates.map((date) => {
          let dateArray = date.toString().split(" ");
          return dateArray;
        });
        this.setState({ dates });
      }
    } catch (err) {
      console.log(err);
    }
  }

  changeTab(tab){
    if(tab === this.state.tabOpen){
    }else if(tab === "All calls"){
      this.setState({tabOpen: "All calls"})
    }else if(tab === "Inbox"){
      this.setState({tabOpen: "Inbox"})
    }
  }

  forceUpdate(){
    this.setState(this.state);
    this.componentDidMount();
  }

  render() {
    let callIds = this.state.allCalls.map(call => call.id);
    return (
      <div className="container">
        <Header />
        <div className="container-view">
          <Navbar tabOpen={this.state.tabOpen} changeTab={this.changeTab}/>
          <Inbox tabOpen={this.state.tabOpen} forceUpdate={this.forceUpdate} callIds={callIds} allCalls={this.state.allCalls} dates={this.state.dates} />
          <Footer />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
