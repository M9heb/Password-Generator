import React, { useState } from "react";
import StrengthValueAnalyseBox from "./StrengthValueAnalysebox";
function StrengthInputContainer(props) {
  return (
    <div className="container strong bg-dark row uppercase mb-2">
      Strength{" "}
      <span className="flex gap-1 box">
        <StrengthValueAnalyseBox strengthAmount={props.strength} id={1} />
        <StrengthValueAnalyseBox strengthAmount={props.strength} id={2} />
        <StrengthValueAnalyseBox strengthAmount={props.strength} id={3} />
        <StrengthValueAnalyseBox strengthAmount={props.strength} id={4} />
      </span>
    </div>
  );
}

export default StrengthInputContainer;
