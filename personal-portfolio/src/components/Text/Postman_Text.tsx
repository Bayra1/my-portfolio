import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const Postman_Text = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? `Postman is an API development tool that simplifies the process of designing, testing, and documenting APIs.`
        : `Postman нь API-г боловсруулах, турших, баримтжуулах үйл явцыг хялбаршуулдаг API хөгжүүлэлтийн хэрэгсэл юм.`}
    </p>
  );
};
