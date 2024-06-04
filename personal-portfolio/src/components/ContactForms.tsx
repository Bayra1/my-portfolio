"use client"
import { useRef } from "react";
import "../components/styles/bubbleButton.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FacebookSvG, GithubSvG, TwitterSvG } from "./SvG";

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

  return (
    <form className="form-container" ref={form} onSubmit={sendEmail}>
      <div className="input-group">
        <label className="input-label">Name</label>
        <input
          ref={name}
          className="input-field"
          placeholder="Name"
          type="text"
          name="user_name"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Email</label>
        <input
          ref={email}
          className="input-field"
          type="email"
          name="user_email"
          placeholder="Email"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Message</label>
        <textarea
          ref={message}
          className="input-field textarea-field"
          placeholder="Message"
          name="message"
        />
      </div>

      <button className="submit-button" type="submit">
        Send
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
