import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div id="navbar">
        <Link className="link" style={{ textDecoration: "none" }} to="/home">
          HOME
        </Link>
        {/* <Link className="link" style={{ textDecoration: "none" }} to="/about">
          ABOUT
        </Link> */}
        <Link
          className="link"
          style={{ textDecoration: "none" }}
          to="/work"
        >
          WORK
        </Link>
        <Link className="link" style={{ textDecoration: "none" }} to="/blog">
          BLOG
        </Link>
        <Link className="link" style={{ textDecoration: "none" }} to="/contact">
          CONTACT
        </Link>
      </div>
    );
  }
}

module.export = NavBar;
