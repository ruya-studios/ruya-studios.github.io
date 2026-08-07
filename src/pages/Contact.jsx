import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { contactDetails, contactPageCopy } from '../data/siteContent';
import './Contact.css';

export default function Contact() {
  return (
    <div className="site-app contact-page">
      <div className="site-shell">
        <SiteHeader />
        <main className="site-main contact-page__main">
          <section className="section-block">
            <div className="section-inner contact-layout">
              <div className="contact-layout__intro">
                <p className="eyebrow contact-layout__eyebrow">{contactPageCopy.eyebrow}</p>
                <h1 className="section-title contact-layout__title">{contactPageCopy.title}</h1>
                <p className="contact-layout__subtext">{contactPageCopy.subtext}</p>
                <div className="contact-direct">
                  <p className="eyebrow">{contactPageCopy.directLabel}</p>
                  {contactDetails.map((item) => (
                    <a key={item.label} href={item.href} className="contact-direct__item">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </a>
                  ))}
                </div>
              </div>

              <form className="contact-form card">
                <div className="contact-form__header">
                  <select defaultValue="Enquiry" aria-label="Enquiry type">
                    <option>Enquiry</option>
                    <option>General</option>
                  </select>
                  <select defaultValue="General" aria-label="Project type">
                    <option>General</option>
                    <option>Project</option>
                    <option>Writing</option>
                    <option>Consulting</option>
                  </select>
                </div>

                <fieldset className="contact-form__fieldset">
                  <legend>What are you looking for?</legend>
                  <div className="contact-form__choices">
                    {contactPageCopy.options.map((option) => (
                      <label key={option} className="choice-chip">
                        <input type="checkbox" name="needs" value={option} />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="contact-form__field"><span>What's your name? *</span><input type="text" name="name" placeholder="Your name" required /></label>
                <label className="contact-form__field"><span>Company / organization (optional)</span><input type="text" name="company" placeholder="Your company or organization" /></label>
                <label className="contact-form__field"><span>What's your email address? *</span><input type="email" name="email" placeholder="Your email address" required /></label>
                <label className="contact-form__field"><span>What's your timeline?</span><input type="text" name="timeline" placeholder="Your ideal launch date" /><small>Sharing your deadline helps me understand the pace we should plan for.</small></label>
                <label className="contact-form__field"><span>What's your budget?</span><input type="text" name="budget" placeholder="Your budget range" /><small>A ballpark figure helps me prepare a more useful proposal.</small></label>
                <label className="contact-form__field"><span>Tell me about your project *</span><textarea name="details" rows="6" placeholder="Your project details" required /><small className="contact-form__char-hint">0 / 1000</small></label>
                <label className="contact-form__consent"><input type="checkbox" name="consent" required /><span>I agree with the processing of my personal data</span></label>
                <div className="contact-form__footer"><button type="submit" className="badge-button badge-button--dark contact-form__submit">SEND MESSAGE <span aria-hidden="true">↗</span></button></div>
              </form>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
