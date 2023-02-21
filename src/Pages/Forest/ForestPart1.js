import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Directions from "../../components/Directions";
import Clue from "../../components/Clue";
import Dice from "../../components/Dice";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ForestPart1() {
  return (
    <div>
      <Header />
      <Title location="Forest" />
      <Directions
        directions="They planned their escape all afternoon and once the clock struck the time of their desire, they sneaked out of the house that had outgrown their imagination. They sprinted across the neighborhood, galloping as fast as they could on their imaginary horses.

Soon enough, their castle was in view. It was a monstrosity of a house on the other side of the neighborhood, with an alluring and secret forest behind it. They had been planning their escape all day to begin their exploration into the unknown woods they’d been dreaming about.

Once they arrived, their noble steeds came to a halting stop."
      />
      <Clue clue="the content of the clue from props in forest" />
      <Button class="btn" variant="success" size="lg">
        <Link class="text-white text-decoration-none" to="/forest-2">
          Next
        </Link>
      </Button>
      <Dice />
      <Footer />
    </div>
  );
}

export default ForestPart1;
