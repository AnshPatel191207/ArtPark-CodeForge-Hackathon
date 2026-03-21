import { royalHead, sidebar, header } from '../components/layout'

export function skillAnalytics(): string {
  return royalHead('Skill Analytics — SkillPath AI') + `
<style>
.analytics-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}
.skill-row{
  display:flex;align-items:center;gap:16px;padding:12px 16px;
  border-radius:var(--radius-md);border:1px solid var(--border-subtle);
  background:rgba(255,255,255,0.02);margin-bottom:8px;transition:all 0.2s;
}
.skill-row:hover{background:rgba(37,99,235,0.05);border-color:rgba(37,99,235,0.2);transform:translateX(3px)}
.skill-row-name{font-size:14px;font-weight:600;color:var(--text-primary);width:140px;flex-shrink:0}
.skill-row-bar{flex:1;height:8px;background:rgba(255,255,255,0.05);border-radius:4px;overflow:hidden}
.skill-row-fill{height:100%;border-radius:4px;transition:width 1s ease}
.skill-row-pct{font-size:13px;font-weight:700;width:44px;text-align:right;flex-shrink:0}
.skill-row-badge{flex-shrink:0;margin-left:8px}
.cat-card{
  padding:20px;border-radius:var(--radius-lg);
  background:var(--bg-glass);border:1px solid var(--border-subtle);
  transition:all 0.2s;cursor:default;
}
.cat-card:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,0.2)}
.cat-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.cat-icon{width:40px;height:40px;border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;font-size:20px}
.cat-score{font-size:28px;font-weight:800;font-family:var(--font-display);line-height:1}
.cat-name{font-size:14px;font-weight:600;color:var(--text-primary);margin-top:4px}
.cat-skills{font-size:12px;color:var(--text-muted);margin-top:2px}
.skills-table-row{
  display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;gap:0;
  padding:12px 16px;border-bottom:1px solid rgba(148,163,184,0.04);
  font-size:13px;align-items:center;transition:background 0.15s;
}
.skills-table-row:hover{background:rgba(37,99,235,0.04)}
.skills-table-row.header{
  background:rgba(255,255,255,0.02);font-size:11px;font-weight:700;
  letter-spacing:0.08em;text-transform:uppercase;color:var(--text-muted);
  border-bottom:1px solid var(--border-subtle);
}
/* New CSS for tooltips and skill table rows */
.skill-row-table { position: relative; transition: background 0.2s; }
.skill-row-table:hover { background: rgba(37,99,235,0.04); }
.skill-tooltip {
  position: absolute;
  bottom: 100%;
  left: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-glass);
  padding: 12px;
  border-radius: var(--radius-md);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  z-index: 100;
  width: 240px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  pointer-events: none;
  transform: translateY(10px);
}
.skill-row-table:hover .skill-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateY(-5px);
}
.skill-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
</style>

<div class="page-bg"></div>
<div class="orb orb-1"></div>
<div class="orb orb-2"></div>

${sidebar('skill-analytics')}
${header('Skill Analytics', 'Comprehensive skill breakdown from resume analysis')}

<main class="main-content page-wrapper">
  <div class="content-inner">

    <!-- TOP ROW: Radar + Categories -->
    <div style="display:grid;grid-template-columns:420px 1fr;gap:20px;margin-bottom:20px">

      <!-- Radar chart -->
      <div class="glass-card anim-fade-up">
        <div style="padding:20px 24px;border-bottom:1px solid var(--border-subtle)">
          <div class="section-title">
            <div class="section-title-icon" style="background:var(--violet-soft)">🕸️</div>
            Skill Profile Radar
          </div>
        </div>
        <div style="padding:24px;display:flex;justify-content:center">
          <canvas id="profileRadar" width="340" height="300"></canvas>
        </div>
        <div style="padding:0 24px 20px;display:flex;flex-wrap:wrap;gap:8px;justify-content:center">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-muted)"><div style="width:12px;height:3px;background:rgba(37,99,235,0.8);border-radius:2px"></div>Current</div>
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-muted)"><div style="12px;height:3px;background:rgba(245,158,11,0.6);border-radius:2px;border:1px dashed rgba(245,158,11,0.6)"></div>Target</div>
        </div>
      </div>

      <!-- Category grid -->
      <div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:14px" class="anim-fade-up delay-1">
          ${[
            {icon:'💻',name:'Programming',score:'88%',skills:'8 skills',color:'var(--royal-blue-light)',bg:'rgba(37,99,235,0.12)'},
            {icon:'⚛️',name:'Frameworks',score:'82%',skills:'6 skills',color:'var(--emerald-light)',bg:'rgba(16,185,129,0.12)'},
            {icon:'🗄️',name:'Databases',score:'74%',skills:'5 skills',color:'var(--violet-light)',bg:'rgba(124,58,237,0.12)'},
            {icon:'🛠️',name:'Tools & DevOps',score:'45%',skills:'4 skills · 3 gaps',color:'#FCA5A5',bg:'rgba(239,68,68,0.12)'},
            {icon:'☁️',name:'Cloud & Infra',score:'56%',skills:'4 skills · 2 gaps',color:'var(--gold-light)',bg:'rgba(245,158,11,0.12)'},
            {icon:'🤝',name:'Soft Skills',score:'90%',skills:'6 skills',color:'#67E8F9',bg:'rgba(6,182,212,0.12)'},
          ].map(c=>`
          <div class="cat-card">
            <div class="cat-header">
              <div class="cat-icon" style="background:${c.bg}">${c.icon}</div>
              <div class="cat-score" style="color:${c.color}">${c.score}</div>
            </div>
            <div class="progress-bar" style="margin-bottom:8px">
              <div class="progress-fill" style="width:${c.score};background:${c.color};box-shadow:0 0 8px ${c.color}66"></div>
            </div>
            <div class="cat-name">${c.name}</div>
            <div class="cat-skills">${c.skills}</div>
          </div>`).join('')}
        </div>

        <!-- Category comparison bar chart -->
        <div class="glass-card anim-fade-up delay-2">
          <div style="padding:20px 24px;border-bottom:1px solid var(--border-subtle)">
            <div class="section-title">
              <div class="section-title-icon" style="background:var(--gold-soft)">📊</div>
              Category Comparison
            </div>
          </div>
          <div style="padding:20px 24px">
            <canvas id="categoryChart" height="140"></canvas>
          </div>
        </div>
      </div>
    </div>

    <!-- SKILL BARS BY CATEGORY -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">

      <!-- Programming Languages -->
      <div class="glass-card anim-fade-up delay-2">
        <div style="padding:18px 24px;border-bottom:1px solid var(--border-subtle);display:flex;align-items:center;justify-content:space-between">
          <div class="section-title"><span>💻</span> Programming Languages</div>
          <span class="badge badge-blue">8 skills</span>
        </div>
        <div style="padding:20px 24px">
          ${[
            ['JavaScript',94,'var(--royal-blue)','Expert'],
            ['TypeScript',88,'var(--royal-blue-light)','Expert'],
            ['Python',62,'var(--violet)','Intermediate'],
            ['SQL',74,'var(--emerald)','Advanced'],
            ['Bash',56,'var(--gold)','Intermediate'],
            ['Go',32,'#94A3B8','Beginner'],
            ['Rust',18,'#64748B','Novice'],
            ['Java',45,'var(--cyan)','Intermediate'],
          ].map(([name,pct,color,level])=>`
          <div class="skill-row">
            <span class="skill-row-name">${name}</span>
            <div class="skill-row-bar"><div class="skill-row-fill" style="width:${pct}%;background:${color};box-shadow:0 0 8px ${color}66"></div></div>
            <span class="skill-row-pct" style="color:${color}">${pct}%</span>
            <span class="skill-row-badge badge ${Number(pct)>=80?'badge-emerald':Number(pct)>=60?'badge-blue':Number(pct)>=40?'badge-gold':'badge-crimson'}" style="font-size:10px">${level}</span>
          </div>`).join('')}
        </div>
      </div>

      <!-- Frameworks -->
      <div class="glass-card anim-fade-up delay-3">
        <div style="padding:18px 24px;border-bottom:1px solid var(--border-subtle);display:flex;align-items:center;justify-content:space-between">
          <div class="section-title"><span>⚛️</span> Frameworks & Libraries</div>
          <span class="badge badge-emerald">9 skills</span>
        </div>
        <div style="padding:20px 24px">
          ${[
            ['React.js',92,'var(--royal-blue)','Expert'],
            ['Next.js',80,'var(--royal-blue-light)','Advanced'],
            ['Node.js',88,'var(--emerald)','Expert'],
            ['Express.js',84,'var(--emerald-light)','Expert'],
            ['Tailwind CSS',76,'var(--cyan)','Advanced'],
            ['Prisma ORM',68,'var(--violet)','Advanced'],
            ['GraphQL',30,'#FCA5A5','Beginner'],
            ['NestJS',42,'var(--gold)','Intermediate'],
            ['tRPC',25,'#94A3B8','Novice'],
          ].map(([name,pct,color,level])=>`
          <div class="skill-row">
            <span class="skill-row-name">${name}</span>
            <div class="skill-row-bar"><div class="skill-row-fill" style="width:${pct}%;background:${color};box-shadow:0 0 8px ${color}66"></div></div>
            <span class="skill-row-pct" style="color:${color}">${pct}%</span>
            <span class="skill-row-badge badge ${Number(pct)>=80?'badge-emerald':Number(pct)>=60?'badge-blue':Number(pct)>=40?'badge-gold':'badge-crimson'}" style="font-size:10px">${level}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- FULL SKILLS TABLE -->
    <div class="glass-card anim-fade-up delay-3">
      <div style="padding:20px 24px;border-bottom:1px solid var(--border-subtle);display:flex;align-items:center;justify-content:space-between">
        <div class="section-title">
          <div class="section-title-icon" style="background:rgba(37,99,235,0.15)">📋</div>
          Complete Skills Inventory
        </div>
        <div style="display:flex;gap:8px">
          ${['All','Found','Missing','Partial'].map((f,i)=>`<button class="chip filter-btn${i===0?' active':''}" onclick="filterSkills('${f.toLowerCase()}', this)">${f}</button>`).join('')}
        </div>
      </div>
      <div>
        ${[
          {name:'React.js',cat:'Framework',level:'Expert',score:92,status:'found',desc:'Core UI library used across all products.',imp:'High',diff:'Advanced'},
          {name:'Kubernetes',cat:'DevOps',level:'None',score:0,status:'missing',desc:'Container orchestration for scaling services.',imp:'Critical',diff:'Advanced'},
          {name:'TypeScript',cat:'Language',level:'Expert',score:88,status:'found',desc:'Type-safe JavaScript for scalable code.',imp:'High',diff:'Intermediate'},
          {name:'Terraform',cat:'Infrastructure',level:'None',score:0,status:'missing',desc:'Infrastructure as Code for cloud resources.',imp:'Critical',diff:'Intermediate'},
          {name:'Node.js',cat:'Runtime',level:'Expert',score:88,status:'found',desc:'Scalable backend runtime for microservices.',imp:'High',diff:'Intermediate'},
          {name:'GraphQL',cat:'API',level:'Beginner',score:30,status:'partial',desc:'Modern API query language for efficient data.',imp:'Medium',diff:'Advanced'},
          {name:'PostgreSQL',cat:'Database',level:'Advanced',score:74,status:'found',desc:'Primary relational database for data integrity.',imp:'High',diff:'Intermediate'},
          {name:'Redis',cat:'Cache',level:'None',score:0,status:'missing',desc:'High-performance in-memory data store.',imp:'Medium',diff:'Intermediate'},
          {name:'Docker',cat:'Container',level:'Advanced',score:72,status:'found',desc:'Containerization for portable deployments.',imp:'High',diff:'Intermediate'},
          {name:'AWS',cat:'Cloud',level:'Intermediate',score:60,status:'partial',desc:'Primary cloud provider for infrastructure.',imp:'High',diff:'Advanced'},
          {name:'System Design',cat:'Architecture',level:'Advanced',score:72,status:'found',desc:'Designing scalable and reliable systems.',imp:'High',diff:'Advanced'},
          {name:'CI/CD',cat:'DevOps',level:'Intermediate',score:58,status:'partial',desc:'Automated pipelines for fast delivery.',imp:'High',diff:'Intermediate'},
        ].map(s=>`
        <div class="skills-table-row skill-row-table" data-status="${s.status}">
          <div class="skill-tooltip">
            <div style="font-weight:700;color:var(--royal-blue-light);margin-bottom:6px">${s.name}</div>
            <div style="font-size:12px;color:var(--text-secondary);line-height:1.4;margin-bottom:10px">${s.desc}</div>
            <div style="display:flex;justify-content:space-between;font-size:11px">
              <span style="color:var(--text-muted)">Importance: <strong style="color:var(--emerald-light)">${s.imp}</strong></span>
              <span style="color:var(--text-muted)">Diff: <strong style="color:var(--gold-light)">${s.diff}</strong></span>
            </div>
          </div>
          <span style="font-weight:600;color:var(--text-primary)">${s.name}</span>
          <span class="badge badge-blue" style="font-size:10px">${s.cat}</span>
          <span style="color:var(--text-secondary)">${s.level}</span>
          <div style="display:flex;align-items:center;gap:8px">
            <div style="width:60px;height:5px;background:rgba(255,255,255,0.05);border-radius:3px;overflow:hidden"><div style="height:100%;width:${s.score}%;background:${s.score>=70?'var(--emerald)':s.score>=30?'var(--gold)':'var(--crimson)'};border-radius:3px"></div></div>
            <span style="font-size:12px;font-weight:600;color:${s.score>=70?'var(--emerald-light)':s.score>=30?'var(--gold-light)':'#FCA5A5'}">${s.score}%</span>
          </div>
          <span class="badge ${s.status==='found'?'badge-emerald':s.status==='missing'?'badge-crimson':'badge-gold'}">${s.status==='found'?'✓ Found':s.status==='missing'?'✕ Missing':'~ Partial'}</span>
        </div>`).join('')}
      </div>
    </div>

  </div>
</main>

<script>
Chart.defaults.color='#64748B';Chart.defaults.borderColor='rgba(148,163,184,0.08)';

// Profile Radar
new Chart(document.getElementById('profileRadar'),{
  type:'radar',
  data:{
    labels:['Programming','Frameworks','Databases','DevOps','Cloud','Soft Skills'],
    datasets:[
      {label:'Current',data:[88,82,74,45,56,90],backgroundColor:'rgba(37,99,235,0.12)',borderColor:'rgba(37,99,235,0.8)',pointBackgroundColor:'rgba(37,99,235,0.9)',borderWidth:2,pointRadius:5},
      {label:'Target',data:[92,88,80,85,80,92],backgroundColor:'rgba(245,158,11,0.06)',borderColor:'rgba(245,158,11,0.5)',borderDash:[4,4],borderWidth:1.5,pointBackgroundColor:'rgba(245,158,11,0.7)',pointRadius:3},
    ]
  },
  options:{
    responsive:false,
    plugins:{legend:{display:false}},
    scales:{r:{grid:{color:'rgba(148,163,184,0.1)'},ticks:{display:false},pointLabels:{color:'#94A3B8',font:{size:12}},min:0,max:100}}
  }
});

// Category Comparison
new Chart(document.getElementById('categoryChart'),{
  type:'bar',
  data:{
    labels:['Programming','Frameworks','Databases','DevOps','Cloud','Soft Skills'],
    datasets:[
      {label:'Current',data:[88,82,74,45,56,90],backgroundColor:'rgba(37,99,235,0.65)',borderRadius:4},
      {label:'Required',data:[90,88,80,85,80,92],backgroundColor:'rgba(245,158,11,0.35)',borderRadius:4},
    ]
  },
  options:{
    responsive:true,maintainAspectRatio:false,
    plugins:{legend:{position:'top',labels:{color:'#94A3B8',usePointStyle:true}}},
    scales:{
      y:{grid:{color:'rgba(148,163,184,0.06)'},ticks:{callback:v=>v+'%'},max:100},
      x:{grid:{display:false}}
    }
  }
});
function filterSkills(status, btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.skill-row-table').forEach(row => {
    if(status==='all' || row.dataset.status === status) {
      row.style.display = 'grid';
    } else {
      row.style.display = 'none';
    }
  });
}
</script>
</html>`;
}
