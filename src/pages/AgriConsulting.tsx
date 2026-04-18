import { CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { BottomCTA } from '../components/BottomCTA';

export const AgriConsulting = () => (
    <main className="v-section onboarding-bg" style={{ paddingTop: '10rem' }}>
        <SEO
            title="Agri Business Consulting in India 2026: Who Is Worth Hiring"
            description="India has hundreds of agri business consulting firms. Here is how to tell the difference between consultants who drive growth and ones who just send you a report."
        />
        <div className="container">
            <AnimateOnScroll>
                <div className="text-center" style={{ marginBottom: '6rem' }}>
                    <span className="journey-badge">Strategic Growth</span>
                    <h1 className="service-hero-title">Agri Business Consulting in India: <span className="highlight">How to Find One That Actually Delivers</span></h1>
                    <p className="journey-desc">From bankable DPRs to securing central subsidies and private equity—we are your partners in agricultural wealth.</p>
                </div>
                <div className="responsive-grid">
                    <div style={{ padding: '2rem' }}>
                        <h3 className="journey-title" style={{ fontSize: '2.5rem' }}>We Don't Just Write <span className="highlight">Reports.</span></h3>
                        <p className="journey-desc">Most consultants provide a PDF. We provide a project path that includes funding linkage, government compliance, and daily operational protocols.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                            {["DPR Generation (Bank-Ready)", "Subsidy Management (NHB/NABARD)", "Operational Standard Operating Procedures"].map((f, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><CheckCircle className="highlight" size={20} /><span>{f}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
        <BottomCTA />
    </main>
);
