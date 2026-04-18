import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

export const BottomCTA = () => {
    return (
        <section className="v-section text-center" style={{ background: 'rgba(59, 130, 246, 0.05)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <AnimateOnScroll>
                    <h2 className="journey-title">Ready to start <span className="highlight">Step 01?</span></h2>
                    <p className="journey-desc" style={{ maxWidth: '600px', margin: '1.5rem auto' }}>
                        Book your initial clarity call to begin the land audit process and unlock your farm's true potential.
                    </p>
                    <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://cal.com/sayak-moulic/15min" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Book Consultation <ArrowRight /></a>
                        <a href="/free-dpr" className="btn btn-outline btn-large">Build Free DPR</a>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};
