import React, { Component } from "react";
import { Circles } from "react-loader-spinner";
export default class Loading extends Component {
  render() {
    return (
      <div className=" section h-screen flex justify-center items-center">
        <Circles
          height="80"
          width="80"
          color="#000000"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
}
