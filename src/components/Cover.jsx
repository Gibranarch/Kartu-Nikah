import { MailOpen } from 'lucide-react';
import './Cover.css';

export default function Cover({ onOpen, data }) {
  return (
    <div className="cover-wrapper">
      {/* Full-bleed portrait photo */}
      <div
        className="cover-photo"
        style={{ backgroundImage: `url('${data.coverImage}')` }}
      />
      {/* Gradient overlay */}
      <div className="cover-gradient" />

      {/* Top badge */}
      <div className="cover-top animate-fade-in">
        <p className="cover-badge">Undangan Pernikahan</p>
      </div>

      {/* Bottom content */}
      <div className="cover-bottom animate-fade-in delay-300">
        {/* Couple names */}
        <h1 className="cover-names">
          {data.groom.shortName} &amp; {data.bride.shortName}
        </h1>

        {/* Guest address */}
        <div className="cover-guest-block">
          <p className="cover-guest-label">Kepada Yth.</p>
          <p className="cover-guest-salutation">Bapak/Ibu/Saudara/Saudari</p>
          <p className="cover-guest-name">{data.guest}</p>
        </div>

        {/* CTA button */}
        <button
          id="buka-undangan-btn"
          className="btn-buka"
          onClick={onOpen}
          aria-label="Buka undangan pernikahan"
        >
          <MailOpen size={17} strokeWidth={1.8} />
          <span>Buka Undangan</span>
        </button>
      </div>
    </div>
  );
}
