import './PlaceholderMedia.css';

export default function PlaceholderMedia({
  title,
  subtitle,
  label,
  toneA = '#111111',
  toneB = '#555555',
  aspect = 'landscape',
  imageSrc = '',
  imageAlt = '',
  showContent = true,
}) {
  return (
    <div className={`placeholder-media placeholder-media--${aspect}${imageSrc ? ' placeholder-media--image' : ''}`} style={{ '--tone-a': toneA, '--tone-b': toneB }}>
      {imageSrc ? <img className="placeholder-media__image" src={imageSrc} alt={imageAlt || title} loading="lazy" /> : <div className="placeholder-media__grain" aria-hidden="true" />}
      {showContent ? (
        <div className="placeholder-media__content">
          <p className="placeholder-media__label">{label}</p>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      ) : null}
    </div>
  );
}
