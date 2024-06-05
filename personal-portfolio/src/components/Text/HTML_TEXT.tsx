import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const HTML_TEXT = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `HTML is the standard markup language for creating web pages, defining
        their structure and content through elements and tags.`
        : `HTML бол вэб хуудас үүсгэх, тодорхойлох,
        элементүүд болон шошгуудаар дамжуулан тэдгээрийн бүтэц, агуулга хийх стандарт тэмдэглэгээний хэл юм.`}
    </p>
  );
};
