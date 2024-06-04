"use client";
import { ImagesAnimation, Navbar } from "@/components";
import SparkeBackground from "@/components/background/SparkleBackgroun";
import { ImagesAnimation2 } from "@/components/Images/Images2";
import { ImagesAnimation3 } from "@/components/Images/Images3";
import { ImagesAnimation4 } from "@/components/Images/Images4";
import { ImagesAnimation5 } from "@/components/Images/Images5";
import "../../components/styles/navbar.css";

const Skills = () => {
  return (
    <main className="main-section w-full h-fit relative bg-black flex flex-col items-center p-4 overflow-hidden">
      <Navbar />
      <SparkeBackground />      
      <section className="w-[1200px] p-[60px] gap-10 h-full flex-col items-center flex justify-center mt-5">          
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
