import React from "react";
import { Outlet } from "react-router-dom";
import SecondAbout from "./components/SecondAbout";

const About = () => {
  return (
    <>
    <Outlet />
    <SecondAbout />
    </>
    // <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
    //   <div>
    //     <p>About</p>
    //   </div>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
    //     repellendus, adipisci expedita saepe tempora corrupti ratione natus quo
    //     nemo pariatur aspernatur deleniti aperiam ab quia aut. Impedit, quae
    //     possimus? Repellendus vitae numquam odio, blanditiis impedit vero
    //     officiis asperiores voluptatum modi!
    //   </p>

    //   <br />

    //   <p>
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eum ex,
    //     possimus nesciunt dolor placeat, rerum esse libero magni, recusandae
    //     corporis quo similique? Nesciunt adipisci nam similique sapiente
    //     consequatur ab sed aspernatur perspiciatis nobis vero. Culpa ullam quis
    //     corporis. Quibusdam earum ratione animi! Iste veritatis consequuntur
    //     nisi. Facere, dolorum porro?
    //   </p>
    // </div>
  );
};

export default About;
