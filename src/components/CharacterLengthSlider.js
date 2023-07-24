import React, { useState } from "react";
function CharacterLengthSlider(props) {
  return (
    <div className="input--container flex-v mb-2">
      <label htmlFor="range-input" className="label flex space-between">
        Character Length
        <span className="label-number">{props.passwordLength}</span>
      </label>
      <input
        onChange={(e) => props.setPasswordLength(e.target.value)}
        type="range"
        className="range-input"
        id="range-input"
        min="4"
        max="32"
        step="2"
        value={props.passwordLength}
      />
    </div>
  );
}
export default CharacterLengthSlider;
