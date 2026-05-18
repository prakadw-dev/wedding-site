import { Link } from 'react-router-dom'
import Flourish from '../components/Flourish.jsx'

export default function Invitation() {
  return (
    <main className="page">
      <div className="stage stagger">
        <p className="eyebrow">
          You are invited <span className="dot" /> 22 · 08 · 2026
        </p>

        <h1 className="names">
          Beau <span className="amp">&amp;</span> Sara
        </h1>

        <Flourish />

        <p className="lede">
          Together with our families, we joyfully invite you to celebrate
          the beginning of our forever.
        </p>

        <div className="choices">
          <Link to="/rsvp" className="btn primary">
            Respond
          </Link>
        </div>

        <p className="footer-mark">— kindly reply by 22 July 2026 —</p>
      </div>
    </main>
  )
}
