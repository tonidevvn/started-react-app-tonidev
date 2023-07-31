import React, { Component } from "react";

export class About extends Component {
  render() {
    let { name } = this.props;
    return (
      <>
        {!!name ? (
          <>
            <h2>Hello {name}</h2>
          </>
        ) : (
          <>
            <h2>Hello 500 Milion AE</h2>
          </>
        )}
      </>
    );
  }
}

export default About;
