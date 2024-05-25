import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/images/index";

function Project() {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Visit my projects and give me your feedback." desc="PROJECTS" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          title="Digital Services Portal"
          desc="The Digital Service Portal is a .NET-based project designed to streamline the delivery of digital services by providing a unified platform for users to access various government and organizational services online."
          src={projectOne}
          gitLink="https://github.com/Aloka2825/Digital-Service-Portal"
          href="http://digitalservicesportal.in/"
        />
        <ProjectCard
          title="Authentication App"
          desc="The Authentication App is a MERN stack project using JWT tokens for secure user authentication, featuring comprehensive validation and seamless profile updates to enhance user management and data protection."
          src={projectTwo}
          gitLink="https://github.com/Aloka2825/AuthenticationApp"
          
        />
        <ProjectCard
          title="EMI Calculator"
          desc="The EMI Calculator is a .NET application that accurately computes Equated Monthly Installments for loans, featuring a user-friendly interface for detailed principal and interest breakdowns over the loan tenure."
          src={projectThree}
          gitLink="https://github.com/Aloka2825/EMICalculator"
        />
        <ProjectCard
          title="Online Library management System"
          desc="The Online Library Management System is a .NET project facilitating efficient library operations, enabling users to manage resources, borrow books, and track inventory seamlessly, enhancing library management capabilities."
          src={projectFour}
          gitLink="https://github.com/Aloka2825/Online_LMS"
          href="http://e-learning.ahtscarrier.com/"
        />
        <ProjectCard
          title="Gate Pass Management System"
          desc="The Gate Pass Management System is a .NET project integrating QR code scanning for user authentication at entry points, ensuring streamlined access control and enhanced security measures for effective gate management."
          src={projectFive}
          gitLink="https://github.com/Aloka2825/GatePass_MS"
          href="https://gatepass.ahtscarrier.com/"
        />
        <ProjectCard
          title="E-Commerce Website"
          desc="The E-commerce Website on WordPress leverages WooCommerce, Elementor, and Jetpack Security, offering a seamless shopping experience with customizable design elements and robust security features for enhanced online retail operations."
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Project;
