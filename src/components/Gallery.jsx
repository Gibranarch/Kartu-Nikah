import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

export default function Gallery({ images = [] }) {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setLightboxIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = lightboxIdx !== null ? 'hidden' : 'auto';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxIdx]);

  if (!images.length) return null;

  return (
    <section className="section gallery-section">
      <h2 className="section-title">Galeri</h2>

      <div className="gallery-grid">
        {images.map((src, idx) => (
          <button
            key={idx}
            className="gallery-item"
            onClick={() => openLightbox(idx)}
            aria-label={`Buka foto ${idx + 1}`}
            id={`gallery-item-${idx}`}
          >
            <img src={src} alt={`Foto pernikahan ${idx + 1}`} loading="lazy" />
            <div className="gallery-item__overlay" aria-hidden="true" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Tutup">
            <X size={22} strokeWidth={2} />
          </button>

          <button className="lightbox-nav lightbox-nav--prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Sebelumnya">
            <ChevronLeft size={26} />
          </button>

          <img
            src={images[lightboxIdx]}
            alt={`Foto ${lightboxIdx + 1}`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="lightbox-nav lightbox-nav--next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Berikutnya">
            <ChevronRight size={26} />
          </button>

          <p className="lightbox-counter">{lightboxIdx + 1} / {images.length}</p>
        </div>
      )}
    </section>
  );
}
