import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const Material_UI_TEXT = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `Material-UI is a React UI framework based on Google's Material Design
        guidelines, offering pre-designed components for building stylish and
        responsive web applications.`
        : `
        Material-UI нь Google-ийн Материал дизайн дээр суурилсан React UI framework юм
                удирдамж, загварлаг барихад зориулж урьдчилан боловсруулсан бүрэлдэхүүн хэсгүүдийг санал болгодог`}
    </p>
  );
};
