"use client";
import { useContext, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FacebookSvG, GithubSvG, TwitterSvG } from "./SvG";
import { LanguageContext } from "./Context/languageContext";
import emailjs from "@emailjs/browser";
import "../components/styles/bubbleButton.css";
import "react-toastify/dist/ReactToastify.css";

export const Contact_Forms = () => {
  const form = useRef<HTMLFormElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      name.current?.value === "" ||
      email.current?.value === "" ||
      message.current?.value === ""
    ) {
      toast.error("Empty message cannot be sent!");
      return;
    }

    emailjs
      .sendForm(
        "service_bpuxvty",
        "template_zzeuv8f",
        form.current!,
        // process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ""
        "zkwhjEycXEDIofmFf"
      )
      .then(
        () => {
          toast.success("Your message has been sent successfully!");
          if (name.current) name.current.value = "";
          if (email.current) email.current.value = "";
          if (message.current) message.current.value = "";
        },
        (error) => {
          toast.error("Failed to send the message. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <form className="form-container" ref={form} onSubmit={sendEmail}>
      <div className="input-group">
        <label className="input-label">{isEng === "EN" ? "Name" : "Нэр"}</label>
        <input
          ref={name}
          className="input-field"
          placeholder={isEng === "EN" ? "Name" : "Нэр"}
          type="text"
          name="user_name"
        />
      </div>

      <div className="input-group">
        <label className="input-label">
          {isEng === "EN" ? "Email" : "Имэйл"}
        </label>
        <input
          ref={email}
          className="input-field"
          type="email"
          name="user_email"
          placeholder={isEng === "EN" ? "Email" : "Имэйл"}
        />
      </div>

      <div className="input-group">
        <label className="input-label">
          {isEng === "EN" ? "Message" : "мэссэж"}
        </label>
        <textarea
          ref={message}
          className="input-field textarea-field"
          placeholder={isEng === "EN" ? "Message" : "мэссэж"}
          name="message"
        />
      </div>

      <button className="submit-button" type="submit">
        {isEng === "EN" ? "Send" : "Илгээх"}
      </button>
      <div className="w-full relative h-[50px]  justify-center items-center gap-10 flex flex-row">
        <FacebookSvG />
        <TwitterSvG />
        <GithubSvG />
      </div>
      <ToastContainer position="top-center" />
    </form>
  );
};
