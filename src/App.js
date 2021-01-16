import React from "react";
import "./App.css";
import Header from "./components/Header";
import IconLinks from "./components/IconLinks";
import config from "./config.json";

function App() {
  return (
    <div className="container">
      <Header config={config} />
      <IconLinks config={config} />
    </div>
  );
}

export default App;
