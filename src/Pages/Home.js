import React from "react";
import Header from "../components/Header";
import Dice from "../components/Dice";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {" "}
      <div className="App">
        <Header />
        <h3>Welcome to dnd single player advanture!</h3>
        <button>
          <Link to="forest-1">Get into the Forest</Link>
        </button>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
