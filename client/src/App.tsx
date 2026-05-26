import "./styles/globals.css";

// Components
import Navigation from "./components/Navigation/Navigation";
import Gameplay from "./components/Gameplay/Gameplay";
import Footer from "./components/Footer/Footer";
import Games from "./components/Games/Games";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

// Responsive
import "./styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Gameplay />
      <Games />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
