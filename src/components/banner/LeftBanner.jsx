import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaWhatsapp, FaReact } from "react-icons/fa";
import { SiDotnet, SiCsharp, SiTailwindcss } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { TbSql } from "react-icons/tb";

function LeftBanner() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer.",
      "Dot Net Developer.",
      "Prompt Engineer.",
      "Quick Learner.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    deleteDelay: 10,
    delaySpeed: 2000,
    blinkingCursor: true,
  });

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-20 px-4 md:px-0">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Welcome to my Portfolio</h4>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          {" "}
          Hi, I'm <span className="text-designColor capitalize">Aloka</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white font-titleFont">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          An accomplished Dot Net Developer with expertise in front-end UI
          design, back-end development, databases, and cloud technologies.
          Skilled in C#, .NET, ASP.Net Web API, SQL Server, HTML, CSS,
          JavaScript, React, and WordPress. Proficient in building intuitive web
          applications and e-commerce platforms. Strong problem-solving, team
          leadership, and communication abilities. Holds a Master's in Computer
          Applications. Passionate about innovation and continuous learning.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/aloka-moharana-8660a0254/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaLinkedin />
              </span>
            </a>
            <a
              href="https://github.com/Aloka2825"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="mailto:alokmoharana23@yahoo.com?subject=Hello%20Aloka&body=I%20Want%20to%20Connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <MdOutlineMail />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best skills on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiDotnet />
            </span>
            <span className="bannerIcon">
              <SiCsharp />
            </span>
            <span className="bannerIcon">
              <TbSql />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
