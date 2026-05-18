import Flourish from '../components/Flourish.jsx'

export default function Details() {
  return (
    <main className="page">
      <div className="stage stagger">
        <p className="eyebrow">
          With joy <span className="dot" /> we cannot wait
        </p>

        <h1 className="names" style={{ fontSize: 'clamp(2.6rem, 7vw, 4.2rem)' }}>
          We’ll see you there
        </h1>

        <Flourish />

        <p className="lede tight">
          Thank you for celebrating with us. Here is everything you need to know.
        </p>

        <div className="details-grid">
          <div className="detail-item">
            <span className="detail-label">The Date</span>
            <span className="detail-value">Saturday, 22 August 2026</span>
            <span className="detail-sub">Ceremony at 3:00pm · Reception to follow</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">The Place</span>
            <span className="detail-value">[ Venue name ]</span>
            <span className="detail-sub">
              [ Street address ], Sydney NSW
              <br />
              <a
                className="detail-link"
                href="https://maps.google.com/?q=[venue+address]"
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
              Think tailored, elegant, and ready to dance. Earth tones encouraged,
              but not required.
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Gifts &amp; Registry</span>
            <span className="detail-value">Your presence is the gift</span>
            <span className="detail-sub">
              If you’d like to contribute to our next chapter,{' '}
              <a
                className="detail-link"
                href="https://your-registry-link.com"
                target="_blank"
                rel="noreferrer"
              >
                visit our registry →
              </a>
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Getting There</span>
            <span className="detail-value">Travel &amp; stay</span>
            <span className="detail-sub">
              Parking is available on site. For interstate guests, we recommend
              accommodation in [ suburb ] — happy to share suggestions.
            </span>
          </div>
        </div>

        <p className="footer-mark">— Beau &amp; Sara —</p>
      </div>
    </main>
  )
}
