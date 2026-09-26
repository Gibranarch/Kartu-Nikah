import './BrideSection.css';

export default function BrideSection({ data }) {
  return (
    <section className="section bride-section">
      {/* Section heading */}
      <h2 className="section-title">Mempelai</h2>

      {/* Groom card – photo left, text right */}
      <div className="profile-card profile-card--groom animate-fade-in-up">
        <div className="profile-photo-wrap">
          <img
            src={data.groom.photo}
            alt={`Foto ${data.groom.name}`}
            className="profile-photo"
            loading="lazy"
          />
          {/* Decorative corner */}
          <div className="profile-corner" aria-hidden="true" />
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{data.groom.name}</h3>
          <p className="profile-relation">Putra dari</p>
          <p className="profile-parents-detail">
            {data.groom.parents.replace('Putra dari ', '').replace(' & ', '\n& ')}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="bride-divider" aria-hidden="true">
        <div className="bride-divider__line" />
        <span className="bride-divider__icon">♡</span>
        <div className="bride-divider__line" />
      </div>

      {/* Bride card – photo right, text left */}
      <div className="profile-card profile-card--bride animate-fade-in-up delay-200">
        <div className="profile-photo-wrap">
          <img
            src={data.bride.photo}
            alt={`Foto ${data.bride.name}`}
            className="profile-photo"
            loading="lazy"
          />
          <div className="profile-corner" aria-hidden="true" />
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{data.bride.name}</h3>
          <p className="profile-relation">Putri dari</p>
          <p className="profile-parents-detail">
            {data.bride.parents.replace('Putri dari ', '').replace(' & ', '\n& ')}
          </p>
        </div>
      </div>
    </section>
  );
}
