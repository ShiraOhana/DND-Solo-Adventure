import "./Style/App.css";
import "./Style/normalize.css";
import Header from "./components/Header";
import Dice from "./components/Dice";
import ForestPart1 from "./Pages/Forest/ForestPart1";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const navigateToForest = () => {
    // 👇️ navigate to /contacts
    navigate("/forest");
  };
  return (
    <Router>
      <div className="App">
        <Header location="Hell" />
        <header className="App-header">
          <h1>Single player DND</h1>
          <Routes>
            <Route path="/forest" element={<ForestPart1 />} />
            <button onClick={navigateToForest}>Contacts</button>
          </Routes>
        </header>
        <Dice />
      </div>
    </Router>
  );
}

export default App;
