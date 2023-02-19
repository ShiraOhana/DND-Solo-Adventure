import "./Style/App.css";
import "./Style/normalize.css";
import Header from "./components/Header";
import Dice from "./components/Dice";
import ForestPart1 from "./Pages/Forest/ForestPart1";
import ReactDOM from "react-dom/client";
import React from "react";
import Home from "./Pages/Home";

import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
export const AppData = React.createContext();

function App() {
  return (
    // <div className="App">
    //   <Header location="Hell" />
    //   <header className="App-header">
    //     <h1>Single player DND</h1>
    //   </header>
    //   <Dice />
    // </div>

    <AppData.Provider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/forest-1" element={<ForestPart1 />} />
            {/* <Route exact path="/forest-2" element={<ForestPart2 />} />
            <Route exact path="/forest-3" element={<ForestPart3 />} /> */}
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppData.Provider>
  );
}

export default App;
