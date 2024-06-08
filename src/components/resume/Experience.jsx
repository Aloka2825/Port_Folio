import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col md:flex-row gap-10"
    >
      <div className="w-full md:w-1/2">
        <div className="py-6 md:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
            Experience the Difference: Where Every Moment Counts.
          </p>
          <h2 className="text-2xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 md:mt-14 w-full h-auto md:h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard 
            title=".NET Developer" 
            subTitle="Feb-2023 to Present" 
            desc="Design, develop, and maintain .NET applications, ensuring code quality and performance optimization. Collaborate with cross-functional teams to gather requirements, integrate systems, and deliver projects on time. Troubleshoot and resolve issues, maintain technical documentation, and stay updated with industry trends and best practices." 
            others="Authentic Hire Technology Solution, Khordha"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="py-6 md:py-12 font-titleFont">
          {/* Placeholder for additional content */}
        </div>
        <div className="mt-6 md:mt-28 w-full h-auto md:h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard 
            title="WordPress Developer" 
            subTitle="Feb-2023 to Present" 
            desc="Design, develop, and maintain WordPress websites, ensuring functionality and user experience. Customize themes and plugins, troubleshoot issues, and ensure seamless integration with third-party services. Collaborate with teams to deliver effective web solutions, staying updated with the latest WordPress trends and best practices." 
            others="Smart5Solutions, Bhubaneswar"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
