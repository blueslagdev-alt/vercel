"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Braces, Check, ChevronRight, CircleCheck, Code2, Figma, Gauge, Github, Linkedin, Mail, Menu, Moon, Palette, ShoppingBag, Sparkles, Sun, X, Zap } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  { name: "Tejassvi", url: "https://tejassvi.com/", tag: "Fashion · Shopify", result: "Luxury shopping experience", color: "#dbcac0" },
  { name: "Art Avenue", url: "https://www.artavenue.com/", tag: "Art · Shopify OS 2.0", result: "Editorial UX at scale", color: "#d7dfcf" },
  { name: "CraftCo Export", url: "https://craftcoexport.com/", tag: "Homeware · Shopify", result: "Streamlined product discovery", color: "#d5c5af" },
  { name: "Inktle", url: "https://inktle.com/", tag: "Lifestyle · Shopify", result: "Mobile-first storefront", color: "#c9cadc" },
  { name: "Claphic", url: "https://claphic.com/", tag: "Print · Shopify", result: "Frictionless customization", color: "#d1d8df" },
  { name: "MAE", url: "https://mae.in/", tag: "Fashion · Shopify", result: "Conversion-led redesign", color: "#e6d0d0" },
];

const services = [
  { n: "01", icon: ShoppingBag, title: "Custom Shopify", copy: "Flexible, maintainable Shopify 2.0 themes engineered around your brand and built to scale." },
  { n: "02", icon: Figma, title: "Figma to Shopify", copy: "Pixel-precise builds that preserve the design vision while prioritizing usability and performance." },
  { n: "03", icon: Gauge, title: "CRO & UX", copy: "Data-informed improvements that remove friction and turn more store visitors into loyal customers." },
  { n: "04", icon: Zap, title: "Speed Optimization", copy: "Focused technical audits and lean implementation for stronger Core Web Vitals and faster journeys." },
];

