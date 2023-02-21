import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Directions from "../../components/Directions";
import Clue from "../../components/Clue";
import Dice from "../../components/Dice";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

function PubPart1() {
  return (
    <div>
      <Header />
      <Title location="Pub" />
      <Directions directions="Hesitantly I slowly opened my swollen eyes, as if I'd been asleep for one hundred years. I turn my head to the right facing Blake, but to my surprise, Blake was not there. Where could he have gotten too? I began to ask myself a numerous amount of questions, until I realised there's no point in sitting here, doing nothing. I decided to search for Blake. I determinedly jumped out of the car and began to look for my brother." />
      <Clue clue="the content of the clue from props in forest" />
      <Button class="btn" variant="success" size="lg">
        <Link class="text-white text-decoration-none" to="/cemetery-1">
          To the Cemetery
        </Link>
      </Button>
      <Dice />
      <Footer />
    </div>
  );
}

export default PubPart1;
