import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";
import "../styles/navbar.css";
export const AboutMe = () => {

  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <ul className="container w-[500px] text-white mt-[12px] italic">
      <li>{isEng === "EN" ? `My name is Sukhbaatar Ikhbayar, and I am a dedicated developer with a
      passion for creating exceptional websites. I thrive on challenges and am
      highly adaptable, allowing me to effectively tackle complex tasks and
      deliver high-quality results.` : `Намайг Сүхбаатарын Ихбаяр гэдэг бөгөөд би онцгой вэб сайт үүсгэх чин хүсэл эрмэлтэй тууштай хөгжүүлэгч. 🔥`}</li>
    </ul>
  );
};
