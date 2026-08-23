import { useEffect, useRef, useState } from "react";
import s from "./Contact.module.css";
import { contactDetails } from "./contactDetails";
import { CV_OPTIONS } from "../../data/cvOptions";

const Contact = () => {
  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) {
        setCvOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={s.contactSection} id="contact">
      <div className={s.contactGrid}>
        <div>
          <h2 className={s.contactHeading}>
            Let's<span className={s.contactHeadingSpan}>Work</span>Together.
          </h2>
          <p className={s.contactSub}>
            Open to frontend, games, creative tech, and anything that sits at
            the intersection of engineering and craft. Midlands-based, remote
            preferred, open to hybrid.
          </p>
        </div>
        <div className={s.contactLinks}>
          {contactDetails.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              className={s.contactLink}
            >
              <div className={s.contactLinkContent}>
                <span className={s.contactLinkLabel}>{contact.label}</span>
                <span className={s.contactLinkValue}>{contact.value}</span>
              </div>
              <span className={s.contactLinkArrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