const skills = [
  { icon: ShoppingBag, title: "Shopify Development", items: ["Liquid & custom themes", "Online Store 2.0", "Shopify CLI", "REST & GraphQL APIs"] },
  { icon: Code2, title: "Frontend Development", items: ["JavaScript / TypeScript", "React & Next.js", "Tailwind CSS / Sass", "MUI & responsive UI"] },
  { icon: Palette, title: "Tools & Creative", items: ["Figma & Adobe XD", "Photoshop & Illustrator", "Premiere Pro", "After Effects"] },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => { const saved = localStorage.getItem("theme"); const value = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; setDark(value); document.documentElement.classList.toggle("dark", value); }, []);
  const toggle = () => { const value = !dark; setDark(value); document.documentElement.classList.toggle("dark", value); localStorage.setItem("theme", value ? "dark" : "light"); };
  return <button aria-label="Toggle color theme" onClick={toggle} className="icon-button">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>;
}

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  return <main>
    <header className="nav-wrap">
      <a href="#top" className="logo" aria-label="Aayush Paliwal home">AP<span>.</span></a>
      <nav className={menu ? "nav-links open" : "nav-links"}>
        {['About','Work','Services','Experience'].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setMenu(false)}>{x}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setMenu(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a>
      </nav>
      <div className="nav-actions"><ThemeToggle /><button className="icon-button menu-button" aria-label="Open menu" onClick={() => setMenu(!menu)}>{menu ? <X size={20}/> : <Menu size={20}/>}</button></div>
    </header>

    <section id="top" className="hero section-shell">
      <div className="hero-glow" />
      <Reveal className="hero-content">
        <div className="eyebrow"><span className="status-dot" /> Available for select projects <span className="eyebrow-line" /> 2026</div>
        <h1>Shopify stores<br/>built to <span className="scribble">convert.</span></h1>
        <p>I&apos;m <strong>Aayush Paliwal</strong>, a Shopify &amp; Next.js developer. I build fast, scalable ecommerce experiences that look sharp and sell smarter.</p>
        <div className="hero-actions"><a href="#work" className="button primary">View my work <ArrowDownRight size={18}/></a><a href="#contact" className="text-link">Start a project <ArrowUpRight size={17}/></a></div>
      </Reveal>
      <Reveal className="hero-card">
        <div className="code-window">
          <div className="window-top"><div><i/><i/><i/></div><span>theme.liquid</span><Braces size={15}/></div>
          <div className="code-body"><span><b>01</b> <em>{`{%`}</em> section <q>&apos;product-hero&apos;</q> <em>{`%}`}</em></span><span><b>02</b> &nbsp;&lt;<mark>div</mark> class=<q>&quot;experience&quot;</q>&gt;</span><span><b>03</b> &nbsp;&nbsp;&lt;<mark>h1</mark>&gt;<u>Built for growth.</u>&lt;/<mark>h1</mark>&gt;</span><span><b>04</b> &nbsp;&nbsp;&lt;<mark>Performance</mark> score=<q>&quot;98&quot;</q> /&gt;</span><span><b>05</b> &nbsp;&lt;/<mark>div</mark>&gt;</span><span><b>06</b> <em>{`{%`}</em> endsection <em>{`%}`}</em></span></div>
          <div className="metric-float"><span><Gauge size={20}/></span><div><strong>98</strong><small>Performance</small></div><Sparkles size={16}/></div>
        </div>
      </Reveal>
      <div className="hero-proof"><span>Trusted experience across</span><strong>100+ STORES</strong><strong>4+ YEARS</strong><strong>GLOBAL BRANDS</strong></div>
    </section>

    <section id="about" className="section-shell about section-pad">
      <Reveal><div className="section-label">01 / ABOUT</div><h2>I turn ambitious ecommerce ideas into <span>high-performing realities.</span></h2></Reveal>
      <div className="about-grid"><Reveal><div className="portrait-card"><div className="portrait-art"><div className="avatar">AP</div><div className="orbit one"/><div className="orbit two"/></div><div className="portrait-caption"><span>Based in India</span><span>Working worldwide ↗</span></div></div></Reveal>
      <Reveal className="about-copy"><p className="lead">For over four years, I&apos;ve helped founders and teams launch, rebuild, and optimize Shopify stores that are easy to use—and hard to leave.</p><p>My sweet spot sits where engineering, design, and commerce meet. I solve difficult theme challenges, translate brand systems into thoughtful interfaces, and keep performance and conversion in view at every decision.</p><div className="stats"><div><strong>100<span>+</span></strong><small>Stores built & optimized</small></div><div><strong>4<span>+</span></strong><small>Years of experience</small></div><div><strong>98<span>/100</span></strong><small>Target performance</small></div></div><a href="#contact" className="inline-link">Let&apos;s build something great <ArrowUpRight size={17}/></a></Reveal></div>
    </section>

    <section className="skills-band"><div className="section-shell section-pad"><Reveal><div className="section-label light">02 / CAPABILITIES</div><div className="split-heading"><h2>The right tools.<br/><span>Used thoughtfully.</span></h2><p>Deep Shopify expertise, modern frontend engineering, and a sharp design eye—all under one roof.</p></div></Reveal><div className="skills-grid">{skills.map((skill, i) => <Reveal key={skill.title} className="skill-card"><div className="skill-head"><span>0{i+1}</span><skill.icon size={25}/></div><h3>{skill.title}</h3><ul>{skill.items.map(x => <li key={x}><Check size={15}/>{x}</li>)}</ul></Reveal>)}</div></div></section>

    <section id="work" className="section-shell section-pad work"><Reveal><div className="section-label">03 / SELECTED WORK</div><div className="split-heading"><h2>Commerce that<br/><span>earns attention.</span></h2><p>A selection of Shopify experiences designed and developed to move brands forward.</p></div></Reveal><div className="project-grid">{projects.map((p, i) => <Reveal className="project" key={p.name}><a href={p.url} target="_blank" rel="noreferrer"><div className="project-image" style={{backgroundColor:p.color}}><img src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(p.url)}?w=1000`} alt={`${p.name} website preview`} loading="lazy"/><span className="visit">Visit site <ArrowUpRight size={16}/></span><span className="project-number">0{i+1}</span></div><div className="project-info"><div><h3>{p.name}</h3><span>{p.tag}</span></div><p><CircleCheck size={15}/>{p.result}</p></div></a></Reveal>)}</div><Reveal className="work-footer"><p>More brands I&apos;ve worked with</p><div className="brand-cloud"><span>APPAREL FACTORY</span><span>NURAVINE</span><span>RANGREZ</span><span>LUXIWOODS</span><span>ETRIE</span><span>RAASRANI</span></div></Reveal></section>

    <section id="services" className="services section-pad"><div className="section-shell"><Reveal><div className="section-label light">04 / SERVICES</div><div className="split-heading"><h2>Ways I can help<br/><span>your store grow.</span></h2><p>Focused engagements, clear communication, and outcomes that matter.</p></div></Reveal><div className="service-list">{services.map(s => <Reveal className="service-row" key={s.n}><span className="service-num">{s.n}</span><span className="service-icon"><s.icon size={25}/></span><h3>{s.title}</h3><p>{s.copy}</p><ChevronRight size={20}/></Reveal>)}</div></div></section>

    <section id="experience" className="section-shell section-pad experience"><Reveal><div className="section-label">05 / EXPERIENCE</div><div className="split-heading"><h2>Built in teams.<br/><span>Proven in production.</span></h2><p>A track record of shipping quality ecommerce work for ambitious businesses.</p></div></Reveal><div className="timeline"><Reveal className="timeline-item"><div className="timeline-date">2022 — PRESENT</div><div className="timeline-dot"/><div><span>BLUESLAG TECHNOLOGIES</span><h3>Lead Shopify Developer</h3><p>Led theme architecture and delivery across a diverse client portfolio, raising engineering quality while mentoring developers and consistently shipping conversion-focused storefronts.</p><div className="chips"><b>Leadership</b><b>Shopify 2.0</b><b>Architecture</b></div></div></Reveal><Reveal className="timeline-item"><div className="timeline-date">2020 — 2022</div><div className="timeline-dot"/><div><span>ECOMROLODEX · SELVEL · MAE</span><h3>Shopify Developer</h3><p>Developed custom sections and storefront experiences for high-growth brands, translating precise designs into responsive builds and improving performance across devices.</p><div className="chips"><b>Liquid</b><b>JavaScript</b><b>Performance</b></div></div></Reveal></div></section>

    <section className="testimonial section-shell"><Reveal><div className="quote-mark">“</div><blockquote>Aayush brings the rare combination of clean code, sharp design judgment, and genuine commercial thinking to every build.</blockquote><div className="quote-by"><span className="mini-avatar">CP</span><div><strong>Client Partner</strong><small>Ecommerce brand · Testimonial placeholder</small></div></div></Reveal></section>

    <section id="contact" className="contact section-pad"><div className="section-shell contact-grid"><Reveal><div className="section-label light">06 / CONTACT</div><h2>Have a store in mind?<br/><span>Let&apos;s make it happen.</span></h2><p>Tell me what you&apos;re building, where you&apos;re stuck, and what success looks like. I&apos;ll get back to you within 1–2 business days.</p><a href="mailto:hello@aayushpaliwal.dev" className="mail-link"><Mail size={20}/> hello@aayushpaliwal.dev</a><div className="socials"><a href="#" aria-label="LinkedIn"><Linkedin size={19}/></a><a href="#" aria-label="GitHub"><Github size={19}/></a></div></Reveal><Reveal><form className="contact-form" action="mailto:hello@aayushpaliwal.dev" method="post" encType="text/plain"><div className="field-row"><label>Your name<input required name="name" placeholder="Jane Smith"/></label><label>Email address<input required type="email" name="email" placeholder="jane@company.com"/></label></div><label>What can I help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Custom Shopify Store</option><option>Figma to Shopify</option><option>CRO & UX</option><option>Speed Optimization</option></select></label><label>Tell me about your project<textarea required name="message" placeholder="A little about your goals, timeline, and budget..." rows={4}/></label><button className="button lime" type="submit">Send inquiry <ArrowUpRight size={18}/></button></form></Reveal></div></section>

    <footer><div className="section-shell footer-inner"><a href="#top" className="logo inverse">AP<span>.</span></a><p>Shopify &amp; Next.js developer.<br/>Built with care and clean code.</p><div><a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></div><small>© 2026 Aayush Paliwal</small></div></footer>
  </main>;
}
