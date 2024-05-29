"use client";
import "../styles/ScrollStyle.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { AboutMe } from "../Text/About";

const ScrollSection_1 = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    threshold: 0.1,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    const leftSection = document.querySelector(".left-section");
    const rightSection = document.querySelector(".right-section");

    if (leftInView) {
      leftSection?.classList.add("visible");
    } else {
      leftSection?.classList.remove("visible");
    }

    if (rightInView) {
      rightSection?.classList.add("visible");
    } else {
      rightSection?.classList.remove("visible");
    }
  }, [leftInView, rightInView]);

  return (
    <section
      id="hidden"
      className="col1 w-full flex flex-row justify-between gap-5"
    >
      <div
        ref={leftRef}
        className="left-section flex flex-col gap-3 mt-[120px] fade-in"
      >
        <div className="text-4xl text-white italic">
          Hey there<span className="waving-hand ml-2">👋</span>
        </div>
        <AboutMe />
        <img
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            marginTop: "120px",
          }}
          src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="minion"
        />
      </div>
      <div
        ref={rightRef}
        className="right-section flex flex-col gap-3 mt-[120px] fade-in"
      >
        <img
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            marginTop: "120px",
          }}
          src="https://assets.awwwards.com/awards/submissions/2024/05/664c3c397fb49775994305.png"
          alt="minion"
        />
        <span className="text-4xl text-white">My strong point</span>
        <p className="w-[500px] text-white mt-[12px]">
          My name is Sukhbaatar Ikhbayar, and I am a dedicated developer with a
          passion for creating exceptional websites. I thrive on challenges and
          am highly adaptable, allowing me to effectively tackle complex tasks
          and deliver high-quality results.
        </p>
      </div>
    </section>
  );
};

export default ScrollSection_1;
