import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Services", "Team", "Connect"];

const SERVICES = [
  {
    title: "Brand Strategy",
    desc: "We craft compelling brand identities that resonate deeply with your target audience and set you apart from the competition.",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    tag: "01",
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven campaigns across all digital channels — SEO, paid ads, email, and beyond — built to convert and retain.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tag: "02",
  },
  {
    title: "Content Creation",
    desc: "Scroll-stopping content crafted by experts — from video scripts to blog articles — that builds authority and drives engagement.",
    img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&q=80",
    tag: "03",
  },
  {
    title: "Social Media Management",
    desc: "Full-service social presence management. We grow your community, spark conversations, and turn followers into loyal customers.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    tag: "04",
  },
  {
    title: "Analytics & Reporting",
    desc: "Crystal-clear dashboards and monthly reports that translate complex data into decisions that move the needle.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tag: "05",
  },
  {
    title: "Creative Campaigns",
    desc: "Bold, culturally-tuned campaign concepts that cut through the noise and leave a lasting impression on your market.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    tag: "06",
  },
];

const TEAM = [
  {
    name: "Ted Bamo",
    role: "CEO & Founder",
    img: "/src/Assets/images/team/SirTed.png",
    quote: "Marketing is the art of telling stories that matter.",
  },
  {
    name: "Siouxie Gail Say",
    role: "Creative Director",
    img: "/src/Assets/images/team/sushi.png",
    quote: "Every click is a conversation waiting to happen.",
  },
  {
    name: "Brix Fiesta",
    role: "Art Director",
    img: "/src/Assets/images/team/brixfiesta.png",
    quote: "Great content doesn't interrupt — it invites.",
  },
  {
    name: "Andrei Poma",
    role: "Web Developer / UI/UX Designer",
    img: "/src/Assets/images/team/andrei.png",
    quote: "Numbers don't lie. They tell your best story.",
  },
  {
    name: "Edric Dacumos",
    role: "Video Editor / Motion Designer",
    img: "/src/Assets/images/team/edric.png",
    quote: "Community is the new currency of brands.",
  },
  {
    name: "Aldrin Dela Cruz",
    role: "Video Editor / Motion Designer",
    img: "/src/Assets/images/team/aldrin.png",
    quote: "Community is the new currency of brands.",
  },
  {
    name: "Brix Aldrin Macapagal",
    role: "Video Editor / Motion Designer",
    img: "/src/Assets/images/team/brixaldrin.png",
    quote: "Community is the new currency of brands.",
  },
    {
    name: "Jan Lorenz Cortez",
    role: "Video Editor / Motion Designer",
    img: "/src/Assets/images/team/janjan.png",
    quote: "Community is the new currency of brands.",
  },
];

