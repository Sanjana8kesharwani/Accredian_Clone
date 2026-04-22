'use client';

const footerLinks = {
  Company: ["About", "Careers", "Blog"],
  Programs: ["Data Science", "MBA", "AI & ML"],
  Resources: ["Guides", "Webinars", "Case Studies"],
  Support: ["Help Center", "Contact", "FAQs"],
};

export default function Footer() {
  return (
    <footer style={{ background: '#0a0f1e', color: '#8fa8c8', padding: '64px 24px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid',gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48,
        borderBottom: '1px solid rgba(255,255,255,0.08)', }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 24, color: '#1a6bff', marginBottom: 16 }}>
              accredian
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#6b7a99', marginBottom: 20, maxWidth: 260 }}>
              Empowering professionals to build future-ready careers through world-class education from Indias top institutes.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['𝕏', 'in', 'f', '▶'].map((icon, i) => (
                <a key={i} href="#" style={{width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',color: '#8fa8c8', fontSize: 14, textDecoration: 'none',transition: 'all 0.2s',}}
                  
                  onMouseEnter={e => { e.target.style.background = '#1a6bff'; e.target.style.color = 'white'; }}
                  onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.08)'; e.target.style.color = '#8fa8c8'; }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: 'white', letterSpacing: '0.5px', marginBottom: 18 }}> {title.toUpperCase()} </h4>
                
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  <li key={link}>
                    <a href="#" style={{color: '#6b7a99', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s',}}
 
                      onMouseEnter={e => e.target.style.color = '#7aaeff'}
                      onMouseLeave={e => e.target.style.color = '#6b7a99'}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{padding: '20px 0',display: 'flex', alignItems: 'center', justifyContent: 'space-between',flexWrap: 'wrap', gap: 12,}}>

          <p style={{ fontSize: 13, color: '#4a5568' }}>© 2026 Accredian Clone. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" style={{ fontSize: 12, color: '#4a5568', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#7aaeff'}
                onMouseLeave={e => e.target.style.color = '#4a5568'}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}