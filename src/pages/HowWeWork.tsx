import { CheckCircle, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import heroBg from '../assets/hero-bg.png';
import integratedFarming from '../assets/integrated-farming.png';
import inhouseFarming from '../assets/inhouse-farming.png';

const ProcessStep = ({ number, title, desc, details, image, reverse }: any) => (
    <section className="v-section" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
            <div className={`responsive-grid ${reverse ? 'rtl' : ''}`} style={{ direction: reverse ? 'rtl' : 'ltr' }}>
                <AnimateOnScroll className="journey-image-box">
                    <div style={{ direction: 'ltr' }}>
                        <div className="hero-badge" style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>Step 0{number}</div>
                        <img src={image} alt={title} className="journey-image" />
                    </div>
                </AnimateOnScroll>
                <div className="journey-content" style={{ direction: 'ltr' }}>
                    <AnimateOnScroll>
                        <h2 className="journey-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{title}</h2>
                        <p className="journey-desc" style={{ fontSize: '1.2rem' }}>{desc}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                            {details.map((item: string, i: number) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <CheckCircle className="highlight" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </div>
    </section>
);

export const HowWeWork = () => {
    return (
        <main style={{ paddingTop: '8rem' }}>
            <SEO
                title="How Farm Consultancy Works: What You Pay For and What You Get"
                description="What does a farm consultancy actually do, and is it worth the fee? Here is a transparent look at how farm consultancy works, what to expect, and when it pays off."
            />

            <header className="v-section" style={{ paddingBottom: '4rem' }}>
                <div className="container text-center">
                    <AnimateOnScroll>
                        <span className="journey-badge">The Roadmap</span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>How Farm Consultancy Works: <span className="highlight">The Honest Breakdown Farmers Need</span></h1>
                        <p className="journey-desc" style={{ maxWidth: '800px', margin: '2rem auto' }}>
                            We don't just consult; we build legacies. Our process is engineered to move you from idle land to a high-performance agricultural asset in record time.
                        </p>
                    </AnimateOnScroll>
                </div>
            </header>

            <ProcessStep
                number={1}
                title="Consultation & Land Audit"
                desc="We begin with a high-stakes audit of your geography, soil quality, and water availability."
                details={["48-Point Site Inspection", "Climate Profile Analysis", "Initial Vision Alignment"]}
                image={heroBg}
            />

            <ProcessStep
                number={2}
                title="Feasibility & DPR"
                desc="Our engineers create a bank-ready Detailed Project Report (DPR) tailored for maximum yield."
                details={["Technical Architecture Design", "CAPEX/OPEX Projections", "ROI Sensitivity Analysis"]}
                image={integratedFarming}
                reverse
            />

            <ProcessStep
                number={3}
                title="Financial Linkage"
                desc="We secure the necessary capital through government subsidies and private financial institutions."
                details={["NHB/NABARD Subsidy Processing", "Private Equity Outreach", "Collateral Optimization"]}
                image={inhouseFarming}
            />

            <ProcessStep
                number={4}
                title="Implementation"
                desc="Turnkey execution of the farm setup with precision engineering and IoT integration."
                details={["Smart Greenhouse Construction", "IoT Sensor Deployment", "Supply Chain Integration"]}
                image={heroBg}
                reverse
            />

            <ProcessStep
                number={5}
                title="Monitoring & Scaling"
                desc="Ongoing management and scaling strategies to maximize your legacy and profits."
                details={["24/7 Remote Monitoring", "Market Price Optimization", "Phase 2 Expansion Planning"]}
                image={integratedFarming}
            />

            <section className="v-section text-center" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
                <div className="container">
                    <AnimateOnScroll>
                        <h2 className="journey-title">Ready to start <span className="highlight">Step 01?</span></h2>
                        <p className="journey-desc">Book your initial clarity call to begin the land audit process.</p>
                        <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary btn-large">Book Consultation <ArrowRight /></a>
                            <a href="/free-dpr" className="btn btn-outline btn-large">Build Free DPR</a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </main>
    );
};
