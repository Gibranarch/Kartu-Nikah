import './Quote.css';

export default function Quote() {
  return (
    <section className="quote-section">
      <div className="brown-card quote-card">
        {/* Ring icon */}
        <div className="quote-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <circle cx="16" cy="24" r="10" stroke="white" strokeWidth="2.5" fill="none"/>
            <circle cx="32" cy="24" r="10" stroke="white" strokeWidth="2.5" fill="none"/>
            <circle cx="16" cy="24" r="10" stroke="white" strokeWidth="2.5" fill="none"/>
          </svg>
        </div>

        <blockquote className="quote-text">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
          menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
          agar kamu cenderung dan merasa tenteram kepadanya,
          dan Dia menjadikan di antaramu rasa kasih dan sayang."
        </blockquote>

        <p className="quote-source">(Ar-Rum: 21)</p>
      </div>
    </section>
  );
}
