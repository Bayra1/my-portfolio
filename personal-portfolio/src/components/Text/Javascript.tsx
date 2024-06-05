import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const JavaScriptText = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `JavaScript is a programming language commonly used to create interactive
        effects within web browsers.`
        : `JavaScript бол интерактив вэб үүсгэхэд түгээмэл хэрэглэгддэг програмчлалын хэл юм`}
    </p>
  );
};
