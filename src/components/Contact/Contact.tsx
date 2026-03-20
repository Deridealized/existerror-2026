import s from "./Contact.module.css";
import { contactDetails } from "./contactDetails";

const Contact = () => {
  return (
    <div className={s.contactSection} id="contact">
      <div className={s.contactGrid}>
        <div>
          <h2 className={s.contactHeading}>
            Let's<span className={s.contactHeadingSpan}>Work</span>Together.
          </h2>
          <p className={s.contactSub}>
            I'm looking for frontend roles where design is a part of the process
            - where I am utilised as both a designer and a developer.
            Midlands-based, remote preferred, open to hybrid.
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
