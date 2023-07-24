import React, { useState } from "react";
function CharacterLengthSlider() {
  const [length, setLength] = useState(8);
  return (
    <div className="input--container flex-v mb-2">
      <label htmlFor="range-input" className="label flex space-between">
        Character Length<span className="label-number">{length}</span>
      </label>
      <input
        onChange={(e) => setLength(e.target.value)}
        type="range"
        className="range-input"
        id="range-input"
        min="4"
        max="32"
        step="2"
        value={length}
      />
    </div>
  );
}
export default CharacterLengthSlider;
