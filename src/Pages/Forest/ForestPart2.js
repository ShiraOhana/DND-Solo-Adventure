import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Directions from "../../components/Directions";
import Clue from "../../components/Clue";
import Dice from "../../components/Dice";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ForestPart2() {
  return (
    <div>
      {" "}
      <Header />
      <Title location="Forest" />
      <Directions
        directions="The little girl turned to her best friend, “Are we gonna get in trouble?”

Her best friend nodded, “Yes, but only because we ran away from our own palace and the guards could come and take us back. We need to go into the forest now so they can’t find us.”

Her best friend was not faltering from their story so they mounted back on their horses, and trotted into the woods.

The refreshing air from the towering canopy of trees relieved them after their long journey. They suddenly found themselves surrounded by a wilderness they had not yet encountered. A world for them to discover.

The little girl’s best friend brushed by one of the trees, “Do you think this is a good place to make our new palace?”

The little girl took it all in. She felt the fallen leaves under her feet and gazed out into the distance, imagining building a moat to keep out anything that defied them. She saw a band of unicorns to join their palace and a castle made of massive legos, as to be the most colorful castle in all the land. She saw the trees cloaking their palace from the unwanted guests who would eventually come and take them out of their wilderness. There was so much possibility and it was their secret. Their place to be whatever they want to be."
      />
      <Clue clue="the content of the clue from props in forest" />
      <Button class="btn" variant="success" size="lg">
        <Link class="text-white text-decoration-none" to="/forest-3">
          Next
        </Link>
      </Button>
      <Dice />
      <Footer />
    </div>
  );
}

export default ForestPart2;
