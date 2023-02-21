import React from "react";
import Header from "../components/Header";
import Dice from "../components/Dice";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      {" "}
      <div className="App">
        <Header />
        <h3>Welcome to dnd single player advanture!</h3>
        <Button class="btn" variant="success" size="lg">
          <Link class="text-white text-decoration-none" to="forest-1">
            Get into the Forest
          </Link>
        </Button>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
