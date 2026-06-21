import Flourish from "../components/Flourish.jsx";

export default function Details() {
  return (
    <main className="page">
      <div className="stage stagger">
        <p className="eyebrow">
          With joy <span className="dot" /> we cannot wait
        </p>

        <h1
          className="names"
          style={{ fontSize: "clamp(2.6rem, 7vw, 4.2rem)" }}
        >
          We’ll see you there
        </h1>

        <Flourish />

        <p className="lede tight">
          Thank you for celebrating with us. Here is everything you need to
          know.
        </p>

        <div className="details-grid">
          <div className="detail-item">
            <span className="detail-label">The Date</span>
            <span className="detail-value">Saturday, 22 August 2026</span>
            <span className="detail-sub">Ceremony at 3:10pm</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">The Ceremony</span>
            <span className="detail-value">Pyrmont Registry</span>
            <span className="detail-sub">
              Taka Room <br />
              Wharf 10, 52 Pirrama Road, Pyrmont, NSW 2009
              <br />
              Arrival from 2:45pm · Ceremony begins at 3:10pm
              <br />
              <a
                className="detail-link"
                href="https://maps.app.goo.gl/YBW1sBX7WAb8ZkUY6"
                target="_blank"
                rel="noreferrer"
              >
                View on map →
              </a>
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">The Reception</span>
            <span className="detail-value">The North Spoon</span>
            <span className="detail-sub">
              165 Blues Point Rd, McMahons Point NSW 2060
              <br />
              From 5:30pm · Drinks, dinner &amp; dancing into the evening
              <br />
              <a
                className="detail-link"
                href="https://maps.app.goo.gl/vtsQchxgdd9tDh8X8"
                target="_blank"
                rel="noreferrer"
              >
                View on map →
              </a>
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Dress Code</span>
            <span className="detail-value">Cocktail Formal</span>
            <span className="detail-sub">
              Think tailored, elegant, and ready to dance. Burgundy or any hints
              of dark red encouraged, but not required.
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Gifts &amp; Registry</span>
            <span className="detail-value">Your presence is the gift</span>
            <span className="detail-sub">
              If you’d like to contribute to our next chapter,{" "}
              <a
                className="detail-link"
                href="https://www.myregistry.com/wedding-registry/sara-d-and-beau-i-st-leonards-new-south-wales/5450039"
                target="_blank"
                rel="noreferrer"
              >
                visit our registry →
              </a>
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Getting There</span>
            <span className="detail-value">Travel between venues</span>
            <span className="detail-sub">
              <strong style={{ fontStyle: "normal", fontWeight: 500 }}>
                Ceremony — Pyrmont
              </strong>
              <br />
              Limited street parking; we recommend the Star or Harbourside
              parking stations. A short walk from Pyrmont Bay light rail.
              <br />
              <br />
              <strong style={{ fontStyle: "normal", fontWeight: 500 }}>
                Reception — North Sydney
              </strong>
              <br />
              Around 15 minutes by car from the ceremony. Street parking
              available on nearby. Closest stations: North Sydney and Milsons
              Point.
              <br />
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">A Kind Note</span>
            <span className="detail-value">An intimate celebration</span>
            <span className="detail-sub">
              To keep our day intimate, we’re only able to accommodate those
              named on the invitation. We hope you understand, and we can’t wait
              to celebrate with you.
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">What happens next</span>
            <span className="detail-value">Full details on the way</span>
            <span className="detail-sub">
              A copy of these details, along with anything else you'll need for
              the day, will be sent to your email within 48 hours.
            </span>
          </div>
        </div>
        <p className="footer-mark">— Beau &amp; Sara —</p>
      </div>
    </main>
  );
}
