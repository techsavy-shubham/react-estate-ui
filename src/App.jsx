import "./layout.scss";
import HomePage from "./routes/homePage/homePage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
