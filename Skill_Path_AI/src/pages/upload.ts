import { royalHead } from '../components/layout'

export function upload(): string {
  return royalHead('Upload — SkillPath AI', '<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>') + `
<style>
.upload-page{
  min-height:100vh;display:flex;flex-direction:column;align-items:center;
  padding:100px 80px 60px;position:relative;
}
.upload-nav{
  position:fixed;top:0;left:0;right:0;z-index:100;height:64px;
  background:var(--bg-glass);backdrop-filter:blur(20px);
  border-bottom:1px solid var(--border-subtle);
  display:flex;align-items:center;justify-content:space-between;
  padding:0 48px;
}
.upload-header{text-align:center;margin-bottom:56px;max-width:700px}
.upload-eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  padding:7px 18px;border-radius:var(--radius-full);
  background:var(--violet-soft);border:1px solid rgba(124,58,237,0.25);
  font-size:12px;font-weight:700;color:var(--violet-light);
  letter-spacing:0.05em;text-transform:uppercase;margin-bottom:24px;
}
.upload-title{
  font-family:var(--font-display);font-size:48px;font-weight:900;
  line-height:1.1;letter-spacing:-0.02em;color:#fff;margin-bottom:16px;
}
.upload-sub{font-size:18px;color:var(--text-secondary);line-height:1.6}

/* STEPPER */
.upload-stepper{
  display:flex;align-items:center;gap:0;margin-bottom:48px;
}
.stepper-item{display:flex;align-items:center}
.stepper-step{
  display:flex;align-items:center;gap:10px;
  padding:10px 20px;border-radius:var(--radius-full);
  font-size:13px;font-weight:600;color:var(--text-muted);
  transition:all 0.2s;
}
.stepper-step.active{
  background:linear-gradient(135deg,rgba(37,99,235,0.2),rgba(124,58,237,0.1));
  color:var(--royal-blue-light);border:1px solid rgba(37,99,235,0.3);
}
.stepper-step.done{color:var(--emerald-light)}
.stepper-num{
  width:28px;height:28px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-size:12px;font-weight:700;background:var(--bg-alpha-med);border:1px solid var(--border-glass);
}
.stepper-step.active .stepper-num{background:var(--royal-blue);border-color:var(--royal-blue);color:#fff;box-shadow:0 0 12px rgba(37,99,235,0.5)}
.stepper-step.done .stepper-num{background:var(--emerald);border-color:var(--emerald);color:#fff}
.stepper-conn{width:60px;height:2px;background:var(--border-subtle);position:relative;margin:0 4px}
.stepper-conn.done-conn{background:linear-gradient(90deg,var(--emerald),var(--royal-blue))}

/* UPLOAD GRID */
.upload-grid{
  display:grid;grid-template-columns:1fr 1fr;gap:24px;
  width:100%;max-width:960px;margin-bottom:28px;
}
.upload-zone{
  border:2px dashed rgba(37,99,235,0.3);border-radius:var(--radius-xl);
  padding:48px 32px;text-align:center;cursor:pointer;
  background:var(--bg-alpha-low);
  transition:all 0.3s;position:relative;overflow:hidden;
  animation:border-glow 3s ease infinite;
}
@keyframes border-glow{
  0%,100%{border-color:rgba(37,99,235,0.3)}
  50%{border-color:rgba(37,99,235,0.6);background:rgba(37,99,235,0.07)}
}
.upload-zone:hover,.upload-zone.drag-over{
  border-color:var(--royal-blue);background:rgba(37,99,235,0.1);
  transform:scale(1.01);
  box-shadow:0 0 40px rgba(37,99,235,0.2);
  animation:none;
}
.upload-zone.violet-zone{
  border-color:rgba(124,58,237,0.3);background:rgba(124,58,237,0.04);
  animation:border-glow-violet 3s ease infinite;
}
@keyframes border-glow-violet{
  0%,100%{border-color:rgba(124,58,237,0.3)}
  50%{border-color:rgba(124,58,237,0.6);background:rgba(124,58,237,0.07)}
}
.upload-zone.violet-zone:hover,.upload-zone.violet-zone.drag-over{
  border-color:var(--violet);background:rgba(124,58,237,0.1);
  box-shadow:0 0 40px rgba(124,58,237,0.2);
  animation:none;
}
.zone-bg-icon{
  font-size:56px;margin-bottom:20px;display:block;
  animation:float 3s ease-in-out infinite;
}
.zone-title{font-size:18px;font-weight:700;color:#fff;margin-bottom:8px;font-family:var(--font-display)}
.zone-sub{font-size:14px;color:var(--text-secondary);margin-bottom:24px;line-height:1.5}
.zone-formats{
  display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-bottom:20px;
}
.zone-fmt{
  padding:4px 10px;border-radius:var(--radius-full);
  font-size:11px;font-weight:700;background:var(--bg-alpha-med);color:var(--text-muted);
}
.zone-btn{
  display:inline-flex;align-items:center;gap:8px;
  padding:10px 24px;border-radius:var(--radius-md);
  font-size:14px;font-weight:600;border:none;cursor:pointer;transition:all 0.2s;
}
.zone-btn-blue{background:var(--royal-blue);color:#fff;box-shadow:0 4px 16px rgba(37,99,235,0.4)}
.zone-btn-blue:hover{background:var(--royal-blue-light);box-shadow:0 6px 24px rgba(37,99,235,0.6)}
.zone-btn-violet{background:var(--violet);color:#fff;box-shadow:0 4px 16px rgba(124,58,237,0.4)}
.zone-btn-violet:hover{box-shadow:0 6px 24px rgba(124,58,237,0.6)}
.zone-input{display:none;}

/* FILE PREVIEW */
.file-preview{
  display:none;align-items:center;gap:12px;
  padding:14px 18px;border-radius:var(--radius-md);margin-top:16px;
  background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);
}
.file-preview.show{display:flex}
.file-icon{width:40px;height:40px;border-radius:var(--radius-sm);background:var(--emerald);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.file-name{font-size:13px;font-weight:600;color:var(--text-primary)}
.file-size{font-size:11px;color:var(--text-muted);margin-top:2px}
.file-remove{margin-left:auto;background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:18px;transition:color 0.2s}
.file-remove:hover{color:var(--crimson)}

/* CONFIG FORM */
.config-card{
  width:100%;max-width:960px;padding:32px;
  background:var(--bg-glass);backdrop-filter:blur(20px);
  border:1px solid var(--border-glass);border-radius:var(--radius-xl);
  margin-bottom:24px;
}
.config-title{font-size:16px;font-weight:700;color:var(--text-primary);margin-bottom:24px;display:flex;align-items:center;gap:8px}
.config-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px}
.config-grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px}
.form-group{display:flex;flex-direction:column}

/* SKILL LEVEL */
.skill-toggle-group{display:flex;gap:8px}
.skill-toggle-btn{
  flex:1;padding:10px;border-radius:var(--radius-md);
  border:1px solid var(--border-glass);background:var(--bg-alpha-low);
  color:var(--text-secondary);font-size:13px;font-weight:600;cursor:pointer;
  transition:all 0.2s;text-align:center;
}
.skill-toggle-btn:hover{background:rgba(37,99,235,0.08);border-color:rgba(37,99,235,0.3)}
.skill-toggle-btn.active{background:rgba(37,99,235,0.15);border-color:var(--royal-blue);color:var(--royal-blue-light)}

/* GENERATE CTA */
.generate-section{width:100%;max-width:960px;text-align:center}
.generate-note{
  font-size:13px;color:var(--text-muted);margin-top:16px;
  display:flex;align-items:center;justify-content:center;gap:6px;
}
.btn-generate{
  width:100%;padding:20px;border-radius:var(--radius-lg);
  font-size:18px;font-weight:800;font-family:var(--font-display);
  background:linear-gradient(135deg,var(--royal-blue),var(--violet),#1D4ED8);
  background-size:200% 200%;animation:shimmer-text 4s ease infinite;
  color:#fff;border:none;cursor:pointer;
  box-shadow:0 8px 40px rgba(37,99,235,0.5),0 0 0 1px rgba(59,130,246,0.2);
  transition:all 0.3s;position:relative;overflow:hidden;
}
.btn-generate::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(255,255,255,0.1),transparent);
  opacity:0;transition:opacity 0.2s;
}
.btn-generate:hover{
  box-shadow:0 12px 60px rgba(37,99,235,0.7),0 0 0 1px rgba(59,130,246,0.4);
  transform:translateY(-2px);
}
.btn-generate:hover::before{opacity:1}

/* AI OVERLAY */
.ai-overlay{
  position:fixed;inset:0;z-index:1000;
  background:rgba(1,4,13,0.95);backdrop-filter:blur(20px);
  display:none;flex-direction:column;align-items:center;justify-content:center;
}
.ai-overlay.show{display:flex}
.ai-spinner{
  width:120px;height:120px;border-radius:50%;
  border:3px solid transparent;
  background:linear-gradient(var(--bg-deep),var(--bg-deep)) padding-box,
             linear-gradient(135deg,var(--royal-blue),var(--violet),var(--gold)) border-box;
  display:flex;align-items:center;justify-content:center;
  margin-bottom:40px;position:relative;
  animation:spin-slow 2s linear infinite;
}
.ai-spinner-inner{
  position:absolute;inset:8px;border-radius:50%;border:2px solid transparent;
  background:linear-gradient(var(--bg-deep),var(--bg-deep)) padding-box,
             linear-gradient(135deg,var(--violet),var(--gold),var(--emerald)) border-box;
  animation:spin-slow 3s linear infinite reverse;
}
.ai-spinner-core{
  width:50px;height:50px;font-size:28px;z-index:1;
  animation:glow-pulse 1.5s ease infinite;
}
.ai-overlay-title{
  font-family:var(--font-display);font-size:32px;font-weight:900;color:#fff;
  margin-bottom:12px;text-align:center;
}
.ai-overlay-sub{font-size:16px;color:var(--text-secondary);margin-bottom:40px}
.ai-progress-wrap{width:400px;margin-bottom:16px}
.ai-progress-bar{
  height:8px;background:rgba(255,255,255,0.06);border-radius:4px;overflow:hidden;
}
.ai-progress-fill{
  height:100%;border-radius:4px;width:0%;
  background:linear-gradient(90deg,var(--royal-blue),var(--violet),var(--gold));
  transition:width 0.4s ease;
  box-shadow:0 0 12px rgba(37,99,235,0.6);
}
.ai-progress-fill::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);animation:shimmer 1.5s infinite}
.ai-progress-label{font-size:13px;color:var(--text-muted);text-align:center;margin-top:8px}
.ai-steps{display:flex;flex-direction:column;gap:10px;margin-top:20px;width:400px}
.ai-step{
  display:flex;align-items:center;gap:12px;padding:12px 16px;
  border-radius:var(--radius-md);background:var(--bg-alpha-low);
  border:1px solid var(--border-subtle);font-size:13px;color:var(--text-secondary);
  transition:all 0.3s;
}
.ai-step.active{background:rgba(37,99,235,0.1);border-color:rgba(37,99,235,0.3);color:var(--text-primary)}
.ai-step.done{background:rgba(16,185,129,0.08);border-color:rgba(16,185,129,0.2);color:var(--emerald-light)}
.ai-step-dot{
  width:24px;height:24px;border-radius:50%;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;font-size:11px;
  background:var(--bg-alpha-med);border:1px solid var(--border-glass);
}
.ai-step.active .ai-step-dot{background:var(--royal-blue);border-color:var(--royal-blue);animation:pulse-dot 1.5s infinite;color:#fff}
.ai-step.done .ai-step-dot{background:var(--emerald);border-color:var(--emerald);color:#fff}
</style>

<div class="page-bg"></div>
<div class="orb orb-1"></div>
<div class="orb orb-2"></div>

<!-- NAV -->
<nav class="upload-nav">
  <a href="/" class="logo-mark" style="font-family:var(--font-display);font-weight:800;font-size:18px;background:linear-gradient(90deg,#fff,#9B72F3,#FB923C);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-decoration:none;display:flex;align-items:center;gap:10px">
    <div class="logo-icon" style="background:linear-gradient(135deg,#1e293b,#0f172a);display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(66,133,244,0.15);width:32px;height:32px;border-radius:8px;flex-shrink:0">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="uploadLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285F4" />
            <stop offset="50%" style="stop-color:#9B72F3" />
            <stop offset="100%" style="stop-color:#FB923C" />
          </linearGradient>
        </defs>
        <path d="M12 3C12 3 13.5 10 19 12C13.5 14 12 21 12 21C12 21 10.5 14 5 12C10.5 10 12 3 12 3Z" fill="url(#uploadLogoGrad)" />
      </svg>
    </div>
    SkillPath AI
  </a>
  <div style="display:flex;align-items:center;gap:16px">
    <a href="/dashboard" class="btn btn-ghost btn-sm">Dashboard</a>
    <a href="/" class="btn btn-ghost btn-sm">← Back</a>
  </div>
</nav>

<!-- MAIN -->
<div class="upload-page">
  <!-- HEADER -->
  <div class="upload-header anim-fade-up">
    <div class="upload-eyebrow">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2l2 4h4l-3.3 2.4 1.3 4L8 10l-3.9 2.4 1.3-4L2 6h4z"/></svg>
      AI-Powered Analysis
    </div>
    <h1 class="upload-title">Generate Your <span class="gradient-text-royal">AI Roadmap</span></h1>
    <p class="upload-sub">Upload your resume and target role. SkillPath AI will analyze 500+ skills and craft a personalized onboarding journey in seconds.</p>
  </div>

  <!-- STEPPER -->
  <div class="upload-stepper anim-fade-up delay-1">
    <div class="stepper-item">
      <div class="stepper-step active" id="step1"><div class="stepper-num">1</div>Upload Files</div>
    </div>
    <div class="stepper-conn" id="conn1"></div>
    <div class="stepper-item">
      <div class="stepper-step" id="step2"><div class="stepper-num">2</div>Role Config</div>
    </div>
    <div class="stepper-conn" id="conn2"></div>
    <div class="stepper-item">
      <div class="stepper-step" id="step3"><div class="stepper-num">3</div>AI Analysis</div>
    </div>
    <div class="stepper-conn" id="conn3"></div>
    <div class="stepper-item">
      <div class="stepper-step" id="step4"><div class="stepper-num">4</div>Roadmap Ready</div>
    </div>
  </div>

  <!-- UPLOAD ZONES -->
  <div class="upload-grid anim-fade-up delay-2">
    <div>
      <div class="upload-zone" id="resumeZone" onclick="if(event.target.tagName !== 'BUTTON') document.getElementById('resumeInput').click()">
        <input type="file" class="zone-input" id="resumeInput" accept=".pdf,.doc,.docx,.txt">
        <span class="zone-bg-icon">📄</span>
        <h3 class="zone-title">Upload Resume</h3>
        <p class="zone-sub">Drag & drop your resume here or click to browse. AI extracts all skills, experience, and credentials.</p>
        <div class="zone-formats">
          <span class="zone-fmt">PDF</span><span class="zone-fmt">DOCX</span><span class="zone-fmt">TXT</span>
        </div>
        <button class="zone-btn zone-btn-blue" onclick="document.getElementById('resumeInput').click()">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v9M5 5l3-3 3 3"/><path d="M3 13h10"/></svg>
          Choose Resume
        </button>
        <div class="file-preview" id="resumePreview">
          <div class="file-icon">📄</div>
          <div>
            <div class="file-name" id="resumeName">resume.pdf</div>
            <div class="file-size" id="resumeSize">245 KB</div>
          </div>
          <button class="file-remove" onclick="clearFile('resume')">✕</button>
        </div>
      </div>
    </div>
    <div>
      <div class="upload-zone violet-zone" id="jdZone" onclick="if(event.target.tagName !== 'BUTTON') document.getElementById('jdInput').click()">
        <input type="file" class="zone-input" id="jdInput" accept=".pdf,.doc,.docx,.txt">
        <span class="zone-bg-icon" style="animation-delay:-1.5s">📋</span>
        <h3 class="zone-title">Add Job Description</h3>
        <p class="zone-sub">Upload the target role JD or paste the text below. AI maps requirements, seniority, and expectations.</p>
        <div class="zone-formats">
          <span class="zone-fmt">PDF</span><span class="zone-fmt">DOCX</span><span class="zone-fmt">TEXT</span>
        </div>
        <button class="zone-btn zone-btn-violet" onclick="document.getElementById('jdInput').click()">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v9M5 5l3-3 3 3"/><path d="M3 13h10"/></svg>
          Choose JD File
        </button>
        <div class="file-preview" id="jdPreview" style="border-color:rgba(124,58,237,0.2);background:rgba(124,58,237,0.08)">
          <div class="file-icon" style="background:var(--violet)">📋</div>
          <div>
            <div class="file-name" id="jdName">job-description.pdf</div>
            <div class="file-size" id="jdSize">128 KB</div>
          </div>
          <button class="file-remove" onclick="clearFile('jd')">✕</button>
        </div>
      </div>
    </div>
  </div>

  <!-- JD TEXT AREA -->
  <div style="width:100%;max-width:960px;margin-bottom:24px" class="anim-fade-up delay-2">
    <label class="royal-label">Or paste Job Description text directly</label>
    <textarea id="jdTextArea" class="royal-input" style="height:100px;resize:vertical;line-height:1.5" placeholder="Paste the full job description here — role, requirements, tech stack, responsibilities..."></textarea>
  </div>

  <!-- CONFIG CARD -->
  <div class="config-card anim-fade-up delay-3">
    <h3 class="config-title">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--royal-blue-light)" stroke-width="1.6"><circle cx="9" cy="9" r="2.5"/><path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.2 3.2l1.4 1.4M13.4 13.4l1.4 1.4"/></svg>
      Role Configuration
    </h3>
    <div class="config-grid">
      <div class="form-group">
        <label class="royal-label">Target Role Title</label>
        <input type="text" class="royal-input" placeholder="e.g., Senior Full-Stack Engineer" value="Senior Full-Stack Engineer">
      </div>
      <div class="form-group">
        <label class="royal-label">Department</label>
        <select class="royal-select">
          <option>Engineering</option>
          <option>Data Science</option>
          <option>Product</option>
          <option>DevOps / Platform</option>
          <option>Security</option>
          <option>Design</option>
          <option>Other</option>
        </select>
      </div>
      <div class="form-group">
        <label class="royal-label">Experience Level</label>
        <select class="royal-select">
          <option>Junior (0–2 yrs)</option>
          <option selected>Mid-Level (2–5 yrs)</option>
          <option>Senior (5–8 yrs)</option>
          <option>Staff / Principal</option>
          <option>Director+</option>
        </select>
      </div>
      <div class="form-group">
        <label class="royal-label">Team Size</label>
        <select class="royal-select">
          <option>1–10</option>
          <option selected>10–50</option>
          <option>50–200</option>
          <option>200+</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="royal-label" style="margin-bottom:12px">Current Skill Level</label>
      <div class="skill-toggle-group">
        ${['Beginner','Intermediate','Advanced','Expert'].map((l,i)=>`
        <button class="skill-toggle-btn${i===1?' active':''}" onclick="toggleSkill(this)">${l}</button>`).join('')}
      </div>
    </div>
    <div style="margin-top:20px">
      <label class="royal-label">Additional Notes <span style="color:var(--text-muted);font-weight:400">(optional)</span></label>
      <input type="text" class="royal-input" placeholder="e.g., focus on cloud-native skills, prioritize system design, fast-track security clearance...">
    </div>
  </div>

  <!-- GENERATE CTA -->
  <div class="generate-section anim-fade-up delay-4">
    <button class="btn-generate" onclick="startAnalysis()">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-right:10px"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      Generate AI Roadmap
    </button>
    <div class="generate-note">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="var(--emerald)" stroke-width="2"><path d="M8 1v6l4 4"/><circle cx="8" cy="11" r="6"/></svg>
      Analysis completes in ~15 seconds · Processes 500+ skills · Fully explainable AI
    </div>
  </div>
</div>

<!-- AI ANALYSIS OVERLAY -->
<div class="ai-overlay" id="aiOverlay">
  <div class="ai-spinner">
    <div class="ai-spinner-inner"></div>
    <div class="ai-spinner-core">✦</div>
  </div>
  <h2 class="ai-overlay-title">AI is Analyzing…</h2>
  <p class="ai-overlay-sub">Building your personalized onboarding roadmap</p>
  <div class="ai-progress-wrap">
    <div class="ai-progress-bar">
      <div class="ai-progress-fill" id="aiProgressFill" style="position:relative"></div>
    </div>
    <div class="ai-progress-label" id="aiProgressLabel">Initializing AI engine... 0%</div>
  </div>
  <div class="ai-steps">
    ${[
      {id:'as1',label:'📄 Parsing resume structure & extracting skills'},
      {id:'as2',label:'📋 Analyzing job description requirements'},
      {id:'as3',label:'🎯 Running skill gap detection algorithm'},
      {id:'as4',label:'🧠 Generating reasoning chain & explanations'},
      {id:'as5',label:'🛤️ Building personalized learning roadmap'},
    ].map(s=>`<div class="ai-step" id="${s.id}">
      <div class="ai-step-dot">◦</div>
      <span>${s.label}</span>
    </div>`).join('')}
  </div>
</div>

<script>
try {
  window.toggleSkill = function(btn){
    document.querySelectorAll('.skill-toggle-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  }

  // Drag and drop
  ;['resumeZone','jdZone'].forEach(id=>{
    const zone=document.getElementById(id);
    zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('drag-over')});
    zone.addEventListener('dragleave',()=>zone.classList.remove('drag-over'));
    zone.addEventListener('drop',e=>{
      e.preventDefault();zone.classList.remove('drag-over');
      const file=e.dataTransfer.files[0];
      if(file) {
        const dt = new DataTransfer();
        dt.items.add(file);
        document.getElementById(id==='resumeZone'?'resumeInput':'jdInput').files = dt.files;
        showFile(id==='resumeZone'?'resume':'jd',file);
      }
    });
  });

  document.getElementById('resumeInput').addEventListener('change',e=>{
    const file=e.target.files[0];
    if(file)showFile('resume',file);
  });
  document.getElementById('jdInput').addEventListener('change',e=>{
    const file=e.target.files[0];
    if(file)showFile('jd',file);
  });

  console.log("Upload.ts JS fully initialized");

  window.showFile = function(type,file){
    const preview=document.getElementById(type+'Preview');
    document.getElementById(type+'Name').textContent=file.name;
    document.getElementById(type+'Size').textContent=(file.size/1024).toFixed(0)+' KB';
    preview.classList.add('show');
    // Advance stepper
    document.getElementById('step1').classList.add('done');
    document.getElementById('step2').classList.add('active');
  }
  
  window.clearFile = function(type){
    document.getElementById(type+'Preview').classList.remove('show');
    document.getElementById(type==='resume'?'resumeInput':'jdInput').value='';
  }

  // Utility to extract text from a file (PDF or TXT)
  window.extractText = async function(file) {
    if (!file) return '';
    if (file.name.endsWith('.pdf')) {
      try {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
        let text = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map(item => item.str).join(' ') + '\\n';
        }
        return text;
      } catch (e) {
        console.error('PDF parsing error', e);
        return 'Error extracting PDF text. Please ensure it is a valid text-based PDF.';
      }
    } else {
      return await file.text();
    }
  }

  window.startAnalysis = async function(){
    if (!localStorage.getItem('userProfile')) {
      window.location.href = '/signup';
      return;
    }

    const resumeFile = document.getElementById('resumeInput').files?.[0];
    const jdFile = document.getElementById('jdInput').files?.[0];
    const jdTextArea = document.getElementById('jdTextArea').value;

    if (!resumeFile) {
      alert('Please upload a resume first.');
      return;
    }

    const overlay=document.getElementById('aiOverlay');
    overlay.classList.add('show');

    const steps=['as1','as2','as3','as4','as5'];
    const fill=document.getElementById('aiProgressFill');
    const label=document.getElementById('aiProgressLabel');
    const labels=['Parsing documents...','Analyzing JD & Resume...','Detecting skill gaps...','Generating reasoning...','Building roadmap...'];

    let i=0;
    // Visual progress interval
    const iv=setInterval(()=>{
      if(i>0)document.getElementById(steps[i-1]).className='ai-step done';
      if(i<steps.length){
        document.getElementById(steps[i]).className='ai-step active';
        document.getElementById(steps[i]).querySelector('.ai-step-dot').textContent='●';
        const pct=Math.round(((i+1)/steps.length)*80)+5; // Go up to 85% visually while waiting
        fill.style.width=pct+'%';
        label.textContent=labels[i]+' '+pct+'%';
        i++;
      }
    }, 1200);

    try {
      // 1. Extract Text
      const resumeText = await window.extractText(resumeFile);
      let jdText = jdTextArea;
      if (!jdText.trim() && jdFile) {
        jdText = await window.extractText(jdFile);
      }
      
      // 2. Gather Config
      const config = {
        role: document.querySelectorAll('.config-card select')[0].value,
        level: document.querySelectorAll('.config-card select')[1].value
      };

      // 3. Call AI Backend
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText, jdText, config })
      });

      const rawText = await res.text();
      if (!res.ok) throw new Error('Backend failed: ' + rawText);
      
      let data;
      try {
        data = JSON.parse(rawText);
      } catch(e) {
        console.log('Raw output:', rawText);
        throw new Error('Could not parse backend response as JSON');
      }
      
      // Save roadmap data
      localStorage.setItem('roadmapData', JSON.stringify(data));
      localStorage.setItem('hasUploaded', 'true');

      // Finish visual sequence smoothly
      clearInterval(iv);
      document.getElementById(steps[steps.length-1]).className='ai-step done';
      fill.style.width='100%';
      label.textContent='Analysis complete! Redirecting... 100%';
      document.getElementById('step3').classList.add('active');
      document.getElementById('step4').classList.add('active');
      setTimeout(()=>window.location.href='/dashboard', 1000);

    } catch (err) {
      clearInterval(iv);
      label.textContent = 'Analysis failed: ' + (err.message || err);
      fill.style.background='var(--crimson)';
      console.error(err);
      setTimeout(()=>overlay.classList.remove('show'), 6000);
    }
  }

  // Stepper visuals
  document.getElementById('step2').addEventListener('click',()=>{
    document.getElementById('step1').classList.add('done');
    document.getElementById('step2').classList.add('active');
  });

} catch (e) {
  alert("SCRIPT INITIALIZATION ERROR: " + e.message);
  console.error("SCRIPT ERROR", e);
}
</script>
</html>`;
}
