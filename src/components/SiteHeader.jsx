import { useMemo, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import FabNav from './FabNav';
import useInView from '../hooks/useInView';
import { navigation } from '../data/siteContent';
import './SiteHeader.css';

export default function SiteHeader({ variant = 'standard', brandSuffix = '' }) {
  const [open, setOpen] = useState(false);
  const [contactMode, setContactMode] = useState('enquiry');
  const location = useLocation();
  const [brandRef, brandInView] = useInView({ threshold: 0, once: false });

  const routeMode = useMemo(() => {
    if (variant === 'detail' || location.pathname.startsWith('/portfolio/')) return 'detail';
    if (location.pathname === '/contact') return 'contact';
    if (location.pathname === '/about') return 'about';
    if (location.pathname === '/portfolio') return 'portfolio';
    return 'home';
  }, [location.pathname, variant]);

  const rightAction = useMemo(() => {
    switch (routeMode) {
      case 'contact':
        return { label: 'VIEW WORK', href: '/portfolio' };
      case 'about':
        return { label: 'GET STARTED', href: '/contact' };
      case 'detail':
        return { label: 'GET STARTED', href: '/contact' };
      case 'portfolio':
        return { label: 'GET STARTED', href: '/contact' };
      default:
        return { label: 'GET STARTED', href: '/contact' };
    }
  }, [routeMode]);

  const leftSlot = useMemo(() => {
    if (routeMode === 'detail') {
      return (
        <Link to="/portfolio" className="badge-button site-header__back">
          ← All work
        </Link>
      );
    }

    if (routeMode === 'contact') {
      return (
        <div className="site-header__mode-toggle" role="group" aria-label="Contact mode">
          <button
            type="button"
            className={`site-header__mode-button${contactMode === 'enquiry' ? ' is-active' : ''}`}
            onClick={() => setContactMode('enquiry')}
            aria-pressed={contactMode === 'enquiry'}
          >
            Enquiry
          </button>
          <button
            type="button"
            className={`site-header__mode-button${contactMode === 'general' ? ' is-active' : ''}`}
            onClick={() => setContactMode('general')}
            aria-pressed={contactMode === 'general'}
          >
            General
          </button>
        </div>
      );
    }

    return <span className="site-header__context-empty" aria-hidden="true" />;
  }, [contactMode, routeMode]);

  return (
    <header className={`site-header site-header--${variant}`}>
      <FabNav menuOpen={open} onToggleMenu={() => setOpen((value) => !value)} logoVisible={!brandInView} />
      <div className="site-header__inner">
        <button className="site-header__menu" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="site-drawer">
          <span className="hidden-visually">Toggle navigation</span>
          <span aria-hidden="true">☰</span>
        </button>

        <Link to="/" className="site-header__brand" aria-label="Aftab Muhammad home" ref={brandRef}>
          <span className="site-header__brand-main">AFTAB MHD</span>
          {brandSuffix ? <span className="site-header__brand-suffix">{brandSuffix}</span> : null}
        </Link>

        <div className="site-header__actions">
          <SwitchTransition mode="out-in">
            <CSSTransition key={routeMode} timeout={240} classNames="header-context">
              <div className="site-header__context-slot">{leftSlot}</div>
            </CSSTransition>
          </SwitchTransition>

          <SwitchTransition mode="out-in">
            <CSSTransition key={rightAction.href} timeout={240} classNames="header-context">
              <Link to={rightAction.href} className="badge-button site-header__cta">
                {rightAction.label}
                <span aria-hidden="true" className="site-header__cta-icon">🚀</span>
              </Link>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      <div className={`site-drawer${open ? ' site-drawer--open' : ''}`} id="site-drawer" aria-hidden={!open}>
        <div className="site-drawer__inner">
          <nav className="site-drawer__nav" aria-label="Primary">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `menu-link${isActive ? ' menu-link--active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-drawer__note">
            <p className="eyebrow">Navigation</p>
            <p>
              The hamburger menu keeps the Wondermake-style header light while the actual routes stay accessible.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
