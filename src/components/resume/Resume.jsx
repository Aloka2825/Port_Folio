import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import ProfessionalSkills from "./ProfessionalSkills";
import Experience from "./Experience";
import Achievement from "./Achievement";
import { IoCloudDownloadOutline } from "react-icons/io5";

function Resume() {
  const [experience, setExperience] = useState(true);
  const [professionalSkills, setProfessionalSkills] = useState(false);
  const [education, setEducation] = useState(false);
  const [achievement, setAchievement] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex flex-col items-center text-center">
        <Title title="2+ Years of Experience." desc="RESUME" />
        <a
          href="https://drive.google.com/file/d/1NlmbR0lRHK9xNJ_tyLhHmZrLnv2AZ7mE/view?usp=sharing"
          target="_blank"
        >
          <h3>
            <IoCloudDownloadOutline className="text-4xl sm:text-6xl ml-2 -mt-1 sm:-mt-3 cursor-pointer hover:text-designColor" />
          </h3>
        </a>
      </div>
      <div>
        <ul className="w-full grid grid-cols-2 sm:grid-cols-4 text-center gap-2 sm:gap-4 mt-6">
          <li
            onClick={() =>
              setExperience(true) &
              setProfessionalSkills(false) &
              setEducation(false) &
              setAchievement(false)
            }
            className={`${
              experience
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setExperience(false) &
              setProfessionalSkills(true) &
              setEducation(false) &
              setAchievement(false)
            }
            className={`${
              professionalSkills
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setExperience(false) &
              setProfessionalSkills(false) &
              setEducation(true) &
              setAchievement(false)
            }
            className={`${
              education ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setExperience(false) &
              setProfessionalSkills(false) &
              setEducation(false) &
              setAchievement(true)
            }
            className={`${
              achievement
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      <div className="mt-6">
        {experience && <Experience />}
        {professionalSkills && <ProfessionalSkills />}
        {education && <Education />}
        {achievement && <Achievement />}
      </div>
    </section>
  );
}

export default Resume;
