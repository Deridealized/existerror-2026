import s from "./Nav.module.css";
import existerrorOrangeLogo from "../../assets/Images/Generic/keyhole_orange_bg.png";
import Toggle from "../Toggle/Toggle";

const Nav = () => {
  return (
    <nav>
      <div>
        <img
          className={s.navLogo}
          src={existerrorOrangeLogo}
          alt="existerror logo"
        />
      </div>
      <div className={s.navSig}>JAMIE HEY / existerror</div>
      <ul className={s.navLinks}>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <Toggle />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
