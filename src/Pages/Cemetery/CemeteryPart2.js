import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Directions from "../../components/Directions";
import Clue from "../../components/Clue";
import Dice from "../../components/Dice";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function CemeteryPart2() {
  return (
    <div>
      <Header />
      <Title location="Cemetery" />
      <Directions directions="I began to shake and quiver with fear. As soon as I arrived I knew something was wrong. I stood there, staring in shock as I thought to myself, 'What could of ever happened to this once beautiful and peaceful cemetery.' My brother and I were visiting our late mother, who had passed six months ago. It was pouring with rain, and my sweater didn't exactly keep the warmth in my tired and frail body. I curled my fingers up and pulled down my ragged sleeves to cover up any visible skin. I walked over to grave S 237 and glanced at the small, glary image of my mum. Memories from my past flashed before my teary eyes. I kneeled down and placed her favourite roses in a plastic vase and generously slid it into the water. I then whispered quietly, I'll see you next week Mum as I discreetly blew a kiss" />
      <Clue clue="the content of the clue from props in forest" />
      <Button variant="primary">
        <Link class="text-white text-decoration-none" to="/">
          Finish
        </Link>
      </Button>
      <Dice />
      <Footer />
    </div>
  );
}

export default CemeteryPart2;
