import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import IconLinks from "./components/IconLinks";
import KeySequenceListener from "./components/KeySequenceListener";
import config from "./config.json";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

function App() {
  const [activated, setActivated] = useState(false);

  return (
    <div className="container">
      <Header config={config} activated={activated} />
      <IconLinks config={config} activated={activated} />
      <KeySequenceListener
        sequence={KONAMI_CODE}
        action={() => setActivated(!activated)}
      />
    </div>
  );
}

export default App;
