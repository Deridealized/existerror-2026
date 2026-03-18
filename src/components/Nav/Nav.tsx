import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <div className={s.navSig}>JAMIE HEY</div>
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
      </ul>
    </nav>
  );
};

export default Nav;
