"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextReveal() {
  return (
    <div className="flex bg-black w-1/3 items-center justify-center  rounded-2xl ">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >       
      </TextRevealCard>
    </div>
  );
}
