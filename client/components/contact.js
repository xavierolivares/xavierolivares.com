import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

export class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1>Send an email</h1>
        {/* <p>Email Me</p> */}
        <SocialIcon
            target="_blank"
            url="mailto:xm.olivares@gmail.com"
            network="email"
            // bgColor="#008080"
            // fgColor="#000000"
          />
      </div>
    );
  }
}
