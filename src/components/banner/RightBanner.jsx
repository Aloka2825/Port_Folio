import React from "react";
import { profileImg } from "../../assets/images/index";

function RightBanner() {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
      <div className="w-40 md:w-[25rem] h-auto rounded-full bg-gray-300 flex items-center justify-center">
        <img
          src={profileImg}
          alt="profileImg"
          className="w-40 md:w-[25rem] h-auto rounded-full object-cover border-4 border-white"
        />
      </div>
    </div>
  );
}

export default RightBanner;
