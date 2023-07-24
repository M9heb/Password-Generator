import React from "react";

function GenerateButton(props) {
  return (
    <button className="btn" onClick={props.submitHandler} type="submit">
      {props.children}
    </button>
  );
}

export default GenerateButton;
