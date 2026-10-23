
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  AudioLines,
  Monitor,
  Lightbulb,
  CarFront,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";


const spaces = [
  {
    id: "grand-hall",
    number: "01",
    name: "Grand Hall",
    label: "FOR GRAND OCCASIONS",
    description:
      "A spacious setting for weddings, major celebrations, conferences and memorable gatherings. Bring your guests together in a venue designed to make every occasion feel special.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",
    alt: "Grand event hall arranged for an elegant celebration",
    occasions: ["Weddings", "Conferences", "Celebrations"],
    layout: "grand",
  },
  {
    id: "intimate-hall",
    number: "02",
    name: "Intimate Hall",
    label: "FOR CLOSER CONNECTIONS",
    description:
      "A welcoming space for private celebrations, smaller gatherings and focused meetings. Create a more personal atmosphere for the people and moments that matter.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85",
    alt: "Warm event space prepared for an intimate gathering",
    occasions: ["Private events", "Meetings", "Small gatherings"],
    layout: "intimate",
  },
];




const facilities = [
  {
    icon: AudioLines,
    title: "Soundproofing",
    description:
      "Explore the hall's acoustic treatment and discuss the sound requirements for your event.",
  },
  {
    icon: Monitor,
    title: "Screens & displays",
    description:
      "Visual presentation options for ceremonies, conferences and important stage moments.",
  },
  {
    icon: Lightbulb,
    title: "Stage & lighting",
    description:
      "Plan the lighting and stage presentation to suit your occasion.",
  },
  {
    icon: CarFront,
    title: "Guest convenience",
    description:
      "Ask our team about parking, access and other practical arrangements for your guests.",
  },
];



export default function Spaces() {
  return (
    <div className="spaces-page">
      {/* Hero: preserve the existing page layout and spacing */}
      <section className="spaces-page-hero">
        <div className="container spaces-page-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow">FIND YOUR SPACE</p>
            <h1>
              Every occasion
              <br />
              deserves <span>the right setting.</span>
            </h1>
            <p className="spaces-hero-description">
              From grand celebrations to more personal gatherings, find a
              setting for bringing people together at The Ridge.
            </p>
            <a href="#our-spaces" className="button button-primary">
              Explore our spaces <ArrowRight size={17} />
            </a>
          </motion.div>

          <div className="spaces-hero-note">
            <span className="spaces-hero-note-icon">
              <CalendarDays size={19} />
            </span>
            <div>
              <strong>Your occasion. Your vision.</strong>
              <p>Let's find a space that works for your plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue introduction */}
      <section
        className="container section-padding spaces-list-section"
        id="our-spaces"
      >
        <div className="spaces-section-heading">
          <div>
            <p className="eyebrow">OUR VENUES</p>
            <h2 className="section-heading-title">
              Space for the moments
              <br />
              that matter.
            </h2>
          </div>
          <p>
            Every event has its own character. Explore our venue options and
            talk to our team about the setting, layout and arrangements that
            best suit your plans.
          </p>
        </div>

        {/* Individual venue sections */}
        <div className="spaces-showcase">
          {spaces.map((space, index) => (
            <motion.article
              className={`spaces-showcase-item spaces-showcase-${space.layout}`}
              id={space.id}
              key={space.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="spaces-showcase-image">
                <img src={space.image} alt={space.alt} loading="lazy" />
                <span className="spaces-showcase-number">
                  {space.number} / 02
                </span>
                <span className="spaces-showcase-image-label">
                  {space.label}
                </span>
              </div>

              <div className="spaces-showcase-content">
                <p className="eyebrow">THE RIDGE · {space.number}</p>
                <h3>{space.name}</h3>
                <p className="spaces-showcase-description">
                  {space.description}
                </p>

                <div className="spaces-occasion-list">
                  {space.occasions.map((occasion) => (
                    <span key={occasion}>{occasion}</span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="spaces-enquiry-link"
                  state={{ venue: space.name }}
                >
                  Enquire about this space <ArrowUpRight size={17} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="small-note">
          Need specific capacity, availability or seating arrangements? Contact
          our team to discuss the details for your date.
        </p>
      </section>

      {/* Facilities preview */}
      <section className="spaces-facilities-section">
        <div className="container spaces-facilities-inner">
          <div className="spaces-facilities-heading">
            <div>
              <p className="eyebrow">MORE THAN A VENUE</p>
              <h2>
                The details that
                <br />
                bring it all together.
              </h2>
            </div>
            <p>
              From the atmosphere in the room to the practical details behind
              your event, explore the facilities and discuss your requirements
              with our team.
            </p>
          </div>

          <div className="spaces-facilities-grid">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <motion.article
                  className="spaces-facility-card"
                  key={facility.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <span className="spaces-facility-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <span className="spaces-facility-number">
                    0{index + 1}
                  </span>
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </motion.article>
              );
            })}
          </div>

          <Link to="/facilities" className="spaces-all-facilities-link">
            Explore facilities <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* Closing enquiry section */}
      <section className="spaces-bottom-cta">
        <div className="container spaces-bottom-cta-inner">
          <div>
            <p className="eyebrow">LET'S PLAN SOMETHING MEMORABLE</p>
            <h2>Your event starts with a conversation.</h2>
            <p>
              Tell us what you have in mind, and let's discuss the right
              setting for your occasion.
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

