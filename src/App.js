import "./Style/App.css";
import "./Style/normalize.css";
import Header from "./components/Header";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header">
        <h1>Single player DND</h1>
      </header>
      <Dice />
    </div>
  );
}

export default App;
