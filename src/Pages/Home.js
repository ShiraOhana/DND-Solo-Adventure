import React from "react";
import Header from "../components/Header";
import Dice from "../components/Dice";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {" "}
      <div className="App">
        <Header location="Hell" />
        <header className="App-header">
          <h1>Single player DND</h1>
        </header>
        <Dice />
        <Link to="forest-1">Forest</Link>
      </div>
    </div>
  );
}

export default Home;
