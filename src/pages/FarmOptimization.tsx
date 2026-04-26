import { SEO } from '../components/SEO';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { BottomCTA } from '../components/BottomCTA';

export const FarmOptimization = () => (
    <main className="v-section" style={{ paddingTop: '10rem' }}>
        <SEO
            title="How to Increase Farm Yield in India 2026: Proven Methods"
            description="Generic advice does not increase farm yield. Here are the specific methods, inputs, and technologies Indian farmers are using to see measurable gains in 2026."
        />
        <div className="container">
            <AnimateOnScroll>
                <div className="text-center">
                    <span className="journey-badge">Maximize ROI</span>
                    <h1 className="service-hero-title">Increase Farm Yield in India: <span className="highlight">What Is Actually Moving the Needle in 2026</span></h1>
                    <p className="journey-desc" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>Stop following generic advice. We use AI-driven precision and circular farming techniques to boost your margins by 40% in a single season.</p>
                </div>
                <div className="roi-card glass" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left', padding: '4rem' }}>
                    <h3 style={{ marginBottom: '2rem' }}>The Optimization Framework</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                            <div className="hero-badge" style={{ borderRadius: '12px', minWidth: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: 0 }}>01</div>
                            <div>
                                <h4 style={{ color: 'var(--text-main)' }}>Soil-Intelligence Feed</h4>
                                <p style={{ opacity: 0.7, color: 'var(--text-muted)' }}>IoT sensors update your dashboard in real-time, reducing fertilizer waste by 30% while maximizing plant health.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                            <div className="hero-badge" style={{ borderRadius: '12px', minWidth: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: 0 }}>02</div>
                            <div>
                                <h4 style={{ color: 'var(--text-main)' }}>Automated Climate Control</h4>
                                <p style={{ opacity: 0.7, color: 'var(--text-muted)' }}>Dynamic shading and misting systems protect your yield from India's rising heat waves, ensuring 365-day harvesting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
        <BottomCTA />
    </main>
);
