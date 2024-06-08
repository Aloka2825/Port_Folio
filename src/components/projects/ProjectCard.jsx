import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

function ProjectCard({ title, desc, src, gitLink, href }) {
  return (
    <div
      className="w-full px-8 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col
    bg-gradient-to-r from-[#1f1f23] to-[#3d434a] group hover:bg-gradient-to-b
    hover:from-gray-900 hover:gray-400 transition-colors duration-1000"
    >
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-designColor cursor-pointer uppercase">{title}</h3>
          <div className="flex gap-1">
            {gitLink && (
              <a href={gitLink} target="_blank" rel="noopener noreferrer">
                <span
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center
                  items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                >
                  <BsGithub />
                </span>
              </a>
            )}
            {href && (
              <a href={href} target="_blank" rel="noopener noreferrer">
                <span
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center
                  items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                >
                  <FaGlobe />
                </span>
              </a>
            )}
          </div>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
