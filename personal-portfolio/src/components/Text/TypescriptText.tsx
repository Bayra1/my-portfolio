import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const TypeScriptText = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `TypeScript is a superset of JavaScript that adds static typing to the
      language, helping developers catch errors early and write more robust
      code.`
        : `TypeScript нь JavaScript-ийн дээд багц бөгөөд статик бичих функцийг нэмдэг
        хэл, хөгжүүлэгчдэд алдааг эрт илрүүлж, илүү батaлгаатай код бичихэд тусалдаг`}
    </p>
  );
};
