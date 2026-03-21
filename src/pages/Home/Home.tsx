import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import Skills from "../../components/Skills/Skills";
import Work from "../../components/Work/Work";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Work />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
