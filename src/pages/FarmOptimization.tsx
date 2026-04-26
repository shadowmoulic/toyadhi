import { SEO } from '../components/SEO';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { BottomCTA } from '../components/BottomCTA';
import { CheckCircle, Zap } from 'lucide-react';

export const FarmOptimization = () => (
    <main className="onboarding-bg">
        <SEO
            title="How to Increase Farm Yield in India 2026: Proven Methods"
            description="Generic advice does not increase farm yield. Here are the specific methods, inputs, and technologies Indian farmers are using to see measurable gains in 2026."
        />

        <header className="v-section" style={{ paddingTop: '12rem', paddingBottom: '4rem' }}>
            <div className="container">
                <AnimateOnScroll>
                    <div className="text-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <span className="journey-badge">Maximize ROI</span>
                        <h1 className="service-hero-title">Increase Farm Yield in India: <span className="highlight">What Is Actually Moving the Needle in 2026</span></h1>
                        <p className="journey-desc" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>Stop following generic advice. We use AI-driven precision and circular farming techniques to boost your margins by 40% in a single season.</p>
                    </div>
                </AnimateOnScroll>
            </div>
        </header>

        <section className="v-section" style={{ paddingTop: 0 }}>
            <div className="container">
                <AnimateOnScroll>
                    <div className="roi-card glass" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left', padding: '4rem' }}>
                        <h3 className="journey-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>The Optimization Framework</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                <div className="highlight" style={{ background: 'rgba(16, 185, 129, 0.1)', minWidth: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800 }}>01</div>
                                <div>
                                    <h4 style={{ color: 'var(--text-main)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Soil-Intelligence Feed</h4>
                                    <p className="journey-desc" style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 0 }}>IoT sensors update your dashboard in real-time, reducing fertilizer waste by 30% while maximizing plant health.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                <div className="highlight" style={{ background: 'rgba(59, 130, 246, 0.1)', minWidth: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800 }}>02</div>
                                <div>
                                    <h4 style={{ color: 'var(--text-main)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Automated Climate Control</h4>
                                    <p className="journey-desc" style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: 0 }}>Dynamic shading and misting systems protect your yield from India's rising heat waves, ensuring 365-day harvesting.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--glass-border)', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <CheckCircle className="highlight" size={20} />
                                <span style={{ fontWeight: 600 }}>Yield Assurance</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <Zap className="highlight" size={20} />
                                <span style={{ fontWeight: 600 }}>AI Monitoring</span>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>

        <BottomCTA />
    </main>
);

