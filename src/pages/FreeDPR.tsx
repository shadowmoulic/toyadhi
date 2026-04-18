import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { BottomCTA } from '../components/BottomCTA';

export const FreeDPR = () => (
    <main className="v-section onboarding-bg" style={{ paddingTop: '10rem' }}>
        <SEO
            title="Free DPR for Farming Project 2026: Template and Step-by-Step Guide"
            description="Get a free DPR template for your farming project plus a step-by-step guide to filling it correctly. Avoid the common mistakes that get applications rejected in 2026."
        />
        <div className="container" style={{ maxWidth: '900px' }}>
            <AnimateOnScroll>
                <div className="text-center" style={{ marginBottom: '6rem' }}>
                    <span className="journey-badge">Blueprint Access</span>
                    <h1 className="service-hero-title">Free DPR for Your Farming Project: <span className="highlight">How to Write One That Gets Approved</span></h1>
                    <p className="journey-desc">A perfect Detailed Project Report is the difference between getting funded and getting rejected. We're giving you our internal 2026 framework for free.</p>
                </div>
                <div className="roi-card glass" style={{ padding: '4rem', textAlign: 'center' }}>
                    <Mail className="highlight" size={48} style={{ marginBottom: '2rem' }} />
                    <h2>Download the Smart Farm Blueprint</h2>
                    <Link to="/onboarding" className="btn btn-primary btn-large" style={{ marginTop: '2rem' }}>Request Blueprint</Link>
                </div>
            </AnimateOnScroll>
        </div>
        <BottomCTA />
    </main>
);
