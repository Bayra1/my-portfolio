import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const MONGODB_TEXT = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `MongoDB is a NoSQL database known for its flexibility and scalability,
      storing data in JSON-like documents and facilitating agile development.`
        : `MongoDB нь уян хатан, өргөтгөх боломжтой гэдгээрээ алдартай NoSQL мэдээллийн сан юм.
        JSON-тэй төстэй баримт бичигт өгөгдлийг хадгалах, agile хөгжлийг хөнгөвчлөхдөө сайн.`}
    </p>
  );
};
