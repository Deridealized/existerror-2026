import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Hero /> {/* TODO: Current focus copy */}
      <Work /> {/* TODO: Nicer imagery and copy, fix arrow animation */}
      <Skills />
      <Contact /> {/* TODO: FIX HOVER COLOUR ON TEXT */}
      <Footer />
    </div>
  );
}

export default App;
