"use client";
import { PineConeWithName } from "./Text/PineConeWithName";
import { AboutButton } from "./buttons/About";
import { HireMeButton } from "./buttons/Contact_MeButton";
import { useRouter } from "next/navigation";
import "./styles/navbar.css";
import { useContext } from "react";
import { LanguageContext } from "./Context/languageContext";

export const Navbar = () => {
  const router = useRouter();
  const NavigateToHome = () => {
    router.push("/");
  };

  const languageContext = useContext(LanguageContext);
  const { isEng, toggleLanguage } = languageContext;

  return (
    <main className="navbarClass w-[1200px] z-10 h-[50px] flex justify-between items-center p-3-400">
      <button onClick={NavigateToHome}>
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <PineConeWithName />
            </div>
            <div className="back flex gap-2 items-center flex-col">
              <span className="text-white text-lg">
                <img
                  src="https://assets-global.website-files.com/64d1a97b791d8ca9bb004633/65cd7371a0f9b0515f337171_LogoWhite.svg"
                  loading="lazy"
                  alt="Pinecone Academy Logo"
                />
              </span>
            </div>
          </div>
        </div>
      </button>
      <div className="flex flex-row gap-4">
        <AboutButton name={isEng === "EN" ? "About" : "Талаар"} path="About" />
        <AboutButton name={isEng === "EN" ? "Skills" : "Чадварууд"} path="Skills" />
        <AboutButton name={isEng === "EN" ? "Projects" : "Төслүүд"} path="Projects" />
        <a href="https://www.canva.com/design/DAGGhhgv_3M/mbjIp3HWfBxmJVQTtEszaA/view?utm_content=DAGGhhgv_3M&utm_campaign=designshare&utm_medium=link&utm_source=editor">
          <AboutButton name="CV" path="/" />
        </a>
        <HireMeButton name={isEng === "EN" ? "Contact" : "Холбогдох"} path="Contact_Me" />
        <button onClick={toggleLanguage}><ul><li className=" rounded-full">{isEng === "EN" ? "ENG" : "MНГЛ"}</li></ul></button>
      </div>
    </main>
  );
};
