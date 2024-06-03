"use client";
import { useState } from "react";
import "../styles/navbar.css";
import { CssText, HTML_TEXT, NEXT_JS_Text, ReactText } from "../Text";

export const ImagesAnimation = () => {
  const [clickedImage, setClickedImage] = useState("HTML");

  const handleClick = (imageName: string) => {
    setClickedImage(imageName);
  };

  const renderText = () => {
    switch (clickedImage) {
      case "REACT":
        return <ReactText />;
        break;
      case "CSS":
        return <CssText />;
        break;
      case "NEXT_JS":
        return <NEXT_JS_Text />;
        break;
      case "HTML":
        return <HTML_TEXT />;
        break;
    }
  };

  return (
    <div className="flex flex-row w-[900px] justify-between">
      <ul className="w-[500px] p-0 h-fit text-white">
        <li>{clickedImage}</li>
        <div>{clickedImage ? <li>{renderText()}</li> : ""}</div>
      </ul>

      <div className="w-[5px] bg-[#FFF] h-[300px] rounded-xl z-10"></div>
      <div className="gallery">
        <img
          onClick={() => handleClick("REACT")}
          style={{ background: "black" }}
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt="REACT"
        />
        <img
          onClick={() => handleClick("NEXT_JS")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0jZcD1_Z2zp8RcddJIWQJBVkDtF1iLsQlg&s"
          alt="NEXT_JS"
        />
        <img
          onClick={() => handleClick("HTML")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCDVXC1dKIQxWkN9r9hBZElgawTxpq1nwAw&s"
          alt="HTML"
        />
        <img
          onClick={() => handleClick("CSS")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
          alt="CSS"
        />
      </div>
    </div>
  );
};
