import { useState, useEffect, useRef } from "react";
import s from "./Nav.module.css";
import existerrorOrangeLogo from "../../assets/Images/Generic/keyhole_orange_bg.png";
import Toggle from "../Toggle/Toggle";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
        <li><a href="#work">Work</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Toggle /></li>
      </ul>

      <div className={s.kebabWrapper} ref={menuRef}>
        <button
          className={s.kebab}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        {open && (
          <div className={s.dropdown}>
            <a href="#work" onClick={() => setOpen(false)}>Work</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <div className={s.dropdownToggle}><Toggle /></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
