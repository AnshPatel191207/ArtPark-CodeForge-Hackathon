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

/* ── HEADER ── */
.main-header{
  position:fixed;left:var(--sidebar-w);right:0;top:0;height:var(--header-h);z-index:90;
  background:rgba(3,7,18,0.9);backdrop-filter:blur(20px);
  border-bottom:1px solid var(--border-subtle);
  display:flex;align-items:center;justify-content:space-between;
  padding:0 32px;
}
.header-left{display:flex;align-items:center;gap:16px}
.breadcrumb{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text-muted)}
.breadcrumb-sep{color:var(--text-muted);opacity:0.4}
.breadcrumb-current{color:var(--text-primary);font-weight:600}
.page-title{font-size:18px;font-weight:700;color:var(--text-primary);font-family:var(--font-display)}
.header-right{display:flex;align-items:center;gap:12px}
.header-search{
  display:flex;align-items:center;gap:8px;
  background:var(--bg-alpha-med);border:1px solid var(--border-subtle);
  border-radius:var(--radius-full);padding:8px 16px;width:220px;
  transition:all 0.2s;
}
.header-search:focus-within{border-color:var(--royal-blue);box-shadow:0 0 0 3px var(--royal-blue-soft)}
.header-search input{background:none;border:none;outline:none;color:var(--text-primary);font-size:13px;width:100%;font-family:var(--font-body)}
.header-search input::placeholder{color:var(--text-muted)}
.header-btn{
  width:38px;height:38px;border-radius:var(--radius-md);border:1px solid var(--border-subtle);
  background:var(--bg-alpha-low);display:flex;align-items:center;justify-content:center;
  cursor:pointer;transition:all 0.2s;position:relative;color:var(--text-secondary);
}
.header-btn:hover{background:var(--bg-hover);border-color:var(--royal-blue);color:var(--text-primary)}
.notif-dot{
  position:absolute;top:6px;right:6px;width:7px;height:7px;
  background:var(--gold);border-radius:50%;border:2px solid var(--bg-deep);
  box-shadow:0 0 6px var(--gold-glow);
}
.status-pill{
  display:flex;align-items:center;gap:6px;
  padding:6px 12px;border-radius:var(--radius-full);
  background:var(--emerald-soft);border:1px solid rgba(16,185,129,0.2);
  font-size:11px;font-weight:600;color:var(--emerald-light);
}
.status-dot{width:6px;height:6px;background:var(--emerald);border-radius:50%;animation:pulse-dot 2s infinite}
@keyframes pulse-dot{0%,100%{opacity:1;box-shadow:0 0 0 0 var(--emerald-glow)}50%{opacity:0.7;box-shadow:0 0 0 4px transparent}}

/* ── MAIN CONTENT ── */
.main-content{
  margin-left:var(--sidebar-w);
  padding-top:var(--header-h);
  min-height:100vh;
}
.content-inner{padding:32px}

/* ── GLASS CARDS ── */
.glass-card{
  background:var(--bg-glass);
  backdrop-filter:blur(20px);
  border:1px solid var(--border-glass);
  border-radius:var(--radius-xl);
  box-shadow:var(--shadow-card);
  position:relative;overflow:hidden;
}
.glass-card::before{
  content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;
  background:linear-gradient(135deg,rgba(255,255,255,0.04) 0%,transparent 50%);
}
.card-glow-blue{box-shadow:var(--shadow-card),var(--shadow-glow-blue)}
.card-glow-gold{box-shadow:var(--shadow-card),var(--shadow-glow-gold)}
.card-glow-emerald{box-shadow:var(--shadow-card),var(--shadow-glow-emerald)}
.card-glow-violet{box-shadow:var(--shadow-card),var(--shadow-glow-violet)}

/* ── STAT CARD ── */
.stat-card{
  background:var(--bg-glass);backdrop-filter:blur(20px);
  border:1px solid var(--border-glass);border-radius:var(--radius-xl);
  padding:24px;position:relative;overflow:hidden;
  transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.stat-card:hover, .glass-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: var(--shadow-card), 0 20px 40px rgba(0,0,0,0.4), 0 0 20px var(--royal-blue-glow);
  border-color: rgba(37,99,235,0.4);
}
.stat-card::after{
  content:'';position:absolute;bottom:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,transparent,currentColor,transparent);
  opacity:0.3;
}
.stat-label{font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-secondary);margin-bottom:12px}
.stat-value{font-size:36px;font-weight:800;font-family:var(--font-display);line-height:1;margin-bottom:8px}
.stat-change{font-size:12px;color:var(--emerald-light);display:flex;align-items:center;gap:4px}
.stat-icon-wrap{
  position:absolute;top:20px;right:20px;width:48px;height:48px;
  border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;
  font-size:22px;
}

