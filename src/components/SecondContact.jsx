import React from "react";

const SecondContact = () => {
  return (
    <div
      name="secondContact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className=" w-full flex flex-col max-w-screen-lg p-4 justify-center h-full mx-auto">
        <div className=" pb-8 md:pb-3 my-14">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 my-32 md:my-8">
            CONTACT
          </p>
          <p className=" py-6">submit the form below in touch with me</p>
        </div>
        <div className=" flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className=" p-2 bg-transparent border-2 rounded-md text-white  focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white  focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="enter your message"
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecondContact;
