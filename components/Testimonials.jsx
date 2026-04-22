'use client';
import { testimonials, logos } from '../data';

export default function Testimonials() {
  return (
    <section id="resources" style={{ background: 'white', padding: '88px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{display: 'inline-block',background: '#e8f0ff', color: '#1a6bff',fontSize: 12, fontWeight: 700, padding: '5px 14px',
          borderRadius: 20, letterSpacing: '1px', marginBottom: 16,}}>STUDENT SUCCESS STORIES</span>

          <h2 style={{fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)',fontWeight: 800, color: '#0a0f1e', marginBottom: 14,}}>
            
            Loved by <span style={{ color: '#1a6bff' }}>50,000+ Learners</span>
          </h2>
          <p style={{ fontSize: 16, color: '#6b7394', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Hear from professionals who transformed their careers with Accredian.
          </p>
        </div>

        {/* Testimonial Cards */}

        <div style={{display: 'grid',  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 72,}}>
          {testimonials.map(t => (
            <div key={t.id} style={{background: '#f7f9ff',borderRadius: 20, padding: '28px',border: '1px solid #e4e8f0',position: 'relative',transition: 'all 0.25s ease',}}

              onMouseEnter={e => {e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)';e.currentTarget.style.transform = 'scale(1.02)';}}
              onMouseLeave={e => {e.currentTarget.style.boxShadow = 'none';e.currentTarget.style.transform = 'scale(1)';}}>

              {/* Stars */}
              <div style={{ color: '#fbbf24', fontSize: 16, marginBottom: 16, letterSpacing: 2 }}> {'★'.repeat(t.rating)} </div>

              {/* Quote */}
              <p style={{ fontSize: 15, color: '#3d4461',lineHeight: 1.75,marginBottom: 24, fontStyle: 'italic',}}> {t.quote} </p>

              {/* Tag */}
              <div style={{display: 'inline-block',background: '#e8f0ff', color: '#1a6bff',fontSize: 11, fontWeight: 700, padding: '3px 10px',borderRadius: 20, marginBottom: 18,}}>{t.program}</div>
                
              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%',background: 'linear-gradient(135deg, #1a6bff, #4f8cff)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',color: 'white', fontWeight: 700, fontSize: 14,flexShrink: 0, }}>{t.avatar}</div>

                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#0a0f1e' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#6b7394' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos Section */}
        <div style={{ background: 'linear-gradient(135deg, #f0f6ff, #e8efff)', borderRadius: 20, padding: '40px 32px', border: '1px solid #dde8ff',}}>
 
          <p style={{textAlign: 'center', fontSize: 14, color: '#6b7394', fontWeight: 600, letterSpacing: '0.5px', marginBottom: 28,}}>
            OUR ALUMNI WORK AT TOP COMPANIES
          </p>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap',}}>
            
            {logos.map(logo => (
              <div key={logo.name} style={{fontSize: 16, fontWeight: 800, color: logo.color,opacity: 0.7, letterSpacing: '0.5px',transition: 'opacity 0.2s',cursor: 'default',}}

                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}