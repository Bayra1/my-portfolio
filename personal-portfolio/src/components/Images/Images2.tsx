import { useState } from "react";
import "../styles/navbar.css";

export const ImagesAnimation2 = () => {
  const [clickedImage, setClickedImage] = useState("");

  const handleClick = (imageName:string) => {
    setClickedImage(imageName);
    console.log(`Clicked on ${imageName}`);
  };

  return (
    <div className="flex flex-row w-[500px] justify-between">
      <div className="gallery">
        <button className="z-10" onClick={() => handleClick("JavaScript")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            alt="JS"
          />          
        </button>
        <button className="z-10" onClick={() => handleClick("TypeScript")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            alt="TS"
          />          
        </button>
        <button className="z-10" onClick={() => handleClick("Figma")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            alt="FIGMA"
          />          
        </button>
        <button className="z-10" onClick={() => handleClick("Express.js")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            alt="Express_Js"
          />
        </button>
      </div>
      <div className="w-[5px] bg-[#FFF] h-[250px] rounded-xl z-10"></div>
      <span className="text-white flex justify-center items-center">
        {clickedImage} this is tes
      </span>
    </div>
  );
};
