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
      <Hero />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
