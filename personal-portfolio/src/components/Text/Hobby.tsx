import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";
import "../styles/navbar.css";

export const HobbyText = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <ul className="w-[500px] text-white mt-[12px]">
      <li>
        {isEng === "EN"
          ? `      I am passionate about basketball, which I enjoy both as a player and a
        fan. Additionally, I have a keen interest in human psychology, which
        drives me to read extensively on the subject to better understand human
        behavior and mental processes. I am also enthusiastic about exploring
        wildlife around the world, which involves learning about diverse animal
        species and their natural habitats.`
          : `Би сагсан бөмбөгт дуртай бөгөөд энэ нь тоглогчийн хувьд болон,
          фений хувьд. Бас би хүний ​​сэтгэл зүйг маш их сонирхдог бөгөөд
          Энэ нь намайг хүнийг илүү сайн ойлгоход, тухайн сэдвээр дэлгэрэнгүй уншихад хүргэдэг.          
          Мөн дэлхийн өнцөг булан бүрд байгаа зэрлэг ан амьтад, төрөл зүйл, тэдгээрийн байгалийн амьдрах орчин нь миний сонирхлыг маш их татдаг.`}
      </li>
    </ul>
  );
};
