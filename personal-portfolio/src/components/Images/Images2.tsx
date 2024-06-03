import { useState } from "react";
import "../styles/navbar.css";
import {
  ExpressText,
  FigmaText,
  JavaScriptText,
  TypeScriptText,
} from "../Text";

export const ImagesAnimation2 = () => {
  const [clickedImage, setClickedImage] = useState("JavaScript");

  const handleClick = (imageName: string) => {
    setClickedImage(imageName);
  };

  const renderText = () => {
    switch (clickedImage) {
      case "JavaScript":
        return <JavaScriptText />;
        break;
      case "TypeScript":
        return <TypeScriptText />;
        break;
      case "Figma":
        return <FigmaText />;
        break;
      case "Express_JS":
        return <ExpressText />;
        break;
    }
  };

  return (
    <div className="flex flex-row w-[900px] justify-between">
      <div className="gallery">
        <img
          onClick={() => handleClick("JavaScript")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
          alt="JS"
        />

        <img
          onClick={() => handleClick("TypeScript")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA4XkG2FlYpT8Vq4uJOvB5rONiBZA1dq1MTA&s"
          alt="TS"
        />

        <img
          onClick={() => handleClick("Figma")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyY2vfMktgwMvdp6ZDTxNmgRmi3uaWFtvzzQ&s"
          alt="FIGMA"
        />

        <img
          onClick={() => handleClick("Express_JS")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEjCQNyD3_JGsmTZ1Ng0a3WefsXra98wzCw&s"
          alt="Express_Js"
        />
      </div>

      <div className="w-[5px] bg-[#FFF] h-[300px] rounded-xl"></div>
      <ul className="w-[500px] p-0 h-fit text-white">
        <li>{clickedImage}</li>
        <div>{clickedImage ? <li>{renderText()}</li> : ""}</div>
      </ul>
    </div>
  );
};
