import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const Auth0_TEXT = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;
  return (
    <p>
      {isEng === "EN"
        ? `Auth0 is an identity management platform providing authentication and
  authorization services for applications.`
        : `Auth0 нь таниулах удирдлагын платформ бөгөөд баталгаажуулалт болон зөвшөөрлийн үйлчилгээ хийхэд зориулсан`}
    </p>
  );
};
