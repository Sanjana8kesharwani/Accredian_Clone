'use client';
import { features, courses } from '../data';

export default function Features() {
  return (
    <section id="courses" style={{ background: '#f7f9ff', padding: '88px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', background: '#e8f0ff', color: '#1a6bff', fontSize: 12, fontWeight: 700, padding: '5px 14px',
           borderRadius: 20, letterSpacing: '1px', marginBottom: 16, }}>WHY ACCREDIAN</span>
            
          <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)',fontWeight: 800, color: '#0a0f1e', marginBottom: 16,}}>
            Everything You Need to{' '} <span style={{ color: '#1a6bff' }}>Succeed</span> </h2>

          <p style={{ fontSize: 16, color: '#6b7394', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          We&apos;ve built a complete ecosystem to help you learn, grow, and land your dream job.</p>

        </div>

        {/* Feature Cards Grid */}
        <div style={{ display: 'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 80,}}>
   
          {features.map(f => (
            <div key={f.id} style={{ background: 'white',borderRadius: 16, padding: '28px 28px',border: '1px solid #e4e8f0',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',transition: 'all 0.25s ease',cursor: 'default',}}
              
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,107,255,0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#c0d4ff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = '#e4e8f0';
              }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 14,background: 'linear-gradient(135deg, #e8f0ff, #d0e2ff)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',fontSize: 26, marginBottom: 18,}}>{f.icon}</div>
   
              <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: 17, fontWeight: 700, color: '#0a0f1e', marginBottom: 10 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: '#6b7394', lineHeight: 1.7 }}>{f.description}</p>
            </div>
          ))}
        </div>

        {/* Popular Courses */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(26px, 3.5vw, 38px)',fontWeight: 800, color: '#0a0f1e', marginBottom: 8,}}>
             Popular <span style={{ color: '#1a6bff' }}>Programs</span> </h2>

          <p style={{ fontSize: 15, color: '#6b7394' }}> Hand-picked programs from India&apos;s most prestigious institutes</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',gap: 24,}}>
 
          {courses.map(c => (
            <div key={c.id} style={{ background: 'white', borderRadius: 16,border: '1px solid #e4e8f0',overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',transition: 'all 0.25s ease',}}
  
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,107,255,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'none'; }}
            >
              {/* Card Top Banner */}
              <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)',height: 100, position: 'relative',display: 'flex', alignItems: 'center', justifyContent: 'center',}}>

                <span style={{ fontSize: 40 }}>🎓</span>
                {c.badge && (
                  <span style={{position: 'absolute', top: 12, right: 12, background: c.badge === 'Bestseller' ? '#ff6b35' : c.badge === 'Trending' ? '#00c896' : '#1a6bff',
                     color: 'white', fontSize: 11, fontWeight: 700,padding: '3px 10px', borderRadius: 20,}}>{c.badge}</span> 
                )}
              </div>

              <div style={{ padding: '20px 22px 22px' }}>
                <div style={{fontSize: 11, fontWeight: 700, color: '#1a6bff', letterSpacing: '0.5px', marginBottom: 8,}}>{c.institute}</div>
                
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0a0f1e', marginBottom: 16, lineHeight: 1.5 }}>{c.title}</h3>
                  
                  <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>

                  <span style={{background: '#f0f4ff', color: '#3d4461',fontSize: 12, padding: '4px 10px', borderRadius: 6, fontWeight: 500, }}>⏱ {c.duration}</span>
  
                  <span style={{background: '#f0f4ff', color: '#3d4461', fontSize: 12, padding: '4px 10px', borderRadius: 6, fontWeight: 500, }}>💻 {c.mode}</span>
 
                </div>
                <a href="#" style={{display: 'block', textAlign: 'center', padding: '10px', borderRadius: 8,background: 'linear-gradient(135deg, #1a6bff, #4f8cff)',
                 color: 'white', fontWeight: 700, fontSize: 14,textDecoration: 'none',transition: 'opacity 0.2s',}}
     
                  onMouseEnter={e => e.target.style.opacity = '0.9'}
                  onMouseLeave={e => e.target.style.opacity = '1'}
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a href="#" style={{display: 'inline-block', padding: '12px 32px',border: '2px solid #1a6bff', color: '#1a6bff',
          borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none',transition: 'all 0.2s',}}
            
            onMouseEnter={e => { e.currentTarget.style.background = '#1a6bff';e.currentTarget.style.color = 'white';}}

            onMouseLeave={e => {e.currentTarget.style.background = 'transparent';e.currentTarget.style.color = '#1a6bff';}} >
            View All Programs →
          </a>
        </div>
      </div>
    </section>
  );
}