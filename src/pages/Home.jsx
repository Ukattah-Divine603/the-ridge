
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Monitor,
  Snowflake,
  CarFront,
  Zap,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";




const slides = [
  {
    eyebrow: "GREAT FOR EVENING LOOK & AMBIENCE",
    title: "An entrance worth remembering.",
    description:
      "Experience an inviting atmosphere where the setting makes a lasting first impression.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=85",
    position: "center 55%",
  },
  {
    eyebrow: "MULTIPURPOSE FULLY EQUIPPED STAGE",
    title: "Every moment deserves the spotlight.",
    description:
      "Bring your event to life with a stage designed for presentations, performances and memorable moments.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=2200&q=85",
    position: "center 55%",
  },
  {
    eyebrow: "SOUNDPROOFING",
    title: "Sound that stays in its place.",
    description:
      "Discover acoustic wall treatment designed to support a more controlled hall environment.",

image:
  "https://images.openai.com/static-rsc-4/-5IMavZAH2Z6k3S9DLEqTOE3eUDqqMVt77HGgGexqNtnzp7BtloMMzrd5EspUaG-RGPjzeR4zC3-hch9mo4OUVkspTe7m2M4R-Rn5krUcWFm8hroPEZpPUe2h4Lz3gVbx_E3_x78wNONcfpNNteXcq-O60_cmSmlFJ5Lu1_cdPc?purpose=inline",

    position: "center 55%",
  },
  {
    eyebrow: "LUXURY OR NOTHING",
    title: "Make room for a grand experience.",
    description:
      "A welcoming interior and considered seating create the setting for occasions worth celebrating.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2200&q=85",
    position: "center 55%",
  },
];





const facilities = [
  {
    icon: Volume2,
    title: "Soundproofing",
    text: "A sound-conscious hall environment for a more focused event experience.",
  },
  {
    icon: Monitor,
    title: "Screens & displays",
    text: "Visual presentation options for ceremonies, events and conferences.",
  },
  {
    icon: Snowflake,
    title: "Guest comfort",
    text: "Comfort and convenience for your guests throughout the event.",
  },
  {
    icon: CarFront,
    title: "Parking & access",
    text: "Ask our team about guest parking and arrival arrangements.",
  },
  {
    icon: Zap,
    title: "Power arrangements",
    text: "Discuss power requirements and backup arrangements for your event.",
  },
  {
    icon: Sparkles,
    title: "Versatile event spaces",
    text: "Venue options for celebrations, private gatherings and professional events.",
  },
];


const supportServices = [
  {
    number: "01",
    title: "Event planning and coordination",
    description:
      "Our event planning team will guide you through every step of the process.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85",
    alt: "Event team coordinating an event",
  },
  {
    number: "02",
    title: "Professional venue management",
    description:
      "Our team works to ensure the smooth operation of your event.",
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85",
    alt: "Professionally arranged event venue",
  },
  {
    number: "03",
    title: "Technical support",
    description:
      "On-site technical support for power, audio-visual equipment and other event technology.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=85",
    alt: "Audio-visual equipment at an event",
  },
  {
    number: "04",
    title: "Multichannel customer support",
    description:
      "Reach out through our available communication channels or visit us in person.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    alt: "Team members working together to support customers",
  },
];

const eventStats = [
  { target: 19, suffix: "", label: "Different types of events" },
  { target: 78, suffix: "k+", label: "Guests welcomed" },
  { target: 97, suffix: "%", label: "Customer satisfaction" },
];

function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setCount(target);
      return;
    }

    let frameId;
    const duration = 1600;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [started, target]);

  return (
    <span ref={counterRef} className="home-stat-number">
      {count.toLocaleString("en-GB")}{suffix}
    </span>
  );
}


