import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDotnet } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { TbFileTypeSql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="What I Know?" desc="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
        <Card title="HTML" icon={<TiHtml5 />} />
        <Card title="CSS" icon={<IoLogoCss3 />} />
        <Card title="JavaScript" icon={<DiJavascript />} />
        <Card title="React JS" icon={<FaReact />} />
        <Card title="Bootstrap" icon={<FaBootstrap />} />
        <Card title="Tailwind CSS" icon={<RiTailwindCssFill />} />
        <Card title=".NET" icon={<DiDotnet />} />
        <Card title="C#" icon={<TbBrandCSharp />} />
        <Card title="MS SQL" icon={<TbFileTypeSql />} />
        <Card title="MongoDB" icon={<SiMongodb />} />
        <Card title="Git" icon={<FaGitAlt />} />
        <Card title="GitHub" icon={<FaGithub />} />
        <Card title="Postman" icon={<SiPostman />} />
        <Card title="Linux" icon={<FaLinux />} />
        <Card title="Figma" icon={<FaFigma />} />
      </div>
    </section>
  );
}

export default Skills;
