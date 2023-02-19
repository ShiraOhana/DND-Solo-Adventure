import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Directions from "../../components/Directions";
import Clue from "../../components/Clue";
import Dice from "../../components/Dice";
import Footer from "../../components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ForestPart1() {
  return (
    // <Router>
    //   <Route path="/forest">
    <div>
      <Header />
      <Title location="Forest" />
      <Directions directions="Story in the forest...." />
      <Clue clue="the content of the clue from props in forest" />
      <Dice />
      <Footer />
    </div>
    //   </Route>
    // </Router>
  );
}

export default ForestPart1;
