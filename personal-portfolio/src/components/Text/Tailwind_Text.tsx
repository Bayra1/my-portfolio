import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const Tailwind_TEXT = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `Tailwind CSS is a utility-first CSS framework that simplifies web
      development with pre-defined utility classes for styling HTML elements.`
        : `Tailwind CSS нь вебийг хялбаршуулдаг хамгийн анхны CSS framework юм
        HTML элементүүдийг загварчлахад зориулсан урьдчилан тодорхойлсон хэрэглүүрийн анги бүхий хөгжүүлэлт.`}
    </p>
  );
};
