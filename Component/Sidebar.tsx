/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

const Sidebar = () => {
  return (
    <div>
      <img
        className="w-32 h-32 mx-auto rounded-full"
        src="https://react-portfolio-resume.netlify.app/static/media/minhaj.ae963f7c.jpg"
        alt="Minhaj-Picture"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider ">
        <span className="text-green">Minhaj</span>{" "}
        <span className="text-blue-200">Sadik</span>
      </h3>

      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Full-Stack Software Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full "
        href=""
        download="Minhaj Resume"
      >
        {" "}
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* socile icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="https://github.com/MinhajSadik">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="https://Linkedin.com/in/MinhajSadik">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
        <a href="https://medium.com/@MinhajSadik">
          <AiFillMediumCircle className="w-8 h-8" />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 "
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation /> <span>Sylhet, Bangladesh</span>
        </div>

        <p className="my-2">MinhajSadik@icloud.com</p>
        <p className="my-2">(+880)1781583107</p>
      </div>

      <button
        className="w-8/12 py-2 my-2 text-white rounded-full outline-none bg-gradient-to-r from-green to-blue-400 focus:"
        onClick={() => window.open("mailto:MinhajSadik@icloud.com")}
      >
        Email Me
      </button>

      <button className="w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
        Change Color
      </button>
    </div>
  );
};

export default Sidebar;
