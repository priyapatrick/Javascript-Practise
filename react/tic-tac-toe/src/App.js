import React from "react";
import "./App.css";
import Board from "./components/Board";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="playground">
      <Heading />
      <Board />
    </div>
  );
}

export default App;

