"use client";
import { stats } from "../data";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{paddingTop: 100,background:"linear-gradient(135deg, #f7f9ff 0%, #ffffff 60%, #eef3ff 100%)",
        minHeight: "100vh", display: "flex",flexDirection: "column", justifyContent: "center",}}>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 0" }}>
        <div
          style={{display: "grid",gridTemplateColumns: "1fr 1fr", gap: 48,alignItems: "center",}}className="hero-grid">

          {/* Left Content */}
          <div>
            <div
              style={{display: "inline-flex", alignItems: "center", gap: 8, background: "#e8f0ff",
                borderRadius: 20, padding: "6px 14px", marginBottom: 24,}}>
                
              <span style={{ fontSize: 16 }}>🏆</span>
              <span style={{ fontSize: 13, color: "#1a6bff", fontWeight: 600 }}> Indias #1 Online Learning Platform </span>
            </div>

            <h1
              style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(36px, 5vw, 58px)",fontWeight: 800,lineHeight: 1.2, color: "#0a0f1e",marginBottom: 20,}}>
               
              Level Up Your Career{" "}
              <span
                style={{ background: "linear-gradient(135deg, #1a6bff, #4f8cff)", WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",}}>  With Indias  </span>
              <br />
              <span
                style={{ background: "linear-gradient(135deg, #1a6bff, #4f8cff)", WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",}}>
  
                Top Institutes
              </span>
            </h1>

            <p
              style={{ fontSize: 17, color: "#6b7394", lineHeight: 1.7, marginBottom: 32, maxWidth: 460,}}>
              Learn from top universities and grow your career with
              industry-relevant programs. Join 50,000+ professionals who
              transformed their careers.</p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#courses"
                style={{padding: "13px 28px", background: "white", color: "#1a6bff", border: "2px solid #1a6bff",borderRadius: 10,
                   fontWeight: 700,fontSize: 15, textDecoration: "none", transition: "all 0.2s",display: "inline-block",}}

                onMouseEnter={(e) => {
                  e.target.style.background = "#f0f4ff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                }}
              >
                Explore Courses
              </a>
              <a
                href="#contact"
                style={{padding: "13px 28px",background: "linear-gradient(135deg, #1a6bff, #4f8cff)",color: "white",
                  border: "none", borderRadius: 10, fontWeight: 700, fontSize: 15,textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(26,107,255,0.35)",transition: "all 0.2s",display: "inline-block",}}
                  
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 10px 28px rgba(26,107,255,0.45)"; }}
 
                onMouseLeave={(e) => {
                  e.target.style.transform = "none";
                  e.target.style.boxShadow = "0 6px 20px rgba(26,107,255,0.35)";
                }}
              >
                Talk to Expert
              </a>
            </div>

            {/* Trust badges */}
            <div
              style={{marginTop: 36, display: "flex", alignItems: "center", gap: 16,flexWrap: "wrap",}}>

              {["IIT", "IIM", "ISB"].map((inst) => (
                <div key={inst}
                  style={{display: "flex", alignItems: "center", gap: 6,background: "white",padding: "6px 14px",
                    borderRadius: 8, border: "1px solid #e4e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)",}}>
                    
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#1a6bff" }}>  ✓ </span>

                  <span style={{ fontSize: 12, fontWeight: 600, color: "#3d4461" }}> {inst} Certified </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div style={{ position: "relative" }} className="hero-image-wrap">
            <div
              style={{ borderRadius: 20, overflow: "hidden",boxShadow: "0 24px 80px rgba(26,107,255,0.18)", background: "linear-gradient(135deg, #1a1a2e, #16213e)",
                 aspectRatio: "4/3",display: "flex", alignItems: "center", justifyContent: "center",position: "relative",}}>
              
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=450&fit=crop"
                alt="Professional learning"
                width={600}
                height={450}
                style={{ width: "100%",height: "100%", objectFit: "cover", opacity: 0.9,}}/>
   
              {/* Floating badge */}
              <div
                style={{position: "absolute", bottom: 20, left: 20, background: "white", borderRadius: 12,
                  padding: "10px 16px", boxShadow: "0 8px 24px rgba(0,0,0,0.15)",display: "flex",alignItems: "center", gap: 10,}}>
  
                <div
                  style={{width: 36, height: 36,borderRadius: "50%", background: "linear-gradient(135deg, #1a6bff, #4f8cff)",
                    display: "flex",alignItems: "center",justifyContent: "center",}}>
 
                  <span style={{ color: "white", fontSize: 18 }}>🎓</span>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0a0f1e" }}> 50,000+ </div>
                  <div style={{ fontSize: 11, color: "#6b7394" }}>
                    Students Enrolled
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          style={{marginTop: 64,background: "white", borderRadius: 16,border: "1px solid #e4e8f0",boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
            padding: "32px 0",display: "flex",justifyContent: "space-around", flexWrap: "wrap", gap: 24,}}>
            
          <div style={{ textAlign: "center", padding: "0 24px" }}>
            <div
              style={{fontSize: 13,color: "#6b7394",marginBottom: 16,fontWeight: 600, letterSpacing: "0.5px",textTransform: "uppercase",}}>
              A Legacy of{" "}
              <span style={{ color: "#1a6bff" }}>Excellence &amp; Impact</span>
            </div>
          </div>
          {stats.map((s, i) => (
            <div
              key={i}
              style={{textAlign: "center", padding: "0 32px",borderLeft: i > 0 ? "1px solid #e4e8f0" : "none",}}>
              <div
                style={{fontSize: 36, fontWeight: 800,color: "#1a6bff",fontFamily: "Sora, sans-serif",}}>  {s.value} </div>
 
              <div style={{ fontSize: 13, color: "#6b7394", marginTop: 4 }}> {s.label} </div>
                
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div style={{ marginTop: 48, marginBottom: 48, textAlign: "center" }}>
          <p
            style={{fontSize: 13, color: "#6b7394", marginBottom: 20, fontWeight: 600,letterSpacing: "0.5px",}}>
            REAL-WORLD LEARNING POWERED BY{" "}
            <span style={{ color: "#1a6bff" }}>LEADING INSTITUTIONS</span>
          </p>
          <div
            style={{display: "flex",justifyContent: "center",alignItems: "center", gap: 40,flexWrap: "wrap",}}>

            {/* Google */}
            <div
              style={{display: "flex", alignItems: "center", gap: 4,opacity: 0.75,}}>
              <span style={{ fontSize: 28, fontWeight: 700 }}>
                <span style={{ color: "#4285F4" }}>G</span>
                <span style={{ color: "#EA4335" }}>o</span>
                <span style={{ color: "#FBBC05" }}>o</span>
                <span style={{ color: "#4285F4" }}>g</span>
                <span style={{ color: "#34A853" }}>l</span>
                <span style={{ color: "#EA4335" }}>e</span>
              </span>
            </div>
            {/* Microsoft */}
            <div
              style={{display: "flex",alignItems: "center", gap: 8,opacity: 0.75,}}>
 
              <div
                style={{ display: "grid",gridTemplateColumns: "1fr 1fr",gap: 2,}}>
  
                <div style={{ width: 14, height: 14, background: "#F25022" }} />
                <div style={{ width: 14, height: 14, background: "#7FBA00" }} />
                <div style={{ width: 14, height: 14, background: "#00A4EF" }} />
                <div style={{ width: 14, height: 14, background: "#FFB900" }} />
              </div>
              <span style={{ fontSize: 18, fontWeight: 600, color: "#737373" }}> Microsoft </span>
                
            </div>
            {["Amazon", "Flipkart", "Infosys"].map((name) => (
              <div
                key={name}
                style={{ fontSize: 16,fontWeight: 700, color: "#9aa3b8",letterSpacing: "0.5px",}}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image-wrap { display: none; }
        }
      `}</style>
    </section>
  );
}
