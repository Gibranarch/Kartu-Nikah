import './Footer.css';

export default function Footer({ data }) {
  return (
    <footer className="footer-section">
      {/* Thank you block – cream */}
      <div className="footer-thankyou">
        {/* Floral decorations */}
        <div className="footer-floral footer-floral--left" aria-hidden="true">✿</div>
        <div className="footer-floral footer-floral--right" aria-hidden="true">✿</div>

        <p className="footer-thank-label">Thank You</p>
        <h2 className="footer-names">
          {data.groom.shortName} &amp; {data.bride.shortName}
        </h2>
      </div>

      {/* Bottom strip */}
      <div className="footer-strip">
        <p className="footer-strip__text">
          Dibuat dengan ❤ untuk momen istimewa kami
        </p>
      </div>
    </footer>
  );
}
