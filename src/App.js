import "./App.css";
import React, { useState, useEffect } from "react";
import PasswordOutput from "./components/PasswordOutput";
import StrengthInputContainer from "./components/StrengthInputContainer";
import CharacterLengthSlider from "./components/CharacterLengthSlider";
import CheckboxInput from "./components/CheckboxInput";
import GenerateButton from "./components/GenerateButton";

function App() {
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [password, setPassword] = useState("P4$5W0rD!");
  const [passwordLength, setPasswordLength] = useState(8);
  let strength =
    (uppercase && 1) + (lowercase && 1) + (number && 1) + (symbol && 1);

  const submitHandler = (event) => {
    event.preventDefault();
    generatePassword();
  };

  const generatePassword = () => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "~!@#$%^&*()_+=-`[]{}/.,';?><:=";
    let characterList = "";
    if (uppercase) characterList += upperCase;
    if (lowercase) characterList += lowerCase;
    if (number) characterList += numbers;
    if (symbol) characterList += symbols;
    let tempPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterList.length);
      tempPassword += characterList.charAt(characterIndex);
    }
    setPassword(tempPassword);
  };

  return (
    <div className="container--app">
      <h1 className="heading--primary">Password Generator</h1>
      <PasswordOutput password={password} />
      <form className="container">
        <CharacterLengthSlider
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <ul className="mb-2">
          <li>
            <CheckboxInput
              name="lowercase"
              newValue={(value) => setLowercase(value)}
              value={uppercase}
              disabled={lowercase && !uppercase && !number && !symbol}
            >
              Include Lowercase Letters
            </CheckboxInput>
          </li>
          <li>
            <CheckboxInput
              name="uppercase"
              newValue={(value) => setUppercase(value)}
              value={lowercase}
              disabled={!lowercase && uppercase && !number && !symbol}
            >
              Include Uppercase Letters
            </CheckboxInput>
          </li>

          <li>
            <CheckboxInput
              name="number"
              newValue={(value) => setNumber(value)}
              value={number}
              disabled={!lowercase && !uppercase && number && !symbol}
            >
              Include Numbers
            </CheckboxInput>
          </li>
          <li>
            <CheckboxInput
              name="symbol"
              newValue={(value) => setSymbol(value)}
              value={symbol}
              disabled={!lowercase && !uppercase && !number && symbol}
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