/* ── BUTTONS ── */
.btn{
  display:inline-flex;align-items:center;gap:8px;
  padding:12px 24px;border-radius:var(--radius-md);
  font-size:14px;font-weight:600;font-family:var(--font-body);
  cursor:pointer;border:none;text-decoration:none;
  transition:all 0.2s;white-space:nowrap;
}
.btn-primary{
  background:linear-gradient(135deg,var(--royal-blue),#1D4ED8);
  color:#fff;
  box-shadow:0 4px 20px rgba(37,99,235,0.4),0 1px 4px rgba(0,0,0,0.3);
}
.btn-primary:hover{
  background:linear-gradient(135deg,var(--royal-blue-light),var(--royal-blue));
  box-shadow:0 6px 30px rgba(37,99,235,0.6),0 1px 4px rgba(0,0,0,0.3);
  transform:translateY(-1px);
}
.btn-royal{
  background:linear-gradient(135deg,var(--violet),#6D28D9);
  color:#fff;
  box-shadow:0 4px 20px rgba(124,58,237,0.4);
}
.btn-royal:hover{
  box-shadow:0 6px 30px rgba(124,58,237,0.6);transform:translateY(-1px);
}
.btn-gold{
  background:linear-gradient(135deg,var(--gold),#D97706);
  color:#000;font-weight:700;
  box-shadow:0 4px 20px rgba(245,158,11,0.4);
}
.btn-gold:hover{box-shadow:0 6px 30px rgba(245,158,11,0.6);transform:translateY(-1px)}
.btn-ghost{
  transition: var(--theme-transition);
}
.btn-ghost:hover{background:var(--bg-hover);border-color:var(--royal-blue)}
.btn-sm{padding:8px 16px;font-size:13px}
.btn-lg{padding:16px 36px;font-size:16px;border-radius:var(--radius-lg)}
.btn-icon{
  width:36px;height:36px;padding:0;border-radius:var(--radius-md);
  background:var(--bg-alpha-med);border:1px solid var(--border-subtle);
  color:var(--text-secondary);display:inline-flex;align-items:center;justify-content:center;
  cursor:pointer;transition:all 0.2s;
}
.btn-icon:hover{background:var(--bg-hover);border-color:var(--royal-blue);color:var(--royal-blue-light)}

/* ── BADGES ── */
.badge{
  display:inline-flex;align-items:center;gap:4px;
  padding:4px 10px;border-radius:var(--radius-full);
  font-size:11px;font-weight:600;letter-spacing:0.03em;
}
.badge-blue{background:var(--royal-blue-soft);color:var(--royal-blue-light);border:1px solid rgba(59,130,246,0.2)}
.badge-emerald{background:var(--emerald-soft);color:var(--emerald-light);border:1px solid rgba(52,211,153,0.2)}
.badge-violet{background:var(--violet-soft);color:var(--violet-light);border:1px solid rgba(167,139,250,0.2)}
.badge-gold{background:var(--gold-soft);color:var(--gold-light);border:1px solid rgba(252,211,77,0.2)}
.badge-crimson{background:var(--crimson-soft);color:#FCA5A5;border:1px solid rgba(239,68,68,0.2)}
.badge-cyan{background:rgba(6,182,212,0.1);color:#67E8F9;border:1px solid rgba(6,182,212,0.2)}

/* ── SECTION HEADER ── */
.section-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.section-title{font-size:16px;font-weight:700;color:var(--text-primary);display:flex;align-items:center;gap:8px}
.section-title-icon{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px}

/* ── DIVIDER ── */
.divider{height:1px;background:var(--border-subtle);margin:20px 0}
.divider-glow{background:linear-gradient(90deg,transparent,var(--royal-blue-glow),transparent);height:1px;margin:20px 0}

/* ── PROGRESS BAR ── */
.progress-bar{height:6px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden}
.progress-fill{height:100%;border-radius:3px;position:relative;transition:width 1s ease}
.progress-fill::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);animation:shimmer 2s infinite}
@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
.progress-blue .progress-fill{background:linear-gradient(90deg,var(--royal-blue),var(--royal-blue-light));box-shadow:0 0 8px var(--royal-blue-glow)}
.progress-emerald .progress-fill{background:linear-gradient(90deg,var(--emerald),var(--emerald-light));box-shadow:0 0 8px var(--emerald-glow)}
.progress-gold .progress-fill{background:linear-gradient(90deg,var(--gold),var(--gold-light));box-shadow:0 0 8px var(--gold-glow)}
.progress-violet .progress-fill{background:linear-gradient(90deg,var(--violet),var(--violet-light));box-shadow:0 0 8px var(--violet-glow)}

/* ── TABLE ── */
.royal-table{width:100%;border-collapse:collapse}
.royal-table th{
  padding:12px 16px;text-align:left;
  font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-muted);
  border-bottom:1px solid var(--border-subtle);
}
.royal-table td{
  padding:14px 16px;border-bottom:1px solid var(--bg-alpha-low);
  font-size:14px;color:var(--text-accent);vertical-align:middle;
}
.royal-table tr:hover td{background:rgba(37,99,235,0.04)}
.royal-table tr:last-child td{border-bottom:none}

/* ── INPUT / FORM ── */
.royal-input{
  width:100%;padding:11px 16px;
  background:var(--bg-alpha-med);
  border:1px solid var(--border-glass);border-radius:var(--radius-md);
  color:var(--text-primary);font-size:14px;font-family:var(--font-body);
  outline:none;transition:all 0.2s;
}
.royal-input:focus{border-color:var(--royal-blue);background:rgba(37,99,235,0.05);box-shadow:0 0 0 3px var(--royal-blue-soft)}
.royal-input::placeholder{color:var(--text-muted)}
.royal-label{font-size:12px;font-weight:600;color:var(--text-secondary);margin-bottom:8px;display:block;letter-spacing:0.04em}
.royal-select{
  width:100%;padding:11px 16px;
  background:var(--bg-alpha-med);
  border:1px solid var(--border-glass);border-radius:var(--radius-md);
  color:var(--text-primary);font-size:14px;font-family:var(--font-body);
  outline:none;cursor:pointer;appearance:none;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2364748B' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:right 14px center;padding-right:36px;
  transition:all 0.2s;
}
.royal-select:focus{border-color:var(--royal-blue);box-shadow:0 0 0 3px var(--royal-blue-soft)}
.royal-select option {
  background: #111827 !important;
  color: #ffffff !important;
  padding: 10px;
}

/* ── TOGGLE ── */
.toggle{position:relative;display:inline-flex;align-items:center;cursor:pointer;gap:10px}
.toggle input{position:absolute;opacity:0;width:0;height:0}
.toggle-track{
  width:44px;height:24px;background:rgba(255,255,255,0.1);border-radius:12px;
  position:relative;transition:background 0.2s;border:1px solid var(--border-glass);
}
.toggle input:checked + .toggle-track{background:var(--royal-blue);border-color:var(--royal-blue)}
.toggle-thumb{
  position:absolute;top:3px;left:3px;width:16px;height:16px;
  background:#fff;border-radius:50%;transition:transform 0.2s;
  box-shadow:0 2px 6px rgba(0,0,0,0.3);
}
.toggle input:checked ~ .toggle-thumb,
.toggle input:checked + .toggle-track + .toggle-thumb{transform:translateX(20px)}
.toggle-label{font-size:14px;color:var(--text-secondary)}

/* ── GRADIENT TEXT ── */
.gradient-text-blue{background:linear-gradient(135deg,var(--royal-blue-light),var(--violet-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.gradient-text-gold{background:linear-gradient(135deg,var(--gold),var(--gold-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.gradient-text-royal{background:linear-gradient(135deg,var(--royal-blue-light),var(--violet-light),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.gradient-text-emerald{background:linear-gradient(135deg,var(--emerald),var(--emerald-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}

/* ── CHIP / FILTER ── */
.chip{
  display:inline-flex;align-items:center;gap:6px;
  padding:6px 14px;border-radius:var(--radius-full);
  font-size:12px;font-weight:600;cursor:pointer;
  border:1px solid var(--border-glass);
  background:var(--bg-alpha-med);color:var(--text-secondary);
  transition:all 0.2s;
}
.chip:hover,.chip.active{
  background:rgba(37,99,235,0.15);border-color:rgba(37,99,235,0.4);color:var(--royal-blue-light);
}

/* ── TOOLTIP ── */
.tooltip-wrap{position:relative;display:inline-flex}
.tooltip{
  position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%);
  background: var(--bg-surface); border: 1px solid var(--border-glass);
  border-radius: var(--radius-sm); padding: 6px 12px; font-size: 12px; color: var(--text-primary);
  white-space: nowrap; pointer-events: none; opacity: 0; transition: opacity 0.2s;
  box-shadow: var(--shadow-card);
}
.tooltip-wrap:hover .tooltip{opacity:1}

/* ── DROPDOWN MENU ── */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 280px;
  background: var(--bg-card);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.dropdown-header {
  padding: 14px 16px;
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dropdown-body {
  max-height: 320px;
  overflow-y: auto;
}
.dropdown-item {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
  color: var(--text-primary);
}
.dropdown-item:hover {
  background: var(--bg-hover);
}
.dropdown-footer {
  padding: 10px 16px;
  border-top: 1px solid var(--border-subtle);
  text-align: center;
}

/* ── SEARCH RESULTS ── */
.search-results {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: var(--bg-card);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  z-index: 9999;
  max-height: 400px;
  overflow-y: auto;
  opacity: 0;
  visibility: hidden;
  transform: translateY(5px);
  transition: all 0.2s;
}
.search-results.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.search-item {
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  border-bottom: 1px solid var(--border-subtle);
}
.search-item:hover { background: var(--bg-hover); }
.search-item-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; background: rgba(37,99,235,0.1); font-size: 16px; }
.search-item-info { flex: 1; }
.search-item-title { font-size: 13px; font-weight: 600; color: var(--text-primary); }
.search-item-meta { font-size: 11px; color: var(--text-muted); }

/* ── GLOW BORDER ANIMATION ── */
@keyframes borderGlow {
  0% { border-color: rgba(37,99,235,0.2); }
  50% { border-color: rgba(37,99,235,0.5); box-shadow: 0 0 15px rgba(37,99,235,0.2); }
  100% { border-color: rgba(37,99,235,0.2); }
}
.glow-pulse-border { animation: borderGlow 3s infinite; }

/* ── ANIMATIONS ── */
@keyframes fadeInUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes scaleIn{from{opacity:0;transform:scale(0.96)}to{opacity:1;transform:scale(1)}}
@keyframes slideInLeft{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}
@keyframes glow-pulse{0%,100%{opacity:1}50%{opacity:0.6}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes shimmer-text{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes countUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

.anim-fade-up{animation:fadeInUp 0.5s ease both}
.anim-fade{animation:fadeIn 0.4s ease both}
.anim-scale{animation:scaleIn 0.3s ease both}
.delay-1{animation-delay:0.1s}.delay-2{animation-delay:0.2s}.delay-3{animation-delay:0.3s}.delay-4{animation-delay:0.4s}.delay-5{animation-delay:0.5s}

/* ── GRADIENT BORDERS ── */
.gradient-border{
  position:relative;border-radius:var(--radius-xl);
}
.gradient-border::before{
  content:'';position:absolute;inset:-1px;border-radius:inherit;
  background:linear-gradient(135deg,var(--royal-blue),var(--violet),var(--gold));
  z-index:-1;opacity:0.4;
}

/* ── SKILL ITEMS ── */
.skill-item{
  display:flex;align-items:center;justify-content:space-between;
  padding:12px 16px;border-radius:var(--radius-md);
  border:1px solid var(--border-subtle);
  background:var(--bg-alpha-low);
  transition:all 0.2s;margin-bottom:8px;
}
.skill-item:hover{background:rgba(37,99,235,0.05);border-color:rgba(37,99,235,0.2);transform:translateX(2px)}
.skill-name{font-size:13px;font-weight:600;color:var(--text-primary)}
.skill-confidence{font-size:12px;color:var(--text-secondary)}

/* ── TIMELINE ── */
.timeline-item{display:flex;gap:20px;padding-bottom:28px;position:relative}
.timeline-item:not(:last-child)::after{content:'';position:absolute;left:19px;top:44px;bottom:0;width:2px;background:linear-gradient(180deg,var(--royal-blue-glow),transparent);z-index:0}
.timeline-node{
  width:40px;height:40px;border-radius:50%;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;
  font-size:16px;font-weight:700;z-index:1;position:relative;
}
.node-blue{background:radial-gradient(circle,rgba(37,99,235,0.3),transparent);border:2px solid var(--royal-blue);box-shadow:0 0 16px var(--royal-blue-glow)}
.node-gold{background:radial-gradient(circle,rgba(245,158,11,0.3),transparent);border:2px solid var(--gold);box-shadow:0 0 16px var(--gold-glow)}
.node-violet{background:radial-gradient(circle,rgba(124,58,237,0.3),transparent);border:2px solid var(--violet);box-shadow:0 0 16px var(--violet-glow)}
.node-emerald{background:radial-gradient(circle,rgba(16,185,129,0.3),transparent);border:2px solid var(--emerald);box-shadow:0 0 16px var(--emerald-glow)}
.timeline-content{flex:1;padding-top:4px}
.timeline-title{font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:6px}
.timeline-meta{display:flex;align-items:center;gap:8px;margin-bottom:10px;flex-wrap:wrap}
.timeline-body{font-size:13px;color:var(--text-secondary);line-height:1.7}

/* ── ACCORDION ── */
.accordion-item{
  border:1px solid var(--border-subtle);border-radius:var(--radius-md);
  margin-bottom:8px;overflow:hidden;
  transition:border-color 0.2s;
}
.accordion-item:hover{border-color:rgba(37,99,235,0.2)}
.accordion-header{
  padding:14px 16px;display:flex;align-items:center;justify-content:space-between;
  cursor:pointer;font-size:14px;font-weight:600;color:var(--text-primary);
  background:rgba(255,255,255,0.02);
  transition:background 0.2s;
}
.accordion-header:hover{background:rgba(37,99,235,0.05)}
.accordion-arrow{transition:transform 0.2s;color:var(--text-muted);font-size:12px}
.accordion-body{
  padding:0 16px;max-height:0;overflow:hidden;transition:max-height 0.3s ease,padding 0.2s;
  font-size:13px;color:var(--text-secondary);line-height:1.7;
}
.accordion-item.open .accordion-body{max-height:300px;padding:14px 16px}
.accordion-item.open .accordion-arrow{transform:rotate(180deg)}
.accordion-item.open{border-color:rgba(37,99,235,0.25)}
.accordion-item.open .accordion-header{background:rgba(37,99,235,0.08)}

/* ── TOAST ── */
.toast-container{position:fixed;top:80px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px}
.toast{
  display:flex;align-items:flex-start;gap:12px;
  padding:14px 18px;border-radius:var(--radius-md);min-width:300px;
  background:rgba(15,30,53,0.95);backdrop-filter:blur(20px);
  border-left:3px solid var(--royal-blue);
  box-shadow:0 8px 30px rgba(0,0,0,0.4);
  animation:slideInLeft 0.3s ease both;
}
.toast-success{border-color:var(--emerald)}
.toast-error{border-color:var(--crimson)}
.toast-warning{border-color:var(--gold)}
.toast-title{font-size:13px;font-weight:700;color:var(--text-primary);margin-bottom:2px}
.toast-body{font-size:12px;color:var(--text-secondary)}

/* ── LOADING SKELETON ── */
.skeleton{
  background:linear-gradient(90deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.08) 50%,rgba(255,255,255,0.04) 100%);
  background-size:200% 100%;
  animation:skeleton-wave 1.5s infinite;
  border-radius:var(--radius-sm);
}
@keyframes skeleton-wave{0%{background-position:200% 0}100%{background-position:-200% 0}}

/* ── GLOW LINE ── */
.glow-line{height:1px;background:linear-gradient(90deg,transparent,var(--royal-blue),var(--violet),transparent);opacity:0.5}

/* ── PAGE TRANSITIONS ── */
.page-wrapper{animation:fadeInUp 0.4s ease both}

/* ── MODAL ── */
.modal-overlay{
  position:fixed;inset:0;z-index:1000;
  background:rgba(1,4,13,0.85);backdrop-filter:blur(8px);
  display:flex;align-items:center;justify-content:center;
}
.modal-box{
  background:var(--bg-card);border:1px solid var(--border-glass);
  border-radius:var(--radius-2xl);padding:32px;
  max-width:600px;width:100%;
  box-shadow:0 30px 80px rgba(0,0,0,0.6);
  animation:scaleIn 0.2s ease both;
}
.modal-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px}
.modal-title{font-size:20px;font-weight:700;color:var(--text-primary);font-family:var(--font-display)}

/* ── GRID HELPERS ── */
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px}
.grid-4{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:20px}
.grid-auto{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}

/* ── DONUT CHART ── */
.donut-wrap{position:relative;display:inline-flex;align-items:center;justify-content:center}
.donut-center{position:absolute;text-align:center}
.donut-value{font-size:28px;font-weight:800;font-family:var(--font-display);line-height:1}
.donut-sub{font-size:11px;color:var(--text-muted);margin-top:2px}

/* ── EMPTY STATE ── */
.empty-state{
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:60px 20px;text-align:center;
}
.empty-icon{font-size:48px;margin-bottom:16px;opacity:0.4}
.empty-title{font-size:18px;font-weight:700;color:var(--text-primary);margin-bottom:8px}
.empty-body{font-size:14px;color:var(--text-secondary);max-width:300px}
</style>`;

export function sidebar(active: string): string {
  const items = [
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="1" width="6" height="6" rx="1.5"/><rect x="11" y="1" width="6" height="6" rx="1.5"/><rect x="1" y="11" width="6" height="6" rx="1.5"/><rect x="11" y="11" width="6" height="6" rx="1.5"/></svg>` },
    { id: 'upload', label: 'Upload Resume', href: '/upload', icon: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 12v2a1 1 0 001 1h10a1 1 0 001-1v-2M9 2v9M6 5l3-3 3 3"/></svg>` },
    { id: 'skill-analytics', label: 'Skill Analysis', href: '/skill-analytics', icon: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="9" r="7"/><path d="M9 9l4-4M9 2v2M16 9h-2M9 14v2M4 4l1.4 1.4"/></svg>` },
    { id: 'roadmap', label: 'Roadmap', href: '/roadmap', icon: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 2h10M4 9h10M4 16h10"/><circle cx="2" cy="2" r="1.5" fill="currentColor"/><circle cx="2" cy="9" r="1.5" fill="currentColor"/><circle cx="2" cy="16" r="1.5" fill="currentColor"/></svg>` },
    { id: 'career-insights', label: 'Career Insights', href: '/career-insights', icon: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 14l4-5 3 2 5-7"/><circle cx="15" cy="4" r="1.5"/></svg>`, badge: 'New' },
    { id: 'ai-chat', label: 'AI Assistant', href: '/ai-chat', icon: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 3h14a1 1 0 011 1v8a1 1 0 01-1 1H6l-4 3V4a1 1 0 011-1z"/></svg>` },
    { id: 'settings', label: 'Settings', href: '/settings', icon: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="9" r="2.5"/><path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.2 3.2l1.4 1.4M13.4 13.4l1.4 1.4M14.8 3.2l-1.4 1.4M4.6 13.4l-1.4 1.4"/></svg>` },
  ];
  return `<aside class="sidebar">
  <div class="sidebar-logo">
    <a href="/" class="logo-mark">
      <div class="logo-icon" style="background:linear-gradient(135deg,#1e293b,#0f172a);display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(66,133,244,0.15)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285F4" />
              <stop offset="50%" style="stop-color:#9B72F3" />
              <stop offset="100%" style="stop-color:#FB923C" />
            </linearGradient>
          </defs>
          <path d="M12 3C12 3 13.5 10 19 12C13.5 14 12 21 12 21C12 21 10.5 14 5 12C10.5 10 12 3 12 3Z" fill="url(#logoGrad)" />
          <circle cx="12" cy="12" r="1.5" fill="white" style="opacity:0.6" />
        </svg>
      </div>
      <span style="background:linear-gradient(90deg,#fff,#9B72F3,#FB923C);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:800">SkillPath AI</span>
    </a>
  </div>
  <div style="padding:8px 12px 0">
    <div class="status-pill" style="font-size:11px;padding:5px 10px;width:fit-content">
      <div class="status-dot"></div>AI Active
    </div>
  </div>
  <div class="sidebar-section">Navigation</div>
  <nav class="sidebar-nav">
    ${items.map(i => `
    <a href="${i.href}" class="nav-item${active === i.id ? ' active' : ''}">
      <svg class="nav-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6">${i.icon.replace(/<svg[^>]*>/, '').replace('</svg>', '')}</svg>
      <span>${i.label}</span>
      ${i.badge ? `<span class="nav-badge">${i.badge}</span>` : ''}
    </a>`).join('')}
    <div style="margin-top:8px;padding-top:8px;border-top:1px solid var(--border-subtle)">
    <a href="/admin" class="nav-item${active === 'admin' ? ' active' : ''}">
      <svg class="nav-icon" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="6" r="3"/><path d="M2 16c0-3.3 3.1-6 7-6s7 2.7 7 6"/></svg>
      <span>Admin Panel</span>
    </a>
    </div>
  </nav>
  <div class="sidebar-footer">
    <a href="/settings" class="sidebar-user" id="sidebarUserBtn">
      <div class="user-avatar" id="sidebarAvatar">A</div>
      <div>
        <div class="user-name" id="sidebarName">Alex Morgan</div>
        <div class="user-role">Sr. Engineer · Onboarding</div>
      </div>
    </a>
  </div>
</aside>
<script>
document.addEventListener('DOMContentLoaded', () => {
  const profileStr = localStorage.getItem('userProfile');
  if (profileStr) {
    try {
      const p = JSON.parse(profileStr);
      // Sidebar update
      const nameEl = document.getElementById('sidebarName');
      const avatarEl = document.getElementById('sidebarAvatar');
      const roleEl = document.querySelector('.sidebar-user .user-role');

      if (nameEl && p.firstName) {
        nameEl.textContent = p.firstName + ' ' + (p.lastName || '');
      } else if (nameEl && p.name) {
        nameEl.textContent = p.name;
      }

      if (roleEl && p.role) {
        roleEl.textContent = p.role + (p.dept ? ' · ' + p.dept : '');
      }

      if (avatarEl) {
        if (p.picture) {
          avatarEl.innerHTML = '<img src="'+p.picture+'" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" referrerpolicy="no-referrer">';
          avatarEl.style.background = 'none';
        } else if (p.firstName) {
          avatarEl.textContent = p.firstName.charAt(0).toUpperCase();
        } else if (p.name) {
          avatarEl.textContent = p.name.charAt(0).toUpperCase();
        }
      }

      // Header update
      const headerSubtitle = document.querySelector('.header-left > div > div:nth-child(2)');
      if (headerSubtitle && headerSubtitle.textContent.includes('Welcome back')) {
        const firstName = p.firstName || (p.name ? p.name.split(' ')[0] : 'User');
        headerSubtitle.textContent = 'Welcome back, ' + firstName + ' · Last analysis 2h ago';
      }
    } catch(e) { console.error('Sidebar profile error', e) }
  }
});
</script>`;
}

export function header(title: string, subtitle = ''): string {
  return `<header class="main-header">
  <div class="header-left">
    <div>
      <div class="page-title">${title}</div>
      ${subtitle ? `<div style="font-size:12px;color:var(--text-muted);margin-top:1px">${subtitle}</div>` : ''}
    </div>
  </div>
  <div class="header-right">
    <div class="header-search" style="position:relative">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#64748B" stroke-width="1.8"><circle cx="7" cy="7" r="5"/><path d="M11 11l3 3"/></svg>
      <input type="text" placeholder="Search skills, courses, pages..." id="globalSearchInput" oninput="handleGlobalSearch(this.value)">
      <div class="search-results" id="globalSearchResults"></div>
    </div>
    
    <!-- Notifications -->
    <div style="position:relative">
      <div class="header-btn" title="Notifications" onclick="toggleDropdown('notifDropdown')">
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 1a6 6 0 016 6v4l2 2H1l2-2V7a6 6 0 016-6z"/><path d="M7 15c0 1.1.9 2 2 2s2-.9 2-2"/></svg>
        <div class="notif-dot"></div>
      </div>
      <div class="dropdown-menu" id="notifDropdown">
        <div class="dropdown-header">
          <span style="font-size:13px;font-weight:700">Notifications</span>
          <button class="btn btn-ghost btn-sm" style="padding:2px 8px;font-size:11px" onclick="clearNotifications()">Clear all</button>
        </div>
        <div class="dropdown-body" id="notifBody">
          <div class="dropdown-item">
            <div style="width:32px;height:32px;border-radius:8px;background:rgba(16,185,129,0.1);display:flex;align-items:center;justify-content:center;font-size:14px">🛤️</div>
            <div>
              <div style="font-size:12px;font-weight:600">Roadmap Generated</div>
              <div style="font-size:11px;color:var(--text-muted)">Your 3-week learning plan is ready.</div>
            </div>
            <div style="margin-left:auto;width:6px;height:6px;background:var(--royal-blue);border-radius:50%"></div>
          </div>
          <div class="dropdown-item">
            <div style="width:32px;height:32px;border-radius:8px;background:rgba(37,99,235,0.1);display:flex;align-items:center;justify-content:center;font-size:14px">📄</div>
            <div>
              <div style="font-size:12px;font-weight:600">Resume Analyzed</div>
              <div style="font-size:11px;color:var(--text-muted)">Analysis for Senior Engineer role complete.</div>
            </div>
            <div style="margin-left:auto;width:6px;height:6px;background:var(--royal-blue);border-radius:50%"></div>
          </div>
        </div>
        <div class="dropdown-footer">
          <a href="#" style="font-size:12px;color:var(--royal-blue-light);text-decoration:none;font-weight:600">View all notifications</a>
        </div>
      </div>
    </div>

    <!-- Help -->
    <div style="position:relative">
      <div class="header-btn" title="Help" onclick="toggleDropdown('helpDropdown')">
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="9" r="7"/><path d="M9 12v-1c0-1.5 1.5-2 2-3a2 2 0 00-4 0"/><circle cx="9" cy="14" r="0.5" fill="currentColor"/></svg>
      </div>
      <div class="dropdown-menu" id="helpDropdown" style="width:240px">
        <div class="dropdown-header"><span style="font-size:13px;font-weight:700">Help & Support</span></div>
        <div class="dropdown-body">
          <a href="#" class="dropdown-item"><span>❓</span> FAQ & Documentation</a>
          <a href="#" class="dropdown-item"><span>📖</span> How to use SkillPath</a>
          <a href="#" class="dropdown-item"><span>💬</span> Contact Support</a>
          <a href="#" class="dropdown-item"><span>✨</span> What's New</a>
        </div>
      </div>
    </div>

    <!-- Theme Toggle -->
    <div class="header-btn" title="Toggle Theme" id="themeToggle" onclick="toggleTheme(event)">
      <svg class="sun-icon" width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" style="display:none"><circle cx="9" cy="9" r="4"/><path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.2 3.2l1.4 1.4M13.4 13.4l1.4 1.4"/></svg>
      <svg class="moon-icon" width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M16 10a7 7 0 11-7-7 5 5 0 007 7z"/></svg>
    </div>

    <a href="/upload" class="btn btn-primary btn-sm">
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v9M5 5L8 2l3 3M3 13h10"/></svg>
      New Analysis
    </a>
  </div>
</header>
<script>
const searchData = [
  {type:'Page', name:'Dashboard', href:'/dashboard', icon:'📊'},
  {type:'Page', name:'Skill Analysis', href:'/skill-analytics', icon:'🧠'},
  {type:'Page', name:'Roadmap', href:'/roadmap', icon:'🛤️'},
  {type:'Page', name:'Career Insights', href:'/career-insights', icon:'📈'},
  {type:'Page', name:'AI Assistant', href:'/ai-chat', icon:'🤖'},
  {type:'Skill', name:'Kubernetes', href:'/skill-analytics', icon:'☸️'},
  {type:'Skill', name:'React.js', href:'/skill-analytics', icon:'⚛️'},
  {type:'Skill', name:'TypeScript', href:'/skill-analytics', icon:'TS'},
  {type:'Course', name:'AWS Solutions Architect', href:'/admin', icon:'☁️'},
  {type:'Admin', name:'Admin Panel', href:'/admin', icon:'🔑'},
];

function handleGlobalSearch(query) {
  const container = document.getElementById('globalSearchResults');
  if (!query) {
    container.classList.remove('show');
    return;
  }
  const filtered = searchData.filter(i => 
    i.name.toLowerCase().includes(query.toLowerCase()) || 
    i.type.toLowerCase().includes(query.toLowerCase())
  );
  
  if (filtered.length === 0) {
    container.innerHTML = '<div style="padding:16px;text-align:center;color:var(--text-muted);font-size:13px">No results found</div>';
  } else {
    container.innerHTML = filtered.map(i => `
      <div class="search-item" onclick="window.location.href='\${i.href}'">
        <div class="search-item-icon">\${i.icon}</div>
        <div class="search-item-info">
          <div class="search-item-title">\${i.name}</div>
          <div class="search-item-meta">\${i.type}</div>
        </div>
      </div>
    `).join('');
  }
  container.classList.add('show');
}

function toggleDropdown(id) {
  const el = document.getElementById(id);
  const wasShow = el.classList.contains('show');
  document.querySelectorAll('.dropdown-menu').forEach(d => d.classList.remove('show'));
  if (!wasShow) el.classList.add('show');
}

function clearNotifications() {
  document.getElementById('notifBody').innerHTML = '<div style="padding:32px;text-align:center;color:var(--text-muted);font-size:13px">No new notifications</div>';
  const dot = document.querySelector('.notif-dot');
  if (dot) dot.style.display = 'none';
}

function toggleTheme(e) {
  const btn = document.getElementById('themeToggle');
  const rect = btn.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  
  const isDark = document.documentElement.classList.contains('dark');
  const nextTheme = isDark ? 'light' : 'dark';
  
  // Micro-interaction: scale down on click
  btn.classList.add('theme-toggle-active');
  setTimeout(() => btn.classList.remove('theme-toggle-active'), 100);
  
  // Radial Reveal Overlay
  let reveal = document.querySelector('.theme-reveal');
  if (!reveal) {
    reveal = document.createElement('div');
    reveal.className = 'theme-reveal';
    document.body.appendChild(reveal);
  }
  
  reveal.style.setProperty('--x', x + 'px');
  reveal.style.setProperty('--y', y + 'px');
  
  // Set reveal background to target theme color
  const nextBg = nextTheme === 'dark' ? '#01040D' : '#F1F5F9';
  reveal.style.background = nextBg;
  
  reveal.classList.remove('active');
  void reveal.offsetWidth; // Force reflow
  reveal.classList.add('active');
  
  // Toggle real theme ONLY AT THE END of the fast expansion (350ms)
  setTimeout(() => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', nextTheme);
    updateThemeIcons();
  }, 350);
  
  // Clean up
  setTimeout(() => {
    reveal.classList.remove('active');
  }, 450);
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  const sun = document.querySelector('.sun-icon');
  const moon = document.querySelector('.moon-icon');
  if (sun && moon) {
    sun.style.display = isDark ? 'block' : 'none';
    moon.style.display = isDark ? 'none' : 'block';
  }
}

// Initial icon setup
setTimeout(updateThemeIcons, 100);

window.onclick = function(event) {
  if (!event.target.closest('.header-btn') && !event.target.closest('.dropdown-menu')) {
    document.querySelectorAll('.dropdown-menu').forEach(d => d.classList.remove('show'));
  }
  if (!event.target.closest('.header-search')) {
    const results = document.getElementById('globalSearchResults');
    if (results) results.classList.remove('show');
  }
}
</script>`;
}
