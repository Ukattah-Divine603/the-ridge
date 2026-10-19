
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const spaces = [
  {
    id: "grand-hall",
    number: "01",
    name: "Grand Hall",
    label: "FOR GRAND OCCASIONS",
    description:
      "A setting for celebrations, formal gatherings and events where you want to make a lasting impression.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
    alt: "Elegant event hall arranged for a formal gathering",
    occasions: ["Weddings", "Celebrations", "Corporate events"],
  },
  {
    id: "intimate-hall",
    number: "02",
    name: "Intimate Hall",
    label: "FOR CLOSER CONNECTIONS",
    description:
      "A welcoming setting for more personal gatherings, meaningful conversations and special occasions.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85",
    alt: "Event space arranged for an intimate celebration",
    occasions: ["Private celebrations", "Meetings", "Small gatherings"],
  },
];

export default function Spaces() {
  return (
    <div className="spaces-page">
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

      <section
        className="container section-padding spaces-list-section"
        id="our-spaces"
      >
        <div className="spaces-section-heading">
          <div>
            <p className="eyebrow">OUR VENUES</p>
            <h2 className="section-heading-title">
              Find your kind of space.
            </h2>
          </div>
          <p>
            Explore our available venue options and get in touch to discuss
            the details of your event.
          </p>
        </div>

        <div className="venue-grid spaces-venue-grid">
          {spaces.map((space, index) => (
            <motion.article
              className="venue-card"
              id={space.id}
              key={space.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="venue-image-link spaces-venue-image">
                <img
                  className="venue-image"
                  src={space.image}
                  alt={space.alt}
                  loading="lazy"
                />
                <span className="venue-number">{space.number}</span>
                <span className="spaces-image-label">{space.label}</span>
              </div>

              <div className="venue-details">
                <span className="venue-capacity">THE RIDGE · {space.number}</span>
                <h3>{space.name}</h3>
                <p>{space.description}</p>

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
          For venue capacity, availability, layout options and specific
          facilities, please contact our team.
        </p>
      </section>

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

