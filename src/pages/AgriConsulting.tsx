import { CheckCircle, BarChart, Globe, Zap } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { BottomCTA } from '../components/BottomCTA';

export const AgriConsulting = () => (
    <main className="onboarding-bg">
        <SEO
            title="Agri Business Consulting in India 2026: Who Is Worth Hiring"
            description="India has hundreds of agri business consulting firms. Here is how to tell the difference between consultants who drive growth and ones who just send you a report."
        />

        <header className="v-section" style={{ paddingTop: '12rem', paddingBottom: '4rem' }}>
            <div className="container">
                <AnimateOnScroll>
                    <div className="text-center" style={{ maxWidth: '1000px', margin: '0 auto 6rem' }}>
                        <span className="journey-badge">Strategic Growth</span>
                        <h1 className="service-hero-title">Agri Business Consulting in India: <span className="highlight">How to Find One That Actually Delivers</span></h1>
                        <p className="journey-desc" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>From bankable DPRs to securing central subsidies and private equity—we are your partners in agricultural wealth.</p>
                    </div>
                </AnimateOnScroll>
            </div>
        </header>

        <section className="v-section" style={{ paddingTop: 0 }}>
            <div className="container">
                <div className="responsive-grid" style={{ alignItems: 'start' }}>
                    <AnimateOnScroll>
                        <div style={{ padding: '2rem' }}>
                            <h3 className="journey-title" style={{ fontSize: '2.5rem' }}>We Don't Just Write <span className="highlight">Reports.</span></h3>
                            <p className="journey-desc">Most consultants provide a PDF. We provide a project path that includes funding linkage, government compliance, and daily operational protocols.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
                                {[
                                    { text: "DPR Generation (Bank-Ready)", icon: <BarChart size={20} /> },
                                    { text: "Subsidy Management (NHB/NABARD)", icon: <Zap size={20} /> },
                                    { text: "Operational Standard Operating Procedures", icon: <Globe size={20} /> }
                                ].map((f, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <div className="highlight" style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                                            {f.icon}
                                        </div>
                                        <span style={{ fontWeight: 500 }}>{f.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll className="delay-2">
                        <div className="roi-card glass" style={{ textAlign: 'left', padding: '3rem' }}>
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>The Toyadhi Advantage</h4>
                            <p className="journey-desc" style={{ fontSize: '1rem' }}>We focus on real-world execution. Our consultants are former farm owners and engineers who understand the dirt beneath the data.</p>
                            <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '2rem 0' }} />
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <CheckCircle className="highlight" size={20} />
                                <span style={{ fontWeight: 600 }}>100% Transparency</span>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>

        <BottomCTA />
    </main>
);

