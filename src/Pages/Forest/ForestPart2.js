import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Directions from "../../components/Directions";
import Clue from "../../components/Clue";
import Dice from "../../components/Dice";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function ForestPart2() {
  return (
    <div>
      {" "}
      <Header />
      <Title location="Forest" />
      <Directions directions="Story in the forest...." />
      <Clue clue="the content of the clue from props in forest" />
      <button>
        <Link to="/forest-3">Next</Link>
      </button>
      <Dice />
      <Footer />
    </div>
  );
}

export default ForestPart2;
