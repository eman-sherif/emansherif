
import About from "./components/About";
import "./App.css";
import "./styles/Global.css";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <NavBar></NavBar>

      </div>
    </div>
  );
}

export default App;