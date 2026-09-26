import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import './Countdown.css';

const pad = (n) => String(n).padStart(2, '0');

export default function Countdown({ date, data }) {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const target = new Date(date).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setIsFinished(true);
        setTimeLeft(null);
      } else {
        setTimeLeft({
          days:    Math.floor(diff / 86_400_000),
          hours:   Math.floor((diff % 86_400_000) / 3_600_000),
          minutes: Math.floor((diff %  3_600_000) /    60_000),
          seconds: Math.floor((diff %     60_000) /      1000),
        });
      }
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [date]);

  const handleSaveDate = () => {
    const d = new Date(date);
    const fmt = (dt) =>
      dt.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const end = new Date(d.getTime() + 6 * 3_600_000);

    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//WeddingInvitation//EN',
      'BEGIN:VEVENT',
      `DTSTART:${fmt(d)}`,
      `DTEND:${fmt(end)}`,
      `SUMMARY:Pernikahan ${data?.groom?.shortName} & ${data?.bride?.shortName}`,
      'DESCRIPTION:Hadir dalam syukuran pernikahan kami.',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const a    = Object.assign(document.createElement('a'), {
      href:     url,
      download: `wedding-${data?.groom?.shortName?.toLowerCase() || 'arif'}-${data?.bride?.shortName?.toLowerCase() || 'nindy'}.ics`,
    });
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const units = [
    { label: 'Hari',  value: timeLeft?.days  },
    { label: 'Jam',   value: timeLeft?.hours  },
    { label: 'Menit', value: timeLeft?.minutes },
    { label: 'Detik', value: timeLeft?.seconds },
  ];

  return (
    <section className="section countdown-section">
      {/* Decorative floral */}
      <div className="countdown-floral" aria-hidden="true" />

      <p className="section-subtitle">Menuju Hari Bahagia</p>

      {isFinished ? (
        <p className="countdown-finished">Acara Sedang Berlangsung 🎊</p>
      ) : (
        <div className="timer">
          {units.map(({ label, value }) => (
            <div key={label} className="time-box">
              <span className="time-val">{value !== undefined ? pad(value) : '00'}</span>
              <span className="time-label">{label}</span>
            </div>
          ))}
        </div>
      )}

      <button
        id="save-date-btn"
        className="btn-primary countdown-save-btn"
        onClick={handleSaveDate}
      >
        <Calendar size={16} strokeWidth={2} />
        Save the Date
      </button>
    </section>
  );
}
