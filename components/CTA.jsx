'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '' });
  const [status, setStatus] = useState('idle'); 

  const programs = [
    'Data Science & Business Analytics',
    'Product Management',
    'Machine Learning & AI',
    'Digital Marketing',
    'Business Analytics',
  ];

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  
  const handleSubmit = async () => {
  if (!form.name || !form.email) return;

  setStatus('loading');

  try {
    setStatus('success');
    toast.success("Form submitted successfully!"); 

    setForm({ name: '', email: '', phone: '', program: '' });

  } catch {
    setStatus('error');
    toast.error("Something went wrong!");
  }

  setTimeout(() => setStatus('idle'), 4000);
};

  return (
    <section id="contact" style={{
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2150 50%, #0a1628 100%)',
      padding: '88px 24px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* BG circles */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%',background: 'radial-gradient(circle, rgba(26,107,255,0.15) 0%, transparent 70%)',pointerEvents: 'none',}}/>
 
      <div style={{ position: 'absolute', bottom: -80, left: -80, position: 'absolute', bottom: -80, left: -80, background: 'radial-gradient(circle, rgba(79,140,255,0.1) 0%, transparent 70%)',pointerEvents: 'none',}}/>
        
       
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', }} className="cta-grid">
         
          {/* Left */}
          <div>
            <span style={{display: 'inline-block', background: 'rgba(26,107,255,0.2)', color: '#7aaeff',fontSize: 12, fontWeight: 700, padding: '5px 14px', borderRadius: 20, letterSpacing: '1px', marginBottom: 20, border: '1px solid rgba(26,107,255,0.3)',}}>GET STARTED TODAY</span>
              
            <h2 style={{fontFamily: 'Sora, sans-serif', fontSize: 'clamp(30px, 4vw, 48px)',fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 20, }}>

              Unlock Your{' '}
              <span style={{
                background: 'linear-gradient(135deg, #1a6bff, #7aaeff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Potential</span>
              <br />Today
            </h2>
            <p style={{ fontSize: 16, color: '#8fa8c8', lineHeight: 1.7, marginBottom: 32 }}>
              Join 50,000+ professionals who chose Accredian to advance their careers. 
              Talk to our expert counselors — completely free.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                '✓  Free career counseling session',
                '✓  Personalized program recommendations',
                '✓  EMI options available from ₹5,000/month',
                '✓  No commitment required',
              ].map(item => (
                <div key={item} style={{ fontSize: 14, color: '#a8c4e0', display: 'flex', alignItems: 'center', gap: 8 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Lead Form */}
          <div style={{background: 'white', borderRadius: 20, padding: '36px 32px',boxShadow: '0 24px 80px rgba(0,0,0,0.3)',}}>
  
            <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: 20, fontWeight: 800, color: '#0a0f1e', marginBottom: 6 }}> Get Free Counseling </h3>
              
            <p style={{ fontSize: 13, color: '#6b7394', marginBottom: 24 }}> Fill in your details and we&apos;ll call you back.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { name: 'name', placeholder: 'Full Name *', type: 'text' },
                { name: 'email', placeholder: 'Email Address *', type: 'email' },
                { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
              ].map(field => (
                <input key={field.name} type={field.type} name={field.name} value={form[field.name]} onChange={handleChange}
                  placeholder={field.placeholder} style={{width: '100%', padding: '12px 16px',border: '1.5px solid #e4e8f0', borderRadius: 10,fontSize: 14, 
                    color: '#0a0f1e', outline: 'none',fontFamily: 'Plus Jakarta Sans, sans-serif', transition: 'border-color 0.2s',}}
     
                  onFocus={e => e.target.style.borderColor = '#1a6bff'} onBlur={e => e.target.style.borderColor = '#e4e8f0'}/> ))}
                  
              <select name="program" value={form.program} onChange={handleChange}
                style={{ width: '100%', padding: '12px 16px',border: '1.5px solid #e4e8f0', borderRadius: 10,fontSize: 14, color: form.program ? '#0a0f1e' : '#9aa3b8',
                         outline: 'none', background: 'white',fontFamily: 'Plus Jakarta Sans, sans-serif',cursor: 'pointer',}}>

                <option value="">Select Program of Interest</option>
                {programs.map(p => <option key={p} value={p}>{p}</option>)}
              </select>

              <button onClick={handleSubmit} disabled={status === 'loading'}
              style={{width: '100%', padding: '14px',  background: status === 'success' ? '#00c896' : 'linear-gradient(135deg, #1a6bff, #4f8cff)',
                color: 'white', border: 'none', borderRadius: 10,fontSize: 16, fontWeight: 700, cursor: status === 'loading' ? 'wait' : 'pointer',
                fontFamily: 'Sora, sans-serif', transition: 'all 0.2s',boxShadow: '0 6px 20px rgba(26,107,255,0.35)',}}>
  
              onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={e => e.currentTarget.style.transform = 'none'} 
  
            {status === 'loading' ? 'Submitting...': status === 'success'? '✓ Request Received!' : 'Get Started →'}
          </button>

              {status === 'error' && (
                <p style={{ color: '#e53e3e', fontSize: 13, textAlign: 'center' }}>
                  Form submitted successfully!
                </p>
              )}

              <p style={{ fontSize: 11, color: '#9aa3b8', textAlign: 'center', lineHeight: 1.5 }}>  By submitting, you agree to our Privacy Policy. We&apos;ll never spam you. </p>
            </div>
          </div>
        </div>
      </div>

      <style>{` @media (max-width: 768px) {.cta-grid { grid-template-columns: 1fr !important; }}`}</style>
    </section>
  );
}