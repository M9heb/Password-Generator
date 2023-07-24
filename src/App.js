import "./App.css";
import React, { useState, useEffect } from "react";
import PasswordOutput from "./components/PasswordOutput";
import StrengthInputContainer from "./components/StrengthInputContainer";
import CharacterLengthSlider from "./components/CharacterLengthSlider";
import CheckboxInput from "./components/CheckboxInput";
import GenerateButton from "./components/GenerateButton";
function App() {
  const [strengthArray, setStrengthArray] = useState([
    {
      type: "lowercase",
      value: true,
    },
    {
      type: "uppercase",
      value: false,
    },
    {
      type: "number",
      value: false,
    },
    {
      type: "symbol",
      value: false,
    },
  ]);
  const [strength, setStrength] = useState(1);

  function calcStrength() {
    let value = 0;
    for (const item of strengthArray) {
      if (item.value) value++;
    }
    setStrength(value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    generatePassword();
  };
  const newValue = (item) => {
    const newArray = strengthArray.map((x) => x);
    for (let i = 0; i < newArray.length; i++)
      if (item.name === newArray[i].name) newArray[i].value = item.value;
    setStrengthArray(newArray);
    calcStrength();
    console.log(strength);
  };
  const generatePassword = () => {};
  return (
    <div className="container--app">
      <h1 className="heading--primary">Password Generator</h1>
      <PasswordOutput />
      <form className="container">
        <CharacterLengthSlider />
        <ul className="mb-2">
          <li>
            <CheckboxInput
              name="lowercase"
              newValue={newValue}
              value={strengthArray[0].value}
            >
              Include Lowercase Letters
            </CheckboxInput>
          </li>
          <li>
            <CheckboxInput
              name="uppercase"
              newValue={newValue}
              value={strengthArray[1].value}
            >
              Include Uppercase Letters
            </CheckboxInput>
          </li>

          <li>
            <CheckboxInput
              name="number"
              newValue={newValue}
              value={strengthArray[2].value}
            >
              Include Numbers
            </CheckboxInput>
          </li>
          <li>
            <CheckboxInput
              name="symbol"
              newValue={newValue}
              value={strengthArray[3].value}
            >
              Include Symbols
            </CheckboxInput>
          </li>
        </ul>
        <StrengthInputContainer strength={strength} />
        <GenerateButton submitHandler={submitHandler}>
          Generate &rarr;
        </GenerateButton>
      </form>
    </div>
  );
}

export default App;
