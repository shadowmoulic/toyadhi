import { Zap, Wind, Shield } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { BottomCTA } from '../components/BottomCTA';

export const FarmSetup = () => (
    <main className="v-section onboarding-bg" style={{ paddingTop: '10rem' }}>
        <SEO
            title="Farm Setup Services in India 2026: Cost, Process and What to Expect"
            description="Thinking about using farm setup services in India? Here is what the process actually looks like, what it costs, and the mistakes to avoid before you spend a rupee."
        />
        <div className="container">
            <AnimateOnScroll>
                <div className="text-center" style={{ marginBottom: '6rem' }}>
                    <span className="journey-badge">End-to-End Build</span>
                    <h1 className="service-hero-title">Farm Setup Services in India: <span className="highlight">What Nobody Tells You Before You Start</span></h1>
                    <p className="journey-desc" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>Building a commercial farm is not just about buying seeds. It's about precision engineering, supply chain linkage, and climate resilience.</p>
                </div>
                <div className="responsive-grid" style={{ gap: '2rem' }}>
                    <div className="roi-card">
                        <Zap className="highlight" size={32} />
                        <h4 style={{ margin: '1.5rem 0' }}>Step 1: Resource Mapping</h4>
                        <p className="journey-desc" style={{ fontSize: '1rem' }}>We conduct a 48-point check on your land, water, and soil before a single brick is laid.</p>
                    </div>
                    <div className="roi-card">
                        <Wind className="highlight" size={32} />
                        <h4 style={{ margin: '1.5rem 0' }}>Step 2: Smart Engineering</h4>
                        <p className="journey-desc" style={{ fontSize: '1rem' }}>Custom polyhouse, hydroponic, or open-field clusters designed for your specific micro-climate.</p>
                    </div>
                    <div className="roi-card">
                        <Shield className="highlight" size={32} />
                        <h4 style={{ margin: '1.5rem 0' }}>Step 3: Market Integration</h4>
                        <p className="journey-desc" style={{ fontSize: '1rem' }}>We don't just build the farm; we connect it to global and domestic export pathways from Day 0.</p>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
        <BottomCTA />
    </main>
);
