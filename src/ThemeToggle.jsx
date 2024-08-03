import React from "react";
import { useGlobalContext } from "./context";
import { FaCloudSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { toggleDarkTheme, isDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button onClick={() => toggleDarkTheme()} className="dark-toggle">
        {isDarkTheme ? (
          <FaMoon className="toggle-icon" />
        ) : (
          <FaCloudSun className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
