import { CSSProperties } from "react";
import FrontBody from "./components/body/FrontBody";

export default () => {
  const frontBody: CSSProperties = {
    width: "300px",
    top: "50%",
    left: "50%",
    position: "absolute",
    translate: "-50% -50%",
  };

  return <FrontBody onBodyPartClick={console.log} style={frontBody} outline />;
};
