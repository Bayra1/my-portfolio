import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const ExpressText = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `Express.js is a minimal and flexible web application framework for
      Node.js, used for building web applications and APIs with simplicity and
      scalability in mind.`
        : `Express.js нь хамгийн бага бөгөөд уян хатан вэб програмын хүрээ юм.
         Энэ нь программууд болон API-уудыг хялбархан бүтээхэд ашигладаг
        өргөтгөх чадварыг харгалзан үздэг.`}
    </p>
  );
};
