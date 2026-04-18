import { Link } from 'react-router-dom';
import { Sun, Wind } from 'lucide-react';

export const ThreeDLayout = () => {
    return (
        <main className="td-container">
            <div className="td-scene">
                <div className="td-card">
                    <div className="hero-badge">Future Blueprint</div>
                    <h1 className="journey-title" style={{ fontSize: '3rem' }}>Smart Farm <span className="highlight">Node 01</span></h1>
                    <p className="journey-desc">Interactive 3D visualization of your integrated farming ecosystem. Every layer optimized for profit.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                        <div className="roi-card" style={{ padding: '1rem', transform: 'translateZ(50px)' }}>
                            <Sun className="highlight" />
                            <h4>Solar Feed</h4>
                        </div>
                        <div className="roi-card" style={{ padding: '1rem', transform: 'translateZ(80px)' }}>
                            <Wind className="highlight" />
                            <h4>IoT Sensors</h4>
                        </div>
                    </div>
                    <Link to="/" className="btn btn-primary" style={{ marginTop: '3rem', width: '100%', transform: 'translateZ(100px)' }}>Back to Home</Link>
                </div>
            </div>
        </main>
    );
};
