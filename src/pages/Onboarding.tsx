import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { FunnelForm } from '../components/FunnelForm';

export const OnboardingPage = () => {
    return (
        <main className="v-section onboarding-bg" style={{ paddingTop: '10rem', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <AnimateOnScroll>
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="journey-badge">Exclusive Access</span>
                        <h1 className="journey-title" style={{ fontSize: '3.5rem' }}>Start Your <span className="highlight">Wealth Journey</span></h1>
                        <p className="journey-desc">Answer a few questions to unlock your custom roadmap and potentially earn a strategy session with our lead experts.</p>
                    </div>
                    <FunnelForm />
                </AnimateOnScroll>
            </div>
        </main>
    );
};
