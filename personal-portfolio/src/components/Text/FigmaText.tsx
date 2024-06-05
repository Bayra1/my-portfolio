import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const FigmaText = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `Figma is a collaborative interface design tool that enables teams to
        create, prototype, and collaborate on digital designs in real-time.`
        : `Figma нь багаар ажиллах, бодит цаг хугацаанд дижитал загвар бүтээх, загвар гаргах, хамтран ажиллах боломжийг олгодог хамтын интерфейсийн дизайны хэрэгсэл юм.`}
    </p>
  );
};
