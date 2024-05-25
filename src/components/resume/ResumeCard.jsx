import React from "react";

function ResumeCard({ title, subTitle, desc, others, certLink }) {
  return (
    <div className="w-full h-full group flex flex-col md:flex-row">
      <div className="w-10 h-[6px] bgOpacity mt-4 md:mt-16 relative">
        <span
          className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center
        items-center bg-black bg-opacity-60"
        >
          <span
            className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor
            duration-300"
          ></span>
        </span>
      </div>
      <div
        className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg
      px-4 py-6 md:px-10 flex flex-col justify-center gap-4 md:gap-10 shadow-shadowOne overflow-hidden"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-lg md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-xs md:text-sm mt-1 md:mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href={certLink} target="_blank" rel="noopener noreferrer">
              <p
                className="w-full h-8 md:h-10 text-designColor bg-black bg-opacity-25 rounded-lg
          flex justify-center items-center shadow-shadowOne text-xs md:text-sm font-medium p-2 md:p-3"
              >
                {others}
              </p>
            </a>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard;
