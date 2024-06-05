"use client";
import "../styles/ScrollSection2.css";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { FlipWords } from "../ui/flip-words";
import { LanguageContext } from "../Context/languageContext";
import { HobbyText } from "../Text";

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

  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  const eng_words = ["My Hobby", "Here"];
  const mgl_words = ["Энд", "Миний Хобби"];

  const enl_word_2 = ["Additional", "Benefits"]
  const mgl_word_2 = ["Нэмэлт", " фактууд"]

  return (
    <section
      id="hidden"
      className="col1 w-full flex flex-row justify-between gap-5"
    >
      <div ref={leftRef} className="left-section2 flex flex-col gap-3 fade-in2">
        <span className="text-4xl text-white">
          <FlipWords words={isEng === "EN" ? eng_words : mgl_words} /> <br />
        </span>

        <HobbyText />
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
          <FlipWords words={isEng === "EN" ? enl_word_2 : mgl_word_2} /> <br />
        </span>
        <ul className="w-[500px] text-white mt-[12px]">
          <li>{isEng === "EN" ? "IELTS 6" : "IELTS 6"}</li>          
          <li>{isEng === "EN" ? "Determined" : "Хичээнгүй"}</li>          
        </ul>
      </div>
    </section>
  );
};

export default ScrollSection_2;
