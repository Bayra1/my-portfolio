import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const Cypress_TEXT = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `Cypress is a modern end-to-end testing framework for web applications,
      offering a clean syntax and powerful features for writing and running
      tests with ease.`
        : `Cypress нь вэб програмуудад зориулсан орчин үеийн төгсгөл хүртэлх туршилтын хүрээ юм.
        цэвэр синтакс бичих, ажиллуулах хүчирхэг функцуудыг санал болгодог.`}
    </p>
  );
};
