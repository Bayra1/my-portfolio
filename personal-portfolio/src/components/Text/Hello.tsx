"use client"
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../Context/languageContext";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function GreetingWords() {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  const ENG_Words = [
    {
      text: "Together,",
    },
    {
      text: "we",
    },
    {
      text: "can",
    },
    {
      text: "do ",
    },
    {
      text: "something",
    },
    {
      text: "Awesome.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const MGl_Words = [
    {
      text: "Хамтдаа,",
    },
    {
      text: "бид",
    },
    {
      text: "гайхамшгийг",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "бүтээж",
    },
    {
      text: "чадна.",
    },
  ];

  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [isEng]);

  const words = isEng === "EN" ? ENG_Words : MGl_Words;

  return (
    <div className="flex flex-col w-fit items-center justify-center h-[40rem] z-10">
      <TypewriterEffect key={key} words={words} />
    </div>
  );
}
