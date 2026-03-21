import { royalHead, sidebar, header } from '../components/layout'

export function dashboard(): string {
  return royalHead('Dashboard — SkillPath AI') + `
<style>
/* DASHBOARD SPECIFIC */
.stat-card-blue{color:var(--royal-blue-light);--accent:var(--royal-blue)}
.stat-card-blue::after{background:linear-gradient(90deg,transparent,var(--royal-blue),transparent)}
.stat-card-emerald{color:var(--emerald-light);--accent:var(--emerald)}
.stat-card-emerald::after{background:linear-gradient(90deg,transparent,var(--emerald),transparent)}
.stat-card-crimson{color:#FCA5A5;--accent:var(--crimson)}
.stat-card-crimson::after{background:linear-gradient(90deg,transparent,var(--crimson),transparent)}
.stat-card-gold{color:var(--gold-light);--accent:var(--gold)}
.stat-card-gold::after{background:linear-gradient(90deg,transparent,var(--gold),transparent)}

.stat-card .stat-icon-wrap.blue{background:rgba(37,99,235,0.15);box-shadow:0 0 16px rgba(37,99,235,0.2)}
.stat-card .stat-icon-wrap.emerald{background:rgba(16,185,129,0.15);box-shadow:0 0 16px rgba(16,185,129,0.2)}
.stat-card .stat-icon-wrap.crimson{background:rgba(239,68,68,0.15);box-shadow:0 0 16px rgba(239,68,68,0.2)}
.stat-card .stat-icon-wrap.gold{background:rgba(245,158,11,0.15);box-shadow:0 0 16px rgba(245,158,11,0.2)}

/* Skill comparison columns */
.skill-col{border-radius:var(--radius-xl);padding:20px;background:var(--bg-glass);backdrop-filter:blur(16px);border:1px solid var(--border-subtle);transition: var(--theme-transition)}
.skill-col-header{font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--border-subtle);display:flex;align-items:center;gap:8px}
.skill-col-count{margin-left:auto;font-size:18px;font-weight:800;font-family:var(--font-display)}

@media print {
  @page { margin: 1cm; size: A3 portrait; }
  body { background: #fff !important; color: #000 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .sidebar, .main-header, .btn, button, .ai-overlay { display: none !important; }
  .main-content { margin-left: 0 !important; padding: 0 !important; max-width: 100% !important; }
  .page-bg, .orb { display: none !important; }
  .dashboard-grid { display: block !important; }
  .stat-card, .skill-col, .roadmap-section, .reasoning-section { break-inside: avoid; border: 1px solid #ccc !important; box-shadow: none !important; background: transparent !important; margin-bottom: 20px; color: #000 !important; }
  .skill-name, .timeline-title, .accordion-header, .section-title { color: #000 !important; }
  * { text-shadow: none !important; box-shadow: none !important; }
  .badge { border: 1px solid #999; color: #333 !important; background: transparent !important; }
}

/* Mini sparkline */
.sparkline{display:flex;align-items:flex-end;gap:3px;height:32px}
.spark-bar{flex:1;border-radius:2px;min-height:4px;transition:height 0.5s}

/* Filter chips row */
.filter-row{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px}

/* Roadmap timeline */
.roadmap-section{padding:24px}

/* Progress donut wrapper */
.donut-section{padding:24px}
.category-bars{margin-top:20px}
.cat-bar-item{margin-bottom:14px}
.cat-bar-top{display:flex;justify-content:space-between;margin-bottom:6px;font-size:13px}
.cat-bar-name{font-weight:600;color:var(--text-primary)}
.cat-bar-pct{color:var(--text-secondary)}

/* Reasoning accordion */
.reasoning-section{padding:24px}
</style>

<div class="page-bg"></div>
<div class="orb orb-1"></div>
<div class="orb orb-2"></div>

${sidebar('dashboard')}
${header('Dashboard', 'Welcome back, Alex · Last analysis 2h ago')}

<main class="main-content page-wrapper">
  <div class="content-inner">
  
    <div style="display:flex;justify-content:flex-end;margin-bottom:16px">
      <button class="btn btn-primary btn-sm" onclick="window.print()" style="gap:8px">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 11v3H2v-3M8 2v9M5 8l3 3 3-3"/></svg>
        Export as PDF
      </button>
    </div>

    <!-- STAT CARDS ROW -->
    <div class="grid-4" style="margin-bottom:24px">
      ${[
      { cls: 'blue', icon: '🎯', val: '87', unit: '%', label: 'Skill Match Score', change: '↑ 12% vs target', spark: [40, 55, 60, 70, 65, 80, 87] },
      { cls: 'emerald', icon: '✅', val: '24', unit: '', label: 'Skills Identified', change: '↑ 3 new this week', spark: [10, 14, 16, 18, 20, 22, 24] },
      { cls: 'crimson', icon: '⚠️', val: '8', unit: '', label: 'Missing Skills', change: '↓ 2 closed last week', spark: [14, 13, 12, 11, 10, 9, 8] },
      { cls: 'gold', icon: '⚡', val: '3', unit: 'wks', label: 'Time Saved', change: 'vs. manual onboarding', spark: [0, 0.5, 1, 1.5, 2, 2.5, 3] },
    ].map(s => `
      <div class="stat-card stat-card-${s.cls} glass-card anim-fade-up">
        <div class="stat-icon-wrap ${s.cls}">${s.icon}</div>
        <div class="stat-label">${s.label}</div>
        <div class="stat-value" style="color:inherit">${s.val}<span style="font-size:20px;font-weight:600">${s.unit}</span></div>
        <div class="stat-change">${s.change}</div>
        <div class="sparkline" style="margin-top:12px">
          ${s.spark.map(v => `<div class="spark-bar" style="height:${Math.round((v / s.spark[s.spark.length - 1] || 0.1) * 100)}%;background:var(--accent);opacity:0.6"></div>`).join('')}
        </div>
      </div>`).join('')}
    </div>

    <!-- MAIN GRID -->
    <div style="display:grid;grid-template-columns:1fr 340px;gap:24px;margin-bottom:24px">

      <!-- SKILL COMPARISON -->
      <div class="glass-card anim-fade-up delay-1">
        <div style="padding:20px 24px 0;display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
          <div class="section-title">
            <div class="section-title-icon" style="background:var(--bg-alpha-high)">🔬</div>
            Skill Comparison
          </div>
          <div style="display:flex;gap:8px">
            <span class="badge badge-emerald">24 Found</span>
            <span class="badge badge-crimson">8 Missing</span>
          </div>
        </div>
        <div style="padding:16px 24px">
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px">
            <!-- Existing -->
            <div class="skill-col" style="border-color:rgba(16,185,129,0.2);box-shadow:0 0 20px rgba(16,185,129,0.06)">
              <div class="skill-col-header" style="color:var(--emerald-light);border-color:rgba(16,185,129,0.15)">
                <span>✅ Existing</span>
                <span class="skill-col-count" id="countExisting" style="color:var(--emerald-light)">24</span>
              </div>
              <div id="colExisting">
              ${[
      ['React.js', 'Expert', 88], ['Node.js', 'Expert', 82], ['TypeScript', 'Advanced', 76],
      ['PostgreSQL', 'Advanced', 74], ['Docker', 'Advanced', 70], ['REST APIs', 'Expert', 90],
      ['Git/GitHub', 'Expert', 92], ['AWS', 'Intermediate', 60],
    ].map(([name, lvl, conf]) => `
              <div class="skill-item">
                <div>
                  <div class="skill-name">${name}</div>
                  <div class="skill-confidence">${lvl}</div>
                </div>
                <div style="text-align:right">
                  <div style="font-size:13px;font-weight:700;color:var(--emerald-light)">${conf}%</div>
                  <div style="width:48px;height:4px;background:var(--bg-alpha-med);border-radius:2px;margin-top:4px;overflow:hidden"><div style="height:100%;width:${conf}%;background:var(--emerald);border-radius:2px;box-shadow:0 0 6px var(--emerald-glow)"></div></div>
                </div>
              </div>`).join('')}
              </div>
            </div>
            <!-- Required -->
            <div class="skill-col" style="border-color:rgba(37,99,235,0.2);box-shadow:0 0 20px rgba(37,99,235,0.06)">
              <div class="skill-col-header" style="color:var(--royal-blue-light);border-color:rgba(37,99,235,0.15)">
                <span>🎯 Required</span>
                <span class="skill-col-count" id="countRequired" style="color:var(--royal-blue-light)">32</span>
              </div>
              <div id="colRequired">
              ${[
      ['React.js', 'Critical', 95], ['Kubernetes', 'Critical', 90], ['Terraform', 'High', 85],
      ['GraphQL', 'High', 80], ['Redis', 'Medium', 75], ['Microservices', 'Critical', 92],
      ['CI/CD', 'High', 88], ['System Design', 'Critical', 95],
    ].map(([name, lvl, conf]) => `
              <div class="skill-item">
                <div>
                  <div class="skill-name">${name}</div>
                  <div class="skill-confidence">${lvl}</div>
                </div>
                <div style="text-align:right">
                  <div style="font-size:13px;font-weight:700;color:var(--royal-blue-light)">${conf}%</div>
                  <div style="width:48px;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;margin-top:4px;overflow:hidden"><div style="height:100%;width:${conf}%;background:var(--royal-blue);border-radius:2px;box-shadow:0 0 6px var(--royal-blue-glow)"></div></div>
                </div>
              </div>`).join('')}
              </div>
            </div>
            <!-- Missing -->
            <div class="skill-col" style="border-color:rgba(239,68,68,0.2);box-shadow:0 0 20px rgba(239,68,68,0.06)">
              <div class="skill-col-header" style="color:#FCA5A5;border-color:rgba(239,68,68,0.15)">
                <span>🚨 Missing</span>
                <span class="skill-col-count" id="countMissing" style="color:#FCA5A5">8</span>
              </div>
              <div id="colMissing">
              ${[
      ['Kubernetes', 'Critical', 'High'], ['Terraform', 'Critical', 'Medium'],
      ['GraphQL', 'High', 'Low'], ['Redis', 'Medium', 'Low'],
      ['Service Mesh', 'High', 'Medium'], ['ArgoCD', 'Medium', 'Low'],
      ['Prometheus', 'Medium', 'Low'], ['Helm Charts', 'High', 'Medium'],
    ].map(([name, prio, diff]) => `
              <div class="skill-item" style="border-color:rgba(239,68,68,0.1)">
                <div>
                  <div class="skill-name">${name}</div>
                  <span class="badge ${prio === 'Critical' ? 'badge-crimson' : prio === 'High' ? 'badge-gold' : 'badge-blue'}" style="font-size:10px;padding:2px 7px">${prio}</span>
                </div>
                <span class="badge ${diff === 'High' ? 'badge-crimson' : diff === 'Medium' ? 'badge-gold' : 'badge-emerald'}" style="font-size:10px;padding:2px 7px">${diff}</span>
              </div>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: PROGRESS + AI STATUS -->
      <div style="display:flex;flex-direction:column;gap:20px">
        <!-- Readiness donut -->
        <div class="glass-card anim-fade-up delay-2">
          <div class="donut-section">
            <div class="section-title" style="margin-bottom:16px">
              <div class="section-title-icon" style="background:rgba(37,99,235,0.15)">📊</div>
              Role Readiness
            </div>
            <div style="display:flex;justify-content:center;margin-bottom:20px">
              <div class="donut-wrap">
                <canvas id="readinessChart" width="160" height="160"></canvas>
                <div class="donut-center">
                  <div class="donut-value gradient-text-blue" id="readinessVal">0%</div>
                  <div class="donut-sub">Ready</div>
                </div>
              </div>
            </div>
            <div class="category-bars" id="categoryBars">
              ${[
      ['Backend', '#10B981', 78], ['Frontend', '#3B82F6', 88], ['DevOps', '#7C3AED', 45],
      ['Architecture', '#F59E0B', 62], ['Soft Skills', '#06B6D4', 90],
    ].map(([n, c, p]) => `
              <div class="cat-bar-item">
                <div class="cat-bar-top"><span class="cat-bar-name">${n}</span><span class="cat-bar-pct">${p}%</span></div>
                <div class="progress-bar" style="background:#E5E7EB">
                  <div class="progress-fill" style="width:${p}%;background:linear-gradient(to right, #3B82F6, #6366F1);box-shadow:0 0 12px rgba(59,130,246,0.3)"></div>
                </div>
              </div>`).join('')}
            </div>
          </div>
        </div>

        <!-- AI Status -->
        <div class="glass-card card-glow-violet anim-fade-up delay-3">
          <div style="padding:20px">
            <div class="section-title" style="margin-bottom:12px">
              <div class="section-title-icon" style="background:var(--violet-soft)">🤖</div>
              AI Analysis Status
            </div>
            <div style="display:flex;flex-direction:column;gap:10px">
              ${[
      { label: 'Resume Parsing', pct: 100, done: true },
      { label: 'JD Analysis', pct: 100, done: true },
      { label: 'Skill Mapping', pct: 100, done: true },
      { label: 'Roadmap Generation', pct: 87, done: false },
    ].map(s => `
              <div>
                <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px">
                  <span style="color:var(--text-secondary)">${s.label}</span>
                  <span style="color:${s.done ? 'var(--emerald-light)' : 'var(--royal-blue-light)'}">${s.done ? '✓ Done' : s.pct + '%'}</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width:${s.pct}%;background:${s.done ? 'var(--emerald)' : 'linear-gradient(90deg,var(--royal-blue),var(--violet))'};box-shadow:0 0 8px ${s.done ? 'var(--emerald-glow)' : 'var(--royal-blue-glow)'}"></div>
                </div>
              </div>`).join('')}
            </div>
            <a href="/ai-chat" class="btn btn-royal" style="width:100%;justify-content:center;margin-top:16px">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 3h14a1 1 0 011 1v8a1 1 0 01-1 1H6l-4 3V4a1 1 0 011-1z"/></svg>
              Ask AI Assistant
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- ROADMAP SECTION -->
    <div id="roadmap" class="glass-card anim-fade-up delay-2" style="margin-bottom:24px">
      <div style="padding:20px 24px;border-bottom:1px solid var(--border-subtle);display:flex;align-items:center;justify-content:space-between">
        <div class="section-title">
          <div class="section-title-icon" style="background:var(--gold-soft)">🛤️</div>
          Personalized Learning Roadmap
        </div>
        <div class="filter-row" style="margin:0">
          ${['All', 'Critical', 'High', 'Medium', 'Beginner', 'Advanced'].map((f, i) => `<button class="chip${i === 0 ? ' active' : ''}" onclick="filterRoadmap(this,'${f}')">${f}</button>`).join('')}
        </div>
      </div>
      <div class="roadmap-section" id="dynamicRoadmap">
        ${[
      { node: 'node-gold', n: '01', name: 'Kubernetes Fundamentals', prio: 'Critical', diff: 'Intermediate', dur: '2 wks', reason: 'Required for container orchestration in microservices architecture. 90% of JD requirements depend on K8s proficiency.', resources: ['k8s.io/docs', 'Kubernetes in Action', 'CKAD Prep'] },
      { node: 'node-blue', n: '02', name: 'Terraform & IaC', prio: 'Critical', diff: 'Intermediate', dur: '1.5 wks', reason: 'Infrastructure-as-Code is central to the DevOps role. Terraform enables reproducible, version-controlled infrastructure.', resources: ['learn.hashicorp.com', 'Terraform Up & Running'] },
      { node: 'node-violet', n: '03', name: 'GraphQL API Design', prio: 'High', diff: 'Beginner', dur: '1 wk', reason: 'GraphQL is the primary API layer for the target team. Your REST expertise transfers ~70% — small delta to close.', resources: ['graphql.org/learn', 'Fullstack GraphQL'] },
      { node: 'node-emerald', n: '04', name: 'Redis & Caching Patterns', prio: 'High', diff: 'Beginner', dur: '5 days', reason: 'Redis is used for session management and caching. Team has Redis Cluster in production — pattern knowledge critical.', resources: ['redis.io', 'Redis in Action'] },
      { node: 'node-blue', n: '05', name: 'Service Mesh (Istio)', prio: 'Medium', diff: 'Advanced', dur: '2 wks', reason: 'Advanced topic — relevant for senior role. Understanding Istio traffic management aligns with architectural expectations.', resources: ['istio.io', 'Istio in Action'] },
    ].map(r => `
        <div class="timeline-item">
          <div class="timeline-node ${r.node}">${r.n}</div>
          <div class="timeline-content">
            <div class="timeline-title">${r.name}</div>
            <div class="timeline-meta">
              <span class="badge ${r.prio === 'Critical' ? 'badge-crimson' : r.prio === 'High' ? 'badge-gold' : 'badge-blue'}">${r.prio}</span>
              <span class="badge badge-violet">${r.diff}</span>
              <span class="badge badge-cyan">⏱ ${r.dur}</span>
            </div>
            <div class="timeline-body">
              <div style="margin-bottom:10px;padding:10px 14px;background:rgba(37,99,235,0.06);border-radius:var(--radius-md);border-left:3px solid var(--royal-blue)">
                <div style="font-size:11px;font-weight:700;color:var(--royal-blue-light);margin-bottom:4px;text-transform:uppercase;letter-spacing:0.06em">AI Reasoning</div>
                ${r.reason}
              </div>
              <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">RESOURCES</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                ${r.resources.map(res => `<a href="#" class="chip" style="font-size:11px;padding:4px 10px">📚 ${res}</a>`).join('')}
              </div>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>

    <!-- REASONING TRACE -->
    <div class="glass-card anim-fade-up delay-3">
      <div style="padding:20px 24px;border-bottom:1px solid var(--border-subtle)">
        <div class="section-title">
          <div class="section-title-icon" style="background:rgba(124,58,237,0.15)">🧠</div>
          AI Reasoning Trace
          <span class="badge badge-violet" style="margin-left:8px">Explainable AI</span>
        </div>
      </div>
      <div class="reasoning-section" id="dynamicTrace">
        ${[
      { title: 'Why Kubernetes is marked Critical', body: `The JD mentions "container orchestration" 4 times and lists K8s under Required Skills. Analysis found 0/15 K8s-related skills in resume. Team uses GKE in production — immediate day-1 requirement.`, conf: 94 },
      { title: 'React.js confidence score: 88%', body: `Found 12 React-related signals in resume: project mentions (5×), npm packages (react@18, react-dom, react-router), GitHub repos with JSX, and explicit "React.js" mention in skills section. 2 years of inferred experience.`, conf: 88 },
      { title: 'Why GraphQL is "Beginner" difficulty', body: `Candidate has strong REST API expertise (90% confidence). GraphQL shares similar concepts — HTTP transport, JSON responses, schema-first design. Transfer learning coefficient: 0.7. Estimated 1 week to productive level.`, conf: 82 },
      { title: 'Soft Skills assessment: 90% score', body: `Resume analysis detected leadership language (led, coordinated, mentored), strong written communication (publications, PRs), and collaboration patterns (OSS contributions, team projects). JD requires "strong communicator" — fully met.`, conf: 90 },
    ].map((a, i) => `
        <div class="accordion-item${i === 0 ? ' open' : ''}" onclick="toggleAccordion(this)">
          <div class="accordion-header">
            <div style="display:flex;align-items:center;gap:10px">
              <span style="font-size:12px;color:var(--violet-light)">🔍</span>
              ${a.title}
              <span class="badge badge-violet" style="font-size:10px">Confidence: ${a.conf}%</span>
            </div>
            <span class="accordion-arrow">▼</span>
          </div>
          <div class="accordion-body">${a.body}</div>
        </div>`).join('')}
      </div>
    </div>

  </div>
</main>

<script>
// Readiness Donut
let currentReadiness = 78;
const ctx=document.getElementById('readinessChart').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 160);
gradient.addColorStop(0, '#3B82F6');
gradient.addColorStop(1, '#6366F1');

const chart = new Chart(ctx,{
  type:'doughnut',
  data:{
    datasets:[{
      data:[currentReadiness, 100 - currentReadiness],
      backgroundColor:[gradient,'#F8FAFC'],
      borderColor:['#3B82F6','#E5E7EB'],
      borderWidth:1,
      hoverOffset: 4
    }]
  },
  options:{
    cutout:'78%',responsive:false,
    plugins:{
      legend:{display:false},
      tooltip:{
        enabled:true,
        backgroundColor:'#FFFFFF',
        titleColor:'#1F2937',
        bodyColor:'#1F2937',
        borderColor:'#E5E7EB',
        borderWidth:1,
        padding:12,
        cornerRadius:8,
        displayColors:false,
        callbacks: {
          label: (item) => ' Readiness: ' + item.raw + '%'
        }
      }
    },
    animation:{
      onProgress(a){
        const v=Math.round(currentReadiness*(a.currentStep/a.numSteps));
        document.getElementById('readinessVal').textContent=v+'%';
      }
    }
  }
});

// Accordion
function toggleAccordion(item){
  const isOpen=item.classList.contains('open');
  document.querySelectorAll('.accordion-item').forEach(i=>i.classList.remove('open'));
  if(!isOpen)item.classList.add('open');
}

// Filter roadmap
function filterRoadmap(btn,filter){
  document.querySelectorAll('.filter-row .chip').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

// Map Dynamic Data
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('userProfile')) {
    window.location.href = '/login';
    return;
  }

  const hasUploaded = localStorage.getItem('hasUploaded') === 'true';
  if (!hasUploaded) {
    window.location.href = '/upload';
    return;
  }

  const dataStr = localStorage.getItem('roadmapData');
  if (!dataStr) return; // Keep hardcoded fallback if no AI data

  try {
    const data = JSON.parse(dataStr);
    
    // Readiness Donut
    if (data.readinessScore) {
      currentReadiness = Math.min(100, Math.max(0, data.readinessScore));
      chart.data.datasets[0].data = [currentReadiness, 100 - currentReadiness];
      chart.update();
      // textContent is handled by animation onProgress
    }

    // Existing Skills
    if (data.existingSkills) {
      document.getElementById('countExisting').textContent = data.existingSkills.length;
      document.getElementById('colExisting').innerHTML = data.existingSkills.map(s => {
        const conf = s.confidence || 80;
        const lvl = s.level || 'Advanced';
        return '<div class="skill-item"><div><div class="skill-name">' + s.name + '</div><div class="skill-confidence">' + lvl + '</div></div><div style="text-align:right"><div style="font-size:13px;font-weight:700;color:var(--emerald-light)">' + conf + '%</div><div style="width:48px;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;margin-top:4px;overflow:hidden"><div style="height:100%;width:' + conf + '%;background:var(--emerald);border-radius:2px;box-shadow:0 0 6px var(--emerald-glow)"></div></div></div></div>';
      }).join('');
    }

    // Required Skills
    if (data.requiredSkills) {
      document.getElementById('countRequired').textContent = data.requiredSkills.length;
      document.getElementById('colRequired').innerHTML = data.requiredSkills.map(s => {
        const match = s.match || 80;
        const prio = s.priority || 'High';
        return '<div class="skill-item"><div><div class="skill-name">' + s.name + '</div><div class="skill-confidence">' + prio + '</div></div><div style="text-align:right"><div style="font-size:13px;font-weight:700;color:var(--royal-blue-light)">' + match + '%</div><div style="width:48px;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;margin-top:4px;overflow:hidden"><div style="height:100%;width:' + match + '%;background:var(--royal-blue);border-radius:2px;box-shadow:0 0 6px var(--royal-blue-glow)"></div></div></div></div>';
      }).join('');
    }

    // Missing Skills
    if (data.missingSkills) {
      document.getElementById('countMissing').textContent = data.missingSkills.length;
      document.getElementById('colMissing').innerHTML = data.missingSkills.map(s => {
        let pc = s.priority === 'Critical' ? 'badge-crimson' : s.priority === 'High' ? 'badge-gold' : 'badge-blue';
        let dc = s.difficultyToLearn === 'High' ? 'badge-crimson' : s.difficultyToLearn === 'Medium' ? 'badge-gold' : 'badge-emerald';
        const prio = s.priority || 'High';
        const diff = s.difficultyToLearn || 'Medium';
        return '<div class="skill-item" style="border-color:rgba(239,68,68,0.1)"><div><div class="skill-name">' + s.name + '</div><span class="badge ' + pc + '" style="font-size:10px;padding:2px 7px">' + prio + '</span></div><span class="badge ' + dc + '" style="font-size:10px;padding:2px 7px">' + diff + '</span></div>';
      }).join('');
    }

    // Category Bars
    if (data.categoryScores) {
      document.getElementById('categoryBars').innerHTML = data.categoryScores.map((c, i) => {
        return '<div class="cat-bar-item"><div class="cat-bar-top"><span class="cat-bar-name">' + c.name + '</span><span class="cat-bar-pct">' + c.score + '%</span></div><div class="progress-bar" style="background:#E5E7EB"><div class="progress-fill" style="width:' + c.score + '%;background:linear-gradient(to right, #3B82F6, #6366F1);box-shadow:0 0 12px rgba(59,130,246,0.3)"></div></div></div>';
      }).join('');
    }

    // Roadmap
    if (data.roadmap) {
      const nodes = ['node-blue', 'node-violet', 'node-gold', 'node-emerald'];
      document.getElementById('dynamicRoadmap').innerHTML = data.roadmap.map((r, i) => {
        let pColor = r.priority === 'Critical' ? 'badge-crimson' : r.priority === 'High' ? 'badge-gold' : 'badge-blue';
        const resHtml = (r.resources || []).map(res => '<a href="#" class="chip" style="font-size:11px;padding:4px 10px">📚 ' + res + '</a>').join('');
        const num = '0' + (i+1);
        const diff = r.difficulty || 'Beginner';
        const dur = r.duration || '1 wk';
        return '<div class="timeline-item"><div class="timeline-node ' + nodes[i%nodes.length] + '">' + num + '</div><div class="timeline-content"><div class="timeline-title">' + r.name + '</div><div class="timeline-meta"><span class="badge ' + pColor + '">' + r.priority + '</span><span class="badge badge-violet">' + diff + '</span><span class="badge badge-cyan">⏱ ' + dur + '</span></div><div class="timeline-body"><div style="margin-bottom:10px;padding:10px 14px;background:rgba(37,99,235,0.06);border-radius:var(--radius-md);border-left:3px solid var(--royal-blue)"><div style="font-size:11px;font-weight:700;color:var(--royal-blue-light);margin-bottom:4px;text-transform:uppercase;letter-spacing:0.06em">AI Reasoning</div>' + r.reasoning + '</div><div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">RESOURCES</div><div style="display:flex;gap:8px;flex-wrap:wrap">' + resHtml + '</div></div></div></div>';
      }).join('');
    }

    // Trace
    if (data.reasoningTrace) {
      document.getElementById('dynamicTrace').innerHTML = data.reasoningTrace.map((a, i) => {
        const cls = i === 0 ? ' open' : '';
        return '<div class="accordion-item' + cls + '" onclick="toggleAccordion(this)"><div class="accordion-header"><div style="display:flex;align-items:center;gap:10px"><span style="font-size:12px;color:var(--violet-light)">🔍</span>' + a.title + '<span class="badge badge-violet" style="font-size:10px">Confidence: ' + a.confidence + '%</span></div><span class="accordion-arrow">▼</span></div><div class="accordion-body">' + a.body + '</div></div>';
      }).join('');
    }

  } catch(e) { console.error('Data mapping error', e) }
});
</script>
</html>`;
}

// commit update #5

// commit update #11

// commit update #17
