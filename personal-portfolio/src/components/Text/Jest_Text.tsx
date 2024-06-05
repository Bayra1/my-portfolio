import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const Jest_Text = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `Jest is a popular JavaScript testing framework used for unit testing and
  assertion, known for its simplicity and integration with other tools such
  as React and Node.js.`
        : `Jest бол JavaScript тестийн түгээмэл framework бөгөөд юнит тест болон
        энгийн бусад хэрэгслүүдтэй нэгдмэл байдгаараа алдартай.`}
    </p>
  );
};