export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [paused]);

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <>
      <section
        className="hero-carousel"
        aria-label="Discover The Ridge"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setPaused(false);
          }
        }}
      >
        <div className="hero-backgrounds">
          <AnimatePresence mode="sync">
            <motion.div
              key={activeSlide}
              className="hero-background"
              style={{
                backgroundImage: `url("${slides[activeSlide].image}")`,
                backgroundPosition: slides[activeSlide].position,
              }}
              initial={{ opacity: 0, scale: 1.035 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1 }, scale: { duration: 7 } }}
            />
          </AnimatePresence>
        </div>

        <div className="hero-shade" />

        <div className="container hero-inner">
          <motion.div
            key={`copy-${activeSlide}`}
            className="hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <p className="hero-eyebrow">
              <span />
              {slides[activeSlide].eyebrow}
            </p>

            <h1>{slides[activeSlide].title}</h1>

            <p className="hero-description">
              {slides[activeSlide].description}
            </p>

            <div className="hero-actions">
              <Link to="/spaces" className="button button-primary">
                Explore our spaces <ArrowUpRight size={17} />
              </Link>

              <Link to="/contact" className="hero-secondary-link">
                Plan your event <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>

          <div className="hero-bottom">
            <a className="hero-scroll" href="#introduction">
              <span className="scroll-icon"><ArrowDown size={15} /></span>
              Scroll to discover
            </a>

            <div className="hero-controls">
              <span className="hero-slide-count">
                {String(activeSlide + 1).padStart(2, "0")}
                <span> / </span>
                {String(slides.length).padStart(2, "0")}
              </span>

              <div className="hero-dots" aria-label="Choose a slide">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={`hero-dot ${index === activeSlide ? "active" : ""}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                    aria-pressed={index === activeSlide}
                  />
                ))}
              </div>

              <button
                className="hero-arrow"
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                className="hero-arrow"
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section section-padding" id="introduction">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">WELCOME TO THE RIDGE</p>
            <h2 className="section-heading">
              More than a venue.
              <br />
              <span>An experience.</span>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              The right setting can change the way an event feels. The Ridge
              brings people together in a space for celebrating, connecting,
              sharing ideas and making memories.
            </p>

            <Link to="/spaces" className="text-link">
              Discover our spaces <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="spaces-preview section-padding">
        <div className="container">
          <div className="section-topline">
            <div>
              <p className="eyebrow">FIND YOUR SETTING</p>
              <h2 className="section-heading">Room for your kind of event.</h2>
            </div>

            <Link to="/spaces" className="text-link">
              View all spaces <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="space-cards">
            <Link to="/spaces#grand-hall" className="space-card">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85"
                alt="Elegant event hall arranged for a formal gathering"
                loading="lazy"
              />
              <div className="space-card-overlay">
                <span>01 / GRAND HALL</span>
                <div>
                  <h3>Grand occasions.</h3>
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </Link>

            <Link to="/spaces#intimate-hall" className="space-card">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85"
                alt="Intimate event space set for a special occasion"
                loading="lazy"
              />
              <div className="space-card-overlay">
                <span>02 / INTIMATE HALL</span>
                <div>
                  <h3>Closer connections.</h3>
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="facilities-preview section-padding">
        <div className="container">
          <div className="facilities-heading">
            <p className="eyebrow">THOUGHT THROUGH</p>
            <h2 className="section-heading">
              The details make
              <br />
              the difference.
            </h2>
            <p>
              A great event takes more than a beautiful room. Explore the
              practical features that help bring your plans together.
            </p>
            <Link to="/facilities" className="button button-primary">
              Explore facilities <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="facility-grid">
            {facilities.map(({ icon: Icon, title, text }, index) => (
              <article className="facility-item" key={title}>
                <div className="facility-icon"><Icon size={22} /></div>
                <span className="facility-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="support-services section-padding">
        <div className="container">
          <div className="support-heading">
            <div>
              <p className="eyebrow">HERE FOR YOUR EVENT</p>
              <h2 className="section-heading">
                Our Customer Support
                <br />
                <span>Services.</span>
              </h2>
            </div>
            <p>
              The Ridge Events Center offers a range of services to help
              your event run smoothly, from planning and coordination to
              technical assistance and customer support.
            </p>
          </div>

          <div className="support-service-grid">
            {supportServices.map((service) => (
              <article className="support-service-card" key={service.number}>
                <div className="support-service-image">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                  />
                  <span>{service.number}</span>
                </div>

                <div className="support-service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="support-contact-link">
            <p>Have a question about your event?</p>
            <Link to="/contact" className="text-link">
              Talk to our team <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-stats-section">
        <div className="container">
          <div className="home-stats-heading">
            <p className="eyebrow">THE RIDGE EXPERIENCE</p>
            <h2>
              Every gathering has
              <br />
              a story to tell.
            </h2>
            <p>
              Creating memorable experiences, bringing people together
              and making every occasion count.
            </p>
          </div>

          <div className="home-stats-grid">
            {eventStats.map((stat) => (
              <article className="home-stat" key={stat.label}>
                <CountUp target={stat.target} suffix={stat.suffix} />
                <h3>{stat.label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="achievements-section section-padding">
        <div className="container achievements-grid">
          <div className="achievements-copy">
            <p className="eyebrow">OUR JOURNEY SINCE 2017</p>
            <h2 className="section-heading">
              Achievements and
              <br />
              <span>Recognitions.</span>
            </h2>
            <p>
              Since opening in 2017, The Ridge Events Center has hosted
              numerous high-profile events, including conferences,
              weddings and other important gatherings.
            </p>
            <p>
              Since 2017, it has also been the base of the popular
              House on the Rock Church in Owerri.
            </p>
            <Link to="/contact" className="text-link">
              Plan your next event <ArrowRight size={17} />
            </Link>
          </div>

          <div className="achievements-image">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85"
              alt="Guests gathered at a professionally organised event"
              loading="lazy"
            />
            <div className="achievements-year">
              <span>ESTABLISHED</span>
              <strong>2017</strong>
            </div>
          </div>
        </div>
      </section>


      <section className="home-cta">
        <div className="container home-cta-inner">
          <div>
            <p className="eyebrow">YOUR EVENT STARTS HERE</p>
            <h2>Have something special in mind?</h2>
            <p>Tell us what you're planning. Let's find the right setting.</p>
          </div>

          <Link to="/contact" className="button button-primary">
            Make an enquiry <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
