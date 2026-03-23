import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import GitHubFeed from "../../components/GitHubFeed/GitHubFeed";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import SkillsChart from "../../components/SkillChart/SkillsChart";
import Skills from "../../components/Skills/Skills";
import Work from "../../components/Work/Work";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.main}>
      <Nav />
      <Hero />
      <Work />
      <Skills />
      <About />

      <div className={s.homeHeader}>
        <span className={s.homeNum}>04 /</span>
        <h2 className={s.homeTitle}>
          Under the <em>hood</em>
        </h2>
      </div>
      <div className={s.widgetRowA}>
        <GitHubFeed />
        <SkillsChart />
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
