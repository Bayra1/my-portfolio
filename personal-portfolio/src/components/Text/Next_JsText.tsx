import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const NEXT_JS_Text = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? ` Next.js is a React framework that simplifies server-side rendering
      and routing, enabling fast and scalable web application development.`
        : `Next.js нь сервер талын дүрслэлийг хялбаршуулдаг React framework юм
        чиглүүлэлт нь хурдан бөгөөд өргөтгөх боломжтой вэб програм хөгжүүлэх боломжийг олгодог`}
    </p>
  );
};
