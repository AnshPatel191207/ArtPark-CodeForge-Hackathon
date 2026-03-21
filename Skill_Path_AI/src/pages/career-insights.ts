import { royalHead, sidebar, header } from '../components/layout'

export function careerInsights(): string {
  return royalHead('Career Insights — SkillPath AI') + `
<style>
.chart-card{
  background:var(--bg-glass);backdrop-filter:blur(20px);
  border:1px solid var(--border-glass);border-radius:var(--radius-xl);
  overflow:hidden;
  padding:24px;position:relative;transition:all 0.4s cubic-bezier(0.165,0.84,0.44,1);
}
.chart-card:hover{
  transform:translateY(-8px) scale(1.02);
  box-shadow:0 20px 40px rgba(0,0,0,0.4),0 0 20px rgba(37,99,235,0.2);
  border-color:rgba(37,99,235,0.4);
}
.chart-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,transparent,var(--royal-blue),transparent);
  opacity:0;transition:opacity 0.4s;
}
.chart-card:hover::before{opacity:1}
.chart-card-header{padding:20px 24px;border-bottom:1px solid var(--border-subtle);display:flex;align-items:center;justify-content:space-between}
.chart-card-body{padding:24px}
.trend-card{
  padding:20px;border-radius:var(--radius-lg);cursor:pointer;
  background:var(--bg-glass);border:1px solid var(--border-subtle);
  transition:all 0.2s;position:relative;overflow:hidden;
}
.trend-card:hover{
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 20px var(--royal-blue-glow);
  border-color: rgba(37,99,235,0.4);
}
.trend-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--t-color,var(--royal-blue))}
.trend-val{font-size:28px;font-weight:800;font-family:var(--font-display);margin:8px 0 4px}
.trend-label{font-size:12px;font-weight:700;color:var(--text-secondary)}
.trend-change{font-size:12px;font-weight:600;margin-top:6px;display:flex;align-items:center;gap:4px}
.career-path-item{
  display:flex;align-items:center;gap:16px;padding:16px;
  border-radius:var(--radius-md);margin-bottom:10px;
  background:var(--bg-alpha-low);border:1px solid var(--border-subtle);
  transition:all 0.2s;
}
.career-path-item:hover{background:rgba(37,99,235,0.06);border-color:rgba(37,99,235,0.2);transform:translateX(3px)}
.career-path-icon{width:44px;height:44px;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
.career-title{font-size:15px;font-weight:700;color:var(--text-primary)}
.career-meta{font-size:12px;color:var(--text-muted);margin-top:3px}
.salary-bar-item{margin-bottom:16px}
.salary-row{display:flex;justify-content:space-between;margin-bottom:8px;font-size:13px}
.salary-current{color:var(--text-secondary)}
.salary-projected{font-weight:700}
.insight-card{
  padding:16px;border-radius:var(--radius-md);
  background:var(--bg-alpha-low);border:1px solid var(--border-subtle);
  margin-bottom:10px;transition:all 0.3s;
}
.insight-card:hover{
  background:rgba(37,99,235,0.08);
  border-color:rgba(37,99,235,0.3);
  transform: translateX(5px);
}
.insight-header{display:flex;align-items:flex-start;gap:10px;margin-bottom:8px}
.insight-icon{width:36px;height:36px;border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.insight-title{font-size:14px;font-weight:700;color:var(--text-primary)}
.insight-body{font-size:13px;color:var(--text-secondary);line-height:1.6}
</style>

<div class="page-bg"></div>
<div class="orb orb-1"></div>
<div class="orb orb-2"></div>

${sidebar('career-insights')}
${header('Career Insights', 'AI-powered market intelligence for your profile')}

<main class="main-content page-wrapper">
  <div class="content-inner">

    <!-- TOP METRICS -->
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-bottom:24px">
      ${[
      { icon: '💰', val: '+$28K', label: 'Salary Uplift', change: '↑ 24% after gap closure', color: 'var(--gold-light)', tc: 'var(--gold)' },
      { icon: '🔥', val: '94%', label: 'Market Demand', change: '↑ High demand for your stack', color: 'var(--royal-blue-light)', tc: 'var(--royal-blue)' },
      { icon: '⚡', val: '#3', label: 'Skill Ranking', change: 'React in top skills 2024', color: 'var(--emerald-light)', tc: 'var(--emerald)' },
      { icon: '🎯', val: '87%', label: 'Role Fit Score', change: '↑ Among analyzed profiles', color: 'var(--violet-light)', tc: 'var(--violet)' },
      { icon: '🌍', val: '2.4K', label: 'Open Roles', change: 'Matching your exact profile', color: '#67E8F9', tc: 'var(--cyan)' },
    ].map(m => `
      <div class="trend-card anim-fade-up" style="--t-color:${m.tc}">
        <div style="font-size:28px">${m.icon}</div>
        <div class="trend-val" style="color:${m.color}">${m.val}</div>
        <div class="trend-label">${m.label}</div>
        <div class="trend-change" style="color:var(--emerald-light)">${m.change}</div>
      </div>`).join('')}
    </div>

    <!-- CHARTS ROW 1 -->
    <div style="display:grid;grid-template-columns:2fr 1fr;gap:20px;margin-bottom:20px">

      <!-- Industry Demand Line Chart -->
      <div class="chart-card anim-fade-up delay-1">
        <div class="chart-card-header">
          <div class="section-title">
            <div class="section-title-icon" style="background:rgba(37,99,235,0.15)">📈</div>
            Industry Skill Demand Forecast (2024–2026)
          </div>
          <div style="display:flex;gap:16px;font-size:12px">
            <div style="display:flex;align-items:center;gap:6px"><div style="width:12px;height:3px;background:var(--royal-blue);border-radius:2px"></div><span style="color:var(--text-muted)">React/Next.js</span></div>
            <div style="display:flex;align-items:center;gap:6px"><div style="width:12px;height:3px;background:var(--gold);border-radius:2px"></div><span style="color:var(--text-muted)">AI/ML Skills</span></div>
            <div style="display:flex;align-items:center;gap:6px"><div style="width:12px;height:3px;background:var(--emerald);border-radius:2px"></div><span style="color:var(--text-muted)">Cloud/DevOps</span></div>
          </div>
        </div>
        <div class="chart-card-body">
          <canvas id="demandChart" height="220"></canvas>
        </div>
      </div>

      <!-- Career path -->
      <div class="chart-card anim-fade-up delay-1">
        <div class="chart-card-header">
          <div class="section-title">
            <div class="section-title-icon" style="background:rgba(16,185,129,0.15)">🛤️</div>
            Your Career Path
          </div>
        </div>
        <div class="chart-card-body" style="padding:16px">
          ${[
      { icon: '👤', title: 'Current: Full-Stack Dev', meta: 'Present', color: 'rgba(148,163,184,0.15)' },
      { icon: '⭐', title: 'Sr. Full-Stack Engineer', meta: 'Post-roadmap · +$18K', color: 'rgba(37,99,235,0.15)' },
      { icon: '🏆', title: 'Staff Engineer / TL', meta: '12–18 months · +$35K', color: 'rgba(124,58,237,0.15)' },
      { icon: '🚀', title: 'Principal / Architect', meta: '3–4 years · +$60K', color: 'rgba(245,158,11,0.15)' },
      { icon: '💼', title: 'Engineering Director', meta: '5+ years · +$90K', color: 'rgba(16,185,129,0.15)' },
    ].map((c, i) => `
          <div class="career-path-item">
            <div class="career-path-icon" style="background:${c.color}">${c.icon}</div>
            <div style="flex:1">
              <div class="career-title">${c.title}</div>
              <div class="career-meta">${c.meta}</div>
            </div>
            ${i === 1 ? '<span class="badge badge-blue">Next</span>' : ''}
          </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- CHARTS ROW 2 -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">

      <!-- Trending Skills Bar -->
      <div class="chart-card anim-fade-up delay-2">
        <div class="chart-card-header">
          <div class="section-title">
            <div class="section-title-icon" style="background:var(--gold-soft)">🔥</div>
            Trending Skills — Q1 2024
          </div>
          <span class="badge badge-gold">Market Data</span>
        </div>
        <div class="chart-card-body">
          <canvas id="trendingChart" height="260"></canvas>
        </div>
      </div>

      <!-- Salary Impact -->
      <div class="chart-card anim-fade-up delay-2">
        <div class="chart-card-header">
          <div class="section-title">
            <div class="section-title-icon" style="background:rgba(16,185,129,0.15)">💰</div>
            Salary Impact by Skill
          </div>
          <span class="badge badge-emerald">Projected</span>
        </div>
        <div class="chart-card-body">
          ${[
      { skill: 'Kubernetes + Cloud', cur: 114, proj: 142, color: 'var(--royal-blue-light)' },
      { skill: 'AI/ML Integration', cur: 114, proj: 138, color: 'var(--violet-light)' },
      { skill: 'GraphQL + APIs', cur: 114, proj: 124, color: 'var(--gold-light)' },
      { skill: 'System Design', cur: 114, proj: 132, color: 'var(--emerald-light)' },
      { skill: 'Security / Auth', cur: 114, proj: 128, color: '#67E8F9' },
    ].map(s => `
          <div class="salary-bar-item">
            <div class="salary-row">
              <span class="salary-current">${s.skill}</span>
              <span class="salary-projected" style="color:${s.color}">$${s.cur}K → $${s.proj}K</span>
            </div>
            <div style="position:relative;height:8px;background:rgba(255,255,255,0.05);border-radius:4px;overflow:hidden">
              <div style="position:absolute;inset-y:0;left:0;width:${(s.cur / 200) * 100}%;background:rgba(255,255,255,0.15);border-radius:4px"></div>
              <div style="position:absolute;inset-y:0;left:0;width:${(s.proj / 200) * 100}%;background:${s.color};border-radius:4px;box-shadow:0 0 8px ${s.color}66;opacity:0.8"></div>
            </div>
            <div style="font-size:11px;color:var(--emerald-light);margin-top:4px">+$${s.proj - s.cur}K uplift</div>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- BOTTOM ROW -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">

      <!-- Skill Gap Forecast -->
      <div class="chart-card anim-fade-up delay-3">
        <div class="chart-card-header">
          <div class="section-title">
            <div class="section-title-icon" style="background:var(--violet-soft)">🔭</div>
            Skill Gap Forecast
          </div>
        </div>
        <div class="chart-card-body">
          <canvas id="radarChart" height="240"></canvas>
        </div>
      </div>

      <!-- Market Insights -->
      <div class="chart-card anim-fade-up delay-3">
        <div class="chart-card-header">
          <div class="section-title">
            <div class="section-title-icon" style="background:rgba(245,158,11,0.15)">💡</div>
            Market Intelligence
          </div>
        </div>
        <div class="chart-card-body" style="padding:16px">
          ${[
      { icon: '🚀', bg: 'rgba(37,99,235,0.15)', title: 'AI Skills Surge +340%', body: 'Machine learning and LLM integration skills saw 340% demand increase in engineering roles YoY.' },
      { icon: '☸️', bg: 'rgba(16,185,129,0.15)', title: 'Kubernetes in 78% of JDs', body: 'Container orchestration is now table stakes. Your gap here is the single highest-leverage skill to close.' },
      { icon: '⚡', bg: 'rgba(245,158,11,0.15)', title: 'Full-Stack + Cloud = Premium', body: 'Candidates with both expertise command 26% salary premium over single-domain specialists.' },
      { icon: '🎯', bg: 'rgba(124,58,237,0.15)', title: 'Your Profile: Top 13%', body: 'Among analyzed profiles for this role, you rank in the top 13% — a strong foundation for rapid advancement.' },
    ].map(i => `
          <div class="insight-card">
            <div class="insight-header">
              <div class="insight-icon" style="background:${i.bg}">${i.icon}</div>
              <div class="insight-title">${i.title}</div>
            </div>
            <div class="insight-body">${i.body}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>

  </div>
</main>

<script>
Chart.defaults.color = '#94a3b8';
Chart.defaults.borderColor = 'rgba(255,255,255,0.1)';
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(15, 23, 42, 0.9)';
Chart.defaults.plugins.tooltip.padding = 12;
Chart.defaults.plugins.tooltip.cornerRadius = 8;
Chart.defaults.plugins.tooltip.titleFont = { size: 14, weight: 'bold' };
Chart.defaults.plugins.tooltip.bodyFont = { size: 13 };
Chart.defaults.plugins.tooltip.usePointStyle = true;

window.charts = {};

new Chart(document.getElementById('demandChart'),{
  type:'line',
  data:{
    labels:['Q1 23','Q2 23','Q3 23','Q4 23','Q1 24','Q2 24','Q3 24','Q4 24','Q1 25','Q2 25'],
    datasets:[
      {label:'React/Next.js',data:[72,75,78,80,84,88,90,93,95,97],borderColor:'rgba(59,130,246,0.9)',backgroundColor:'rgba(59,130,246,0.08)',tension:0.4,fill:true,pointBackgroundColor:'rgba(59,130,246,0.9)',pointRadius:3},
      {label:'AI/ML',data:[40,48,58,70,82,88,91,94,96,98],borderColor:'rgba(245,158,11,0.9)',backgroundColor:'rgba(245,158,11,0.06)',tension:0.4,fill:true,pointBackgroundColor:'rgba(245,158,11,0.9)',pointRadius:3},
      {label:'Cloud/DevOps',data:[65,68,72,76,80,84,87,90,93,96],borderColor:'rgba(16,185,129,0.9)',backgroundColor:'rgba(16,185,129,0.06)',tension:0.4,fill:true,pointBackgroundColor:'rgba(16,185,129,0.9)',pointRadius:3},
    ]
  },
  options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{display:false}},scales:{y:{grid:{color:'rgba(148,163,184,0.06)'},ticks:{callback:v=>v+'%'}},x:{grid:{display:false}}}}
});

// TRENDING BAR
new Chart(document.getElementById('trendingChart'),{
  type:'bar',
  data:{
    labels:['Kubernetes','AI/ML','React','System Design','Terraform','GraphQL','Redis','Rust'],
    datasets:[{
      data:[94,91,88,85,80,76,70,65],
      backgroundColor:['rgba(239,68,68,0.75)','rgba(245,158,11,0.75)','rgba(37,99,235,0.75)','rgba(124,58,237,0.75)','rgba(16,185,129,0.75)','rgba(6,182,212,0.75)','rgba(59,130,246,0.6)','rgba(148,163,184,0.5)'],
      borderColor:['rgba(239,68,68,0.4)','rgba(245,158,11,0.4)','rgba(37,99,235,0.4)','rgba(124,58,237,0.4)','rgba(16,185,129,0.4)','rgba(6,182,212,0.4)','rgba(59,130,246,0.3)','rgba(148,163,184,0.3)'],
      borderWidth:1,borderRadius:6,
    }]
  },
  options:{
    indexAxis:'y',responsive:true,maintainAspectRatio:false,
    plugins:{legend:{display:false}},
    scales:{
      x:{grid:{color:'rgba(148,163,184,0.06)'},ticks:{callback:v=>v+'%'},max:100},
      y:{grid:{display:false}}
    }
  }
});

// RADAR
new Chart(document.getElementById('radarChart'),{
  type:'radar',
  data:{
    labels:['Frontend','Backend','DevOps','Architecture','Security','Data/ML'],
    datasets:[
      {label:'Current',data:[88,82,45,62,55,38],backgroundColor:'rgba(37,99,235,0.15)',borderColor:'rgba(37,99,235,0.7)',pointBackgroundColor:'rgba(37,99,235,0.9)',borderWidth:2,pointRadius:4},
      {label:'Required',data:[90,85,85,80,70,60],backgroundColor:'rgba(245,158,11,0.08)',borderColor:'rgba(245,158,11,0.5)',borderDash:[4,4],borderWidth:1.5,pointBackgroundColor:'rgba(245,158,11,0.7)',pointRadius:3},
    ]
  },
  options:{
    responsive:true,maintainAspectRatio:false,
    plugins:{legend:{position:'top',labels:{color:'#94A3B8',usePointStyle:true,padding:16}}},
    scales:{r:{grid:{color:'rgba(148,163,184,0.1)'},ticks:{display:false},pointLabels:{color:'#94A3B8',font:{size:12}},min:0,max:100}}
  }
});
</script>
</html>`;
}

// commit update #3

// commit update #9
