import { MapPin } from 'lucide-react';
import './EventSection.css';

// Rings SVG icon
function RingsIcon() {
  return (
    <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg"
      width="36" height="24" aria-hidden="true">
      <circle cx="14" cy="16" r="11" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="34" cy="16" r="11" stroke="white" strokeWidth="2.5" fill="none"/>
    </svg>
  );
}

export default function EventSection({ events }) {
  return (
    <section className="event-section">
      <div className="brown-card event-card-block">
        {events.map((evt, idx) => (
          <div key={idx} className="event-item">
            {idx > 0 && <div className="event-separator" aria-hidden="true" />}

            <div className="event-rings"><RingsIcon /></div>
            <h3 className="event-title">{evt.title}</h3>

            <div className="event-details">
              <p className="event-date">{evt.date}</p>
              <p className="event-time">{evt.time}</p>
              <p className="event-venue">{evt.venue}</p>
            </div>

            <a
              href={evt.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="event-map-btn"
              id={`map-btn-${idx}`}
            >
              <MapPin size={14} strokeWidth={2} />
              Petunjuk Arah
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
