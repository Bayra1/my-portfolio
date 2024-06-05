import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const ApollGraphQL_TEXT = () => {
  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <p>
      {isEng === "EN"
        ? ` Apollo GraphQL is a comprehensive platform for implementing, managing, and
      consuming GraphQL APIs.`
        : `Apollo GraphQL нь GraphQL API-г хэрэгжүүлэх, удирдахад, зориулсан цогц платформ юм.`}
    </p>
  );
};
