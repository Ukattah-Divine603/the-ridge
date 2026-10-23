
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
} from "lucide-react";

const photos = [
  {
    id: 1,
    title: "The Main Hall",
    category: "Interior",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
    description: "A welcoming setting for memorable occasions.",
  },
  {
    id: 2,
    title: "Made for the Spotlight",
    category: "Stage",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
    description: "A stage ready for moments that matter.",
  },
  {
    id: 3,
    title: "The Lounge",
    category: "Lounge",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    description: "A relaxed corner to connect and unwind.",
  },
  {
    id: 4,
    title: "Details in Every Corner",
    category: "Interior",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85",
    description: "A flexible space for different kinds of events.",
  },
  {
    id: 5,
    title: "Open-Air Moments",
    category: "Exterior",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85",
    description: "A little room to breathe outside the hall.",
  },
  {
    id: 6,
    title: "An Evening to Remember",
    category: "Stage",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=85",
    description: "Atmosphere, lighting and the energy of an event.",
  },
  {
    id: 7,
    title: "Room to Gather",
    category: "Exterior",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
    description: "Spaces that bring people together.",
  },
];

const categories = ["All", "Interior", "Stage", "Lounge", "Exterior"];

function GalleryCard({ photo, onOpen }) {
  return (
    <button
      type="button"
      className={`gallery-card gallery-card-${photo.size}`}
      onClick={onOpen}
      aria-label={`View ${photo.title}`}
    >
      <img src={photo.image} alt={photo.title} loading="lazy" />
      <span className="gallery-card-shade" />
      <span className="gallery-card-info">
        <span>
          <span className="gallery-card-category">{photo.category}</span>
          <span className="gallery-card-title">{photo.title}</span>
        </span>
        <span className="gallery-card-arrow">
          <ArrowUpRight size={21} />
        </span>
      </span>
    </button>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePhoto, setActivePhoto] = useState(null);
const [carouselIndex, setCarouselIndex] = useState(0);
  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

      useEffect(() => {
  setCarouselIndex(0);
}, [activeCategory]);

function moveCarousel(direction) {
  setCarouselIndex((current) => {
    return (
      (current + direction + filteredPhotos.length) %
      filteredPhotos.length
    );
  });
}

  function showNext() {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === activePhoto?.id
    );
    setActivePhoto(filteredPhotos[(currentIndex + 1) % filteredPhotos.length]);
  }

  function showPrevious() {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === activePhoto?.id
    );
    setActivePhoto(
      filteredPhotos[
        (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      ]
    );
  }

  useEffect(() => {
    if (!activePhoto) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activePhoto, filteredPhotos]);

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-image" />
        <div className="gallery-hero-overlay" />

        <div className="gallery-hero-inner">
          <p className="eyebrow">THE RIDGE / THE EXPERIENCE</p>
          <h1>
            Spaces made
            <br />
            for <span>moments.</span>
          </h1>
          <div className="gallery-hero-bottom">
            <p>
              Take a closer look at the spaces, atmosphere and details that set
              the scene for unforgettable gatherings.
            </p>
            <a href="#gallery-collection" className="gallery-scroll-link">
              Explore the gallery <ArrowDownRight size={18} />
            </a>
          </div>
        </div>
        <span className="gallery-hero-index">01 — THE COLLECTION</span>
      </section>

      <section
        className="gallery-collection section-padding"
        id="gallery-collection"
      >
        <div className="gallery-section-heading">
          <div>
            <p className="eyebrow">A CLOSER LOOK</p>
            <h2>Every angle tells a story.</h2>
          </div>
          <p className="gallery-section-note">
            Explore the different spaces and find the setting for your next
            occasion.
          </p>
        </div>

        <div className="gallery-filters" aria-label="Filter gallery">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`gallery-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
              {activeCategory === category && (
                <span className="gallery-filter-dot" />
              )}
            </button>
          ))}
          <span className="gallery-photo-count">
            {String(filteredPhotos.length).padStart(2, "0")} PHOTOS
          </span>
        </div>

<div className="gallery-carousel">
  <div
    className="gallery-carousel-stage"
    aria-label="Venue photo carousel"
  >
    {filteredPhotos.map((photo, index) => {
      const total = filteredPhotos.length;
      let offset = index - carouselIndex;

      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const visible = Math.abs(offset) <= 2;

      return (
        <div
          key={photo.id}
          className={`gallery-carousel-item ${
            offset === 0 ? "is-active" : ""
          }`}
          style={{
            "--offset": offset,
            "--distance": Math.abs(offset),
            zIndex: total - Math.abs(offset),
            opacity: visible ? (Math.abs(offset) > 1 ? 0.55 : 1) : 0,
            pointerEvents: visible ? "auto" : "none",
            visibility: visible ? "visible" : "hidden",
          }}
        >
          <GalleryCard
            photo={photo}
            onOpen={() => setActivePhoto(photo)}
          />
        </div>
      );
    })}
  </div>

  <div className="gallery-carousel-controls">
    <button
      type="button"
      className="gallery-carousel-arrow"
      onClick={() => moveCarousel(-1)}
      aria-label="Previous photos"
    >
      <ArrowLeft size={20} />
    </button>

    <span className="gallery-carousel-counter">
      {String(carouselIndex + 1).padStart(2, "0")}
      <span> / </span>
      {String(filteredPhotos.length).padStart(2, "0")}
    </span>

    <button
      type="button"
      className="gallery-carousel-arrow"
      onClick={() => moveCarousel(1)}
      aria-label="Next photos"
    >
      <ArrowRight size={20} />
    </button>
  </div>

  <p className="gallery-carousel-hint">
    Explore the collection <span>—</span> select a photo to view it
  </p>
</div>

      </section>

      <section className="gallery-cta">
        <div className="gallery-cta-inner">
          <div>
            <p className="eyebrow">YOUR MOMENT STARTS HERE</p>
            <h2>
              Have a vision?
              <br />
              <span>Let’s make room for it.</span>
            </h2>
          </div>
          <Link to="/contact" className="gallery-cta-link">
            Make an enquiry <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

      {activePhoto && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${activePhoto.title}`}
          onClick={() => setActivePhoto(null)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            aria-label="Close image viewer"
            onClick={() => setActivePhoto(null)}
          >
            <X size={25} />
          </button>

          <button
            type="button"
            className="gallery-lightbox-arrow gallery-lightbox-prev"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            <ArrowLeft size={23} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={activePhoto.image} alt={activePhoto.title} />
            <div className="gallery-lightbox-caption">
              <div>
                <p>{activePhoto.category}</p>
                <h3>{activePhoto.title}</h3>
              </div>
              <span>
                {String(
                  filteredPhotos.findIndex(
                    (photo) => photo.id === activePhoto.id
                  ) + 1
                ).padStart(2, "0")}{" "}
                / {String(filteredPhotos.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="gallery-lightbox-arrow gallery-lightbox-next"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            <ArrowRight size={23} />
          </button>
        </div>
      )}
    </main>
  );
}

