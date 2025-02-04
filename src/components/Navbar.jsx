import React from "react";
import { Link, useLocation } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import { Dna } from "react-loader-spinner";
import logo from "../assets/android-chrome-512x512.png";

const Navbar = () => {
  const propData = useContext(noteContext);

  let location = useLocation();

  const resetfunc = () => {
    propData.setSelectedSem(null);
    propData.setCourseName(null);
  };
  return (
    <div
      className={` ${
        location.pathname === "/" && !propData.homePageNavbarVisibility
          ? "hidden"
          : ""
      } sticky top-0 z-50  md:left-0  w-full md:w-[22.5%] md:h-screen bg-off-white md:p-2 border-r-2 border-border-grey`}
    >
      <div className="w-full  flex flex-col justify-between  p-3 md:p-8 md:rounded-xl shadow-md ">
        <Link
          to="/"
          className="md:mb-6 mb-4 rounded-xl flex justify-center items-center gap-3 "
        >
          {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z"/></svg>
          </svg> */}
          {/* <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          /> */}
          <div className="md:w-full object-contain flex items-center w-[10%]">
            <img src={logo} className=" w-[80%] md:w-full " />
          </div>
       
        </Link>

        {/* second part of navbar */}
        <div className="grid md:grid-cols-1 grid-cols-3 gap-x-2  items-center md:gap-3  ">
          <div className="">
            <Link
              to="/"
              className={` navbar-item ${
                location.pathname === "/" ? "active" : ""
              }`}
              aria-current="page"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/about"
              className={`navbar-item ${
                location.pathname === "/about" ? "active" : ""
              }`}
              onClick={() => resetfunc}
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="/notes"
              className={`navbar-item ${
                location.pathname.includes("/notes") ? "active" : ""
              }`}
              onClick={() => resetfunc}
            >
              Notes
            </Link>
          </div>
          <div>
            <Link
              to="/pyqs"
              className={`navbar-item ${
                location.pathname.includes("/pyqs") ? "active" : ""
              }`}
              onClick={() => resetfunc}
            >
              PYQs
            </Link>
          </div>
          <div>
            <Link
              to="/assignments"
              className={`navbar-item ${
                location.pathname.includes("/assignments") ? "active" : ""
              }`}
              onClick={() => resetfunc}
            >
              Assignments
            </Link>
          </div>
          <div>
            <Link
              to="/syllabus"
              className={`navbar-item ${
                location.pathname.includes("/syllabus") ? "active" : ""
              }`}
              onClick={() => resetfunc}
            >
              Syllabus
            </Link>
          </div>
          {/* LINK TO LEAVE CALCULATOR   */}
          <div>
            <a
              href="https://leavescalculator.web.app/"
              className="navbar-item "
            >
              Leave Calculator
            </a>
          </div>
          <div>
            <Link
              to="/uploadfiles"
              className={`navbar-item ${
                location.pathname.includes("/uploadfiles") ? "active" : ""
              }`}
              onClick={() => resetfunc}
            >
              Upload Files
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
