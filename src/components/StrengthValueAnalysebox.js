import React from "react";
function StrengthValueAnalyzebox(props) {
  const classname = () => {
    let name = "analyzebox ";
    name += props.strengthAmount >= props.id ? "active" : "";
    return name;
  };
  return (
    <>
      <span className={classname()}></span>
    </>
  );
}
export default StrengthValueAnalyzebox;
