"use client";
import "../styles/ScrollSection2.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ScrollSection_2 = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    threshold: 0.1,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    threshold: 0.1,
  });
  
  useEffect(() => {
    const leftSection = document.querySelector('.left-section');
    const rightSection = document.querySelector('.right-section');

    if (leftInView) {
      leftSection?.classList.add('visible');
    } else {
      leftSection?.classList.remove('visible');
    }

    if (rightInView) {
      rightSection?.classList.add('visible');
    } else {
      rightSection?.classList.remove('visible');
    }
  }, [leftInView, rightInView]);

  return (
    <section id="hidden" className="col1 w-full flex flex-row justify-between gap-5">
      <div ref={leftRef} className="left-section flex flex-col gap-3 mt-[120px] fade-in">
        <span className="text-4xl text-white">About me</span>
        <p className="w-[500px] text-white mt-[12px]">
          Hello! My name is Sukhbaatar Ikhbayar, and I am a frontend developer
          and web designer. I took the initiative to teach myself coding so
          that I could acquire the knowledge and skills necessary to transform
          my ideas into reality. Throughout this journey, I have gained
          expertise in designing and developing visually appealing and
          functional websites. I'm dedicated to crafting websites that not
          only look good but also work seamlessly to provide the best user
          experience. Additionally, I have a passion for writing technical
          articles, where I share my knowledge and insights with the
          community. It allows me to contribute to the industry and help
          others in their learning journey
        </p>
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
      <div ref={rightRef} className="right-section flex flex-col gap-3 mt-[120px] fade-in">
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
        <span className="text-4xl text-white">About me</span>
        <p className="w-[500px] text-white mt-[12px]">
          Hello! My name is Sukhbaatar Ikhbayar, and I am a frontend developer
          and web designer. I took the initiative to teach myself coding so
          that I could acquire the knowledge and skills necessary to transform
          my ideas into reality. Throughout this journey, I have gained
          expertise in designing and developing visually appealing and
          functional websites. I'm dedicated to crafting websites that not
          only look good but also work seamlessly to provide the best user
          experience. Additionally, I have a passion for writing technical
          articles, where I share my knowledge and insights with the
          community. It allows me to contribute to the industry and help
          others in their learning journey
        </p>
      </div>
    </section>
  );
};

export default ScrollSection_2;
