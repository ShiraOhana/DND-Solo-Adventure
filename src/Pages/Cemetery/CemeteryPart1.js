import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Directions from "../../components/Directions";
import Clue from "../../components/ReadMore";
import Dice from "../../components/Dice";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function CemeteryPart1() {
  return (
    <div>
      <Header />
      <Title location="Cemetery" />
      <Directions directions=". My older brother and I slowly started to trot back to our pretty rundown car. I leaped over the tombstones, one by one trying not to disturb the people resting beneath me. When I reached the gravel footpath, I grabbed hold of the door handle and sat on the tattered leather chair. It's so cold in this car, I felt like rolling up into a ball and shutting off from all of my surroundings. As I closed my eyes I could taste the thick acid of this morning's breakfast beginning to rise up to the back of my throat. I felt cold sweat dripping down from my forehead as my body shook vigorously. I heard my teeth chattering in time with my body's strong shake. I could smell the pollution that the car was producing as the engine was warming up. But my eyes could see nothing, pitch darkness roaming around. No light or excitement what so ever." />
      <Clue clue="the content of the clue from props in forest" />
      <Button class="btn" variant="success" size="lg">
        <Link class="text-white text-decoration-none" to="/cemetery-2">
          To the Cemetery
        </Link>
      </Button>
      <Dice />
      <Footer />
    </div>
  );
}

export default CemeteryPart1;
