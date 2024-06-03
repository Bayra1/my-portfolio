"use client";
import { ImagesAnimation, Navbar } from "@/components";
import { GradientText } from "@/components/Gradient";
import { useEffect, useState } from "react";
import { WavyBackgroundCom } from "@/components/background/wavyBackground";
import SparkeBackground from "@/components/background/SparkleBackgroun";
import "../../components/styles/navbar.css";
import { Three_D_Cube } from "@/components/3D_Cube";
import { ImagesAnimation2 } from "@/components/Images/Images2";
import { ImagesAnimation3 } from "@/components/Images/Images3";
import { ImagesAnimation4 } from "@/components/Images/Images4";
import { ImagesAnimation5 } from "@/components/Images/Images5";

const Skills = () => {
  const [hideState, setHideState] = useState(true);

  // useEffect(() => {
  //   const navbarElement = document.querySelector(".navbarClass") as HTMLElement;

  //   if (navbarElement) {
  //     navbarElement.style.display = hideState ? "" : "none";
  //   }
  // }, [hideState]);

  // const toggleNavbar = () => {
  //   setHideState((prev) => !prev);
  // };

  return (
    <main className="main-section w-screen h-fit relative bg-black flex flex-col items-center p-4 overflow-hidden">
      <Navbar />
      <SparkeBackground />
      {/* <div className="w-[1200px] relative mt-4 h-full flex justify-center items-center z-10">
        <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <button className="tech-stack-button">
            <ul>
              <li>{hideState ? "See tech Stacks" : "back"}</li>
            </ul>
          </button>
          <GradientText />
        </div>
      </div> */}
      {/* {!hideState && <WavyBackgroundCom />} */}
      {/* <div className="w-full h-full flex flex-row">
        <Three_D_Cube />
        <Three_D_Cube />
      </div> */}
      <section className="w-fit p-[60px] gap-10 h-full flex-col items-center flex justify-center mt-5">          
        <ImagesAnimation />
        <ImagesAnimation2 />
        <ImagesAnimation3 />
        <ImagesAnimation4 />
        <ImagesAnimation5 />
      </section>
    </main>
  );
};

export default Skills;
