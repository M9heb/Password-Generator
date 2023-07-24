import React, { useState } from "react";
function CheckboxInput(props) {
  const [inputValue, setInputValue] = useState(props.value);
  const onChangeHandler = (event) => {
    setInputValue(event.target.checked);
    props.newValue(event.target.checked);
  };
  return (
    <label className="label" htmlFor={props.id}>
      <input
        type="checkbox"
        name={props.name}
        className="text"
        disabled={props.disabled}
        onChange={onChangeHandler}
        checked={inputValue}
      />{" "}
      {props.children}
    </label>
  );
}
export default CheckboxInput;
