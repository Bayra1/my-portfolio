import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const Daisy_UI_TEXT = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `Daisy UI is a utility-first CSS framework built with Tailwind CSS,
      providing ready-to-use components and styles for rapid web development.`
        : `
        Daisy UI нь Tailwind CSS-ээр бүтээгдсэн хамгийн анхны CSS хүрээ бөгөөд
        вебийг хурдан хөгжүүлэхэд ашиглагддаг.`}
    </p>
  );
};
