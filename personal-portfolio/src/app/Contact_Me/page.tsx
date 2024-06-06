"use client"
import { Contact_Forms, Navbar } from "@/components";
import { FacebookSvG, GithubSvG, TwitterSvG } from "@/components/SvG";
import SparkeBackground from "@/components/background/SparkleBackgroun";
import "../../components/styles/bubbleButton.css";
import { FlipWords } from "@/components/ui/flip-words";
import { LanguageContext } from "@/components/Context/languageContext";
import { useContext } from "react";

const eng_words = ["Find-me", "Then-let's-create"]
const mgl_words = ["Холбогдох", "email-ээр"]

const Contact_Me = () => {

  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <div className="w-screen min-h-screen relative bg-black flex flex-col items-center p-4 overflow-hidden">
      <Navbar />
      <SparkeBackground />
      <div className="w-[1200px] relative mt-[50px] h-fit  justify-center items-center flex z-10 flex-col">
        <span className="text-4xl w-[500px] justify-center text-white flex flex-row italic">          
          <FlipWords words={isEng === "EN" ? eng_words : mgl_words} /> <br />
          <h2 className="text-white justify-center flex pl-4 pb-4 text-3xl italic underline-offset-8">
            🔥
          </h2>
        </span>
        <Contact_Forms />
      </div>
    </div>
  );
};
export default Contact_Me;
