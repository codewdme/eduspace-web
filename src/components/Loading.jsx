import React, { Component } from "react";
import loading from "../assets/loading.gif";

export default class Loading extends Component {
  render() {
    return (
      <div className="flex justify-center items-center">
        <img src={loading} />
      </div>
    );
  }
}
