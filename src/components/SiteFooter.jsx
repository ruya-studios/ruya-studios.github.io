import { Link } from 'react-router-dom';
import { footerContent, navigation } from '../data/siteContent';
import './SiteFooter.css';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <nav className="site-footer__nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          {navigation.map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}
        </nav>
        <div className="site-footer__expertise">
          <p className="eyebrow">Expertise</p>
          <span>Software & systems</span>
          <span>Automation & tooling</span>
          <span>Writing & teaching</span>
        </div>
        <div className="site-footer__cta">
          <p className="eyebrow">Say hello</p>
          <h2>LET'S BUILD<br />SOMETHING.</h2>
          <Link to="/contact" className="site-footer__cta-link">START A CONVERSATION <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="site-footer__bar">
        <p className="site-footer__legal">{footerContent.legal}</p>
        <p className="site-footer__tagline">{footerContent.note}</p>
        <div className="site-footer__socials">
          {footerContent.channels.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="site-footer__social-link"
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="site-footer__wordmark" aria-label="Aftab Mhd">AFTAB MHD</div>
    </footer>
  );
}
