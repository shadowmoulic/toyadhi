import { useState, useEffect, useRef } from 'react';
import heroBg from '../assets/hero-bg.png';
import integratedFarming from '../assets/integrated-farming.png';
import inhouseFarming from '../assets/inhouse-farming.png';

export const EvolutionJourney = () => {
    const [stage, setStage] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const scrollHeight = rect.height - window.innerHeight;
            const scrollPercent = Math.min(Math.max(-rect.top / scrollHeight, 0), 1);
            setStage(Math.floor(scrollPercent * 4.99));
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stages = [
        { title: "Consultation", desc: "We begin with a deep dive into your land's potential and your vision for high-yield growth.", img: heroBg, overlay: 'rgba(7, 9, 8, 0.7)' },
        { title: "Feasibility & DPR", desc: "Our engineers conduct soil, water, and market analysis to create a Detailed Project Report.", img: integratedFarming, overlay: 'rgba(59, 130, 246, 0.2)' },
        { title: "Financial Linkage", desc: "We secure necessary funding, subsidies, and financial structures for your project.", img: inhouseFarming, overlay: 'rgba(5, 150, 105, 0.2)' },
        { title: "Implementation", desc: "Turnkey execution of the farm setup with precision engineering and IoT integration.", img: heroBg, overlay: 'rgba(59, 130, 246, 0.3)' },
        { title: "Monitoring & Scaling", desc: "Ongoing management and scaling strategies to maximize your legacy and profits.", img: integratedFarming, overlay: 'rgba(5, 150, 105, 0.3)' }
    ];

    return (
        <section id="evolution" className="story-scroll-container" ref={containerRef} style={{ height: '500vh' }}>
            <div className="story-sticky">
                {stages.map((s, i) => (
                    <div key={i} className="story-bg" style={{ opacity: stage === i ? 1 : 0, backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', inset: 0, transition: 'opacity 1s ease' }}>
                        <div className="story-overlay" style={{ backgroundColor: s.overlay, position: 'absolute', inset: 0 }} />
                    </div>
                ))}
                <div className="container story-content-wrapper">
                    <div className="story-stage-text">
                        <span className="journey-badge" style={{ color: 'var(--secondary)' }}>Step 0{stage + 1}</span>
                        <h2 className="journey-title" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}>{stages[stage].title}</h2>
                        <p className="journey-desc" style={{ fontSize: '1.4rem', color: '#fff', maxWidth: '600px' }}>{stages[stage].desc}</p>
                        <div className="funnel-step-indicator" style={{ width: '200px', marginTop: '3rem' }}>
                            {[0, 1, 2, 3, 4].map(i => <div key={i} className={`step-dot ${i <= stage ? 'active' : ''}`} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
