import React from "react";
import background from "../assets/video.mp4";

const Home = () => {
  return (
    <div className=" object-contain ">
      <video className="videoTag" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
