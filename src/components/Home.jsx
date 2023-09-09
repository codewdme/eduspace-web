import React from "react";
import background from "../assets/video.mp4";

const Home = () => {
  return (
    <div className="section">
      <video className="videoTag" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <video className="videoTag" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <video className="videoTag" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <video className="videoTag" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <video className="videoTag" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
