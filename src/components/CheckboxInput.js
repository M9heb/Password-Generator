import React, { useState } from "react";
function CheckboxInput(props) {
  const [inputValue, setInputValue] = useState(props.value);
  const onChangeHandler = (event) => {
    setInputValue(event.target.checked);
    props.newValue({ name: props.name, value: inputValue });
  };
  return (
    <label className="label" htmlFor={props.id}>
      <input
        type="checkbox"
        name={props.name}
        className="text"
        onChange={onChangeHandler}
      />{" "}
      {props.children}
    </label>
  );
}
export default CheckboxInput;
