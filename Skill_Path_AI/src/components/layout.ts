export function royalHead(title: string, extraHead = ''): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — SkillPath AI</title>
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234285F4'/%3E%3Cstop offset='50%25' style='stop-color:%239B72F3'/%3E%3Cstop offset='100%25' style='stop-color:%23FB923C'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M50 10 C50 10 55 40 90 50 C55 60 50 90 50 90 C50 90 45 60 10 50 C45 40 50 10 50 10 Z' fill='url(%23g)'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" onerror="this.remove()">
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
  (function() {
    const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  })();
</script>
${extraHead}
<style>
/* ═══════════════════════════════════════════════════
   ROYAL DESIGN SYSTEM — SkillPath AI
   Deep Navy × Jewel Tones × Liquid Gold
═══════════════════════════════════════════════════ */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root {
  /* LIGHT THEME (DEFAULT) */
  --bg-void: #F1F5F9;
  --bg-deep: #F8FAFC;
  --bg-navy: #FFFFFF;
  --bg-surface: #FFFFFF;
  --bg-card: #FFFFFF;
  --bg-glass: rgba(255, 255, 255, 0.85);
  --bg-hover: rgba(37, 99, 235, 0.05);

  --bg-alpha-low: rgba(15, 23, 42, 0.02);
  --bg-alpha-med: rgba(15, 23, 42, 0.05);
  --bg-alpha-high: rgba(15, 23, 42, 0.1);

  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #94A3B8;
  --text-accent: #334155;

  --border-subtle: #E2E8F0;
  --border-glass: #E2E8F0;
  --border-glow: rgba(37, 99, 235, 0.2);

  --royal-blue: #2563EB;
  --royal-blue-light: #3B82F6;
  --royal-blue-glow: rgba(37, 99, 235, 0.25);
  --royal-blue-soft: rgba(37, 99, 235, 0.1);

  --emerald: #059669;
  --emerald-light: #10B981;
  --emerald-glow: rgba(16, 185, 129, 0.25);
  --emerald-soft: rgba(16, 185, 129, 0.1);

  --violet: #7C3AED;
  --violet-light: #8B5CF6;
  --violet-glow: rgba(124, 58, 237, 0.25);
  --violet-soft: rgba(124, 58, 237, 0.1);

  --gold: #D97706;
  --gold-light: #F59E0B;
  --gold-glow: rgba(245, 158, 11, 0.25);
  --gold-soft: rgba(245, 158, 11, 0.1);

  --crimson: #DC2626;
  --crimson-glow: rgba(239, 68, 68, 0.2);
  --crimson-soft: rgba(239, 68, 68, 0.08);

  --cyan: #0891B2;
  --cyan-glow: rgba(6, 182, 212, 0.2);

  --shadow-card: 0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04);
  --sidebar-w: 260px;
  --header-h: 64px;
  
  --theme-transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 16px; --radius-xl: 20px; --radius-2xl: 24px; --radius-full: 9999px;
  --font-display: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
.dark {
  --bg-void: #01040D;
  --bg-deep: #030712;
  --bg-navy: #060E1F;
  --bg-surface: #0A1628;
  --bg-card: #0F1E35;
  --bg-glass: rgba(15, 30, 53, 0.7);
  --bg-hover: rgba(37, 99, 235, 0.08);

  --bg-alpha-low: rgba(255, 255, 255, 0.03);
  --bg-alpha-med: rgba(255, 255, 255, 0.06);
  --bg-alpha-high: rgba(255, 255, 255, 0.12);

  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --text-muted: #4B5563;
  --text-accent: #CBD5E1;

  --border-subtle: rgba(148, 163, 184, 0.08);
  --border-glass: rgba(148, 163, 184, 0.12);
  --border-glow: rgba(37, 99, 235, 0.35);

  --royal-blue: #2563EB;
  --royal-blue-light: #3B82F6;
  --royal-blue-glow: rgba(37, 99, 235, 0.4);
  --royal-blue-soft: rgba(59, 130, 246, 0.15);

  --emerald: #10B981;
  --emerald-light: #34D399;
  --emerald-glow: rgba(16, 185, 129, 0.4);
  --emerald-soft: rgba(16, 185, 129, 0.12);

  --violet: #7C3AED;
  --violet-light: #A78BFA;
  --violet-glow: rgba(124, 58, 237, 0.4);
  --violet-soft: rgba(124, 58, 237, 0.12);

  --gold: #F59E0B;
  --gold-light: #FCD34D;
  --gold-glow: rgba(245, 158, 11, 0.4);
  --gold-soft: rgba(245, 158, 11, 0.12);

  --crimson: #EF4444;
  --crimson-glow: rgba(239, 68, 68, 0.35);
  --crimson-soft: rgba(239, 68, 68, 0.1);

  --cyan: #06B6D4;
  --cyan-glow: rgba(6, 182, 212, 0.35);

  --shadow-card: 0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3);
}

.theme-reveal {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  z-index: 999999;
  pointer-events: none;
  background: var(--bg-void);
  clip-path: circle(0% at var(--x) var(--y));
  transition: clip-path 0.35s ease-out;
  will-change: clip-path;
  transform: translateZ(0);
}
.theme-reveal.active {
  clip-path: circle(120% at var(--x) var(--y));
}
.theme-toggle-active {
  transition: transform 0.1s ease-out;
  transform: scale(0.92);
}
.thtml{min-width:1440px;overflow-x:auto}
body{
  font-family:var(--font-body);
  background:var(--bg-void);
  color:var(--text-primary);
  min-height:100vh;
  -webkit-font-smoothing:antialiased;
  line-height:1.6;
  transition: var(--theme-transition);
}

