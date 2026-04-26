import { useState } from 'react';
import { TrendingUp, CheckCircle, Zap, Shield, ChevronRight, ArrowRight } from 'lucide-react';

export const FunnelForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ landSize: '', location: '', interest: '', email: '', whatsapp: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
        "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleFormSubmit = () => {
        if (!formData.email.includes('@')) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!/^\d{10}$/.test(formData.whatsapp)) {
            alert("Please enter a valid 10-digit WhatsApp number.");
            return;
        }

        console.log(">>> LEAD DATA CAPTURED <<<", formData);
        localStorage.setItem('toyadhi_funnel_lead', JSON.stringify({ ...formData, timestamp: new Date().toISOString() }));
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="roi-card animate-up visible" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--secondary)' }}>
                <div className="hero-badge" style={{ background: 'var(--primary)', color: '#fff' }}>Priority Analysis Complete</div>
                <h2 className="journey-title" style={{ marginTop: '1rem', color: 'var(--text-main)' }}>Potential Annual ROI</h2>
                <div className="roi-value" style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)' }}>₹45L - ₹65L</div>
                <p className="journey-desc" style={{ color: 'var(--text-main)' }}>Based on your {formData.landSize} land in {formData.location}, you qualify for an <strong>Integrated Smart Node</strong> model.</p>
                <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', marginBottom: '2rem' }}>
                    <h4 style={{ marginBottom: '1rem' }}>Next Step: High-Stakes Strategy Call</h4>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>We only work with serious land owners who want to build a legacy. If that's you, let's talk.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                    <a href="https://cal.com/sayak-moulic/15min" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Book Strategy Call <ArrowRight /></a>
                    <button onClick={() => setIsSubmitted(false)} className="btn btn-outline">Start Over</button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ position: 'relative' }}>
            {/* Form Backglow Aura */}
            <svg className="aura-blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', color: 'var(--primary)' }} viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="currentColor" fillOpacity="0.15" />
            </svg>

            <div className="funnel-container glass">
                <div className="funnel-step-indicator" style={{ marginBottom: '3rem' }}>
                    {[1, 2, 3, 4].map(s => <div key={s} className={`step-dot ${s <= step ? 'active' : ''}`} />)}
                </div>

                {step === 1 && (
                    <div className="animate-up visible" id="land-area">
                        <h3 className="funnel-title">Land Area</h3>
                        <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: 0.7 }}>Select the total area of your project site.</p>
                        <div className="funnel-options">
                            {['1-5 Acres', '5-20 Acres', '20-50 Acres', '50+ Acres'].map(size => (
                                <div key={size} className={`option-card ${formData.landSize === size ? 'selected' : ''}`} onClick={() => { setFormData({ ...formData, landSize: size }); nextStep(); }}>
                                    <div className="option-title">{size}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-up visible">
                        <h3 className="funnel-title">Current Location</h3>
                        <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: 0.7 }}>Where is the land located?</p>
                        <select className="funnel-select" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })}>
                            <option value="">Select Indian State</option>
                            {indianStates.map(state => <option key={state} value={state} style={{ color: '#000' }}>{state}</option>)}
                        </select>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <button onClick={prevStep} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
                            <button onClick={nextStep} className="btn btn-primary" style={{ flex: 2 }} disabled={!formData.location}>Review Potential <ArrowRight size={18} /></button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="animate-up visible">
                        <h3 className="funnel-title">Primary Investment Goal</h3>
                        <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: 0.7 }}>What is your main objective for this land?</p>
                        <div className="funnel-options">
                            {[
                                { label: 'Maximize ROI', icon: <TrendingUp size={20} /> },
                                { label: 'Sustainability', icon: <CheckCircle size={20} /> },
                                { label: 'Turnkey Setup', icon: <Zap size={20} /> },
                                { label: 'Legacy Building', icon: <Shield size={20} /> }
                            ].map(item => (
                                <div key={item.label} className={`option-card ${formData.interest === item.label ? 'selected' : ''}`} onClick={() => { setFormData({ ...formData, interest: item.label }); nextStep(); }}>
                                    <div style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>{item.icon}</div>
                                    <div className="option-title">{item.label}</div>
                                </div>
                            ))}
                        </div>
                        <button onClick={prevStep} className="btn btn-outline" style={{ marginTop: '2rem', width: '100%' }}>Back to Location</button>
                    </div>
                )}

                {step === 4 && (
                    <div className="animate-up visible">
                        <h3 className="funnel-title">Receive Your Custom Roadmap</h3>
                        <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: 0.7 }}>Enter your contact details to generate the analysis.</p>
                        <input type="email" placeholder="Business Email Address" className="funnel-input" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                        <div style={{ position: 'relative' }}>
                            <input
                                type="tel"
                                placeholder="10-digit WhatsApp Number"
                                className="funnel-input"
                                value={formData.whatsapp}
                                onChange={e => setFormData({ ...formData, whatsapp: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                                required
                                style={{ paddingLeft: '3.5rem' }}
                            />
                            <span style={{ position: 'absolute', left: '1rem', top: '1.25rem', color: 'var(--text-muted)' }}>+91</span>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <button type="button" onClick={prevStep} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
                            <button onClick={handleFormSubmit} className="btn btn-primary" style={{ flex: 2 }} disabled={!formData.email || formData.whatsapp.length < 10}>Generate Report <ChevronRight /></button>
                        </div>
                        <p style={{ fontSize: '0.75rem', opacity: 0.5, textAlign: 'center', marginTop: '1.5rem' }}>We respect your privacy. No spam. Only serious business.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
