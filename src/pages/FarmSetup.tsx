import { Zap, Wind, Shield, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { BottomCTA } from '../components/BottomCTA';

export const FarmSetup = () => (
    <main className="onboarding-bg">
        <SEO
            title="Farm Setup Services in India 2026: Cost, Process and What to Expect"
            description="Thinking about using farm setup services in India? Here is what the process actually looks like, what it costs, and the mistakes to avoid before you spend a rupee."
        />

        <header className="v-section" style={{ paddingTop: '12rem', paddingBottom: '4rem' }}>
            <div className="container">
                <AnimateOnScroll>
                    <div className="text-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <span className="journey-badge">End-to-End Build</span>
                        <h1 className="service-hero-title">Farm Setup Services in India: <span className="highlight">What Nobody Tells You Before You Start</span></h1>
                        <p className="journey-desc" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 4rem' }}>Building a commercial farm is not just about buying seeds. It's about precision engineering, supply chain linkage, and climate resilience.</p>
                    </div>
                </AnimateOnScroll>
            </div>
        </header>

        <section className="v-section" style={{ paddingTop: 0 }}>
            <div className="container">
                <AnimateOnScroll>
                    <div className="setup-steps-grid">
                        {[
                            {
                                icon: <Zap size={32} />,
                                step: "Step 1: Resource Mapping",
                                desc: "We conduct a 48-point check on your land, water, and soil before a single brick is laid.",
                                details: ["Soil suitability", "Water availability"]
                            },
                            {
                                icon: <Wind size={32} />,
                                step: "Step 2: Smart Engineering",
                                desc: "Custom polyhouse, hydroponic, or open-field clusters designed for your micro-climate.",
                                details: ["Precision design", "IoT integration"]
                            },
                            {
                                icon: <Shield size={32} />,
                                step: "Step 3: Market Integration",
                                desc: "We don't just build the farm; we connect it to global and domestic export pathways from Day 0.",
                                details: ["Buyer networks", "Export compliance"]
                            }
                        ].map((s, idx) => (
                            <div key={idx} className="roi-card glass" style={{ padding: '3rem', textAlign: 'left' }}>
                                <div className="highlight" style={{ background: 'rgba(16, 185, 129, 0.1)', width: 'fit-content', padding: '0.75rem', borderRadius: '12px' }}>
                                    {s.icon}
                                </div>
                                <h4 style={{ color: 'var(--text-main)', marginTop: '1.5rem', marginBottom: '1.25rem', fontSize: '1.4rem' }}>{s.step}</h4>
                                <p className="journey-desc" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{s.desc}</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {s.details.map((d, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem' }}>
                                            <CheckCircle size={14} className="highlight" />
                                            <span>{d}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>
            </div>
        </section>

        <BottomCTA />
    </main>
);

