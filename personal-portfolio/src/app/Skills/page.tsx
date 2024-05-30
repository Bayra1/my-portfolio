"use client";
import { Navbar } from "@/components";
import { GradientText } from "@/components/Gradient";
import { useEffect, useState } from "react";
import { WavyBackgroundCom } from "@/components/background/wavyBackground";
import SparkeBackground from "@/components/background/SparkleBackgroun";
import "../../components/styles/navbar.css";
import { Three_D_Cube } from "@/components/3D_Cube";

const Skills = () => {
  const [hideState, setHideState] = useState(true);

  useEffect(() => {
    const navbarElement = document.querySelector(".navbarClass") as HTMLElement;

    if (navbarElement) {
      navbarElement.style.display = hideState ? "" : "none";
    }
  }, [hideState]);

  const toggleNavbar = () => {
    setHideState((prev) => !prev);
  };

  return (
    <div className="main-section w-screen min-h-screen relative bg-black flex flex-col items-center p-4 overflow-hidden">
      <Navbar />
      <SparkeBackground />
      <div className="w-[1200px] relative mt-4 h-full flex justify-center items-center z-10">
        <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <button className="tech-stack-button" onClick={toggleNavbar}>
            <ul>
              <li>{hideState ? "See tech Stacks" : "back"}</li>
            </ul>
          </button>
          <GradientText />
        </div>
      </div>
      {/* {!hideState && <WavyBackgroundCom />} */}
      <Three_D_Cube />
      <Three_D_Cube />
    </div>
  );
};

export default Skills;
