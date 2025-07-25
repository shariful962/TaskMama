import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import webIcons from "../assets/images";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="transition-transform duration-100 ease-in-out hover:scale-110 active:rotate-180 cursor-pointer">
      <img
        className="w-8 h-8"
        src={theme ==='dark'? webIcons.lightIco:webIcons.darkIco}
        alt=""
      />
    </button>
  );
};

export default ThemeToggleButton;
