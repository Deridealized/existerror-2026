import "./Deana.css";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const availability = [
  {
    label: "Morning",
    sublabel: "9am – 12pm",
    slots: [false, false, true, false, false, true, true],
  },
  {
    label: "Afternoon",
    sublabel: "12pm – 5pm",
    slots: [true, true, true, true, true, true, true],
  },
  {
    label: "Evening",
    sublabel: "5pm – 9pm",
    slots: [true, true, false, true, true, true, false],
  },
];

const qualifications = [
  {
    title: "Team Teach Qualified",
    desc: "Certified in positive behaviour support strategies",
  },
  {
    title: "De-escalation Training",
    desc: "Trained to calmly manage challenging situations",
  },
  {
    title: "SEN Specialist",
    desc: "Experienced supporting children with additional needs",
  },
  {
    title: "Learning Through Play",
    desc: "Best practices in child-led, play-based development",
  },
];

const services = [
  {
    icon: "🌙",
    title: "Evening Babysitting",
    desc: "Reliable cover for date nights, events or evenings out. I'll keep your children safe and settled while you're away.",
  },
  {
    icon: "🎒",
    title: "After-school Care",
    desc: "Pick-up from school and care through the afternoon until you're home from work.",
  },
  {
    icon: "☀️",
    title: "Holiday & Weekend Cover",
    desc: "Available during school holidays and weekends to give parents a break or cover work commitments.",
  },
  {
    icon: "💛",
    title: "SEN Specialist Support",
    desc: "Experienced and trained to provide specialist care for children with additional needs, using calm, evidence-based approaches.",
  },
];

export default function Deana() {
  return (
    <div className="deana-page">

      {/* Nav */}
      <nav className="dp-nav">
        <div className="dp-nav-inner">
          <span className="dp-nav-brand">I'm available when you're not</span>
          <ul className="dp-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#availability">Availability</a></li>
            <li><a href="#contact" className="dp-nav-cta">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="dp-hero">
        <div className="dp-hero-inner">
          <p className="dp-eyebrow">Babysitting &amp; Childcare · Austrey</p>
          <h1 className="dp-h1">
            Austrey
            <br />
            Childcare
          </h1>
          <p className="dp-hero-sub">
            Experienced, qualified childcare for children aged 3–16, with a
            specialist background in SEN support.
          </p>
          <div className="dp-hero-btns">
            <a href="#contact" className="dp-btn">Get in touch</a>
            <a href="#about" className="dp-btn dp-btn-outline">Learn more</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="dp-section">
        <div className="dp-container">
          <p className="dp-section-tag">About me</p>
          <div className="dp-about-grid">
            <div className="dp-about-text">
              <h2 className="dp-h2">Hi, I'm Deana</h2>
              <p>
                I'm an Austrey resident with a history of looking after children
                aged 3–16. In the past I have worked primarily with SEN kids,
                having taken Team Teach qualifications, de-escalation training
                and best practices in learning through play.
              </p>
              <p className="dp-muted">
                I believe every child deserves patient, attentive care in a safe
                and nurturing environment. Whether you need a few hours or
                regular cover, I'm here to help.
              </p>
            </div>
            <div className="dp-quals">
              {qualifications.map((q) => (
                <div key={q.title} className="dp-qual-item">
                  <div className="dp-qual-check">✓</div>
                  <div>
                    <strong>{q.title}</strong>
                    <p>{q.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="dp-section dp-section-alt">
        <div className="dp-container">
          <p className="dp-section-tag">What I offer</p>
          <h2 className="dp-h2 dp-section-heading">Services</h2>
          <div className="dp-services-grid">
            {services.map((s) => (
              <div key={s.title} className="dp-service-card">
                <span className="dp-service-icon">{s.icon}</span>
                <h3 className="dp-h3">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability */}
      <section id="availability" className="dp-section">
        <div className="dp-container">
          <p className="dp-section-tag">When I'm free</p>
          <h2 className="dp-h2 dp-section-heading">Availability</h2>
          <p className="dp-section-sub">
            General weekly availability is shown below. Get in touch to confirm
            specific dates.
          </p>
          <div className="dp-timetable">
            <div className="dp-tt-row dp-tt-header">
              <div className="dp-tt-label" />
              {days.map((d) => (
                <div key={d} className="dp-tt-day">{d}</div>
              ))}
            </div>
            {availability.map((row) => (
              <div key={row.label} className="dp-tt-row">
                <div className="dp-tt-label">
                  <span>{row.label}</span>
                  <small>{row.sublabel}</small>
                </div>
                {row.slots.map((avail, i) => (
                  <div key={i} className={`dp-tt-cell ${avail ? "dp-tt-yes" : "dp-tt-no"}`}>
                    {avail ? "✓" : "–"}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="dp-tt-note">
            Availability may vary — always confirm directly before booking.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="dp-section dp-section-alt">
        <div className="dp-container dp-contact-container">
          <p className="dp-section-tag">Get in touch</p>
          <h2 className="dp-h2 dp-section-heading">Contact</h2>
          <p className="dp-section-sub">
            Ready to chat? Reach out by phone or email and I'll get back to you
            as soon as I can.
          </p>
          <div className="dp-contact-cards">
            <a href="mailto:deana.hey@outlook.com" className="dp-contact-card">
              <span className="dp-contact-icon">✉</span>
              <div>
                <strong>Email</strong>
                <p>deana.hey@outlook.com</p>
              </div>
            </a>
            <a href="tel:07709824569" className="dp-contact-card">
              <span className="dp-contact-icon">☎</span>
              <div>
                <strong>Phone</strong>
                <p>07709 824 569</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dp-footer">
        <p>© 2026 Deana's Childcare · Austrey</p>
        <p>
          <a href="mailto:deana.hey@outlook.com">deana.hey@outlook.com</a>
          {" · "}
          <a href="tel:07709824569">07709 824 569</a>
        </p>
      </footer>

    </div>
  );
}
