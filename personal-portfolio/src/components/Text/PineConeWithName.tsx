import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export const PineConeWithName = () => {

  const languageContext = useContext(LanguageContext);
  const { isEng } = languageContext;

  return (
    <div className="flex flex-row gap-2 ">
      <svg
        width="33"
        height="27"
        viewBox="0 0 33 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.85857 2.5397L1.65344 10.4105C1.12868 11.3956 0.865723 12.4767 0.865723 13.5592C0.865723 14.6419 1.12868 15.7228 1.65344 16.7079L5.85857 24.5789C6.63365 26.0327 8.14943 26.9407 9.79896 26.9407H14.2656V24.711H14.2641C13.4401 24.711 12.6822 24.2577 12.2946 23.5309L8.09107 15.6584C7.73977 15.0022 7.56468 14.2815 7.56468 13.5592C7.56468 12.8369 7.73977 12.1163 8.09107 11.4602L12.2946 3.58775C12.6822 2.86077 13.4401 2.40758 14.2641 2.40758H14.2656V0.177734H9.79896C8.14943 0.177734 6.63365 1.08589 5.85857 2.5397Z"
          fill="white"
        />
        <path
          d="M31.3421 10.4106L27.1371 2.53976C26.3619 1.08579 24.8462 0.177792 23.1967 0.177792H18.7299V2.40747H18.7316C19.5556 2.40747 20.3135 2.86082 20.7009 3.58764L24.9044 11.4601C25.2559 12.1163 25.4307 12.837 25.4307 13.5593C25.4307 14.2816 25.2559 15.0022 24.9044 15.6585L20.7009 23.5307C20.3135 24.2577 19.5556 24.7109 18.7316 24.7109H18.7299V26.9408H23.1967C24.8462 26.9408 26.3619 26.0328 27.1371 24.5788L31.3421 16.708C31.8667 15.7229 32.1298 14.6418 32.1298 13.5593C32.1298 12.4767 31.8667 11.3957 31.3421 10.4106Z"
          fill="white"
        />
      </svg>
      <div className="flex flex-col relative">
        <span className="text-white text-2xl italic">{isEng === "EN" ? "Sukhbaatar" : "Сүхбаатар"}</span>
        <span className="text-white text-base absolute top-7 left-9 italic">{isEng === "EN" ? `<Ikhbayar/>` : `<Ихбаяр/>`}</span>
      </div>
    </div>
  );
};