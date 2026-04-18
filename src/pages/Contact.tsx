import { MessageCircle, Mail, Shield, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

export const Contact = () => (
    <main className="v-section" style={{ paddingTop: '10rem' }}>
        <SEO
            title="Contact an Agriculture Consultancy in India: What to Ask First"
            description="Before you contact an agriculture consultancy, know what questions to ask. Here is how to find the right fit for your farm size, crop type, and budget in India."
        />
        <div className="container">
            <AnimateOnScroll>
                <div className="contact-layout">
                    <div>
                        <span className="journey-badge">Direct Access</span>
                        <h1 className="service-hero-title">Agriculture Consultancy Contact: <span className="highlight">How to Reach the Right Expert for Your Farm</span></h1>
                        <p className="journey-desc">Our lead consultants are available for short-notice strategy sessions. We help you cut through the noise and focus on what builds profit.</p>
                        <div className="footer-info" style={{ marginTop: '4rem' }}>
                            <div className="footer-contact"><MessageCircle className="highlight" size={24} /> <span>+91 98XXX XXXXX (WhatsApp)</span></div>
                            <div className="footer-contact" style={{ marginTop: '1.5rem' }}><Mail className="highlight" size={24} /> <span>hello@toyadhi.in</span></div>
                            <div style={{ marginTop: '4rem' }}>
                                <p style={{ fontSize: '0.9rem', opacity: 0.6, fontStyle: 'italic' }}>"Serious inquiries only. We value your land's potential as much as our time."</p>
                            </div>
                        </div>
                    </div>
                    <div className="roi-card glass" style={{ padding: '3.5rem' }}>
                        <h3 style={{ marginBottom: '2rem' }}>Book a 15-Min Strategy Clarity Call</h3>
                        <p style={{ marginBottom: '2rem', opacity: 0.7 }}>No sales pitch. Just hard facts about your land and the best models for your budget.</p>
                        <a href="https://cal.com/sayak-moulic/15min" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large" style={{ width: '100%', justifyContent: 'center' }}>Check Availability <ArrowRight /></a>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                            <Shield size={16} className="highlight" /> <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>Zero Commitment. High Value.</span>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
    </main>
);