/* ── SCROLLBAR ── */
::-webkit-scrollbar{width:6px;height:6px}
::-webkit-scrollbar-track{background:var(--bg-deep)}
::-webkit-scrollbar-thumb{background:rgba(37,99,235,0.4);border-radius:3px}
::-webkit-scrollbar-thumb:hover{background:rgba(37,99,235,0.7)}

/* ── GLOBAL BACKGROUND ── */
.page-bg{
  position:fixed;inset:0;z-index:-1;
  background:radial-gradient(ellipse 120% 80% at 10% 0%,var(--royal-blue-soft) 0%,transparent 60%),
             radial-gradient(ellipse 80% 60% at 90% 10%,var(--violet-soft) 0%,transparent 50%),
             radial-gradient(ellipse 60% 40% at 50% 100%,var(--emerald-soft) 0%,transparent 50%),
             linear-gradient(160deg,var(--bg-void) 0%,var(--bg-deep) 40%,var(--bg-navy) 100%);
  transition: var(--theme-transition);
}
.orb{position:fixed;border-radius:50%;filter:blur(80px);pointer-events:none;z-index:0;animation:orbFloat 20s ease-in-out infinite alternate}
.orb-1{width:600px;height:600px;background:radial-gradient(circle,var(--royal-blue-soft),transparent 70%);top:-200px;left:-100px;animation-delay:0s}
.orb-2{width:500px;height:500px;background:radial-gradient(circle,var(--violet-soft),transparent 70%);top:-100px;right:-150px;animation-delay:-7s}
.orb-3{width:400px;height:400px;background:radial-gradient(circle,var(--emerald-soft),transparent 70%);bottom:-100px;left:30%;animation-delay:-14s}
@keyframes orbFloat{0%{transform:translate(0,0) scale(1)}50%{transform:translate(30px,-20px) scale(1.05)}100%{transform:translate(-20px,15px) scale(0.97)}}

/* ── SIDEBAR ── */
.sidebar{
  position:fixed;left:0;top:0;bottom:0;width:var(--sidebar-w);z-index:100;
  background: var(--bg-surface);
  border-right: 1px solid var(--border-subtle);
  backdrop-filter: blur(20px);
  display: flex; flex-direction: column; overflow: hidden;
  transition: var(--theme-transition);
}
.sidebar::after {
  content: ''; position: absolute; top: 0; right: 0; bottom: 0; width: 1px;
  background: linear-gradient(180deg, transparent, var(--royal-blue-glow), transparent);
}
.sidebar-logo{
  padding:24px 20px 20px;
  border-bottom:1px solid var(--border-subtle);
}
.logo-mark{
  display:flex;align-items:center;gap:12px;
  font-family:var(--font-display);font-weight:800;font-size:20px;
  background:linear-gradient(135deg,#fff,#9B72F3,#FB923C);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  text-decoration:none;
}
.logo-icon{
  width:38px;height:38px;border-radius:10px;
  background:linear-gradient(135deg,var(--royal-blue),var(--violet));
  display:flex;align-items:center;justify-content:center;font-size:18px;
  box-shadow:0 0 20px rgba(37,99,235,0.5);flex-shrink:0;
}
.sidebar-section{
  padding:16px 12px 8px;
  font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;
  color:var(--text-muted);
}
.sidebar-nav{flex:1;overflow-y:auto;padding:8px 12px}
.nav-item{
  display:flex;align-items:center;gap:12px;
  padding:10px 14px;border-radius:var(--radius-md);
  color:var(--text-secondary);font-size:14px;font-weight:500;
  text-decoration:none;cursor:pointer;
  transition:all 0.2s;margin-bottom:2px;
  position:relative;
}
.nav-item:hover{
  background:var(--bg-hover);color:var(--text-primary);
  transform:translateX(2px);
}
.nav-item.active{
  background: var(--bg-alpha-med);
  color:var(--royal-blue-light);
  border:1px solid rgba(37,99,235,0.25);
  box-shadow:0 0 20px rgba(37,99,235,0.15),inset 0 1px 0 rgba(255,255,255,0.05);
}
.nav-item.active::before{
  content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);
  width:3px;height:60%;border-radius:0 2px 2px 0;
  background:linear-gradient(180deg,var(--royal-blue),var(--violet));
  box-shadow:0 0 8px var(--royal-blue);
}
.nav-icon{width:18px;height:18px;flex-shrink:0;opacity:0.9}
.nav-badge{
  margin-left:auto;background:var(--royal-blue);color:#fff;
  font-size:10px;font-weight:700;padding:2px 7px;border-radius:var(--radius-full);
}
.sidebar-footer{
  padding:16px 12px;border-top:1px solid var(--border-subtle);
}
.sidebar-user{
  display:flex;align-items:center;gap:10px;padding:10px;
  border-radius:var(--radius-md);cursor:pointer;
  transition:background 0.2s;
}
.sidebar-user:hover{background:var(--bg-alpha-med)}
.user-avatar{
  width:36px;height:36px;border-radius:50%;
  background:linear-gradient(135deg,var(--royal-blue),var(--violet));
  display:flex;align-items:center;justify-content:center;
  font-weight:700;font-size:14px;color:#fff;flex-shrink:0;
  box-shadow:0 0 12px rgba(37,99,235,0.4);
}
.user-name{font-size:13px;font-weight:600;color:var(--text-primary)}
.user-role{font-size:11px;color:var(--text-muted)}
</style>
</head>
<body>
`;
}
`
