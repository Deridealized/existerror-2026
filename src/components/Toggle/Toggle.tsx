import { useTheme } from "../../context/ThemeContext";
import s from "./Toggle.module.css";

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={s.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      [ {theme === "dark" ? "light" : "dark"} ]
    </button>
  );
};

export default Toggle;
