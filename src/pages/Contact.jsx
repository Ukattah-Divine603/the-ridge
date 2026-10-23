
import { useState } from "react";
import { ArrowUpRight, MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Event enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Event type: ${form.eventType}
Event date: ${form.eventDate || "Not specified"}
Expected guests: ${form.guests || "Not specified"}

Message:
${form.message}`
    );

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return (
    <main className="contact-page">
      <section className="contact-hero container">
        <p className="eyebrow">LET'S MAKE IT HAPPEN</p>
        <h1>
          Tell us about
          <br />
          <span>your event.</span>
        </h1>
        <p className="contact-intro">
          Every extraordinary event starts with a conversation.
          Tell us what you have in mind, and let's explore how The
          Ridge can bring your vision to life.
        </p>
      </section>

      <section className="contact-layout container">
        <div className="contact-information">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>We'd love to hear from you.</h2>
          <p className="contact-info-description">
            Planning a celebration, conference, wedding or special
            gathering? Reach out and let's start planning.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-icon">
                <MapPin size={20} />
              </span>
              <div>
                <h3>Visit us</h3>
                <p>
                  Plot C22, Arugo Layout,
                  <br />
                  Onitsha Road, Owerri,
                  <br />
                  Imo State, Nigeria.
                </p>
              </div>
            </div>

         
<div className="contact-detail">
  <span className="contact-icon">
    <Mail size={20} />
  </span>
  <div>
    <h3>Email us</h3>
    <p>
      <a href="mailto:info@theridge.com.ng">
        info@theridge.com.ng
      </a>
    </p>
  </div>
</div>

<div className="contact-detail">
  <span className="contact-icon">
    <Phone size={20} />
  </span>
  <div>
    <h3>Call us</h3>
    <p>
      <a href="tel:+2348163120421">
        +234 816 3120 421
      </a>
    </p>
  </div>
</div>


            <div className="contact-detail">
              <span className="contact-icon">
                <Phone size={20} />
              </span>
              <div>
                <h3>Call us</h3>
                <p>Speak with our team about your plans.</p>
                <span className="contact-note">
                  Add your official phone number here.
                </span>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">
                <Clock size={20} />
              </span>
              <div>
                <h3>Let's plan ahead</h3>
                <p>
                  Share your preferred event date and requirements
                  so the team can understand your needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <p className="eyebrow">YOUR NEXT EVENT STARTS HERE</p>
          <h2>Send an enquiry</h2>
          <p className="contact-form-intro">
            Tell us a little about your event. Fields marked * are
            required.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Full name *</label>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email address *</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-phone">Phone number</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                autoComplete="tel"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-event-type">Type of event *</label>
              <select
                id="contact-event-type"
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Select an event type</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday celebration">
                  Birthday celebration
                </option>
                <option value="Corporate event">Corporate event</option>
                <option value="Conference or seminar">
                  Conference or seminar
                </option>
                <option value="Private celebration">
                  Private celebration
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-date">Preferred event date</label>
              <input
                id="contact-date"
                name="eventDate"
                type="date"
                value={form.eventDate}
                onChange={handleChange}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-guests">Expected guests</label>
              <select
                id="contact-guests"
                name="guests"
                value={form.guests}
                onChange={handleChange}
              >
                <option value="">Select guest count</option>
                <option value="Under 50">Under 50</option>
                <option value="50–100">50–100</option>
                <option value="101–200">101–200</option>
                <option value="201–500">201–500</option>
                <option value="Over 500">Over 500</option>
              </select>
            </div>

            <div className="contact-field contact-field-full">
              <label htmlFor="contact-message">Tell us about your event *</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your ideas, requirements, and anything else we should know..."
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="button button-primary contact-submit"
            >
              Prepare my enquiry <ArrowUpRight size={17} />
            </button>

            <p className="contact-privacy-note">
              Your enquiry will be prepared in your default email app.
              It won't be sent automatically.
            </p>
          </form>
        </div>
      </section>

<section className="contact-map-section container">
  <div className="contact-map-heading">
    <div>
      <p className="eyebrow">FIND YOUR WAY</p>
      <h2>Come visit The Ridge.</h2>
      <p>
        Find us at Plot C22, Arugo Layout, Onitsha Road,
        close to Alvana Model Secondary School, Owerri.
      </p>
    </div>

    <a
      className="button button-primary"
      href="https://www.google.com/maps/search/?api=1&query=The+Ridge+Event+Centre%2C+Plot+C22+Arugo+Layout%2C+Owerri%2C+Nigeria"
      target="_blank"
      rel="noreferrer"
    >
      Get directions <ArrowUpRight size={17} />
    </a>
  </div>

  <div className="contact-map-frame">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63543.29341504016!2d6.9363755486328!3d5.4991233999999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042597358183fbd%3A0x3d992e996ee827e8!2sThe%20Metro%20Event%20center!5e0!3m2!1sen!2sus!4v1792739945781!5m2!1sen!2sus"
      title="Map showing the event venue in Owerri"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
</section>

    </main>
  );
}
