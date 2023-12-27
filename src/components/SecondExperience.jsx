import React from "react";
import Html from "../assets/images/skills/html.png"
import Css from "../assets/images/skills/css.png"
import JavaScript from "../assets/images/skills/javascript.png"
import react from "../assets/images/skills/react.png"
import Redux from "../assets/images/skills/redux.png"
import Tailwind from "../assets/images/skills/tailwind.png"
import Bootstrap from "../assets/images/skills/bootstrap.png"
import Github from "../assets/images/skills/github.png"

const SecondExperience = () => {
    const Skills =[
        {
            id: 1,
            src: Html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: Css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: JavaScript,
            title: "JAVASCRIPT",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: react,
            title: "REACT JS",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: Redux,
            title: "REDUX",
            style: "shadow-blue-500",
        },
        {
            id: 6,
            src: Tailwind,
            title: "TAILWIND",
            style: "shadow-sky-400",
        },
        {
            id: 7,
            src: Bootstrap,
            title: "BOOTSTRAP",
            style: "shadow-purple-500",
        },
        {
            id: 8,
            src: Github,
            title: "GITHUB",
            style: "shadow-gray-400",
        },
    ]
  return (
    <>
    <div
      name="secondExperience"
      className=" bg-gradient-to-b from-gray-800  to-black w-full h-screen"
      style={{height: "auto"}}
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">EXPERIENCE</p>
          <p className="py-6">those are some technologies i hava work with</p>
        </div>
        <div className="grid grid-cols-2 w-full sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {
            Skills.map(({id, src, title, style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt=""  className=" w-20 mx-auto"/>
                <p className="mt-4">{title}</p>
            </div>
            ))
        }

        </div>
      </div>
    </div>
    <div className=" bg-gradient-to-b from-black to-black">
      <br />
      <br />
    </div>
    </>
  );
};

export default SecondExperience;
