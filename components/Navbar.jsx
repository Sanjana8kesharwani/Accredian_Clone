'use client';
import { useState, useEffect } from 'react';
import { navLinks } from '../data';
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? 'rgba(255,255,255,0.95)' : 'white',
       backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: '1px solid #e4e8f0', transition: 'all 0.3s ease',boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',}}>

      <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64,}}>

        {/* Logo */}
<Link href="/">
  <span style={{ fontFamily: 'Sora, sans-serif',fontWeight: 800, fontSize: 22, color: '#1a6bff',letterSpacing: '-0.5px'}}> accredian </span>
</Link>

        {/* Center tagline */}
        <span style={{ fontSize: 12, color: '#6b7394', display: 'none', letterSpacing: '0.3px' }}
          className="tagline">
          Navigate your ideal career path
        </span>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} style={{
              padding: '6px 14px', borderRadius: 6,
              color: link.label === 'Courses' ? '#1a6bff' : '#3d4461',
              background: link.label === 'Courses' ? '#e8f0ff' : 'transparent',
              fontWeight: 500, fontSize: 14, textDecoration: 'none',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { if (link.label !== 'Courses') e.target.style.background = '#f0f4ff'; }}
              onMouseLeave={e => { if (link.label !== 'Courses') e.target.style.background = 'transparent'; }}
            >
              {link.label}
            </a>
          ))}
          <a href="#login" style={{
            padding: '7px 18px', borderRadius: 8,
            border: '1.5px solid #1a6bff', color: '#1a6bff',
            fontWeight: 600, fontSize: 14, textDecoration: 'none',
            marginLeft: 4, transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.target.style.background = '#1a6bff'; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#1a6bff'; }}
          >
            Login
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4,
        }} className="hamburger" aria-label="Menu">
          <div style={{ width: 24, height: 2, background: '#3d4461', marginBottom: 5, transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: 24, height: 2, background: '#3d4461', marginBottom: 5,
            opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <div style={{ width: 24, height: 2, background: '#3d4461', transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'white', borderTop: '1px solid #e4e8f0',
          padding: '12px 24px 20px',
        }}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '10px 0',
              color: '#3d4461', fontWeight: 500, fontSize: 15,
              textDecoration: 'none', borderBottom: '1px solid #f0f4ff',
            }}>
              {link.label}
            </a>
          ))}
          <a href="#login" style={{
            display: 'inline-block', marginTop: 12,
            padding: '10px 24px', background: '#1a6bff', color: '#fff',
            borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none',
          }}>Login</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (min-width: 900px) {
          .tagline { display: block !important; }
        }
      `}</style>
    </nav>
  );
}