// Contact.jsx
import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

function Contact() {
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Contact with me." desc="CONTACT" />
      </div>
      <div className="w-full flex flex-col gap-8 items-center md:flex-row">
        <ContactLeft />
        <ContactRight />
      </div>
    </section>
  );
}

export default Contact;
