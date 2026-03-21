import { royalHead, sidebar, header } from '../components/layout'

export function roadmap(): string {
  return royalHead('Learning Roadmap — SkillPath AI') + `
<style>
.roadmap-container { max-width: 1000px; margin: 0 auto; }
.roadmap-header-card { padding: 32px; margin-bottom: 24px; text-align: center; }
.roadmap-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 24px; }
.roadmap-stat-item { padding: 16px; border-radius: var(--radius-md); background: var(--bg-alpha-low); border: 1px solid var(--border-subtle); }

.reasoning-trace-card { margin-top: 32px; padding: 24px; }
.trace-step { padding: 16px; border-left: 3px solid var(--royal-blue); background: var(--bg-alpha-med); border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 12px; }

/* Timeline adjustments for full page */
.timeline-item { gap: 32px; padding-bottom: 48px; }
.timeline-node { width: 48px; height: 48px; font-size: 20px; }
.timeline-content { 
  background: var(--bg-glass); border: 1px solid var(--border-glass); 
  border-radius: var(--radius-xl); padding: 24px; transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); 
}
.timeline-content:hover { transform: translateX(5px); border-color: var(--royal-blue); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }

/* Scroll Reveal */
.reveal-card {
  opacity: 0;
  transform: translateY(30px) scale(0.96);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}
.reveal-card.active {
  opacity: 1;
  transform: translateY(0) scale(1);
}
@keyframes slideUpScale {
  from { opacity: 0; transform: translateY(40px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
</style>

<div class="page-bg"></div>
<div class="orb orb-1"></div>
<div class="orb orb-3"></div>

${sidebar('roadmap')}
${header('Learning Roadmap', 'Your personalized path to mastering the role')}

<main class="main-content page-wrapper">
  <div class="content-inner roadmap-container">
    
    <div class="glass-card roadmap-header-card anim-fade-up">
      <h1 class="gradient-text-royal" style="font-size:32px;margin-bottom:12px">Senior Full-Stack Engineer Path</h1>
      <p style="color:var(--text-secondary);max-width:600px;margin:0 auto">We've identified 8 critical skill gaps between your current profile and the target role. This 5-step roadmap is designed to bridge those gaps in approximately 6 weeks.</p>
      
      <div class="roadmap-stats">
        <div class="roadmap-stat-item">
          <div style="font-size:20px;font-weight:800;color:var(--royal-blue-light)">5 Steps</div>
          <div style="font-size:12px;color:var(--text-muted)">Learning Path</div>
        </div>
        <div class="roadmap-stat-item">
          <div style="font-size:20px;font-weight:800;color:var(--emerald-light)">6 Weeks</div>
          <div style="font-size:12px;color:var(--text-muted)">Est. Duration</div>
        </div>
        <div class="roadmap-stat-item">
          <div style="font-size:20px;font-weight:800;color:var(--gold-light)">12 Resources</div>
          <div style="font-size:12px;color:var(--text-muted)">Curated Content</div>
        </div>
        <div class="roadmap-stat-item">
          <div style="font-size:20px;font-weight:800;color:var(--violet-light)">87% Fit</div>
          <div style="font-size:12px;color:var(--text-muted)">Target Score</div>
        </div>
      </div>
    </div>

    <div class="anim-fade-up delay-1">
      <div class="section-title" style="margin-bottom:24px;font-size:20px">
        <div class="section-title-icon" style="background:var(--royal-blue-soft)">🛤️</div>
        The Journey
      </div>

      <div class="roadmap-section" id="fullRoadmap">
        ${[
          {node:'node-blue',n:'01',name:'Cloud Infrastructure & Terraform',prio:'Critical',diff:'Intermediate',dur:'1.5 wks',reason:'Essential for modern DevOps-oriented Full-Stack roles. Terraform ensures reproducible infrastructure which the target team prioritizes.',resources:['HashiCorp Learn','Terraform Up & Running']},
          {node:'node-gold',n:'02',name:'Kubernetes Core & Orchestration',prio:'Critical',diff:'Intermediate',dur:'2 wks',reason:'The target role requires managing GKE clusters. Your Docker foundation covers 40% of the concepts needed here.',resources:['CKAD Course','K8s.io Docs']},
          {node:'node-violet',n:'03',name:'Advanced GraphQL Architectures',prio:'High',diff:'Advanced',dur:'1 wk',reason:'Bridge the gap between REST and GraphQL. Focus on N+1 problem, schema stitching, and Apollo Federation.',resources:['Apollo Odyssey','Fullstack GraphQL']},
          {node:'node-emerald',n:'04',name:'System Design & Microservices',prio:'High',diff:'Advanced',dur:'1 wk',reason:'Prepares you for the architectural decisions required at the Senior level. Focus on event-driven patterns.',resources:['Grokking SysDesign','ByteByteGo']},
          {node:'node-cyan',n:'05',name:'Security Best Practices (OWASP)',prio:'Medium',diff:'Beginner',dur:'0.5 wks',reason:'Final polish to ensure production-grade code. Important for the financial services aspect of the target role.',resources:['OWASP Top 10 Guide','Snyk Security Training']},
        ].map((r, i)=>`
        <div class="timeline-item anim-fade-up" style="animation-delay:${0.3 + i*0.1}s">
          <div class="timeline-node ${r.node}">${r.n}</div>
          <div class="timeline-content reveal-card" style="transition-delay:${i*0.1}s">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
              <div class="timeline-title" style="font-size:18px;margin-bottom:0">${r.name}</div>
              <div style="display:flex;gap:8px">
                <span class="badge ${r.prio==='Critical'?'badge-crimson':r.prio==='High'?'badge-gold':'badge-blue'}">${r.prio}</span>
                <span class="badge badge-cyan">⏱ ${r.dur}</span>
              </div>
            </div>
            <div class="timeline-body">
              <div style="margin-bottom:16px;padding:12px 16px;background:var(--bg-alpha-low);border-radius:var(--radius-md);border-left:3px solid var(--royal-blue)">
                <div style="font-size:11px;font-weight:700;color:var(--royal-blue-light);margin-bottom:4px;text-transform:uppercase">Expert Logic</div>
                ${r.reason}
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center">
                <div style="display:flex;gap:8px">
                  ${r.resources.map(res=>`<a href="#" class="chip">📚 ${res}</a>`).join('')}
                </div>
                <button class="btn btn-ghost btn-sm">Start Module</button>
              </div>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>

    <!-- AI REASONING TRACE SECTION -->
    <div class="glass-card reasoning-trace-card anim-fade-up delay-2">
      <div class="section-title" style="margin-bottom:20px">
        <div class="section-title-icon" style="background:var(--violet-soft)">🧠</div>
        AI Reasoning Trace & Gap Analysis
      </div>
      <div class="trace-step">
        <h4 style="font-size:14px;margin-bottom:4px">Why specific learning order?</h4>
        <p style="font-size:13px;color:var(--text-secondary)">We prioritized Infrastructure (Terraform/K8s) first because they provide the environment for your application code. GraphQL and System Design follow as they represent the application layer improvements required for this specific role's seniority level.</p>
      </div>
      <div class="trace-step" style="border-color:var(--emerald)">
        <h4 style="font-size:14px;margin-bottom:4px">Skill Synergy Detected</h4>
        <p style="font-size:13px;color:var(--text-secondary)">Your Expert level in React.js (92%) reduces the time needed for GraphQL Frontend integration by ~30%. We have adjusted the duration of Step 03 accordingly.</p>
      </div>
      <div class="trace-step" style="border-color:var(--gold)">
        <h4 style="font-size:14px;margin-bottom:4px">Critical Gap: DevOps Culture</h4>
        <p style="font-size:13px;color:var(--text-secondary)">Resume analysis shows a "Developer-only" focus. The target role's JD emphasizes "Full Cycle Engineering". Steps 01 and 02 are designed to shift your mental model toward Infrastructure-as-Code and Automated Orchestration.</p>
      </div>
    </div>

  </div>
</main>

<script>
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('userProfile')) {
    window.location.href = '/login';
  }

  // Scroll Reveal Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-card').forEach(card => {
    observer.observe(card);
  });
});
</script>
</html>`;
}
