import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Content Area</h2>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default Content;
