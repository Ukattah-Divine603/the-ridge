
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Music2,
  Volume2,
  Sparkles,
  Users,
} from "lucide-react";

const venueFeatures = [
  {
    icon: Sparkles,
    title: "Evening Ambience",
    description:
      "An inviting setting designed to make your celebrations feel special from arrival to the final moment.",
  },
  {
    icon: Music2,
    title: "Multipurpose Stage",
    description:
      "A dedicated stage for event programmes, presentations, performances and celebrations.",
  },
  {
    icon: Volume2,
    title: "Acoustic Comfort",
    description:
      "Sound-conscious design that supports a more comfortable experience during events.",
  },
  {
    icon: Users,
    title: "Versatile Celebrations",
    description:
      "A venue to explore for weddings, birthdays, receptions, meetings and other occasions.",
  },
];

const faqs = [
  {
    question: "What types of events can I host at The Ridge?",
    answer:
      "The Ridge is a venue to consider for celebrations, receptions, social gatherings and other event programmes. Contact our team to discuss your particular event.",
  },
  {
    question: "How do I enquire about booking the venue?",
    answer:
      "Visit our Contact page to send an enquiry. Share your event type, preferred date and requirements so the team can guide you on the next steps.",
  },
  {
    question: "Can I ask about the facilities before booking?",
    answer:
      "Yes. You can enquire about the stage, sound arrangements, cooling, seating and other facilities relevant to your event before making a booking decision.",
  },
  {
    question: "Where is The Ridge Event Centre located?",
    answer:
      "The Ridge Event Centre is in Owerri, Imo State. Please contact the team if you need directions or additional location details.",
  },
  {
    question: "How can I confirm availability and pricing?",
    answer:
      "Availability and pricing depend on your event requirements and preferred date. Contact the team directly to confirm the current details.",
  },
];

export default function About() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero-inner">
          <p className="eyebrow">GET TO KNOW US</p>

          <h1>
            A place for moments
            <br />
            <span>that matter.</span>
          </h1>

          <p className="about-hero-description">
            Every gathering deserves a setting that feels right. Discover
            The Ridge Event Centre, a space for bringing people together
            and making occasions memorable.
          </p>

          <a href="#our-approach" className="about-scroll-link">
            DISCOVER THE RIDGE <ArrowDown size={15} />
          </a>
        </div>
      </section>

      <section
        className="about-intro section-padding"
        id="our-approach"
      >
        <div className="container about-intro-grid">
          <div className="about-intro-heading">
            <p className="eyebrow">MORE THAN A VENUE</p>
            <h2>
              Your occasion.
              <br />
              <span>Our space.</span>
            </h2>
          </div>

          <div className="about-intro-copy">
            <p>
              The Ridge Event Centre provides a setting for people to
              come together, celebrate milestones and share meaningful
              experiences.
            </p>
            <p>
              From the ambience of the venue to its event facilities,
              our goal is to help you find the right setting for your
              plans. Every event is different, and we welcome enquiries
              about your particular needs.
            </p>

            <div className="about-location">
              <span className="about-location-icon">
                <MapPin size={19} />
              </span>
              <div>
                <strong>Find us in Owerri</strong>
                <p>Imo State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-features">
        <div className="container">
          <div className="about-section-heading">
            <p className="eyebrow">THE RIDGE EXPERIENCE</p>
            <h2>
              Thoughtful details.
              <br />
              <span>Memorable occasions.</span>
            </h2>
            <p>
              Explore some of the features that help shape the venue
              experience.
            </p>
          </div>

          <div className="about-features-grid">
            {venueFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article className="about-feature-card" key={feature.title}>
                  <span className="about-feature-number">
                    0{index + 1}
                  </span>

                  <span className="about-feature-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>

          <p className="about-features-note">
            Have specific requirements? Contact the team to confirm
            which facilities are available for your event.
          </p>
        </div>
      </section>

      <section className="about-faq section-padding" id="faq">
        <div className="container about-faq-grid">
          <div className="about-faq-heading">
            <p className="eyebrow">NEED TO KNOW?</p>
            <h2>
              Frequently asked
              <br />
              <span>questions.</span>
            </h2>
            <p>
              Find answers to common questions about planning your
              event at The Ridge.
            </p>

            <Link to="/contact" className="button button-primary">
              Ask us directly <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="about-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `about-faq-answer-${index}`;

              return (
                <article
                  className={`about-faq-item ${isOpen ? "is-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="about-faq-question"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span>
                      <small>
                        {String(index + 1).padStart(2, "0")}
                      </small>
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className="about-faq-chevron"
                    />
                  </button>

                  {isOpen && (
                    <div
                      className="about-faq-answer"
                      id={answerId}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-inner">
          <div>
            <p className="eyebrow">LET'S MAKE IT HAPPEN</p>
            <h2>Your next occasion starts here.</h2>
            <p>
              Tell us what you are planning and let’s discuss the
              details together.
            </p>
          </div>

          <Link to="/contact" className="button button-primary">
            Make an enquiry <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
