import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './Cashless.css';

export default function Cashless({ accounts }) {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(idx);
      setTimeout(() => setCopied(null), 2000);
    }).catch(() => {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(idx);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section className="cashless-section">
      <div className="brown-card cashless-card-block">
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)', letterSpacing: '2px' }}>
          WEDDING GIFT
        </p>
        <h2 className="cashless-title">Amplop Digital</h2>
        <p className="cashless-desc">
          Doa dan restu Anda adalah hadiah terindah. Namun jika ingin memberikan hadiah, berikut rekening kami.
        </p>
      </div>

      <div className="cashless-accounts">
        {accounts.map((acc, idx) => (
          <div key={idx} className="account-card" id={`account-card-${idx}`}>
            <div className="account-card__top">
              <div className="account-bank-logo" aria-hidden="true">
                <span>{acc.bank}</span>
              </div>
              <span className="account-dots">•••</span>
            </div>
            <div className="account-card__body">
              <div>
                <p className="account-name">{acc.name}</p>
                <p className="account-number">{acc.account}</p>
              </div>
              <button
                className={`btn-copy ${copied === idx ? 'btn-copy--copied' : ''}`}
                onClick={() => handleCopy(acc.account, idx)}
                id={`copy-btn-${idx}`}
                aria-label={`Salin nomor rekening ${acc.bank}`}
              >
                {copied === idx ? (
                  <><Check size={14} strokeWidth={2.5} /> Tersalin</>
                ) : (
                  <><Copy size={14} strokeWidth={2} /> Salin</>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
