import React  from "react";
// import hero from "../assets/images/hero.JPG";
import tailwind from "../assets/images/projects/tailwind-project.png"
import ageCalci from "../assets/images/projects/age-calci.png"
import goggleEcom from "../assets/images/projects/goggle-ecommers.png"
import ShoeEcom from "../assets/images/projects/shoes-ecommers.png"
import AvesPersonal from "../assets/images/projects/avesh-persinol.png"
import logIn from "../assets/images/projects/login-form.png"


const SecondPortfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tailwind,
      href: "https://dapper-quokka-3d8601.netlify.app/",
    },
    {
      id: 2,
      src: ageCalci,
      href: "https://sensational-lolly-d94adc.netlify.app/",
    },
    {
      id: 3,
      src: goggleEcom,
      href: "https://delicate-peony-94cf5a.netlify.app/",
    },
    {
      id: 4,
      src: ShoeEcom,
      href: "https://iridescent-tartufo-202ffe.netlify.app/",
    },
    {
      id: 5,
      src: AvesPersonal,
      href: "https://coruscating-cocada-3ca11e.netlify.app/",
    },
    {
      id: 6,
      src: logIn,
      href: "https://unique-biscuit-a664c0.netlify.app/",
    },
  ];

  return (
    <>
      <div
        name="SecondPortfolio"
        className=" bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white md:h-screen"
        style={{ height: "auto" }}
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
              PORTFOLIO
            </p>
            <p className="py-6">check out some of my work here</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, href }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <a href={href}>
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-100 hover:scale-105"
                  />
                </a>
                <div className="flex justify-center items-center">
                  <a href={href}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-gray-800 to-gray-800">
        <br />
        <br />
      </div>
    </>
  );
};

export default SecondPortfolio;
