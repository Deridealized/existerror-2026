import "./App.css";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Work />
      <Skills />
    </div>
  );
}

export default App;
