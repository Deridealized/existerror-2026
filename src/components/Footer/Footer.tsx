import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.footerSig}>Built by me with React, TypeScript, and ☕.</p>
      <p className={s.footerNote}>
        Copyright © {new Date().getFullYear()} Existerror Digital. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
