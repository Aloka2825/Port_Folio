// ContactRight.jsx
import React, { useState } from "react";

function ContactRight() {
  const [name, setName] = useState("");
  const [mob, setMob] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  //  ===E-mail Verification===
  const emailVerification = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (event) => {
    event.preventDefault();
    if (name === "") {
      setErrorMsg("Name is Required!");
    } else if (mob === "") {
      setErrorMsg("Mobile No. is Required!");
    } else if (email === "") {
      setErrorMsg("E-mail is Required!");
    } else if (!emailVerification(email)) {
      setErrorMsg("Enter a valid E-mail!");
    } else if (subject === "") {
      setErrorMsg("Subject is Required!");
    } else if (message === "") {
      setErrorMsg("Message is Required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${name}, Your Message has been sent Successfully!!!`
      );
      setErrorMsg("");
      setName("");
      setMob("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(name, email, subject, message, mob);
    }
  };

  return (
    <div className="w-full md:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
      <form className="w-full flex flex-col gap-6 py-2">
        {errorMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errorMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">NAME</p>
            <input
              onChange={(event) => setName(event.target.value)}
              value={name}
              className={`${
                errorMsg === "Name is Required!" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">MOBILE NO.</p>
            <input
              onChange={(event) => setMob(event.target.value)}
              value={mob}
              className={`${
                errorMsg === "Mobile No. is Required!" && "outline-designColor"
              } contactInput`}
              type="tel"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">EMAIL</p>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            className={`${
              errorMsg === "E-mail is Required!" && "outline-designColor"
            } contactInput`}
            type="email"
          />
        </div>
        <div className="flex flex-col w-full gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">SUBJECT</p>
          <input
            onChange={(event) => setSubject(event.target.value)}
            value={subject}
            className={`${
              errorMsg === "Subject is Required!" && "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
        <div className="flex flex-col w-full gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">MESSAGE</p>
          <textarea
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            className={`${
              errorMsg === "Message is Required!" && "outline-designColor"
            } contactTextarea`}
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <div className="w-full">
          <button className="contactBtn" onClick={handleSend}>
            Send Message
          </button>
        </div>
        {errorMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errorMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactRight;
