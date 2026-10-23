
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  AudioLines,
  Monitor,
  Music2,
  Snowflake,
  Sofa,
  Trees,
  Volume2,
} from "lucide-react";

const facilities = [
  {
    number: "01",
    title: "A Multipurpose Stage",
    category: "EVENTS & ENTERTAINMENT",
    description:
      "A dedicated stage for event programmes, presentations, performances and celebrations. Enquire about the setup available for your occasion.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85",
    icon: Music2,
    className: "facility-featured",
  },
  {
    number: "02",
    title: "Acoustic Comfort",
    category: "SOUND & AMBIENCE",
    description:
      "Sound-conscious design helps create a more comfortable environment for speeches, music and shared moments.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
    icon: Volume2,
  },
  {
    number: "03",
    title: "Wall Screens",
    category: "VISUAL PRESENTATION",
    description:
      "Ask about the available screen setup for presentations, event visuals and other display needs.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
    icon: Monitor,
  },
  {
    number: "04",
    title: "Private Bar Lounge",
    category: "LOUNGE & RELAXATION",
    description:
      "A separate lounge area to complement the main event space. Contact the team to discuss access and arrangements.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85",
    icon: Sofa,
  },
  {
    number: "05",
    title: "Veranda & Sit-Out",
    category: "OPEN-AIR SPACE",
    description:
      "An outdoor area offering another setting to enjoy during your visit or event.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    icon: Trees,
  },
  {
    number: "06",
    title: "Cooling Support",
    category: "GUEST COMFORT",
    description:
      "Ask our team about the standby cooling van and the arrangements available for your event date.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
    icon: Snowflake,
  },
];

function FacilityCard({ facility }) {
  const Icon = facility.icon;

  return (
    <article className={`facility-card ${facility.className || ""}`}>
      <div className="facility-card-image">
        <img
          src={facility.image}
          alt={facility.title}
          loading="lazy"
        />
        <span className="facility-card-number">{facility.number}</span>
        <span className="facility-card-category">{facility.category}</span>
      </div>

      <div className="facility-card-content">
        <div className="facility-card-title-row">
          <h2>{facility.title}</h2>
          <span className="facility-card-icon">
            <Icon size={20} strokeWidth={1.7} />
          </span>
        </div>

        <p>{facility.description}</p>
      </div>
    </article>
  );
}

export default function Facilities() {
  return (
    <div className="facilities-page">
      <section className="facilities-hero">
        <div className="container facilities-hero-inner">
          <p className="eyebrow">THE DETAILS MATTER</p>

          <h1>
            Every detail.
            <br />
            <span>Considered.</span>
          </h1>

          <p className="facilities-hero-description">
            Explore the spaces, features and event support that help
            make The Ridge a place to bring people together.
          </p>

          <a href="#facilities-showcase" className="facilities-scroll-link">
            EXPLORE OUR FACILITIES <ArrowDown size={15} />
          </a>
        </div>
      </section>

      <section
        className="facilities-showcase section-padding"
        id="facilities-showcase"
      >
        <div className="container">
          <div className="facilities-page-heading">
            <div>
              <p className="eyebrow">MADE FOR YOUR OCCASION</p>
              <h2>
                The features behind
                <br />
                <span>the experience.</span>
              </h2>
            </div>

            <p>
              From the main stage to spaces for relaxing, explore the
              facilities and ask our team how they can work for your event.
            </p>
          </div>

          <div className="facilities-card-grid">
            {facilities.map((facility) => (
              <FacilityCard
                key={facility.number}
                facility={facility}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="facilities-outdoor-section">
        <div className="container facilities-outdoor-inner">
          <div className="facilities-outdoor-copy">
            <p className="eyebrow">ROOM TO GATHER</p>
            <h2>
              More than
              <br />
              the main hall.
            </h2>
            <p>
              The Ridge also has an open area behind the hall. Get in
              touch to discuss how the available spaces could suit your
              event plans.
            </p>

            <Link to="/contact" className="button button-primary">
              Discuss your event <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="facilities-outdoor-image">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85"
              alt="Event venue arranged for a gathering"
              loading="lazy"
            />
            <span>SPACE FOR YOUR PLANS</span>
          </div>
        </div>
      </section>

      <section className="facilities-bottom-cta">
        <div className="container facilities-bottom-cta-inner">
          <div>
            <p className="eyebrow">LET'S TALK DETAILS</p>
            <h2>Have a particular setup in mind?</h2>
            <p>
              Tell us about your occasion and the facilities you need.
              Our team can help clarify availability and arrangements.
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
