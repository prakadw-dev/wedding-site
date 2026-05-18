import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Flourish from "../components/Flourish.jsx";

// Netlify Forms expects form-encoded payloads
const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export default function Rsvp() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: "",
    dietary: "",
    message: "",
    "bot-field": "",
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.attending) {
      setError("Please fill in your name, email, and response.");
      return;
    }
    setError(null);
    setSubmitting(true);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "rsvp", ...form }),
      });
      // Route based on answer
      if (form.attending === "yes") {
        navigate("/details");
      } else {
        navigate("/with-love");
      }
    } catch (err) {
      setError(
        "Something went wrong. Please try again, or message us directly.",
      );
      setSubmitting(false);
    }
  }

  return (
    <main className="page">
      <div className="stage">
        <p className="eyebrow">
          RSVP <span className="dot" /> kindly reply
        </p>

        <h2
          className="names"
          style={{ fontSize: "clamp(2.4rem, 6vw, 3.6rem)" }}
        >
          Will you join us?
        </h2>

        <Flourish />

        <form
          className="form"
          name="rsvp"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Required hidden inputs for Netlify */}
          <input type="hidden" name="form-name" value="rsvp" />
          <p className="honeypot">
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={update("bot-field")} />
            </label>
          </p>

          <div className="field">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={update("name")}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={update("email")}
              required
            />
          </div>

          <div className="field">
            <label>Will you attend?</label>
            <div className="radio-group">
              <label className="radio-pill">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={form.attending === "yes"}
                  onChange={update("attending")}
                />
                <span>Joyfully yes</span>
              </label>
              <label className="radio-pill">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={form.attending === "no"}
                  onChange={update("attending")}
                />
                <span>Regretfully no</span>
              </label>
            </div>
          </div>

          {form.attending === "yes" && (
            <>
              <div className="field">
                <label htmlFor="guests">Number of guests</label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="4"
                  value={form.guests}
                  onChange={update("guests")}
                />
              </div>

              <div className="field">
                <label htmlFor="dietary">Dietary requirements</label>
                <input
                  id="dietary"
                  name="dietary"
                  type="text"
                  placeholder="Optional"
                  value={form.dietary}
                  onChange={update("dietary")}
                />
              </div>
            </>
          )}

          <div className="field">
            <label htmlFor="message">A note for the couple</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Optional"
              value={form.message}
              onChange={update("message")}
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="form-submit">
            <button type="submit" className="btn primary" disabled={submitting}>
              {submitting ? "Sending…" : "Send response"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
