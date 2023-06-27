import { CSSProperties } from "react";
import Front from "./components/body/Front";

export default () => {
  const frontBody: CSSProperties = {
    width: "300px",
    top: "50%",
    left: "50%",
    position: "absolute",
    translate: "-50% -50%",
  };

  return (
    <div className="app-container">
      <Front style={frontBody} />
    </div>
  );
};
