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
      <div id="home">
        <h1
          onMouseEnter={this.someHandler}
          onMouseLeave={this.someOtherHandler}
        >
          work in progress
        </h1>
        {/* <SocialIcon url='http://xm.olivares@gmail.com' target='_blank' network='email' /> */}
      </div>
    );
  }
}
