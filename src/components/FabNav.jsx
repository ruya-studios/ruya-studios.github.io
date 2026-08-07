import { Link } from 'react-router-dom';
import './FabNav.css';

export default function FabNav({ menuOpen, onToggleMenu, logoVisible }) {
  return (
    <div className={`fab-nav${menuOpen ? ' fab-nav--open' : ''}`} aria-hidden="false">
      <button className="fab-nav__toggle" type="button" onClick={onToggleMenu} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
        <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
      </button>

      <div className={`fab-nav__logo${logoVisible ? ' is-visible' : ''}`}>
        <Link to="/" className="fab-nav__logo-link" aria-label="Aftab Muhammad home">
          AFTAB MHD
        </Link>
      </div>
    </div>
  );
}