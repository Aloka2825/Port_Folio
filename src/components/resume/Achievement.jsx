import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

function Achievement() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="py-6 sm:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
            Achievements Unlocked: Celebrating Success, One Milestone at a Time.
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold">Achievements & Certifications</h2>
        </div>
        <div className="mt-6 sm:mt-14 w-full h-auto lg:h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Team Leader"
            subTitle="Gandhi Institute for Education and Technology, Khordha"
            desc="As the team leader for the Hostel Maintenance and Reporting System project, responsibilities include overseeing project progress, coordinating tasks among team members, and ensuring timely completion of deliverables. Additionally, facilitating communication within the team, resolving conflicts, and providing guidance and support to ensure project objectives are met efficiently and effectively."
            others="CERTIFICATE"
          />
          <ResumeCard
            title="Cloud Computing"
            subTitle="IIT Kharagpur"
            desc="The NPTEL Cloud Computing course provides an in-depth understanding of cloud computing concepts, technologies, and industry best practices. It covers topics like cloud architecture, virtualization, cloud deployment models, and popular cloud platforms. This course equips learners with the knowledge and skills required for designing, implementing, and managing cloud solutions effectively."
            others="CERTIFICATE"
            certLink="https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs17/Course/NPTEL24CS17S45300200230392311.pdf"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="py-6 sm:py-12 font-titleFont">
          {/* Additional content can go here if needed */}
        </div>
        <div className="mt-6 sm:mt-32 w-full h-auto lg:h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cyber Security and Privacy"
            subTitle="IIT Madras"
            desc="The NPTEL Cyber Security and Privacy course explores the fundamental principles and practices of securing computer systems, networks, and data. It covers topics such as cryptography, network security, web security, and privacy-preserving techniques. This course aims to provide a comprehensive understanding of cyber threats and countermeasures to ensure the confidentiality, integrity, and availability of digital assets."
            others="CERTIFICATE"
            certLink="https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs127/Course/NPTEL23CS127S63300161820087524.pdf"
          />
          <ResumeCard
            title="Introduction to Internet of Things"
            subTitle="IIT Kharagpur"
            desc="The NPTEL Introduction to Internet of Things course offers a comprehensive overview of the Internet of Things (IoT) ecosystem. It covers the fundamental concepts, architecture, and enabling technologies of IoT, including sensors, communication protocols, and data analytics. This course prepares learners to understand and develop IoT solutions for various real-world applications."
            others="CERTIFICATE"
            certLink="https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs35/Course/NPTEL24CS35S65300228330392311.pdf"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Achievement;
