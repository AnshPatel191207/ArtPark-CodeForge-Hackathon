import { royalHead, sidebar, header } from '../components/layout'

export function adminPanel(): string {
  return royalHead('Admin Panel — SkillPath AI') + `
<style>
.admin-stat{
  padding:20px;border-radius:var(--radius-lg);
  background:var(--bg-glass);backdrop-filter:blur(16px);
  border:1px solid var(--border-subtle);transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.admin-stat:hover{
  transform:translateY(-5px) scale(1.03);
  box-shadow: 0 12px 30px rgba(0,0,0,0.4), 0 0 15px var(--royal-blue-glow);
  border-color: var(--royal-blue-light);
}
.admin-stat-val{font-size:32px;font-weight:900;font-family:var(--font-display);line-height:1;margin-bottom:6px}
.admin-stat-lbl{font-size:12px;color:var(--text-secondary)}
.course-row{
  display:grid;grid-template-columns:1fr 120px 100px 100px 100px;
  padding:16px;border-bottom:1px solid var(--border-subtle);
  align-items:center; transition: all 0.2s;
  cursor: pointer;
}
.course-row:not(.header):hover { 
  background: rgba(37,99,235,0.06); 
  transform: scale(1.01) translateX(4px);
  border-color: var(--royal-blue-soft);
}
.course-row.header{background:rgba(255,255,255,0.02);font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-muted);border-bottom:1px solid var(--border-subtle)}
.skill-map-card{padding:16px;border-radius:var(--radius-md);background:rgba(255,255,255,0.02);border:1px solid var(--border-subtle);margin-bottom:10px;transition:all 0.2s;cursor:pointer}
.skill-map-card:hover{background:rgba(37,99,235,0.06);border-color:rgba(37,99,235,0.2)}
.skill-map-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.skill-map-name{font-size:14px;font-weight:700;color:var(--text-primary)}
.skill-courses{display:flex;flex-wrap:wrap;gap:6px}
.builder-zone{
  min-height:200px;border:2px dashed rgba(37,99,235,0.25);border-radius:var(--radius-lg);
  padding:24px;
  background:rgba(37,99,235,0.02);
  display:flex;flex-direction:column;gap:10px;
}
.builder-item{
  display:flex;align-items:center;gap:12px;padding:12px 16px;
  border-radius:var(--radius-md);background:var(--bg-glass);border:1px solid var(--border-glass);
  cursor:grab;transition:all 0.2s;
}
.builder-item:hover{box-shadow:0 4px 16px rgba(0,0,0,0.2);border-color:rgba(37,99,235,0.3)}
.builder-item:active{cursor:grabbing;transform:scale(0.98)}
.drag-handle{color:var(--text-muted);font-size:14px;cursor:grab}
.search-bar{
  display:flex;align-items:center;gap:10px;
  background:rgba(255,255,255,0.04);border:1px solid var(--border-glass);
  border-radius:var(--radius-md);padding:10px 16px;width:280px;transition:all 0.2s;
}
.search-bar:focus-within{border-color:var(--royal-blue);box-shadow:0 0 0 3px var(--royal-blue-soft)}
.search-bar input{background:none;border:none;outline:none;color:var(--text-primary);font-size:13px;font-family:var(--font-body)}
</style>

<div class="page-bg"></div>
<div class="orb orb-1"></div>

${sidebar('admin')}
${header('Admin Panel', 'Course catalog, roadmap builder, skill mapping')}

<main class="main-content page-wrapper">
  <div class="content-inner">

    <!-- ADMIN STATS -->
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-bottom:28px">
      ${[
        {val:'248',lbl:'Active Courses',icon:'📚',color:'var(--royal-blue-light)'},
        {val:'1,842',lbl:'Total Users',icon:'👥',color:'var(--emerald-light)'},
        {val:'6,720',lbl:'Skills Mapped',icon:'🧠',color:'var(--violet-light)'},
        {val:'432',lbl:'Roadmaps Generated',icon:'🛤️',color:'var(--gold-light)'},
        {val:'97.4%',lbl:'System Uptime',icon:'⚡',color:'#67E8F9'},
      ].map(s=>`
      <div class="admin-stat anim-fade-up">
        <div style="font-size:24px;margin-bottom:8px">${s.icon}</div>
        <div class="admin-stat-val" style="color:${s.color}">${s.val}</div>
        <div class="admin-stat-lbl">${s.lbl}</div>
      </div>`).join('')}
    </div>

    <!-- MAIN ADMIN GRID -->
    <div style="display:grid;grid-template-columns:1fr 360px;gap:20px;margin-bottom:20px">

      <!-- COURSE CATALOG -->
      <div class="glass-card anim-fade-up delay-1">
        <div style="padding:20px 24px;border-bottom:1px solid var(--border-subtle);display:flex;align-items:center;justify-content:space-between">
          <div class="section-title">
            <div class="section-title-icon" style="background:rgba(37,99,235,0.15)">📚</div>
            Course Catalog
            <span class="badge badge-blue">248 courses</span>
          </div>
          <div style="display:flex;gap:10px;align-items:center">
            <div class="search-bar">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#64748B" stroke-width="1.8"><circle cx="7" cy="7" r="5"/><path d="M11 11l3 3"/></svg>
              <input type="text" placeholder="Search courses...">
            </div>
            <button class="btn btn-primary btn-sm">+ Add Course</button>
          </div>
        </div>
        <div>
          <div class="course-row header">
            <span>Course Name</span><span>Provider</span><span>Duration</span><span>Level</span><span>Status</span>
          </div>
          ${[
            {id:'k8s-1', name:'Kubernetes Fundamentals',prov:'Linux Foundation',dur:'4 weeks',level:'Intermediate',status:'active'},
            {id:'tf-1', name:'Terraform: Infrastructure as Code',prov:'HashiCorp',dur:'2 weeks',level:'Intermediate',status:'active'},
            {id:'gql-1', name:'GraphQL API Design',prov:'Apollo',dur:'1.5 weeks',level:'Beginner',status:'active'},
            {id:'redis-1', name:'Redis Caching Patterns',prov:'Redis University',dur:'1 week',level:'Beginner',status:'active'},
            {id:'aws-1', name:'AWS Solutions Architect',prov:'AWS Training',dur:'6 weeks',level:'Advanced',status:'active'},
            {id:'sys-1', name:'System Design Fundamentals',prov:'Grokking',dur:'3 weeks',level:'Advanced',status:'active'},
            {id:'react-1', name:'React Advanced Patterns',prov:'Frontend Masters',dur:'2 weeks',level:'Advanced',status:'active'},
            {id:'docker-1', name:'Docker Deep Dive',prov:'Pluralsight',dur:'1.5 weeks',level:'Intermediate',status:'active'},
            {id:'ci-1', name:'CI/CD with GitHub Actions',prov:'GitHub',dur:'1 week',level:'Intermediate',status:'draft'},
            {id:'istio-1', name:'Service Mesh with Istio',prov:'Istio Community',dur:'2 weeks',level:'Advanced',status:'draft'},
          ].map(c=>`
          <div class="course-row" onclick="location.href='/course/${c.id}'">
            <div>
              <div style="font-size:14px;font-weight:600;color:var(--text-primary)">${c.name}</div>
              <div style="font-size:11px;color:var(--text-muted);margin-top:2px">Click to view subscription plans</div>
            </div>
            <span style="font-size:13px;color:var(--text-secondary)">${c.prov}</span>
            <span style="font-size:13px;color:var(--text-secondary)">${c.dur}</span>
            <span class="badge ${c.level==='Advanced'?'badge-violet':c.level==='Intermediate'?'badge-blue':'badge-emerald'}" style="font-size:11px">${c.level}</span>
            <span class="badge ${c.status==='active'?'badge-emerald':'badge-gold'}" style="font-size:11px">${c.status==='active'?'✓ Active':'Draft'}</span>
          </div>`).join('')}
        </div>
      </div>

      <!-- SKILL-TO-COURSE MAPPING -->
      <div class="glass-card anim-fade-up delay-2">
        <div style="padding:20px 24px;border-bottom:1px solid var(--border-subtle)">
          <div class="section-title">
            <div class="section-title-icon" style="background:var(--violet-soft)">🔗</div>
            Skill → Course Mapping
          </div>
        </div>
        <div style="padding:20px;max-height:520px;overflow-y:auto">
          ${[
            {skill:'Kubernetes',color:'var(--crimson)',courses:['K8s Fundamentals','CKAD Prep','Docker → K8s']},
            {skill:'Terraform',color:'var(--violet)',courses:['Terraform IaC','HashiCorp Vault']},
            {skill:'GraphQL',color:'var(--royal-blue)',courses:['GraphQL API Design','Apollo Client']},
            {skill:'Redis',color:'var(--gold)',courses:['Redis Caching','Redis Cluster']},
            {skill:'CI/CD',color:'var(--emerald)',courses:['GitHub Actions','Jenkins Pipeline']},
            {skill:'System Design',color:'#67E8F9',courses:['Grokking SysDesign','AWS Architecture']},
          ].map(s=>`
          <div class="skill-map-card">
            <div class="skill-map-header">
              <span class="skill-map-name">${s.skill}</span>
              <span style="font-size:11px;color:${s.color};font-weight:700">${s.courses.length} courses</span>
            </div>
            <div class="skill-courses">
              ${s.courses.map(c=>`<span class="chip" style="font-size:11px;padding:4px 10px">${c}</span>`).join('')}
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- ROADMAP BUILDER -->
    <div class="glass-card anim-fade-up delay-3">
      <div style="padding:20px 24px;border-bottom:1px solid var(--border-subtle);display:flex;align-items:center;justify-content:space-between">
        <div class="section-title">
          <div class="section-title-icon" style="background:var(--gold-soft)">🛤️</div>
          Drag & Drop Roadmap Builder
          <span class="badge badge-gold">Interactive</span>
        </div>
        <div style="display:flex;gap:10px">
          <button class="btn btn-ghost btn-sm">Preview</button>
          <button class="btn btn-primary btn-sm">Save Template</button>
        </div>
      </div>
      <div style="padding:24px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
          <div>
            <div style="font-size:12px;font-weight:700;color:var(--text-muted);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px">Available Modules</div>
            <div style="display:flex;flex-direction:column;gap:8px">
              ${[
                {icon:'📖',title:'Kubernetes Core Concepts',tag:'4 wks'},
                {icon:'⚙️',title:'Terraform IaC Fundamentals',tag:'2 wks'},
                {icon:'🔗',title:'GraphQL API Mastery',tag:'1.5 wks'},
                {icon:'🚀',title:'CI/CD Pipeline Setup',tag:'1 wk'},
              ].map(m=>`
              <div class="builder-item" draggable="true" ondragstart="handleDrag(event)">
                <span class="drag-handle">⠿</span>
                <span style="font-size:20px">${m.icon}</span>
                <div style="flex:1">
                  <div style="font-size:13px;font-weight:600;color:var(--text-primary)">${m.title}</div>
                  <div style="font-size:11px;color:var(--text-muted)">${m.tag}</div>
                </div>
                <span class="badge badge-blue" style="font-size:10px">Drag →</span>
              </div>`).join('')}
            </div>
          </div>
          <div>
            <div style="font-size:12px;font-weight:700;color:var(--text-muted);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px">Roadmap Order</div>
            <div class="builder-zone" id="builderZone" ondragover="allowDrop(event)" ondrop="handleDrop(event)">
              <div style="text-align:center;color:var(--text-muted);font-size:14px;padding:20px">
                <div style="font-size:32px;margin-bottom:8px">↓</div>
                Drag modules here to build roadmap
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</main>

<script>
let dragItem=null;
function handleDrag(e){dragItem=e.currentTarget}
function allowDrop(e){e.preventDefault()}
function handleDrop(e){
  e.preventDefault();
  if(!dragItem)return;
  const zone=document.getElementById('builderZone');
  const placeholder=zone.querySelector('div[style*="text-align:center"]');
  if(placeholder)placeholder.remove();
  const clone=dragItem.cloneNode(true);
  clone.style.border='1px solid rgba(37,99,235,0.3)';
  clone.style.background='rgba(37,99,235,0.1)';
  clone.querySelector('.badge').textContent='Step '+(zone.children.length+1);
  clone.querySelector('.badge').className='badge badge-gold';
  clone.setAttribute('draggable','false');
  zone.appendChild(clone);
}
</script>
</html>`;
}

// commit update #1

// commit update #7

// commit update #13
