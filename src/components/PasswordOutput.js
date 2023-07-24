import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function PasswordOutput(props) {
  const [password, setPassword] = useState("P4$5W0rD!");

  return (
    <div className="container">
      <div className="row">
        <div className="password">{password}</div>
        <CopyToClipboard text={password}>
          <div title="Copy to clipboard" className="btn--icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M175.478-56.694q-32.74 0-56.262-23.522t-23.522-56.262v-558.304q0-16.706 11.502-28.158 11.502-11.451 28.566-11.451t28.39 11.451q11.326 11.452 11.326 28.158v558.304h429.304q16.706 0 28.158 11.502 11.451 11.501 11.451 28.565T632.94-68.02q-11.452 11.327-28.158 11.327H175.478Zm139.218-139.784q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-549.826q0-32.74 23.356-56.262 23.355-23.522 55.862-23.522h429.826q32.74 0 56.262 23.522t23.522 56.262v549.826q0 32.507-23.522 55.862-23.522 23.356-56.262 23.356H314.696Zm0-79.218h429.826v-549.826H314.696v549.826Zm0 0v-549.826 549.826Z" />
            </svg>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default PasswordOutput;
