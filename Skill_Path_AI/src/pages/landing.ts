import { royalHead } from '../components/layout'

export function landing(): string {
  return royalHead('SkillPath AI — Turn Resumes into Intelligent Onboarding Journeys') + `
<style>
/* LANDING-SPECIFIC */
body{overflow-x:hidden}
.nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  padding:0 80px;height:70px;
  display:flex;align-items:center;justify-content:space-between;
  transition:all 0.3s;
}
.nav.scrolled{
  background:var(--bg-glass);backdrop-filter:blur(20px);
  border-bottom:1px solid var(--border-subtle);
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}
.nav-logo{
  display:flex;align-items:center;gap:12px;text-decoration:none;
  font-family:var(--font-display);font-weight:800;font-size:22px;
}
.nav-logo-icon{
  width:40px;height:40px;border-radius:11px;
  background:linear-gradient(135deg,var(--royal-blue),var(--violet));
  display:flex;align-items:center;justify-content:center;font-size:20px;
  box-shadow:0 0 24px rgba(37,99,235,0.5);
}
.nav-logo-text{
  background:linear-gradient(90deg,var(--text-primary),#9B72F3,#FB923C);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.nav-links{display:flex;align-items:center;gap:8px}
.nav-link{
  padding:8px 16px;border-radius:var(--radius-md);
  font-size:14px;font-weight:500;color:var(--text-secondary);
  text-decoration:none;transition:all 0.3s ease;
}
.nav-link:hover{color:var(--text-primary);background:var(--bg-hover)}
.nav-actions{display:flex;align-items:center;gap:12px}
.nav-pill{
  display:flex;align-items:center;gap:6px;padding:5px 12px;
  border-radius:var(--radius-full);background:var(--royal-blue-soft);
  border:1px solid rgba(59,130,246,0.25);
  font-size:12px;font-weight:600;color:var(--royal-blue-light);
}

/* ── HERO ── */
.hero{
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:100px 80px 60px;position:relative;overflow:hidden;
}
.hero-particles{position:absolute;inset:0;pointer-events:none}
.particle{
  position:absolute;width:2px;height:2px;border-radius:50%;
  background:var(--royal-blue);animation:particle-float linear infinite;opacity:0;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px) translateZ(0); }
  to { opacity: 1; transform: translateY(0) translateZ(0); }
}
.anim-fade-up {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  will-change: transform, opacity;
}
.delay-1 { animation-delay: 0.15s; }
.delay-2 { animation-delay: 0.3s; }
.delay-3 { animation-delay: 0.45s; }
@keyframes particle-float{
  0%{opacity:0;transform:translateY(0) scale(0)}
  10%{opacity:1}
  90%{opacity:0.5}
  100%{opacity:0;transform:translateY(-100vh) scale(0.5)}
}
.hero-grid-lines{
  position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(rgba(37,99,235,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.05) 1px,transparent 1px);
  background-size:60px 60px;
  mask-image:radial-gradient(ellipse 80% 60% at 50% 0%,black 40%,transparent 100%);
}
.hero-glow-main{
  position:absolute;top:-200px;left:50%;transform:translateX(-50%);
  width:800px;height:600px;
  background:radial-gradient(ellipse,rgba(37,99,235,0.15) 0%,rgba(124,58,237,0.08) 40%,transparent 70%);
  pointer-events:none;
}
.hero-content{
  max-width:900px;text-align:center;position:relative;z-index:1;
}
.hero-eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  padding:8px 20px;border-radius:var(--radius-full);
  background:linear-gradient(135deg,rgba(37,99,235,0.15),rgba(124,58,237,0.1));
  border:1px solid rgba(37,99,235,0.3);
  font-size:13px;font-weight:600;color:var(--royal-blue-light);
  margin-bottom:32px;animation:fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  will-change: transform, opacity;
}
.eyebrow-dot{width:7px;height:7px;background:var(--royal-blue);border-radius:50%;animation:pulse-dot 2s infinite}
.hero-title{
  font-family:var(--font-display);
  font-size:74px;font-weight:900;line-height:1.02;
  letter-spacing:-0.03em;
  margin-bottom:28px;
  will-change: transform, opacity;
}
.hero-title-line1{color:#fff}
.hero-title-em{
  background:linear-gradient(135deg,var(--royal-blue-light),var(--violet-light),var(--gold));
  background-size:200% 200%;animation:shimmer-text 4s ease infinite;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.hero-subtitle{
  font-size:20px;color:var(--text-secondary);line-height:1.6;max-width:680px;margin:0 auto 48px;
  will-change: transform, opacity;
}
.hero-ctas{
  display:flex;align-items:center;justify-content:center;gap:20px;
  margin-bottom:64px;
  will-change: transform, opacity;
}
.btn-hero-primary{
  display:inline-flex;align-items:center;gap:10px;
  padding:18px 44px;border-radius:var(--radius-lg);
  font-size:16px;font-weight:700;font-family:var(--font-display);
  background:linear-gradient(135deg,var(--royal-blue),#1D4ED8);
  color:#fff;border:none;cursor:pointer;text-decoration:none;
  box-shadow:0 8px 40px rgba(37,99,235,0.4),0 0 0 1px rgba(59,130,246,0.3);
  transition:all 0.3s cubic-bezier(0.16, 1, 0.3, 1);position:relative;overflow:hidden;
  will-change: transform, box-shadow;
}
.btn-hero-primary::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(255,255,255,0.2),transparent);
  opacity:0;transition:opacity 0.3s;
}
.btn-hero-primary:hover{
  box-shadow:0 12px 50px rgba(37,99,235,0.6),0 0 0 1px rgba(59,130,246,0.5);
  transform:translateY(-3px) scale(1.03);
}
.btn-hero-primary:hover::before{opacity:1}
.btn-hero-secondary{
  display:inline-flex;align-items:center;gap:10px;
  padding:18px 40px;border-radius:var(--radius-lg);
  font-size:16px;font-weight:600;
  background:linear-gradient(to right, #3B82F6, #4F46E5);
  color:#fff;
  border:1px solid rgba(255,255,255,0.2);
  cursor:pointer;text-decoration:none;
  transition:all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter:blur(8px);
  box-shadow:0 4px 15px rgba(0,0,0,0.1);
  will-change: transform, box-shadow;
}
.btn-hero-secondary:hover{
  transform:translateY(-3px) scale(1.05);
  box-shadow:0 15px 30px rgba(59,130,246,0.4);
  background:linear-gradient(to right, #2563EB, #4338CA);
}

.hero-stats{
  display:flex;align-items:center;justify-content:center;gap:48px;
  animation:fadeInUp 1s ease both;animation-delay:0.4s;
}
.hero-stat{text-align:center}
.hero-stat-num{font-family:var(--font-display);font-size:36px;font-weight:900;line-height:1;margin-bottom:6px}
.hero-stat-label{font-size:13px;color:var(--text-secondary)}
.hero-stat-sep{width:1px;height:40px;background:var(--border-subtle)}

/* ── DASHBOARD PREVIEW ── */
.dashboard-preview{
  margin:0 80px 60px;
  position:relative;animation:fadeInUp 1.2s ease both;animation-delay:0.5s;
}
.preview-frame{
  border-radius:24px;overflow:hidden;
  border:1px solid rgba(37,99,235,0.2);
  box-shadow:0 40px 100px rgba(0,0,0,0.6),0 0 60px rgba(37,99,235,0.15),0 0 120px rgba(124,58,237,0.08);
  background:var(--bg-surface);
  position:relative;
}
.preview-frame::before{
  content:'';position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,transparent,var(--royal-blue),var(--violet),var(--gold),transparent);
}
.preview-topbar{
  height:42px;background:rgba(3,7,18,0.9);
  display:flex;align-items:center;padding:0 16px;gap:8px;
  border-bottom:1px solid var(--border-subtle);
}
.preview-dot{width:12px;height:12px;border-radius:50%}
.preview-url{
  margin-left:12px;flex:1;height:24px;background:rgba(255,255,255,0.04);
  border-radius:4px;display:flex;align-items:center;padding:0 12px;
  font-size:12px;color:var(--text-muted);border:1px solid var(--border-subtle);
}
.preview-body{
  display:grid;grid-template-columns:200px 1fr;height:380px;
}
.preview-sidebar{
  background:rgba(3,7,18,0.8);border-right:1px solid var(--border-subtle);
  padding:16px 12px;
}
.preview-sidebar-logo{
  display:flex;align-items:center;gap:8px;padding:8px;margin-bottom:16px;
  font-size:13px;font-weight:700;
  background:linear-gradient(135deg,var(--royal-blue-light),var(--violet-light));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.preview-sidebar-icon{width:24px;height:24px;border-radius:7px;background:linear-gradient(135deg,var(--royal-blue),var(--violet));flex-shrink:0}
.p-nav{display:flex;flex-direction:column;gap:3px}
.p-nav-item{
  height:32px;border-radius:7px;background:rgba(255,255,255,0.03);
  margin-bottom:3px;display:flex;align-items:center;padding:0 10px;
  font-size:11px;color:var(--text-muted);gap:8px;
}
.p-nav-item.p-active{
  background:rgba(37,99,235,0.15);color:var(--royal-blue-light);
  border:1px solid rgba(37,99,235,0.2);
}
.p-icon{width:14px;height:14px;border-radius:3px;background:currentColor;opacity:0.6}
.preview-main{padding:16px;background:var(--bg-surface);overflow:hidden}
.p-stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px}
.p-stat{
  border-radius:10px;padding:12px;
  background:var(--bg-glass);border:1px solid var(--border-subtle);
}
.p-stat-val{font-size:20px;font-weight:800;font-family:var(--font-display);line-height:1;margin-bottom:4px}
.p-stat-lbl{font-size:10px;color:var(--text-muted)}
.p-skill-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.p-skill-card{
  border-radius:10px;background:var(--bg-glass);border:1px solid var(--border-subtle);padding:12px;
}
.p-skill-title{font-size:11px;font-weight:700;margin-bottom:10px;color:var(--text-secondary)}
.p-skill-bar{height:5px;background:rgba(255,255,255,0.06);border-radius:3px;margin-bottom:7px;overflow:hidden}
.p-skill-fill{height:100%;border-radius:3px}
.preview-shine{
  position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(120deg,transparent 40%,rgba(255,255,255,0.015) 50%,transparent 60%);
  animation:preview-shine 4s ease-in-out infinite;
}
@keyframes preview-shine{0%{background-position:-200% 0}100%{background-position:200% 0}}
.preview-glow{
  position:absolute;bottom:-30px;left:50%;transform:translateX(-50%);
  width:60%;height:60px;background:radial-gradient(ellipse,rgba(37,99,235,0.3),transparent 70%);
  filter:blur(20px);pointer-events:none;
}

/* ── FEATURES ── */
.features{padding:100px 80px;position:relative}
.section-eyebrow{
  text-align:center;margin-bottom:16px;
  display:flex;align-items:center;justify-content:center;gap:8px;
  font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;
  color:var(--royal-blue-light);
}
.section-eye-line{width:40px;height:1px;background:var(--royal-blue)}
.section-heading{
  font-family:var(--font-display);font-size:52px;font-weight:900;text-align:center;
  line-height:1.1;letter-spacing:-0.02em;margin-bottom:16px;color:var(--text-primary);
}
.section-sub{
  font-size:18px;color:var(--text-secondary);text-align:center;max-width:600px;
  margin:0 auto 64px;line-height:1.6;
}
.features-grid{
  display:grid;grid-template-columns:repeat(3,1fr);gap:24px;
}
.feature-card{
  padding:32px;border-radius:var(--radius-xl);
  background:var(--bg-glass);backdrop-filter:blur(20px);
  border:1px solid var(--border-subtle);
  transition:all 0.3s;cursor:default;position:relative;overflow:hidden;
}
.feature-card::before{
  content:'';position:absolute;inset:0;border-radius:inherit;
  background:linear-gradient(135deg,rgba(255,255,255,0.03) 0%,transparent 60%);
  pointer-events:none;
}
.feature-card::after{
  content:'';position:absolute;bottom:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent);
}
.feature-card:hover{
  transform:translateY(-10px) scale(1.03);
  border-color:var(--royal-blue);
  box-shadow:0 30px 60px rgba(0,0,0,0.5), 0 0 40px var(--royal-blue-glow);
}
.feature-icon{
  width:56px;height:56px;border-radius:var(--radius-md);
  display:flex;align-items:center;justify-content:center;
  font-size:26px;margin-bottom:24px;position:relative;
}
.feature-icon::after{
  content:'';position:absolute;inset:-4px;border-radius:calc(var(--radius-md) + 4px);
  background:inherit;opacity:0.2;filter:blur(8px);z-index:-1;
}
.feature-title{font-size:18px;font-weight:700;color:var(--text-primary);margin-bottom:12px;font-family:var(--font-display)}
.feature-desc{font-size:14px;color:var(--text-secondary);line-height:1.7;margin-bottom:20px}
.feature-tags{display:flex;flex-wrap:wrap;gap:6px}
.feature-tag{
  padding:4px 10px;border-radius:var(--radius-full);
  font-size:11px;font-weight:600;
  background:rgba(255,255,255,0.05);color:var(--text-muted);
}

/* ── HOW IT WORKS ── */
.how-it-works{padding:100px 80px;position:relative}
.how-it-works::before{
  content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--royal-blue-glow),var(--violet-glow),transparent);
}
.steps-container{position:relative}
.steps-line{
  position:absolute;top:32px;left:7%;right:7%;height:2px;
  background:linear-gradient(90deg,var(--royal-blue),var(--violet),var(--gold),var(--emerald));
  opacity:0.3;
}
.steps-line-anim{
  position:absolute;top:32px;left:7%;height:2px;width:0%;
  background:linear-gradient(90deg,var(--royal-blue),var(--violet));
  animation:expand-line 2s ease forwards 0.5s;
  box-shadow:0 0 10px var(--royal-blue-glow);
}
@keyframes expand-line{to{width:86%}}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;position:relative}
.step-item{text-align:center;padding:0 16px}
.step-node{
  width:64px;height:64px;border-radius:50%;margin:0 auto 24px;
  display:flex;align-items:center;justify-content:center;
  font-size:24px;font-weight:900;font-family:var(--font-display);
  position:relative;transition:all 0.3s;
}
.step-node::after{
  content:'';position:absolute;inset:-4px;border-radius:50%;
  border:2px solid transparent;
  background:linear-gradient(var(--bg-deep),var(--bg-deep)) padding-box,
             linear-gradient(135deg,var(--royal-blue),var(--violet)) border-box;
  opacity:0.6;
}
.step-node-1{background:radial-gradient(circle,rgba(37,99,235,0.25),rgba(37,99,235,0.05));color:var(--royal-blue-light);border:2px solid var(--royal-blue);box-shadow:0 0 24px rgba(37,99,235,0.35)}
.step-node-2{background:radial-gradient(circle,rgba(124,58,237,0.25),rgba(124,58,237,0.05));color:var(--violet-light);border:2px solid var(--violet);box-shadow:0 0 24px rgba(124,58,237,0.35)}
.step-node-3{background:radial-gradient(circle,rgba(245,158,11,0.25),rgba(245,158,11,0.05));color:var(--gold-light);border:2px solid var(--gold);box-shadow:0 0 24px rgba(245,158,11,0.35)}
.step-node-4{background:radial-gradient(circle,rgba(16,185,129,0.25),rgba(16,185,129,0.05));color:var(--emerald-light);border:2px solid var(--emerald);box-shadow:0 0 24px rgba(16,185,129,0.35)}
.step-title{font-size:17px;font-weight:700;color:var(--text-primary);margin-bottom:10px;font-family:var(--font-display)}
.step-desc{font-size:14px;color:var(--text-secondary);line-height:1.6}

/* ── TRUST METRICS ── */
.trust{padding:80px;background:linear-gradient(180deg,transparent,rgba(37,99,235,0.04),transparent)}
.trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
.trust-card{
  text-align:center;padding:40px 24px;border-radius:var(--radius-xl);
  background:var(--bg-glass);backdrop-filter:blur(20px);
  border:1px solid var(--border-subtle);
  position:relative;overflow:hidden;
  transition:all 0.3s;
}
.trust-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:3px;
  background:var(--accent-color,var(--royal-blue));opacity:0.7;
}
.trust-card:hover{transform:translateY(-4px);box-shadow:0 20px 50px rgba(0,0,0,0.3)}
.trust-icon{font-size:40px;margin-bottom:16px;display:block}
.trust-num{
  font-size:56px;font-weight:900;font-family:var(--font-display);
  line-height:1;margin-bottom:8px;
}
.trust-label{font-size:15px;font-weight:600;color:var(--text-primary);margin-bottom:8px}
.trust-sub{font-size:13px;color:var(--text-secondary)}

/* ── CTA BANNER ── */
.cta-banner{
  margin:0 80px 100px;padding:80px;
  border-radius:var(--radius-2xl);
  background:linear-gradient(135deg,rgba(37,99,235,0.15),rgba(124,58,237,0.1),rgba(245,158,11,0.05));
  border:1px solid rgba(37,99,235,0.25);
  position:relative;overflow:hidden;text-align:center;
}
.cta-banner::before{
  content:'';position:absolute;inset:-1px;border-radius:inherit;
  background:linear-gradient(135deg,var(--royal-blue),var(--violet),var(--gold));
  opacity:0.15;z-index:-1;
}
.cta-glow{
  position:absolute;top:-100px;left:50%;transform:translateX(-50%);
  width:500px;height:400px;
  background:radial-gradient(ellipse,rgba(37,99,235,0.2),transparent 60%);
  pointer-events:none;
}
.cta-title{
  font-family:var(--font-display);font-size:52px;font-weight:900;
  line-height:1.1;letter-spacing:-0.02em;color:var(--text-primary);margin-bottom:16px;
}
.cta-sub{font-size:18px;color:var(--text-secondary);max-width:500px;margin:0 auto 40px}
.cta-actions{display:flex;align-items:center;justify-content:center;gap:16px}

/* ── FOOTER ── */
.landing-footer{
  padding:40px 80px;border-top:1px solid var(--border-subtle);
  display:flex;align-items:center;justify-content:space-between;
}
.footer-copy{font-size:13px;color:var(--text-muted)}
.footer-links{display:flex;gap:24px}
.footer-link{font-size:13px;color:var(--text-muted);text-decoration:none;transition:color 0.2s}
.footer-link:hover{color:var(--text-primary)}
</style>

<div class="page-bg"></div>
<div class="orb orb-1"></div>
<div class="orb orb-2"></div>
<div class="orb orb-3"></div>

<!-- NAVBAR -->
<nav class="nav" id="mainNav">
  <a href="/" class="nav-logo">
    <div class="logo-icon" style="background:linear-gradient(135deg,#1e293b,#0f172a);display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(66,133,244,0.15);width:38px;height:38px;border-radius:10px;flex-shrink:0">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285F4" />
            <stop offset="50%" style="stop-color:#9B72F3" />
            <stop offset="100%" style="stop-color:#FB923C" />
          </linearGradient>
        </defs>
        <path d="M12 3C12 3 13.5 10 19 12C13.5 14 12 21 12 21C12 21 10.5 14 5 12C10.5 10 12 3 12 3Z" fill="url(#navLogoGrad)" />
        <circle cx="12" cy="12" r="1.5" fill="white" style="opacity:0.6" />
      </svg>
    </div>
    <span class="nav-logo-text">SkillPath AI</span>
  </a>
  <div class="nav-links">
    <a href="#features" class="nav-link">Features</a>
    <a href="#how-it-works" class="nav-link">How It Works</a>
    <a href="#metrics" class="nav-link">Metrics</a>
    <a href="/dashboard" class="nav-link">Dashboard</a>
  </div>
  <div class="nav-actions">
    <a href="/login" class="nav-link" style="font-weight:600">Log In</a>
    <a href="/signup" class="btn btn-primary btn-sm">Sign Up</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-grid-lines"></div>
  <div class="hero-glow-main"></div>
  <div class="hero-particles" id="particles"></div>

  <div class="hero-content">
    <div class="hero-eyebrow anim-fade-up">
      <div class="eyebrow-dot"></div>
      Powered by Advanced AI Reasoning Engine
    </div>
    <h1 class="hero-title anim-fade-up delay-1">
      <span class="hero-title-line1">Turn Resumes into</span><br>
      <span class="hero-title-em">Intelligent Onboarding</span><br>
      <span class="hero-title-line1">Journeys</span>
    </h1>
    <p class="hero-subtitle anim-fade-up delay-2">
      SkillPath AI bridges the gap between talent and requirements — delivering hyper-personalized learning paths with unprecedented accuracy.
    </p>
    <div class="hero-ctas anim-fade-up delay-3">
      <a href="/upload" class="btn-hero-primary">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2v9M6 5L9 2l3 3"/><path d="M3 12v3a1 1 0 001 1h10a1 1 0 001-1v-3"/></svg>
        Generate Roadmap
      </a>
      <a href="/dashboard" class="btn-hero-secondary">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="6,3 15,9 6,15"/></svg>
        View Demo
      </a>
    </div>
    <div class="hero-stats anim-fade-up delay-3">
      <div class="hero-stat">
        <div class="hero-stat-num gradient-text-blue" data-target="80">0%</div>
        <div class="hero-stat-label">Faster Onboarding</div>
      </div>
      <div class="hero-stat-sep"></div>
      <div class="hero-stat">
        <div class="hero-stat-num gradient-text-gold" data-target="2">0x</div>
        <div class="hero-stat-label">Productivity Gain</div>
      </div>
      <div class="hero-stat-sep"></div>
      <div class="hero-stat">
        <div class="hero-stat-num gradient-text-emerald" data-target="98">0%</div>
        <div class="hero-stat-label">AI Accuracy</div>
      </div>
      <div class="hero-stat-sep"></div>
      <div class="hero-stat">
        <div class="hero-stat-num" style="background:linear-gradient(135deg,var(--violet-light),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text" data-target="500">0+</div>
        <div class="hero-stat-label">Skills Mapped</div>
      </div>
    </div>
  </div>
</section>

<!-- DASHBOARD PREVIEW -->
<div class="dashboard-preview anim-fade-up" style="animation-delay: 0.6s;">
  <div class="preview-frame">
    <div class="preview-topbar">
      <div class="preview-dot" style="background:#FF5F57"></div>
      <div class="preview-dot" style="background:#FEBC2E"></div>
      <div class="preview-dot" style="background:#28C840"></div>
      <div class="preview-url">✦ skillpath.ai/dashboard</div>
    </div>
    <div class="preview-body">
      <div class="preview-sidebar">
        <div class="preview-sidebar-logo" style="display:flex;align-items:center;gap:8px;padding:8px;margin-bottom:16px;font-size:13px;font-weight:800;background:linear-gradient(90deg,var(--text-primary),#9B72F3,#FB923C);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">
          <div class="preview-sidebar-icon" style="width:24px;height:24px;border-radius:7px;background:linear-gradient(135deg,#1e293b,#0f172a);display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C12 3 13.5 10 19 12C13.5 14 12 21 12 21C12 21 10.5 14 5 12C10.5 10 12 3 12 3Z" fill="url(#navLogoGrad)" />
            </svg>
          </div>
          SkillPath AI
        </div>
        <div class="p-nav">
          <div class="p-nav-item p-active">
            <div class="p-icon" style="background:var(--royal-blue);border-radius:3px"></div>Dashboard
          </div>
          <div class="p-nav-item"><div class="p-icon"></div>Upload</div>
          <div class="p-nav-item"><div class="p-icon"></div>Analysis</div>
          <div class="p-nav-item"><div class="p-icon"></div>Roadmap</div>
          <div class="p-nav-item"><div class="p-icon"></div>Insights</div>
          <div class="p-nav-item"><div class="p-icon"></div>AI Chat</div>
        </div>
      </div>
      <div class="preview-main">
        <div class="p-stat-grid">
          <div class="p-stat">
            <div class="p-stat-val gradient-text-blue">87%</div>
            <div class="p-stat-lbl">Skill Match</div>
          </div>
          <div class="p-stat">
            <div class="p-stat-val gradient-text-emerald">24</div>
            <div class="p-stat-lbl">Skills Found</div>
          </div>
          <div class="p-stat">
            <div class="p-stat-val" style="color:var(--crimson)">8</div>
            <div class="p-stat-lbl">Missing Skills</div>
          </div>
          <div class="p-stat">
            <div class="p-stat-val gradient-text-gold">3wks</div>
            <div class="p-stat-lbl">Time Saved</div>
          </div>
        </div>
        <div class="p-skill-row">
          <div class="p-skill-card">
            <div class="p-skill-title" style="color:var(--emerald-light)">▲ EXISTING SKILLS</div>
            ${['React.js', 'Node.js', 'TypeScript', 'SQL'].map((s, i) => `
            <div style="font-size:11px;color:var(--text-secondary);margin-bottom:6px">${s}</div>
            <div class="p-skill-bar"><div class="p-skill-fill" style="width:${[88, 76, 70, 65][i]}%;background:var(--emerald);box-shadow:0 0 6px var(--emerald-glow)"></div></div>
            `).join('')}
          </div>
          <div class="p-skill-card">
            <div class="p-skill-title" style="color:var(--crimson)">✕ MISSING SKILLS</div>
            ${['Kubernetes', 'Terraform', 'GraphQL', 'Redis'].map((s, i) => `
            <div style="font-size:11px;color:var(--text-secondary);margin-bottom:6px">${s}</div>
            <div class="p-skill-bar"><div class="p-skill-fill" style="width:${[0, 0, 0, 0][i]}%;background:var(--crimson);box-shadow:0 0 6px var(--crimson-glow)"></div></div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="preview-shine"></div>
  </div>
  <div class="preview-glow"></div>
</div>

<!-- FEATURES -->
<section class="features" id="features">
  <div class="section-eyebrow">
    <div class="section-eye-line"></div>
    Core Capabilities
    <div class="section-eye-line"></div>
  </div>
  <h2 class="section-heading">Built for the Future of <span class="gradient-text-royal">Intelligent Hiring</span></h2>
  <p class="section-sub">Six powerful AI engines working in concert to transform how organizations onboard talent.</p>
  <div class="grid-3">
      ${[
      { icon: '🎯', title: 'Precision Mapping', desc: 'AI-driven gap analysis between your current skills and target role requirements.' },
      { icon: '🚀', title: 'Accelerated Learning', desc: 'Personalized roadmaps focusing only on what you need to move the needle.' },
      { icon: '🔬', title: 'Execution Trace', desc: 'Understand exactly why the AI recommends specific skills or learning paths.' },
      { icon: '📈', title: 'Progress Tracking', desc: 'Real-time dashboard showing your growth and role readiness percentage.' },
      { icon: '🤖', title: 'AI Assistant', desc: 'Get 24/7 help with technical concepts and interview preparation.' },
      { icon: '💼', title: 'Interview Alpha', desc: 'Generate custom interview questions based on your unique skill profile.' },
    ].map((f, i) => `
      <div class="feature-card anim-fade-up" style="animation-delay: ${0.2 + (i * 0.1)}s">
        <div class="feature-icon">${f.icon}</div>
        <h3 class="feature-title">${f.title}</h3>
        <p class="feature-desc">${f.desc}</p>
      </div>`).join('')}
    </div>
</section>

<!-- HOW IT WORKS -->
<section class="how-it-works" id="how-it-works">
  <div class="section-eyebrow">
    <div class="section-eye-line"></div>
    The Process
    <div class="section-eye-line"></div>
  </div>
  <h2 class="section-heading">Four Steps to <span class="gradient-text-gold">AI-Powered Clarity</span></h2>
  <p class="section-sub">From raw resume to production-ready roadmap in under 30 seconds.</p>
  <div class="steps-container">
    <div class="steps-line"></div>
    <div class="steps-line-anim"></div>
    <div class="steps-grid">
      ${[
      { n: '01', cls: 'step-node-1', title: 'Upload Resume', desc: 'Drag & drop any resume format — PDF, DOCX, TXT. Our parser handles everything.' },
      { n: '02', cls: 'step-node-2', title: 'Add Job Description', desc: 'Paste the target role description. AI extracts requirements, seniority, and expectations.' },
      { n: '03', cls: 'step-node-3', title: 'AI Skill Analysis', desc: 'Neural engine maps 500+ skills, detects gaps, scores confidence, builds the taxonomy.' },
      { n: '04', cls: 'step-node-4', title: 'Personalized Roadmap', desc: 'Receive a prioritized, reasoned learning plan with resources, durations, and ROI estimates.' },
    ].map((s, i) => `
      <div class="step-item anim-fade-up" style="animation-delay: ${0.2 + (i * 0.1)}s">
        <div class="step-node ${s.cls}">${s.n}</div>
        <h3 class="step-title">${s.title}</h3>
        <p class="step-desc">${s.desc}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- TRUST METRICS -->
<section class="trust" id="metrics">
  <div class="section-eyebrow" style="margin-bottom:16px">
    <div class="section-eye-line"></div>
    Proven Impact
    <div class="section-eye-line"></div>
  </div>
  <h2 class="section-heading" style="margin-bottom:16px">Numbers That <span class="gradient-text-gold">Speak</span></h2>
  <p class="section-sub">Real outcomes from teams that switched to AI-powered onboarding.</p>
  <div class="trust-grid">
    ${[
      { icon: '⚡', style: '--accent-color:var(--royal-blue)', num: '80%', label: 'Faster Onboarding', sub: 'Reduce time-to-productivity from months to weeks', color: 'var(--royal-blue-light)' },
      { icon: '📈', style: '--accent-color:var(--gold)', num: '2×', label: 'Productivity Boost', sub: 'Engineers contribute to critical paths 2x sooner', color: 'var(--gold-light)' },
      { icon: '🤖', style: '--accent-color:var(--violet)', num: '98%', label: 'AI Accuracy', sub: 'Skill detection and gap analysis precision rate', color: 'var(--violet-light)' },
      { icon: '🎯', style: '--accent-color:var(--emerald)', num: '0%', label: 'Redundant Training', sub: 'Zero wasted time on skills already mastered', color: 'var(--emerald-light)' },
    ].map(t => `
    <div class="trust-card" style="${t.style}">
      <span class="trust-icon">${t.icon}</span>
      <div class="trust-num" style="color:${t.color}">${t.num}</div>
      <div class="trust-label">${t.label}</div>
      <div class="trust-sub">${t.sub}</div>
    </div>`).join('')}
  </div>
</section>

<!-- CTA BANNER -->
<div class="cta-banner">
  <div class="cta-glow"></div>
  <h2 class="cta-title">Ready to Transform <span class="gradient-text-gold">Onboarding?</span></h2>
  <p class="cta-sub">Join 500+ engineering teams using SkillPath AI to accelerate talent development.</p>
  <div class="cta-actions">
    <a href="/upload" class="btn-hero-primary">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2v9M6 5L9 2l3 3"/><path d="M3 12v3a1 1 0 001 1h10a1 1 0 001-1v-3"/></svg>
      Generate Your Roadmap
    </a>
    <a href="/dashboard" class="btn-hero-secondary">Explore Dashboard →</a>
  </div>
</div>

<!-- FOOTER -->
<footer class="landing-footer">
  <div class="footer-copy">© 2024 SkillPath AI. All rights reserved.</div>
  <div class="footer-links">
    <a href="/" class="footer-link">Home</a>
    <a href="/upload" class="footer-link">Get Started</a>
    <a href="/dashboard" class="footer-link">Dashboard</a>
    <a href="/settings" class="footer-link">Settings</a>
  </div>
</footer>

<script>
// Scroll nav effect
window.addEventListener('scroll',()=>{
  document.getElementById('mainNav').classList.toggle('scrolled',scrollY>40);
});

// Particles
const container=document.getElementById('particles');
for(let i=0;i<60;i++){
  const p=document.createElement('div');
  p.className='particle';
  p.style.cssText=\`left:\${Math.random()*100}%;top:\${Math.random()*100}%;animation-duration:\${4+Math.random()*8}s;animation-delay:\${Math.random()*6}s;width:\${1+Math.random()*2}px;height:\${1+Math.random()*2}px;background:\${['var(--royal-blue)','var(--violet)','var(--gold)','var(--emerald)'][Math.floor(Math.random()*4)]}\`;
  container.appendChild(p);
}

// Counter animation
const counters=document.querySelectorAll('[data-target]');
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target,target=+el.dataset.target;
      let cur=0,step=target/40,timer=setInterval(()=>{
        cur=Math.min(cur+step,target);
        const suffix=el.textContent.includes('%')?'%':el.textContent.includes('x')?'x':'+';
        el.textContent=Math.floor(cur)+suffix;
        if(cur>=target)clearInterval(timer);
      },30);
      io.unobserve(el);
    }
  });
},{threshold:0.5});
counters.forEach(c=>io.observe(c));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
  });
});
</script>
</html>`;
}

// commit update #6

// commit update #12
