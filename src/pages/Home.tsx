import { Link } from 'react-router-dom';
import { Zap, ChevronRight, CheckCircle, Coins, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { EvolutionJourney } from '../components/EvolutionJourney';
import { FunnelForm } from '../components/FunnelForm';
import { JourneyItem } from '../components/JourneyItem';
import heroCinematic from '../assets/hero-cinematic.jpg';
import integratedFarming from '../assets/integrated-farming.png';
import inhouseFarming from '../assets/inhouse-farming.png';
import cinematicFarm from '../assets/cinematic-farm.png';

export const Home = () => {
    return (
        <>
            <SEO
                title="Smart Farming Solutions in India 2026: What's Worth Adopting"
                description="Dozens of smart farming solutions are flooding India's market. Here is an honest guide to which ones deliver real results for Indian farm sizes and budgets in 2026."
            />
            <header className="hero">
                <div className="hero-video-container">
                    <img src={heroCinematic} className="hero-bg animate-parallax" alt="Toyadhi - High-ROI Smart Farming Solutions in India" title="Toyadhi: Pioneering Modern Agriculture in India" />
                    <div className="hero-overlay" />
                    <div className="tech-grid-overlay" />

                    {/* SVG Aura Blobs */}
                    <svg className="aura-blob" style={{ top: '10%', left: '10%', width: '400px', height: '400px', color: 'var(--primary)' }} viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="80" fill="currentColor" fillOpacity="0.4" />
                    </svg>
                    <svg className="aura-blob" style={{ bottom: '20%', right: '10%', width: '500px', height: '500px', color: 'var(--secondary)', animationDelay: '-2s' }} viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="90" fill="currentColor" fillOpacity="0.3" />
                    </svg>

                    {/* Floating Tech Decor */}
                    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 5 }}>
                        <svg className="animate-spin-slow" style={{ position: 'absolute', top: '15%', right: '5%', width: '120px', height: '120px', opacity: 0.1, color: 'var(--primary)' }} viewBox="0 0 100 100">
                            <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
                        </svg>
                        <svg style={{ position: 'absolute', bottom: '25%', left: '5%', width: '150px', height: '150px', opacity: 0.1, color: 'var(--secondary)', animation: 'floating 4s ease-in-out infinite' }} viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 4" />
                        </svg>
                    </div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <AnimateOnScroll>
                            <h1 className="sr-only">Smart Farming Solutions in India: Cut Through the Hype in 2026</h1>
                            <div className="hero-badge-group">
                                <div className="hero-badge"><Zap size={14} /> India's #1 Smart Farm Consultancy</div>
                            </div>
                            <h2 className="hero-title reveal-text">
                                Turn your idle land into a <span className="desktop-br" /> <span className="gradient-text">High-ROI Modern Farm.</span>
                            </h2>
                            <p className="hero-subtitle animate-up visible delay-1">
                                We engineer high-yield agricultural ecosystems that generate <span className="highlight">₹50L+ in annual profit</span>. <br className="desktop-br" /> You own the land, we handle the future.
                            </p>
                            <div className="hero-actions animate-up visible delay-2">
                                <Link to="/onboarding" className="btn btn-primary btn-large btn-glow">Generate Free Report <ChevronRight /></Link>
                                <a href="#land-area" className="btn btn-outline btn-large">See How It Works</a>
                            </div>
                            <div className="hero-metrics animate-up visible delay-3">
                                <div className="hero-metric"><span className="metric-val">2</span> <span className="metric-label">States</span></div>
                                <div className="hero-divider" />
                                <div className="hero-metric"><span className="metric-val">₹20Cr+</span> <span className="metric-label">Asset Value Managed</span></div>
                                <div className="hero-divider" />
                                <div className="hero-metric"><span className="metric-val">24/7</span> <span className="metric-label">IoT Monitoring</span></div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </header>

            <section id="land-area" className="v-section" style={{ backgroundColor: 'var(--bg-card)' }}>
                <div className="container">
                    <div className="responsive-grid">
                        <div className="analysis-text-column">
                            <AnimateOnScroll>
                                <h2 className="journey-title">Discover Your Land's <span className="highlight">True Potential</span></h2>
                                <p className="journey-desc">Use our proprietary engine to calculate expected returns based on real ground data.</p>
                                <h1 style={{ display: 'none' }}>Smart Farming Solutions in India: Cut Through the Hype in 2026</h1>
                                <div className="analysis-features" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                                    {["Soil-to-Market Analysis", "Integrated Crop Planning", "DPR Ready"].map((f, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><CheckCircle className="highlight" size={20} /><span>{f}</span></div>
                                    ))}
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="analysis-form-column">
                            <FunnelForm />
                        </div>
                    </div>
                </div>
            </section>

            <EvolutionJourney />

            <section className="v-section" style={{ background: 'linear-gradient(to bottom, var(--bg-dark), var(--bg-card))' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '8rem' }}>
                        <AnimateOnScroll><span className="journey-badge">Growth Blueprints</span><h2 className="journey-title">Proven Models</h2></AnimateOnScroll>
                    </div>
                    <JourneyItem badge="01. Technical" title="Integrated Technical Farming" desc="Precision engineering meet high-yield agriculture with full IoT automation." image={integratedFarming} link="/models/technical-farming" />
                    <JourneyItem badge="02. Pure" title="Organic Excellence" desc="High-value organic produce with certified global export pathways." image={cinematicFarm} reverse link="/models/organic-farming" />
                    <JourneyItem badge="03. Aquatic" title="Aquaponics Systems" desc="Closed-loop fish and vegetable production with 90% less water usage." image={inhouseFarming} link="/models/aquaponics" />
                    <JourneyItem badge="04. Livestock" title="Animal Husbandry" desc="Smart dairy and poultry systems integrated with your crop cycles for zero-waste profit." image={cinematicFarm} reverse link="/models/animal-husbandry" />
                    <JourneyItem badge="05. Experience" title="Agro Tourism" desc="Transform your land into a premium destination for farm-to-table experiences." image={integratedFarming} link="/models/agro-tourism" />
                </div>
            </section>

            <section className="v-section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.05))' }}>
                <div className="container text-center">
                    <AnimateOnScroll>
                        <h2 className="journey-title">Ready for your <span className="highlight">Legacy?</span></h2>
                        <div className="stats-grid" style={{ marginTop: '5rem' }}>
                            <div className="roi-card"><Coins className="highlight" size={40} /><h3>₹12L/Acre</h3><p>Annual Profit</p></div>
                            <div className="roi-card"><Shield className="highlight" size={40} /><h3>Risk-Free</h3><p>Yield Assurance</p></div>
                            <div className="roi-card"><TrendingUp className="highlight" size={40} /><h3>3.5x</h3><p>Market Yield</p></div>
                        </div>
                        <div style={{ marginTop: '5rem' }}><a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">Strategy Call <ArrowRight /></a></div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
};
