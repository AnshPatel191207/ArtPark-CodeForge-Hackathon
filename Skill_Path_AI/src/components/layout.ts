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
</style>
</head>
<body>
`;
}
`
