import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { BottomCTA } from '../components/BottomCTA';

export const CaseStudies = () => (
    <main className="v-section" style={{ paddingTop: '10rem' }}>
        <SEO
            title="Real Farming Success Stories From India 2026: What Changed"
            description="Not motivational fluff. These farming success stories from India in 2026 come with the numbers, the decisions, and the exact changes that turned struggling farms around."
        />
        <div className="container">
            <AnimateOnScroll>
                <div className="text-center" style={{ marginBottom: '6rem' }}>
                    <span className="journey-badge">Proof of Work</span>
                    <h1 className="service-hero-title">Farming Success Stories From India 2026: <span className="highlight">Real Farmers, Real Numbers</span></h1>
                    <p className="journey-desc">See how we turned underperforming land into high-yield yield machines across India.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 450px))', justifyContent: 'center', gap: '2rem' }}>
                    {[
                        { location: "MP", crop: "Integrated Farming", roi: "8x Income Boost", desc: "32 acres of land optimized with high-yield integrated systems for an expected 8-fold boost in annual income." }
                    ].map((study, i) => (
                        <div key={i} className="roi-card glass" style={{ textAlign: 'left', padding: '2.5rem' }}>
                            <div className="hero-badge">{study.location}</div>
                            <h3 style={{ margin: '1rem 0' }}>{study.crop}</h3>
                            <div className="roi-value" style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>{study.roi}</div>
                            <p style={{ opacity: 0.7, marginBottom: '2rem' }}>{study.desc}</p>
                            <Link to="/onboarding" className="nav-link" style={{ fontSize: '0.9rem', color: 'var(--secondary)' }}>View Full Breakdown <ArrowRight size={14} /></Link>
                        </div>
                    ))}
                </div>
            </AnimateOnScroll>
        </div>
        <BottomCTA />
    </main>
);
