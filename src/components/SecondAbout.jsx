import React from "react";

const SecondAbout = () => {
  return (
    <>
      <div
        name="secondAbout"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center text-white">
          <div className=" pb-8 md:pb-3 my-12 h-full">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 md:my-8">
              ABOUT
            </p>
          </div>
          <p className="mt-12 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            iure laudantium asperiores magni quos ad, vel cum facilis enim
            excepturi velit culpa praesentium? Fugit ab esse non perferendis
            earum alias tenetur magni eaque, voluptas quod nam perspiciatis
            veniam consectetur. Deleniti?
          </p>

          <br />
          <p className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            perferendis rem voluptate quas laboriosam. Velit aliquam quibusdam
            ipsam error libero nesciunt rem veritatis praesentium beatae at
            dolores neque eaque, accusamus, cumque debitis id? Officiis in fuga
            vel inventore sequi suscipit voluptatem eveniet dolorum quam quod.
            Assumenda, cumque! Error, adipisci laboriosam.
          </p>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-black to-black">
        <br />
        <br />
      </div>
    </>
  );
};

export default SecondAbout;
