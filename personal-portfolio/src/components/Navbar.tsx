"use client";
import { PineConeWithName } from "./Text/PineConeWithName";
import { AboutButton } from "./buttons/About";
import { HireMeButton } from "./buttons/Contact_MeButton";
import { useRouter } from "next/navigation";
import "./styles/navbar.css";

export const Navbar = () => {
  const router = useRouter();

  const NavigateToHome = () => {
    router.push("/");
  };

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
        <AboutButton name="About" path="About" />
        <AboutButton name="Skills" path="Skills" />
        <AboutButton name="Projects" path="Projects" />
        <a href="https://www.canva.com/design/DAGGhhgv_3M/mbjIp3HWfBxmJVQTtEszaA/view?utm_content=DAGGhhgv_3M&utm_campaign=designshare&utm_medium=link&utm_source=editor">
          <AboutButton name="Resume" path="/" />
        </a>
        <HireMeButton name="Contact me" path="Contact_Me" />
      </div>
    </main>
  );
};
