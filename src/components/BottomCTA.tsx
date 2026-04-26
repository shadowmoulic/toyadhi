import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

export const BottomCTA = () => {
    return (
        <section className="v-section text-center" style={{ background: 'transparent' }}>
            <div className="container">
                <AnimateOnScroll>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="journey-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>Ready to start <span className="highlight">Step 01?</span></h2>
                        <p className="journey-desc" style={{ maxWidth: '600px', margin: '2rem auto', fontSize: '1.2rem' }}>
                            Book your initial clarity call to begin the land audit process and unlock your farm's true potential.
                        </p>
                        <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://cal.com/sayak-moulic/15min" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large btn-glow">Book Consultation <ArrowRight /></a>
                            <a href="/free-dpr" className="btn btn-outline btn-large">Build Free DPR</a>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

