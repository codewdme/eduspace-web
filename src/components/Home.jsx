import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Hero from "../HomepageComponents/Hero";
import Collaboration1 from "../HomepageComponents/Collaboration1";
import Collaboration2 from "../HomepageComponents/Collaboration2";
import Collaboration3 from "../HomepageComponents/Collaboration3";
import Collaboration4 from "../HomepageComponents/Collaboration4";
import End from "../HomepageComponents/End";
// import StreamlinedExperience from "../HomepageComponents/StreamlinedExperience";
// import MoreFeatures from "../HomepageComponents/MoreFeatures";
// import SamePage from "../HomepageComponents/SamePage";
// import Features from "../HomepageComponents/Features";
// import NoLockin from "../HomepageComponents/NoLockin";

const Home = () => {
  const propData = useContext(noteContext);

  const handleClick = () => {
    propData.setHomePageNavbarVisibility(true);
  };

  return (
    // <div className="section ">
    //   <video className="videoTag" autoPlay loop muted>
    //     <source src={background} type="video/mp4" />
    //   </video>
    //   <video className="videoTag" autoPlay loop muted>
    //     <source src={background} type="video/mp4" />
    //   </video>
    //   <video className="videoTag" autoPlay loop muted>
    //     <source src={background} type="video/mp4" />
    //   </video>
    //   <video className="videoTag" autoPlay loop muted>
    //     <source src={background} type="video/mp4" />
    //   </video>
    //   <video className="videoTag" autoPlay loop muted>
    //     <source src={background} type="video/mp4" />
    //   </video>
    // </div>

    <div className="bg-black">
      {/* content */}
      <Hero />
      {/* button to make navbar visible */}
      <button
        onClick={handleClick}
        className={`${
          propData.homePageNavbarVisibility ? "hidden" : ""
        } fixed z-50 top-8 right-12 p-2 bg-black hover:bg-white text-white hover:text-black text-sm font-semibold border-2 border-white rounded-xl transition hover:ease-in-out hover:scale-110`}
      >
        {" "}
        Get Started{" "}
      </button>

      <div className="bg-black relative z-10 w-full overflow-x-clip ">
        <Collaboration2 />
        <Collaboration3 />
        <Collaboration1 />
        <Collaboration4 />
        <End propData={propData} handleClick={handleClick} />
        {/* <SamePage />
        <StreamlinedExperience />
        <Features />
        <MoreFeatures /> */}
      </div>
    </div>
  );
};

export default Home;
