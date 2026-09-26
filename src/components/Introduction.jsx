import './Introduction.css';

export default function Introduction({ data }) {
  return (
    <section className="section intro-section">
      {/* Decorative floral top */}
      <div className="intro-floral intro-floral--top" aria-hidden="true">❧</div>

      <div className="intro-content animate-fade-in-up">
        <p className="intro-label">Bismillahirrahmanirrahim</p>
        <p className="intro-subtitle">Assalamualaikum Warahmatullahi Wabarakatuh</p>

        <div className="intro-names-block">
          <h1 className="intro-names">
            {data.groom.shortName}
            <span className="intro-amp"> &amp; </span>
            {data.bride.shortName}
          </h1>
        </div>

        <div className="ornament-divider" aria-hidden="true">
          <span>✦</span>
        </div>

        <p className="intro-date">{data.dateFormatted}</p>
        <p className="intro-tagline">
          Bersama keluarga kami mengundang Anda untuk hadir<br />
          dalam syukuran pernikahan putra-putri kami.
        </p>
      </div>

      <div className="intro-floral intro-floral--bottom" aria-hidden="true">❧</div>
    </section>
  );
}
