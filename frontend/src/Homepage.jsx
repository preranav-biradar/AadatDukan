import React, { useEffect, useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCheckCircle, FaHeart, FaBolt, FaSmile } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
export default function HomePage() {
  const images = [
    "/p1.jpg",
    
    
    "/pream.jpg"
  ];

  // dynamic blog gallery images (d1..d6 expected in public/)
  const blogImages = [
    "/d1.jpeg",
    "/d2.jpeg",
    "/d3.jpeg",
    "/d4.jpeg",
    "/d5.jpeg",
    "/d6.jpeg",
  ];

  // gallery refs and active state to highlight clicked image (no scroll-driven activation)
  const galleryRef = useRef(null);
  // -1 means no image is active (only click will set active)
  const [activeIdx, setActiveIdx] = useState(-1);

  // translate vertical wheel into horizontal scroll for better UX and prevent visible scrollbar
  useEffect(() => {
    const container = galleryRef.current;
    if (!container) return;
    const onWheel = (e) => {
      // Only intervene when vertical scroll is larger than horizontal
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };
    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

const teams = [
  { 
    name: "Virbhadra Biradar", 
    role: "Founder & Manager", 
    description: "Over 12 years of experience in agricultural trading and management, building strong relationships with farmers and local buyers.", 
    img: images[0] 
  },
  { 
    name: "Manmath Biradar", 
    role: "Co-Manager", 
    description: "Handles daily operations and customer engagement, ensuring smooth transactions and trust within the farming community.", 
    img: images[1] 
  }
];
  // Navbar style
  const nav = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  padding: "14px 60px",
    background: "rgba(15,23,42,0.95)",
    color: "#fff",
    width: "100%",
  };

  // Hero section full-screen
  const hero = {
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    backgroundImage: `linear-gradient(rgba(15,23,42,0.6), rgba(15,23,42,0.6)), url(/dukan.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // Animated Counter Hook
  const useAnimatedCounter = (target, duration = 1400) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      let start = 0;
      const steps = Math.max(20, Math.floor(duration / 30));
      const increment = Math.ceil(target / steps);
      const id = setInterval(() => {
        start += increment;
        if (start >= target) {
          setValue(target);
          clearInterval(id);
        } else {
          setValue(start);
        }
      }, 30);
      return () => clearInterval(id);
    }, [target, duration]);
    return value;
  };

  // Stats Counters
  const happyCustomers = useAnimatedCounter(400000, 1200);
  const markets = useAnimatedCounter(25, 1000);
  const partners = useAnimatedCounter(120, 1100);

  const statsContainer = {
    display: "flex",
    gap: "18px",
    justifyContent: "center",
    marginTop: "18px",
    flexWrap: "wrap",
    width: "100%",
  };

  const stat = {
    background: "#fff",
    color: "#111827",
    padding: "22px 28px",
    borderRadius: 10,
    minWidth: 180,
    boxShadow: "0 8px 24px rgba(2,6,23,0.08)",
  };

  const sectionStyle = {
    minWidth: "222vh",
    minHeight: "100vh",
    padding: "56px 20px",
    textAlign: "center",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const teamGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "22px",
    padding: "24px",
    width: "100%",
    boxSizing: "border-box",
  };

  const teamCard = {
    background: "linear-gradient(0deg, rgba(17,24,39,0.03), rgba(17,24,39,0.03))",
    borderRadius: 10,
    overflow: "hidden",
    textAlign: "left",
    boxShadow: "0 6px 18px rgba(2,6,23,0.06)",
  };

  const footer = {
    background: "#0b1220",
    color: "#cbd5e1",
    padding: "36px 20px",
    width: "100%",
    boxSizing: "border-box",
  };

  const formatNumber = (v) => {
    if (v >= 1000000) return (v / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (v >= 1000) return (v / 1000).toFixed(v % 1000 === 0 ? 0 : 1).replace(/\.0$/, "") + "K";
    return v.toLocaleString();
  };

  const [userName, setUserName] = useState("");
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
  }, []);

  // Contact form state & handler
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact submit:", { name: contactName, message: contactMessage });
    alert("Thanks — your message was received (demo). We'll connect soon.");
    setContactName("");
    setContactMessage("");
  };

  return (
    <div style={{ width: "112%", overflowX: "hidden", margin: 0, padding: 0, background: "#111" }}>
   
  <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 60px",
        background: "rgba(15,23,42,0.95)",
        color: "#fff",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Left side: Logo */}
      <div style={{ fontWeight: 800, letterSpacing: 0.3, fontSize: 20 }}>
        🌾 Appa Aadat Dukan
      </div>

      {/* Right side: Nav links + Login */}
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <ScrollLink
          to="home"
          smooth
          duration={500}
          offset={-80}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth
          duration={500}
          offset={-80}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="team"
          smooth
          duration={500}
          offset={-80}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          Team
        </ScrollLink>
         <ScrollLink
          to="aadat-blog"
          smooth
          duration={500}
          offset={-80}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          Blog
        </ScrollLink>
         <ScrollLink
          to="contact"
          smooth
          duration={500}
          offset={-80}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          Contact
        </ScrollLink>

        {/* Login Button
        {!userName && (
          <RouterLink
            to="/login"
            style={{
             
              color: "white",
              textDecoration: "none",
              padding: "8px 16px",
              borderRadius: 6,
              fontWeight: 700,
              border: "1px solid rgba(0,0,0,0.08)",
              fontSize: 16,
            }}
          >
            Login
          </RouterLink>
        )} */}
      </div>
    </nav> 
        

      {/* Hero Section */}
      <header id="home" style={hero}>
        <div style={{ width: "100%", textAlign: "center", padding: "0 20px" }}>
          <h1 style={{ fontSize: "48px", margin: 0, lineHeight: 1.05 }}>
            “Empowering Farmers, Growing Together”
          </h1>
          <p style={{ marginTop: 12, fontSize: 18, color: "#e6edf3" }}>
            “We provide fair prices and reliable support to farmers, helping their produce reach the right market.”
          </p>
          <div style={{ marginTop: 18 }}>
            <a
              href="#team"
              style={{
                
                color: "#08122a",
                padding: "12px 22px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 700,
              }}
            
            >
              
            </a>
          </div>

          <div style={statsContainer}>
            <div style={stat}>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{formatNumber(happyCustomers)}+</div>
              <div style={{ color: "#6b7280", marginTop: 6 }}>Happy Customers</div>
            </div>
            <div style={stat}>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{formatNumber(markets)}+</div>
              <div style={{ color: "#6b7280", marginTop: 6 }}>Markets</div>
            </div>
            <div style={stat}>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{formatNumber(partners)}+</div>
              <div style={{ color: "#6b7280", marginTop: 6 }}>Trusted Partners</div>
            </div>
          </div>
        </div>
      </header>

      {/* OUR VALUES SECTION */}
<section id="values" style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#f9fafb" }}>
  <div style={{ maxWidth: 900, margin: "0 auto" }}>
    <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: "#1e293b" }}>
      We Believe in Trust, Fairness & Growth
    </h2>
    <p style={{ fontSize: 18, color: "#475569", lineHeight: 1.8 }}>
      AadatDukan Pvt. Ltd. stands on the values of <strong>Trust, Fairness, and Sustainable Growth</strong>.  
      We ensure that farmers receive fair prices for their hard work while buyers get the best quality produce.  
      Our vision is to build transparent, long-term relationships that empower both farmers and markets to thrive together.
    </p>
  </div>
</section>

 {/* Culture / About Split Section */}
      <section id="about" style={{ padding: "0", margin: 0 }}>
        <div style={{ display: "flex", flexWrap: "wrap", minHeight: 420 }}>
          {/* Left: dark background with image and heading */}
          <div style={{ flex: "1 1 540px", minHeight: 420, backgroundImage: `linear-gradient(rgba(2,6,23,0.66), rgba(2,6,23,0.66)), url(/farm.jpeg)`, backgroundSize: "cover", backgroundPosition: "center", color: "#fff", display: "flex", alignItems: "center", padding: "48px" }}>
            <div style={{ maxWidth: 640 }}>
              <h2 style={{ fontSize: 42, lineHeight: 1.05, margin: 0, fontWeight: 800 }}>We Believe in Trust, Fairness & Growth</h2>
              <p style={{ marginTop: 16, color: "#cbd5e1", fontSize: 16, lineHeight: 1.6 }}>Aadat Dukan strives to build lasting trust with farmers and traders by ensuring fair prices, transparent deals, and sustainable growth for everyone involved.</p>
              <div style={{ marginTop: 22 }}>
                <a href="#contact" style={{ background: "#f59e0b", color: "#08122a", padding: "12px 22px", borderRadius: 6, textDecoration: "none", fontWeight: 700 }}>Get In Touch</a>
              </div>
            </div>
          </div>

          {/* Right: yellow panel with culture bullets */}
          <div style={{ flex: "0 0 420px", background: "#f8b739", padding: "48px 36px", display: "flex", alignItems: "center" }}>
            <div style={{ color: "#08122a", maxWidth: 380 }}>
              <h3 style={{ fontSize: 32, marginTop: 0, marginBottom: 12 }}>Our Culture</h3>
              <p style={{ color: "#0b1220", marginBottom: 18 }}> At AadatDukan, we nurture a culture of dedication, integrity, and unity.  
      Our team works passionately to support farmers and traders alike — ensuring fair trade, transparency, and mutual respect.</p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#0b1220" }}>
                <li style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}><FaCheckCircle style={{ color: "#0b1220", marginTop: 4 }} /> <div><strong>Work With Purpose</strong> Every grain matters — we put our heart into ensuring farmers’ success and satisfaction.</div></li>
                <li style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}><FaHeart style={{ color: "#0b1220", marginTop: 4 }} /> <div><strong>Be Fearless</strong> - We embrace innovation in agriculture and trade</div></li>
                <li style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}><FaBolt style={{ color: "#0b1220", marginTop: 4 }} /> <div><strong>Stay Grounded</strong> - Honesty and simplicity are at our core</div></li>
                <li style={{ display: "flex", gap: 12, alignItems: "flex-start" }}><FaSmile style={{ color: "#0b1220", marginTop: 4 }} /> <div><strong>Build Together</strong> - We grow as a team — supporting one another with respect, empathy, and collaboration.</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>


   {/* Team Section */}
<section id="team" style={{ padding: "60px 20px", background: "#f8fafc" }}>
  <h3 style={{ textAlign: "center", marginBottom: 6, fontSize: 28, color: "black" }}>
    Passionate & Experienced Management Team
  </h3>
  <p style={{ textAlign: "center", color: "#64748b", fontSize: 18, marginBottom: 40 }}>
    Trust built over decades of delivering value to our farmers
  </p>

  <div 
    style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      flexWrap: "wrap", 
      gap: "30px"
    }}
  >
    {teams.map((t, idx) => (
      <div 
        key={idx} 
        style={{ 
          display: "flex", 
          alignItems: "center", 
          background: "#ffffff", 
          borderRadius: 12, 
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)", 
          padding: "15px 20px",
          width: 480, // width of each profile block
          gap: 20
        }}
      >
        {/* Photo */}
        <div 
          style={{
            width: 130,
            height: 130,
            borderRadius: "50%",
            backgroundImage: `url(${t.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexShrink: 0
          }}
        />

        {/* Description beside photo */}
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: 20, fontWeight: 700, color: "#1e293b", marginBottom: 6 }}>
            {t.name}
          </h4>
          <p style={{ color: "#475569", fontWeight: 600, marginBottom: 6 }}>{t.role}</p>
          <p style={{ color: "#334155", lineHeight: 1.5 }}>{t.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>
      <section id="aadat-blog" style={{ background: "#f9fafb", padding: "50px 20px" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <h2 style={{ textAlign: "center", color: "#111827", fontWeight: 800, marginBottom: 30 }}>
      Our Aadat Dukan – Where Traditions Meet Trade
    </h2>

    <p style={{ color: "#374151", fontSize: 18, lineHeight: 1.8, textAlign: "justify", marginBottom: 18 }}>
      In  <strong>Appa Aadat Dukan</strong>, farmers bring their hard-earned crops like wheat, jwari, tur, mugh, and soyabin.
      Below are recent moments from the Aadat — browse the images, and watch the short video clip underneath.
    </p>

    {/* Dynamic horizontal image strip (cards) */}
    <>
      <style>{`
        .blog-gallery { scroll-snap-type: x mandatory; -ms-overflow-style: none; scrollbar-width: none; }
        .blog-gallery::-webkit-scrollbar { display: none; }
        .blog-card { scroll-snap-align: center; }
      `}</style>
      <div ref={galleryRef} className="blog-gallery" style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 8, marginBottom: 18 }}>
      {blogImages.map((src, i) => {
        const isActive = i === activeIdx;
        return (
          <div
            key={i}
            data-idx={i}
            className="blog-card"
            style={{
              minWidth: isActive ? 300 : 200,
              height: isActive ? 340 : 240,
              borderRadius: 12,
              overflow: "hidden",
              flex: "0 0 auto",
              boxShadow: isActive ? "0 12px 40px rgba(2,6,23,0.28)" : "0 8px 30px rgba(2,6,23,0.12)",
              transform: isActive ? "translateY(-8px) scale(1.12)" : "translateY(0) scale(1)",
              transition: "all 300ms ease",
              background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
              position: "relative",
            }}
            tabIndex={0}
            role="button"
            onClick={() => {
              const container = galleryRef.current;
              const card = container.querySelector(`[data-idx='${i}']`);
              if (card) {
                card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                setActiveIdx(i);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const container = galleryRef.current;
                const card = container.querySelector(`[data-idx='${i}']`);
                if (card) {
                  card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                  setActiveIdx(i);
                }
              }
            }}
          >
            <img src={src} alt={`blog-${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            {/* overlay label removed as requested */}
          </div>
        );
      })}
    </div>
    </>
    <br />
    <br />

    {/* Video and info: video left, info right */}
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap", marginBottom: 40 }}>
      <div style={{ flex: "0 0 420px", maxWidth: 420 }}>
        <video
          src="video1.mp4"
          controls
          style={{
            width: "100%",
            height: 260,
            objectFit: "cover",
            borderRadius: 10,
            boxShadow: "0 10px 30px rgba(2,6,23,0.14)",
            background: "#000",
          }}
        />
      </div>

      <div style={{ flex: "1 1 360px", minWidth: 260, color: "#374151", fontSize: 16, lineHeight: 1.75 }}>
        <h3 style={{ marginTop: 0, fontSize: 22, color: "#0f1724" }}>Aadat Dukan — Traditions & Trade</h3>
        <p>
          Farmers bring produce such as wheat, jwari, tur, mugh, and soyabin. Traders and customers interact daily,
          negotiating prices and ensuring produce reaches the right buyers. Our market is rooted in transparency and respect for farmers' livelihoods.
        </p>
        <p>
          We ensure fair pricing, proper grading, and direct market access. If you'd like to know more about a specific product or day,
          reach out using the contact section below.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Workplace gallery */}
      <section id="workplace" style={{ padding: "40px 20px", background: "#f1f5f9" }}>
  <div style={{ maxWidth: 1300, margin: "0 auto", textAlign: "center" }}>
    <h3 style={{ color: "black", fontSize: 32, fontWeight: 700, marginBottom: 12 }}>
      Our Workplace
    </h3>
    <p style={{ fontSize: 18, color: "#475569", marginBottom: 40, fontStyle: "italic" }}>
      “A place where teamwork grows, ideas bloom, and every effort leads to progress.”
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        flexWrap: "nowrap",
      }}
    >
      <div
        style={{
          height: 300,
          width: 300,
          background: `url(/g1.jpeg) center/cover no-repeat`,
          border: "4px solid #fff",
          borderRadius: 12,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      />
      <div
        style={{
          height: 300,
          width: 300,
          background: `url(/workplace2.jpg) center/cover no-repeat`,
          border: "4px solid #fff",
          borderRadius: 12,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      />
      <div
        style={{
          height: 300,
          width: 300,
          background: `url(/workplace3.jpg) center/cover no-repeat`,
          border: "4px solid #fff",
          borderRadius: 12,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      />
      <div
        style={{
          height: 300,
          width: 300,
          background: `url(/download.jpeg) center/cover no-repeat`,
          border: "4px solid #fff",
          borderRadius: 12,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  </div>
</section>


      {/* Contact Section */}
      
     <section
  id="contact"
  style={{
    padding: "60px 20px",
    background: "#0f1724",
    color: "#e6eef6",
    fontFamily: "Poppins, sans-serif",
  }}
>
  <div
    style={{
      maxWidth: 1100,
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      gap:60,
      justifyContent: "space-between",
    }}
  >
    {/* Company Info */}
    <div style={{ flex: 1, minWidth: 260 }}>
      <h2 style={{ fontWeight: 800, color: "#fff", fontSize: 22 }}>
        Appa Aadat Dukan Pvt. Ltd.
      </h2>
      <p style={{ marginTop: 10, color: "#94a3b8", lineHeight: 1.6 }}>
        Delivering excellence and innovation across all our business ventures.
      </p>
      <p style={{ marginTop: 20, color: "#64748b", fontSize: 14 }}>
        © {new Date().getFullYear()} Appa Aadat. All rights reserved.
      </p>

      {/* Social Media Icons */}
      <div
        style={{
          display: "flex",
          gap: 18,
          alignItems: "center",
          marginTop: 22,
        }}
      >
        <a href="#" style={{ color: "#cbd5e1", fontSize: 20 }}>
          <FaFacebook />
        </a>
        <a href="https://x.com/BiradarPrerana" style={{ color: "#cbd5e1", fontSize: 20 }}>
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/prerana.v.b/?hl=en"
          style={{ color: "#cbd5e1", fontSize: 20 }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/prerana-biradar-a5643b267/"
          style={{ color: "#cbd5e1", fontSize: 20 }}
        >
          <FaLinkedin />
        </a>
      </div>
    </div>

    {/* Quick Links */}
    <div style={{ flex: 1, minWidth: 180 }}>
      <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12 }}>Quick Links</h3>
      <ul style={{ listStyle: "none", padding: 0, lineHeight: 2, color: "#cbd5e1" }}>
        <li>Home</li>
        <li>Capabilities</li>
        <li>Group Businesses</li>
        <li>Careers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* Contact Details */}
    <div style={{ flex: 1, minWidth: 180 }}>
      <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12 }}>Contact Us</h3>
      <div style={{ color: "#cbd5e1", lineHeight: 1.8 }}>
        <strong>Maharashtra (Office ):</strong>
        <div>Modha Road, Udgir – 413517</div>
        <strong style={{ display: "block", marginTop: 12 }}>Contact 1:</strong>
        <div>Virbhadra Biradar : 9168005909</div>
        <strong style={{ display: "block", marginTop: 12 }}>Contact 2:</strong>
        <div>Dayanand Biradar : 9021528929</div>
      </div>
    </div>

    {/* Contact Form */}
    <div style={{ flex: 1, minWidth: 300 }}>
      <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12 }}>Feedback</h3>
      <form onSubmit={handleContactSubmit}>
        <input
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          placeholder="Your Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: 10,
            borderRadius: 6,
            border: "1px solid #334155",
            background: "#1e293b",
            color: "#e2e8f0",
          }}
        />
        <textarea
          value={contactMessage}
          onChange={(e) => setContactMessage(e.target.value)}
          placeholder="Your Message"
          rows={5}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: 10,
            borderRadius: 6,
            border: "1px solid #334155",
            background: "#1e293b",
            color: "#e2e8f0",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#f59e0b",
            color: "#0f172a",
            padding: "10px 20px",
            border: "none",
            borderRadius: 6,
            fontWeight: 700,
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#fbbf24")}
          onMouseOut={(e) => (e.target.style.background = "#f59e0b")}
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>


     
    </div>
  );
}
