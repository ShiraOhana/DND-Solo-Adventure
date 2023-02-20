import "./Style/App.css";
import "./Style/normalize.css";
import ForestPart1 from "./Pages/Forest/ForestPart1";
import ForestPart2 from "./Pages/Forest/ForestPart2";
import ForestPart3 from "./Pages/Forest/ForestPart3";
import CemeteryPart1 from "./Pages/Cemetery/CemeteryPart1";
import CemeteryPart2 from "./Pages/Cemetery/CemeteryPart2";
import PubPart1 from "./Pages/Pub/PubPart1";

import React from "react";
import Home from "./Pages/Home";

import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
export const AppData = React.createContext();

function App() {
  return (
    <AppData.Provider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/forest-1" element={<ForestPart1 />} />
            <Route exact path="/forest-2" element={<ForestPart2 />} />
            <Route exact path="/forest-3" element={<ForestPart3 />} />
            <Route exact path="/cemetery-1" element={<CemeteryPart1 />} />
            <Route exact path="/cemetery-2" element={<CemeteryPart2 />} />
            <Route exact path="/pub-1" element={<PubPart1 />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppData.Provider>
  );
}

export default App;
