import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import gif404 from "../../assets/images/404-page.gif";

export class Page404 extends Component {
  componentDidMount() {
    let interval = setInterval(() => {
      console.log("Redirecting to the home page");
      // history.push adds a new URL to the browser's history
      this.props.history.push("/");
      clearInterval(interval);
    }, 3000);
  }

  render() {
    return (
      <div className="container">
        <h2> The resource is not found </h2>
        <img src={gif404} alt="404 not found" className="w-50" />
      </div>
    );
  }
}

export default withRouter(Page404);
