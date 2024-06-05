import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const GraphQl_Text = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? ` GraphQL is a query language for APIs and a runtime for executing those
      queries, offering a more efficient, powerful, and flexible alternative to
      REST for fetching and manipulating data.`
        : `
        GraphQL нь API-д зориулсан  хүсэлтийн хэл.
         Илүү үр ашигтай, хүчирхэг, уян хатан хувилбарыг санал болгодог
              Өгөгдлийг татах, удирдахад зориулсан, REST-ийг орлох api хэл.`}
    </p>
  );
};
