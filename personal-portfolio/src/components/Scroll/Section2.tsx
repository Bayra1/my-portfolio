"use client";
import "../styles/ScrollSection2.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FlipWords } from "../ui/flip-words";

const ScrollSection_2 = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    threshold: 0.1,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    const leftSection = document.querySelector(".left-section2");
    const rightSection = document.querySelector(".right-section2");

    if (leftInView) {
      leftSection?.classList.add("showable");
    } else {
      leftSection?.classList.remove("showable");
    }

    if (rightInView) {
      rightSection?.classList.add("showable");
    } else {
      rightSection?.classList.remove("showable");
    }
  }, [leftInView, rightInView]);

  const words = ["My hobby", "here"];

  return (
    <section
      id="hidden"
      className="col1 w-full flex flex-row justify-between gap-5"
    >
      <div
        ref={leftRef}
        className="left-section2 flex flex-col gap-3 fade-in2"
      >
        <span className="text-4xl text-white">
          <FlipWords words={words} /> <br />
        </span>

        <ul className="w-[500px] text-white mt-[12px]">
          <li>
            I am passionate about basketball, which I enjoy both as a player and
            a fan. Additionally, I have a keen interest in human psychology,
            which drives me to read extensively on the subject to better
            understand human behavior and mental processes. I am also
            enthusiastic about exploring wildlife around the world, which
            involves learning about diverse animal species and their natural
            habitats.
          </li>
        </ul>
        <img
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            marginTop: "120px",
          }}
          src="https://images.unsplash.com/photo-1623346016470-53d81533a76d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="minion"
        />
      </div>
      <div
        ref={rightRef}
        className="right-section2 flex flex-col gap-3 fade-in2"
      >
        <img
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            marginTop: "120px",
          }}
          src="https://images.unsplash.com/photo-1531214159280-079b95d26139?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="minion"
        />
        <span className="text-4xl text-white">
          <FlipWords words={["Additional", "Benefits"]} /> <br />
        </span>
        <ul className="w-[500px] text-white mt-[12px]">    
        <li>IELTS 6</li>
        <li>STRONG</li>
        <li>VIGILANT</li>
        </ul>
      </div>
    </section>
  );
};

export default ScrollSection_2;
