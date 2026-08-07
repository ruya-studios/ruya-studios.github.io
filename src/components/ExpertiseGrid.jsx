export default function ExpertiseGrid({ services, tabs, isVisible, reducedMotion }) {
  return (
    <div className={`home-card-grid home-card-grid--expertise${isVisible || reducedMotion ? ' is-visible' : ''}`}>
      {services.map((item, index) => (
        <article
          key={item.title}
          className={`info-card expertise-preview${index === 0 ? ' expertise-preview--dark' : ''}${isVisible || reducedMotion ? ' is-visible' : ''}`}
          style={{ '--delay': `${Math.abs(index - 2) * 100}ms` }}
        >
          <div className="expertise-preview__top">
            <span className="expertise-preview__arrow" aria-hidden="true">→</span>
            <span className="expertise-preview__icon">{tabs[index % tabs.length].icon}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.skills}</p>
        </article>
      ))}
    </div>
  );
}