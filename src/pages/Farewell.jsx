import Flourish from "../components/Flourish.jsx";

export default function Farewell() {
  return (
    <main className="page">
      <div className="stage stagger">
        <p className="eyebrow">
          With love <span className="dot" /> from us to you
        </p>

        <h1
          className="names"
          style={{ fontSize: "clamp(2.6rem, 7vw, 4.2rem)" }}
        >
          You will be missed
        </h1>

        <Flourish />

        <p className="lede">
          Thank you for letting us know. Though we’re sad we won’t see you in
          person, we’re grateful to have you in our lives — and we’ll be
          thinking of you on the day.
        </p>

        <div className="details-grid" style={{ marginTop: "2rem" }}>
          <div className="detail-item">
            <span className="detail-label">Join us virtually</span>
            <span className="detail-value">Watch the ceremony live</span>
            <span className="detail-sub">
              If you’d like to be part of the moment from afar, we’ll be
              streaming our ceremony live.{" "}
              <a
                className="detail-link"
                href="https://youtube.com/live/4p64dMyzivs?feature=share"
                target="_blank"
                rel="noreferrer"
              >
                Tune in here →
              </a>
              <br />
              Saturday, 22 August 2026 · from 2:45pm AEST
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">If you’d like to send love</span>
            <span className="detail-value">Our registry</span>
            <span className="detail-sub">
              No gift is expected, but if you’d like to mark the occasion, you
              can find our wishlist{" "}
              <a
                className="detail-link"
                href="https://www.myregistry.com/wedding-registry/sara-d-and-beau-i-st-leonards-new-south-wales/5450039"
                target="_blank"
                rel="noreferrer"
              >
                here →
              </a>
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">A note from us</span>
            <span className="detail-value">We'll be in touch</span>
            <span className="detail-sub">
              A note of thanks, along with the live stream link, will be sent to
              your email within 48 hours.
            </span>
          </div>
        </div>

        <p className="footer-mark">— with all our love, Beau &amp; Sara —</p>
      </div>
    </main>
  );
}
