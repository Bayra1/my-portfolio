import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const ReactText = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `React is a JavaScript library for building user interfaces that enables
  developers to create interactive and dynamic web applications efficiently.`
        : `React бол идэвхжүүлэх хэрэглэгчийн интерфейсийг бий болгох JavaScript номын сан юм
        хөгжүүлэгчид интерактив, динамик веб программуудыг бүтээхэд ашиглагддаг.`}
    </p>
  );
};
