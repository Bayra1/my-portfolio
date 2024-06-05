import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const Node_JS_Text = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `Node.js is a JavaScript runtime environment for executing server-side
    JavaScript code, enabling scalable and efficient backend development.`
        : `Node.js нь сервер тал дээр ажиллахад зориулагдсан JavaScript ажиллах орчин юм`}
    </p>
  );
};
