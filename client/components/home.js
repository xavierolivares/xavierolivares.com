import React, { Component } from "react";

export class Home extends Component {
  constructor() {
    super();
    this.someHandler = this.someHandler.bind(this);
  }
  someHandler(event) {
    console.log(event.target.value);
  }
  someOtherHandler(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div id="about">
        <img
          src={"https://avatars1.githubusercontent.com/u/42598792?s=460&v=4"}
        />

        <p>
          After immersing myself in the world of eCommerce, I wanted to go from
          selling online to building the software that makes it all work.
          <br></br>
          <br></br>
          My dive into the technical end has been great and I'm
          enjoying the process!
          <br></br>
          <br></br>
          With my background in online sales, I'm specializing in
          JavaScript and I'm always open to new technologies.
        </p>
      </div>
    );
  }
}
