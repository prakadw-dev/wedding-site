import { Link } from "react-router-dom";

export default function Invitation() {
  return (
    <main className="hero hero--with-bg">
      <div className="hero-center">
        <h2 className="hero-names">
          <span className="name">Sara</span>
          <span className="amp">&amp;</span>
          <span className="name">Beau</span>
        </h2>
      </div>

      <div className="hero-footer">
        <p className="hero-meta left">August 22, 2026</p>

        <Link to="/rsvp" className="rsvp-pill">
          RSVP
        </Link>

        <p className="hero-meta right">Pyrmont &amp; North Sydney</p>
      </div>
    </main>
  );
}
