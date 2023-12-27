import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import hero from "../src/assets/images/hero.JPG";
import { Link } from "react-scroll";
import { Outlet } from "react-router-dom";
import SecondAbout from "./components/SecondAbout";
import SecondPortfolio from "./components/SecondPortfolio";
import SecondExperience from "./components/SecondExperience";
import SecondContact from "./components/SecondContact";
// import Typed from "react-typed"

const Home = () => {
  return (
    <>
      <div
        name="home"
        className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className=" text-4xl mt-16 sm:text-7xl font-bold text-white">
              I'm a FrontEnd Developer
              <div>
                {/* <Typed
                  className="pl-3"
                  strings={[
                    "Web Developer",
                    "FrontEnd Developer",
                    "UI Developer",
                  ]}
                  typeSpeed={100}
                  loop={true}
                  backSpeed={100}
                /> */}
              </div>
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              i am a fresher and iam building and designing software, currently
              i love to work on web applications using technologies like React,
              tailwind, Html, Css, JavaScript
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={hero}
              alt="heroimage"
              className="rounded-2xl mx-auto w-2/3 hover:scale-105 duration-300 md:w-{20rem}"
            />
          </div>
        </div>
      </div>
      <Outlet />
      <SecondAbout />
      <SecondPortfolio />
      <SecondExperience />
      <SecondContact />
    </>
  );
};

export default Home;
