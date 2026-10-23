
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Spaces", path: "/spaces" },
  { label: "Facilities", path: "/facilities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link
          to="/"
          className="brand brand-logo"
          onClick={closeMenu}
          aria-label="The Ridge home"
        >
          <span className="brand-logo-art">
            <img
              src="/images/the-ridge-logo.png"
              alt=""
              className="brand-logo-image"
            />
          </span>
          <span className="brand-tagline">
            ...the unique event centre
          </span>
        </Link>

        <div className="desktop-theme-toggle">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="mobile-header-actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <button
            className="mobile-menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        <div
          id="primary-navigation"
          className={`nav-links${menuOpen ? " nav-links-open" : ""}`}
        >
          {links.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="nav-actions">
            <Link
              to="/contact"
              className="button button-primary nav-cta"
              onClick={closeMenu}
            >
              Make an enquiry <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
