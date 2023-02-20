import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Directions from "../../components/Directions";
import Clue from "../../components/Clue";
import Dice from "../../components/Dice";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
function PubPart1() {
  return (
    <div>
      <Header />
      <Title location="Pub" />
      <Directions directions="Story in the pub...." />
      <Clue clue="the content of the clue from props in forest" />
      <button>
        <Link to="/cemetery-1">To the Cemetery</Link>
      </button>
      <Dice />
      <Footer />
    </div>
  );
}

export default PubPart1;
