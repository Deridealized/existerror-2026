import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import GitHubFeed from "../../components/GitHubFeed/GitHubFeed";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import Skills from "../../components/Skills/Skills";
import Work from "../../components/Work/Work";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <div className={s.widgetRowA}>
        <GitHubFeed />
        <GitHubFeed />
      </div>
      <Work />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
