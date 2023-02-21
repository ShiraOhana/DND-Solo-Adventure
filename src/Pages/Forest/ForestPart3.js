import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Directions from "../../components/Directions";
import Clue from "../../components/Clue";
import Dice from "../../components/Dice";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ForestPart3() {
  return (
    <div>
      <Header />
      <Title location="Forest" />
      <Directions
        directions="The little girl answered her best friend, “Yes, it’s perfect. We just have to figure out how to get the unicorns here.”

They scampered around some more, getting a feel for the land. They used their magical abilities to bring all of the mythical creatures they wanted. They made a note to put a magic spell on the trees and the forest as to ensure that no harm would come to it or them, that no one would take it away from them.

However, their exploration came to an abrupt halt. Their magical spell had apparently betrayed them because what lied in front of them was no longer their wilderness. All the little girl could see anymore was brick.

Her wilderness was not an endless one beyond their neighborhood, as she had thought. It was another collection of castles just like the one she came from.

“Did we make a circle?” her best friend asked.

The little girl’s eyes swelled up, her heart feeling as though it had hidden itself in the roots of all the trees of their wilderness, “No, this is the end.”"
      />
      <Clue clue="the content of the clue from props in forest" />
      <Button class="btn" variant="success" size="lg">
        <Link class="text-white text-decoration-none" to="/pub-1">
          To the Pub
        </Link>
      </Button>
      <Dice />
      <Footer />
    </div>
  );
}

export default ForestPart3;
