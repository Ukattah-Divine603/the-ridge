
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link
            to="/"
            className="brand brand-logo"
            aria-label="The Ridge home"
          >
            <span className="brand-logo-art">
              <img
                src="/images/the-ridge-logo.png"
                alt="The Ridge"
                className="brand-logo-image"
              />
            </span>

            <span className="brand-tagline">
              ...the unique event centre
            </span>
          </Link>

          <p>
            A remarkable setting for meaningful gatherings, unforgettable
            celebrations and exceptional events.
          </p>

          <Link to="/contact" className="footer-link">
            Let’s plan your event <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/spaces">Our Spaces</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column footer-contact">
          <h4>Get in touch</h4>

          <p>
            <MapPin size={19} />
            <span>
              Plot C22, Arugo Layout, Onitsha Road, Owerri, Imo State
            </span>
          </p>

          <p>
            <Phone size={19} />
            <a href="tel:+2348163120421">+234 816 312 0421</a>
          </p>

          <p>
            <Mail size={19} />
            <Link to="/contact">Send an enquiry</Link>
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} The Ridge Event Centre.
        </span>

        <span>Designed for extraordinary experiences.</span>
      </div>
    </footer>
  );
}
