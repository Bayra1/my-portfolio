import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const POSTGRE_SQL_Text = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `PostgreSQL, or Postgres, is a leading open-source relational database
    known for its reliability and advanced features.`
        : `PostgreSQL буюу Postgres нь тэргүүлэх нээлттэй эх сурвалжтай харилцааны мэдээллийн сан юм
        найдвартай байдал, дэвшилтэт шинж чанараараа алдартай.`}
    </p>
  );
};
