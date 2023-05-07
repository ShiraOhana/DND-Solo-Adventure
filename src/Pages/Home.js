import React from "react";
import Header from "../components/Header";
import Dice from "../components/Dice";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div className="App">
        <Header />
        <h3>Welcome to Dungeons and Dragons Solo Adventure!</h3>
        <br></br>
        <p>
          Game instructions: <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore<br></br> et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis <br></br>aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat <br></br>cupidatat non
          proident, sunt in culpa qui officia deserunt<br></br> mollit anim id
          est laborum."
        </p>
        <Button class="btn" variant="success" size="lg">
          <Link class="text-white text-decoration-none" to="forest-1">
            To start your solo adventure get into the forest
          </Link>
        </Button>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
