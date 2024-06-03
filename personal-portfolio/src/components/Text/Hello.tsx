"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function GreetingWords() {
  const words = [
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
  "Together, our collaboration holds the promise of creating something truly extraordinary."
  return (
    <div className="flex flex-col w-fit items-center justify-center h-[40rem] z-10">    
      <TypewriterEffect words={words} />  
    </div>
  );
}
