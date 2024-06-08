import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col md:flex-row gap-10 md:gap-20"
    >
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="py-6 md:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
            Educate, Empower, Excel: Building Futures Through Knowledge.
          </p>
          <h2 className="text-2xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 sm:mt-14 w-full h-auto lg:h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Application"
            subTitle="Biju Pattnaik University of Technology, Odisha"
            desc="Masters or post-graduate education offers specialized knowledge and skills, vital for career advancement and leadership roles in various fields."
            others="May 2024"
          />
          <ResumeCard
            title="Bachelor of Science"
            subTitle="Utkal University, Bhubaneswar, Odisha"
            desc="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            others="Feb 2021"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="py-6 md:py-12 font-titleFont">
          {/* Additional content can go here if needed */}
        </div>
        <div className="mt-6 sm:mt-32 w-full h-auto lg:h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intermediate in Science"
            subTitle="Council of Higher Secondary Education, Odisha"
            desc="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
            others="May 2017"
          />
          <ResumeCard
            title="Matriculation"
            subTitle="Board of Secondary Education, Odisha"
            desc="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
            others="May 2015"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
