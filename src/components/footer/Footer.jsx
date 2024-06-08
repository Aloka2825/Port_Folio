import React from "react";
import { logo } from "../../assets/images/index";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="w-full py-10 md:py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-4 md:gap-8 items-center">
        <img className="w-24 md:w-32" src={logo} alt="" />
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
            href="https://wa.me/9937535345?text=Hello%20Aloka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-lg md:text-xl uppercase text-designColor tracking-wider mb-4 md:mb-6">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-2 md:gap-4 font-titleFont font-medium py-4 md:py-6 overflow-hidden">
          <li key={1001}>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1
                    -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"
              ></span>
            </span>
          </li>

          <li key={1002}>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1
                    -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"
              ></span>
            </span>
          </li>

          <li key={1003}>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1
                    -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"
              ></span>
            </span>
          </li>
          <li key={1004}>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Resume
              </Link>
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1
                    -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"
              ></span>
            </span>
          </li>
          <li key={1006}>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              <Link
                activeClass="none"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1
                    -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"
              ></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-lg md:text-xl uppercase text-designColor tracking-wider mb-4 md:mb-6">
          Resources
        </h3>
        <ul className="flex flex-col gap-2 md:gap-4 font-titleFont font-medium py-4 md:py-6 overflow-hidden">
          <li>
            <a
              href="https://www.npmjs.com/search?q=react"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative"
            >
              React Libraries
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"></span>
            </a>
          </li>
          <li>
            <a
              href="https://react-icons.github.io/react-icons/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative"
            >
              React icons
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"></span>
            </a>
          </li>
          <li>
            <a
              href="https://tailwindcss.com/docs/guides/vite"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative"
            >
              Tailwind CSS
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"></span>
            </a>
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/react-simple-typewriter"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative"
            >
              React Type-Writer
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"></span>
            </a>
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/framer-motion"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative"
            >
              React Framer-Motion
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-lg md:text-xl uppercase text-designColor tracking-wider mb-4 md:mb-6">
          Developer Tools
        </h3>
        <ul className="flex flex-col gap-2 md:gap-4 font-titleFont font-medium py-4 md:py-6 overflow-hidden">
          <li>
            <a
              href="https://code.visualstudio.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative"
            >
              VS Code Editor
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"></span>
            </a>
          </li>
          <li>
            <a
              href="https://www.adobe.com/in/products/photoshop.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative"
            >
              Adobe Photoshop
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"></span>
            </a>
          </li>
          <li>
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative"
            >
              Git
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"></span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative"
            >
              GitHub
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"></span>
            </a>
          </li>
          <li>
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative"
            >
              Vercel
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform left-0"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
