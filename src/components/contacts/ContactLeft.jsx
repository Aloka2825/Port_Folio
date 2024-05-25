// ContactLeft.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { contactImg } from "../../assets/images/index";

function ContactLeft() {
  return (
    <div className="w-full md:w-[35%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Aloka Moharana</h3>
        <p className="text-lg font-normal text-gray-400">.NET Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam
          dolore sit quasi dolorum dolorem.
        </p>
        <p className="text-base text-gray-400 items-center flex gap-2">
          Phone: <span className="text-lightText">+91 9937535345</span>
        </p>
        <p className="text-base text-gray-400 items-center flex gap-2">
          E-mail:{" "}
          <span className="text-lightText overflow-hidden">
            alokmoharana23@yahoo.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft;
