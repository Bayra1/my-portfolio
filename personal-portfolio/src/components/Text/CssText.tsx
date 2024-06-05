import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const CssText = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `CSS is a styling language used to control the presentation and layout of
  HTML elements on web pages, enhancing their appearance and design.`
        : `CSS нь Вэб хуудсууд дээрх HTML элементүүд, тэдгээрийн гадаад байдал, дизайныг сайжруулдаг загварчлалын хэл юм.`}
    </p>
  );
};