const SOCIALS = [
  {
    name: "Instagram",
    handle: "@lyveramarketing",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Lyvera Marketing",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Lyvera Marketing Services",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@lyvera",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.14 8.14 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    handle: "@lyveramktg",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamIdx, setTeamIdx] = useState(0);
  const [theme, setTheme] = useState("dark");
  const isDark = theme === "dark";
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisibleSections((p) => ({ ...p, [e.target.id]: true }));
        });
      },
      { threshold: 0.12 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const prevTeam = () => setTeamIdx((i) => (i - 1 + TEAM.length) % TEAM.length);
  const nextTeam = () => setTeamIdx((i) => (i + 1) % TEAM.length);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0a0a0a] text-white" : "bg-white text-[#0a0a0a]"} font-sans overflow-x-hidden`} data-theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .font-display { font-family: 'Open Sans', sans-serif; }
        .font-body { font-family: 'Open Sans', sans-serif; }
        .fade-up { opacity: 0; transform: translateY(32px); transition: opacity 0.8s cubic-bezier(.22,1,.36,1), transform 0.8s cubic-bezier(.22,1,.36,1); }
        .fade-up.visible { opacity: 1; transform: none; }
        .fade-up.d1 { transition-delay: 0.1s; }
        .fade-up.d2 { transition-delay: 0.2s; }
        .fade-up.d3 { transition-delay: 0.3s; }
        .fade-up.d4 { transition-delay: 0.4s; }
        .card-hover { transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(0,0,0,0.5); }
        .underline-anim { position: relative; }
        .underline-anim::after { content:''; position:absolute; left:0; bottom:-2px; width:0; height:1px; background:#f97316; transition: width 0.3s ease; }
        .underline-anim:hover::after { width:100%; }
        .grain { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E"); }
        .gold { color: #f97316; }
        .gold-border { border-color: #f97316; }
        .gold-bg { background-color: #f97316; }
        .slider-track { display: flex; transition: transform 0.6s cubic-bezier(.22,1,.36,1); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f5f5f5; }
        ::-webkit-scrollbar-thumb { background: #f9731644; border-radius: 3px; }
      `}</style>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-body ${scrolled ? (isDark ? "bg-[#0a0a0a]/95 border-b border-white/10" : "bg-white/95 border-b border-slate-200/60") : (isDark ? "bg-[#0a0a0a]/90 border-b border-white/5" : "bg-white/90 border-b border-slate-200/40")}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
            <span className="font-display text-2xl font-light tracking-widest gold">LYVERA</span>
            <span className={`${isDark ? "text-white/30" : "text-slate-500"} text-xs tracking-[0.3em] uppercase hidden sm:block mt-1`}>Marketing</span>
          </button>
          <div className="hidden md:flex items-center gap-4">
            
            <div className="flex items-center gap-10">
              {NAV_LINKS.map((l) => (
                <button key={l} onClick={() => scrollTo(l.toLowerCase().replace(/\s/g, "-"))} className={`${isDark ? "text-white/60 hover:text-white" : "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"} text-sm tracking-widest uppercase underline-anim transition-colors duration-200`}>
                  {l}
                </button> 
              ))}
              <button onClick={() => scrollTo("connect")} className="border rounded-full gold-border bg-[#f97316] text-black text-sm tracking-widest uppercase px-6 py-2.5 hover:bg-[#fb923c] transition-all duration-300">
                Get Started
              </button>
              <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`flex items-center gap-2 border ${isDark ? "border-white/10 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white" : "border-slate-200/60 bg-white/60 text-[#0a0a0a]/80 hover:bg-white/90 hover:text-[#0a0a0a]"} transition-all duration-200 px-4 py-2 rounded-full`}
            >
              <span className="text-lg">{isDark ? "☀️" : "🌙"}</span>
            </button>
            </div>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden ${isDark ? "text-white/70 hover:text-white" : "text-[#0a0a0a]/70 hover:text-[#0a0a0a]"} p-2`}>
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
        {menuOpen && (
          <div className={`md:hidden px-6 py-6 flex flex-col gap-5 font-body ${isDark ? "bg-[#0d0d0d] border-t border-white/5" : "bg-white border-t border-slate-200/40"}`}>
           
            {[...NAV_LINKS, "Get Started"].map((l) => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase().replace(/\s/g, "-"))} className={`${isDark ? "text-white/70 hover:text-orange-200" : "text-[#0a0a0a]/70 hover:text-[#f97316]"} text-sm tracking-widest uppercase text-left transition-colors duration-200`}>
                {l}
              </button>
            ))}
             <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`flex items-center justify-between border ${isDark ? "border-white/10 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white" : "border-slate-200/60 bg-white/60 text-[#0a0a0a]/70 hover:bg-white/70 hover:text-[#0a0a0a]"} transition-all duration-200 px-4 py-3 rounded-full w-fit`}
>             
              <span className="text-lg">{isDark ? "☀️" : "🌙"}</span>
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-[#04050a] via-[#05060d] to-[#000]" : "bg-gradient-to-br from-[#f3f4f6] via-[#e5e7eb] to-[#f9fafb]"}`} />
        <div className={`absolute inset-0 ${isDark ? "bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.35),transparent_55%)] mix-blend-screen" : "bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.25),transparent_55%)]"}`} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-16 top-24 w-72 h-72 rounded-full bg-[#f97316]/10 blur-3xl" />
          <div className="absolute right-10 top-32 w-56 h-56 rounded-full bg-[#f97316]/15 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#f97316]/08 blur-3xl" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="10" y1="10" x2="80" y2="25" stroke="rgba(249,115,22,0.2)" strokeWidth="0.3" />
            <line x1="15" y1="70" x2="85" y2="60" stroke="rgba(249,115,22,0.15)" strokeWidth="0.3" />
            <circle cx="10" cy="10" r="1.5" fill="rgba(249,115,22,0.6)" />
            <circle cx="80" cy="25" r="1.2" fill="rgba(249,115,22,0.5)" />
            <circle cx="15" cy="70" r="1.2" fill="rgba(249,115,22,0.4)" />
            <circle cx="85" cy="60" r="1.2" fill="rgba(249,115,22,0.4)" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#f97316]/4 blur-[120px] pointer-events-none" />

        {/* Floating images */}
        <img
          src="https://images.unsplash.com/photo-1581093588401-4b755d282b87?w=800&q=80"
          alt="Floating design"
          className="hidden lg:block absolute -left-32 top-24 w-80 rounded-3xl shadow-2xl object-cover transform rotate-3 opacity-90"
        />
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
          alt="Floating design"
          className="hidden lg:block absolute -right-32 top-48 w-96 rounded-3xl shadow-2xl object-cover transform -rotate-6 opacity-90"
        />

        <div className="absolute top-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-orange-500/30 to-transparent hidden lg:block" />
        <div className="absolute bottom-32 left-16 w-40 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent hidden lg:block" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-10 opacity-0 animate-[fadeIn_0.8s_0.2s_forwards]" style={{ animation: "fadeIn 0.8s 0.2s forwards" }}>
            <span className={`text-xs tracking-widest uppercase font-body ${isDark ? "text-white/40" : "text-[#0a0a0a]/50"}`}>Digital Marketing</span>
            <span className={`inline-flex items-center gap-2 px-4 py-1 rounded-full ${isDark ? "bg-white/5 text-white/40" : "bg-black/5 text-[#0a0a0a]/60"} text-xs tracking-widest uppercase`}>
              <span className="w-1 h-1 rounded-full bg-[#f97316]" />
              Trusted by 100+ brands
            </span>
          </div>
          <h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-8" style={{ animation: "fadeUp 1s 0.35s both" }}>
            <span className={`block ${isDark ? "text-white" : "text-[#0a0a0a]"}`}>Grow Your Brand.</span>
            <span className={`block ${isDark ? "text-white/70" : "text-[#0a0a0a]/70"}`}>Dominate <span className="text-[#f97316]">Digital</span>.</span>
          </h1>
          <p className={`font-body font-light ${isDark ? "text-white/40" : "text-[#0a0a0a]/40"} text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed tracking-wide`} style={{ animation: "fadeUp 1s 0.55s both" }}>
            Lyvera helps businesses grow through strategic branding, high-performance digital campaigns, and content that converts — so you can focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animation: "fadeUp 1s 0.7s both" }}>
            <button onClick={() => scrollTo("connect")} className="bg-gradient-to-r from-[#f97316] to-[#fb923c] text-black font-body font-semibold tracking-widest uppercase text-sm px-10 py-4 rounded-full shadow-lg shadow-[#f97316]/20 hover:shadow-[#f97316]/35 transition-all duration-300">
              Book A Call
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" style={{ animation: "fadeIn 1s 1.2s both" }}>
          <span className={`font-body text-xs tracking-[0.3em] uppercase ${isDark ? "text-white/50" : "text-[#0a0a0a]/50"}`}>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>

        <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        `}</style>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        ref={setRef("services")}
        className={`py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto fade-up ${visibleSections["services"] ? "visible" : ""}`}
      >
        <div className="mb-16 md:mb-20 fade-up d1">
          <p className="font-body text-[#f97316]/70 text-xs tracking-[0.4em] uppercase mb-4">What We Do</p>
          <h2 className="font-display font-light text-4xl md:text-6xl text-[#0a0a0a]/90 leading-tight">
            Services Built<br /><em className="gold">for Results</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`card-hover group relative overflow-hidden ${isDark ? "bg-[#111010] border border-white/5" : "bg-white border border-slate-200/40"} cursor-default fade-up d${Math.min(i + 1, 4)} ${visibleSections["services"] ? "visible" : ""}`}
              style={{ transitionDelay: `${0.08 * i}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-[#111010] via-[#111010]/20" : "from-white/70 via-white/40"} to-transparent`} />
                <span className="absolute top-4 right-4 font-display text-orange-400/40 text-3xl font-light">{s.tag}</span>
              </div>
              <div className="p-6">
                <h3 className={`font-display text-xl font-light ${isDark ? "text-white" : "text-[#0a0a0a]"} mb-2 group-hover:text-orange-400 transition-colors duration-300`}>{s.title}</h3>
                <p className={`font-body ${isDark ? "text-white/40" : "text-[#0a0a0a]/60"} text-sm leading-relaxed`}>{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-orange-400/60 group-hover:text-orange-400 transition-colors duration-300">
                  <span className="font-body text-xs tracking-widest uppercase">Explore</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* TEAM */}
      <section
        id="team"
        ref={setRef("team")}
        className={`py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto fade-up ${visibleSections["team"] ? "visible" : ""}`}
      >
        <div className="mb-16 md:mb-20">
          <p className="font-body text-[#f97316]/70 text-xs tracking-[0.4em] uppercase mb-4">The People</p>
          <h2 className="font-display font-light text-4xl md:text-6xl leading-tight" style={{ color: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)" }}>
            Meet the<br /><em className="gold">Minds Behind</em>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          {/* Slider */}
          <div className="flex items-stretch gap-5 transition-all duration-700" style={{ transform: `translateX(calc(-${teamIdx * (100 / 3)}% - ${teamIdx * 20 / 3}px))` }}>
            {TEAM.map((m, i) => {
              const isActive = i === teamIdx;
              return (
                <div
                  key={m.name}
                  onClick={() => setTeamIdx(i)}
                  className={`card-hover flex-shrink-0 cursor-pointer transition-all duration-500 border ${isActive ? "border-orange-400/40 bg-[#14120e]" : "border-white/5 bg-white/5"} ${isDark ? "bg-[#14120e]" : "bg-white/5"}`}
                  style={{ width: "calc(33.33% - 13px)", minWidth: "260px" }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={m.img} alt={m.name} className={`w-full h-full object-cover transition-all duration-700 ${isActive ? "opacity-90 scale-100" : "opacity-40 grayscale scale-105"}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14120e] via-transparent to-transparent" />
                    {isActive && <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-[#f97316]" /> }
                  </div>
                  <div className="p-6">
                    <h3 className={`font-display text-xl font-light transition-colors duration-300 ${isActive ? "text-orange-400" : isDark ? "text-white/50" : "text-[#0a0a0a]/50"}`}>{m.name}</h3>
                    <p className={`font-body text-xs tracking-widest uppercase ${isDark ? "text-white/30" : "text-[#0a0a0a]/40"} mt-1 mb-4`}>{m.role}</p>
                    <p className={`font-display italic text-sm leading-relaxed transition-all duration-300 ${isActive ? (isDark ? "text-white/50" : "text-[#0a0a0a]/70") : (isDark ? "text-white/20" : "text-[#0a0a0a]/30")}`}>&quot;{m.quote}&quot;</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-10">
            <button onClick={prevTeam} className="w-12 h-12 border border-white/20 dark:border-orange-400/20 flex items-center justify-center text-white/40 dark:text-orange-400 hover:border-orange-400/50 hover:text-orange-400 transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <div className="flex gap-2">
              {TEAM.map((_, i) => (
                <button key={i} onClick={() => setTeamIdx(i)} className={`transition-all duration-300 rounded-full ${i === teamIdx ? "w-8 h-1.5 bg-[#f97316]" : "w-1.5 h-1.5 bg-black/20"}`} />
              ))}
            </div>
            <button onClick={nextTeam} className="w-12 h-12 border border-white/10 dark:border-[#f97316]/20 flex items-center justify-center text-white/40 dark:text-[#f97316]/50 hover:border-[#f97316]/50 hover:text-[#f97316] transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <span className="font-body text-white/20 text-xs ml-2 tracking-widest">{String(teamIdx + 1).padStart(2, "0")} / {String(TEAM.length).padStart(2, "0")}</span>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* CONNECT */}
      <section
        id="connect"
        ref={setRef("connect")}
        className={`py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto fade-up ${visibleSections["connect"] ? "visible" : ""}`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body text-[#f97316]/70 text-xs tracking-[0.4em] uppercase mb-4">Get in Touch</p>
          <h2 className="font-display font-light text-4xl md:text-6xl leading-tight mb-6 dark:text-white dark:opacity-90" style={{color: isDark ? "white" : "rgba(0, 0, 0, 0.9)"}}>
            Let&apos;s Create<br /><em className="gold">Something Great</em>
          </h2>
          <p className={`font-body text-sm leading-relaxed mb-10 max-w-sm ${isDark ? "text-white/70" : "text-[#0a0a0a]/70"} group-hover:${isDark ? "text-white" : "text-[#f97316]"} transition-colors duration-300`}>
              Ready to transform your brand? Reach out through any of our channels and a member of the Lyvera team will respond within 24 hours.
            </p>
            <div className="flex flex-col gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className={`group flex items-center gap-4 p-4 border ${isDark ? "border-white/5 bg-[#111010] hover:border-[#f97316]/30 hover:bg-[#14120e]" : "border-slate-200/40 bg-white hover:border-[#f97316]/30 hover:bg-white/90"} transition-all duration-300`}
                >
                  <div className={`${isDark ? "text-white/30" : "text-[#0a0a0a]/50"} group-hover:text-[#f97316] transition-colors duration-300`}>{s.icon}</div>
                  <div>
                    <p className={`font-body ${isDark ? "text-white/70" : "text-[#0a0a0a]/70"} text-sm group-hover:${isDark ? "text-white" : "text-[#f97316]"} transition-colors duration-300`}>{s.name}</p>
                    <p className={`font-body ${isDark ? "text-white/30" : "text-[#0a0a0a]/40"} text-xs`}>{s.handle}</p>
                  </div>
                  <svg className={`w-3.5 h-3.5 ml-auto ${isDark ? "text-white/20" : "text-[#0a0a0a]/40"} group-hover:text-[#f97316] group-hover:translate-x-1 transition-all duration-300`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`border ${isDark ? "border-white/5 bg-[#111010]" : "border-slate-200/40 bg-white"} p-8 md:p-10`}>
            <h3 className={`font-display text-2xl font-light ${isDark ? "text-white/80" : "text-[#0a0a0a]/90"} mb-7`}>Send a Message</h3>
            <div className="flex flex-col gap-5 font-body">
              <div>
                <label className={`text-xs tracking-widest uppercase ${isDark ? "text-white/30" : "text-[#0a0a0a]/50"} block mb-2`}>Full Name</label>
                <input type="text" placeholder="Your name" className={`w-full ${isDark ? "bg-[#0a0a0a] border border-white/10 text-white/70 placeholder-white/20" : "bg-white border border-slate-200/40 text-[#0a0a0a]/80 placeholder-[#6b7280]"} px-4 py-3 text-sm focus:outline-none focus:border-[#f97316]/50 transition-colors duration-200`} />
              </div>
              <div>
                <label className={`text-xs tracking-widest uppercase ${isDark ? "text-white/30" : "text-[#0a0a0a]/50"} block mb-2`}>Email</label>
                <input type="email" placeholder="you@company.com" className={`w-full ${isDark ? "bg-[#0a0a0a] border border-white/10 text-white/70 placeholder-white/20" : "bg-white border border-slate-200/40 text-[#0a0a0a]/80 placeholder-[#6b7280]"} px-4 py-3 text-sm focus:outline-none focus:border-[#f97316]/50 transition-colors duration-200`} />
              </div>
              <div>
                <label className={`text-xs tracking-widest uppercase ${isDark ? "text-white/30" : "text-[#0a0a0a]/50"} block mb-2`}>Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className={`w-full ${isDark ? "bg-[#0a0a0a] border border-white/10 text-white/70 placeholder-white/20" : "bg-white border border-slate-200/40 text-[#0a0a0a]/80 placeholder-[#6b7280]"} px-4 py-3 text-sm focus:outline-none focus:border-[#f97316]/50 transition-colors duration-200 resize-none`} />
              </div>
              <button className="bg-[#f97316] text-black font-medium tracking-widest uppercase text-sm px-8 py-4 hover:bg-[#fb923c] transition-colors duration-300 mt-1">
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-body">
          <span className="font-display text-xl font-light tracking-widest gold">LYVERA</span>
          <p className={`${isDark ? "text-white/50" : "text-[#0a0a0a]/60"} text-xs tracking-widest text-center`}>
            © {new Date().getFullYear()} Lyvera Marketing Services. All rights reserved.
          </p>
          <div className="flex gap-4">
            {SOCIALS.slice(0, 3).map((s) => (
              <a key={s.name} href={s.href} className="text-[#0a0a0a]/30 hover:text-[#f97316] transition-colors duration-200">{s.icon}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
