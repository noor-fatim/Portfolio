import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="containers">
      <div className="container-content">
        <Navbar />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
