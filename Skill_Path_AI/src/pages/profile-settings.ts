import { royalHead, sidebar, header } from '../components/layout'

export function profileSettings(): string {
  return royalHead('Settings — SkillPath AI') + `
<style>
.settings-layout{display:grid;grid-template-columns:280px 1fr;gap:24px}
.settings-nav{background:var(--bg-glass);backdrop-filter:blur(16px);border:1px solid var(--border-glass);border-radius:var(--radius-xl);padding:12px;height:fit-content}
.settings-nav-title{font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-muted);padding:8px 12px;margin-bottom:4px}
.settings-nav-item{
  display:flex;align-items:center;gap:10px;padding:11px 14px;
  border-radius:var(--radius-md);cursor:pointer;
  font-size:14px;font-weight:500;color:var(--text-secondary);
  transition:all 0.2s;margin-bottom:2px;
}
.settings-nav-item:hover{background:var(--bg-hover);color:var(--text-primary)}
.settings-nav-item.active{background:rgba(37,99,235,0.12);color:var(--royal-blue-light);border:1px solid rgba(37,99,235,0.2)}
.settings-nav-icon{width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.settings-panel{display:flex;flex-direction:column;gap:20px}
.settings-card{background:var(--bg-glass);backdrop-filter:blur(20px);border:1px solid var(--border-glass);border-radius:var(--radius-xl);overflow:hidden}
.settings-card-header{padding:20px 24px;border-bottom:1px solid var(--border-subtle);display:flex;align-items:center;justify-content:space-between}
.settings-card-body{padding:24px}
.profile-card-top{
  padding:32px 24px;
  background:linear-gradient(135deg,rgba(37,99,235,0.1),rgba(124,58,237,0.08));
  border-bottom:1px solid var(--border-subtle);
  display:flex;align-items:center;gap:24px;
}
.profile-avatar-large{
  width:88px;height:88px;border-radius:50%;
  background:linear-gradient(135deg,var(--royal-blue),var(--violet));
  display:flex;align-items:center;justify-content:center;
  font-size:34px;font-weight:800;color:#fff;
  box-shadow:0 0 32px rgba(37,99,235,0.4),0 0 60px rgba(124,58,237,0.2);
  position:relative;flex-shrink:0;
}
.avatar-edit{
  position:absolute;bottom:2px;right:2px;width:26px;height:26px;
  background:var(--royal-blue);border-radius:50%;border:2px solid var(--bg-deep);
  display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer;
}
.profile-name-display{font-family:var(--font-display);font-size:26px;font-weight:800;color:#fff;margin-bottom:4px}
.profile-role-display{font-size:14px;color:var(--text-secondary);margin-bottom:16px}
.completion-bar-wrap{width:240px}
.completion-label{display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px}
.completion-label-text{color:var(--text-muted)}
.completion-label-val{color:var(--emerald-light);font-weight:700}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px}
.form-row-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:16px}
.toggle-row{
  display:flex;align-items:center;justify-content:space-between;
  padding:14px 0;border-bottom:1px solid var(--border-subtle);
}
.toggle-row:last-child{border-bottom:none}
.toggle-row-left{flex:1}
.toggle-row-title{font-size:14px;font-weight:600;color:var(--text-primary);margin-bottom:2px}
.toggle-row-desc{font-size:12px;color:var(--text-muted)}
.theme-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.theme-option{
  border-radius:var(--radius-md);overflow:hidden;cursor:pointer;
  border:2px solid var(--border-glass);transition:all 0.2s;
}
.theme-option:hover{transform:scale(1.02)}
.theme-option.selected{border-color:var(--royal-blue);box-shadow:0 0 16px rgba(37,99,235,0.3)}
.theme-preview{height:64px;position:relative}
.theme-label{padding:8px 10px;font-size:12px;font-weight:600;color:var(--text-primary);background:rgba(0,0,0,0.3)}
.danger-zone{
  padding:20px;border-radius:var(--radius-md);
  border:1px solid rgba(239,68,68,0.2);background:rgba(239,68,68,0.04);
  display:flex;align-items:center;justify-content:space-between;
}
.danger-text{font-size:14px;font-weight:600;color:#FCA5A5;margin-bottom:4px}
.danger-sub{font-size:12px;color:var(--text-muted)}
.royal-select {
  background: #111827 !important; /* Force dark solid bg */
  color: #ffffff !important;
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-md);
  padding: 10px 12px;
  width: 100%;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
}
.royal-select:focus { border-color: var(--royal-blue); box-shadow: 0 0 0 2px rgba(37,99,235,0.2); }
</style>

<div class="page-bg"></div>
<div class="orb orb-1"></div>
<div class="orb orb-2"></div>

${sidebar('settings')}
${header('Profile & Settings', 'Manage your account, preferences and security')}

<main class="main-content page-wrapper">
  <div class="content-inner">
    <div class="settings-layout">

      <!-- Settings Nav -->
      <div class="settings-nav anim-fade-up">
        <div class="settings-nav-title">Account</div>
        ${[
      { icon: '👤', label: 'Profile', id: 'profile', active: true },
      { icon: '🔔', label: 'Notifications', id: 'notifications' },
      { icon: '🔒', label: 'Security', id: 'security' },
      { icon: '🎨', label: 'Appearance', id: 'appearance' },
    ].map(i => `
        <div class="settings-nav-item${i.active ? ' active' : ''}" onclick="switchTab(this,'${i.id}')">
          <span class="settings-nav-icon">${i.icon}</span>${i.label}
        </div>`).join('')}
        <div class="settings-nav-title" style="margin-top:12px">Preferences</div>
        ${[
      { icon: '🤖', label: 'AI Settings', id: 'ai' },
      { icon: '🌍', label: 'Language & Region', id: 'region' },
      { icon: '⚡', label: 'Integrations', id: 'integrations' },
    ].map(i => `
        <div class="settings-nav-item" onclick="switchTab(this,'${i.id}')">
          <span class="settings-nav-icon">${i.icon}</span>${i.label}
        </div>`).join('')}
        <div class="settings-nav-title" style="margin-top:12px">Danger</div>
        <div class="settings-nav-item" style="color:#FCA5A5">
          <span class="settings-nav-icon">🗑️</span>Delete Account
        </div>
      </div>

      <!-- Settings Content -->
      <div class="settings-panel anim-fade-up delay-1">

        <!-- PROFILE CARD -->
        <div class="settings-card">
          <div class="profile-card-top">
            <div class="profile-avatar-large" id="profileAvatar">
              A
              <div class="avatar-edit">✎</div>
            </div>
            <div style="flex:1">
              <div class="profile-name-display" id="profileNameDisplay">Alex Morgan</div>
              <div class="profile-role-display">Senior Full-Stack Engineer · Engineering</div>
              <div class="completion-bar-wrap">
                <div class="completion-label">
                  <span class="completion-label-text">Profile Completion</span>
                  <span class="completion-label-val">78%</span>
                </div>
                <div class="progress-bar progress-emerald">
                  <div class="progress-fill" style="width:78%"></div>
                </div>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px">
              <span class="badge badge-emerald">✓ Verified</span>
              <span class="badge badge-blue">Pro Plan</span>
            </div>
          </div>

          <!-- PROFILE FORM -->
          <div class="settings-card-body">
            <div style="font-size:14px;font-weight:700;color:var(--text-primary);margin-bottom:20px">Personal Information</div>
            <div class="form-row">
              <div class="form-group"><label class="royal-label">First Name</label><input id="inputFirstName" class="royal-input" type="text" value="Alex"></div>
              <div class="form-group"><label class="royal-label">Last Name</label><input id="inputLastName" class="royal-input" type="text" value="Morgan"></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label class="royal-label">Email Address</label><input id="inputEmail" class="royal-input" type="email" value="alex.morgan@company.com"></div>
              <div class="form-group"><label class="royal-label">Phone</label><input class="royal-input" type="tel" value="+1 (555) 234-5678"></div>
            </div>
            <div class="form-row-3">
              <div class="form-group">
                <label class="royal-label">Role Title</label>
                <input class="royal-input" type="text" value="Senior Full-Stack Engineer">
              </div>
              <div class="form-group">
                <label class="royal-label">Department</label>
                <select class="royal-select"><option selected>Engineering</option><option>Product</option><option>Design</option><option>Data Science</option></select>
              </div>
              <div class="form-group">
                <label class="royal-label">Experience</label>
                <select class="royal-select"><option>Junior</option><option selected>Mid-Level</option><option>Senior</option><option>Staff+</option></select>
              </div>
            </div>
            <div class="form-group" style="margin-bottom:20px">
              <label class="royal-label">Bio</label>
              <textarea id="inputBio" class="royal-input" style="height:80px;resize:vertical;line-height:1.5">Full-stack engineer with 6 years experience in React, Node.js and cloud infrastructure. Passionate about scalable systems and developer experience.</textarea>
            </div>
            <div style="display:flex;gap:10px;justify-content:flex-end">
              <button class="btn btn-ghost btn-sm">Cancel</button>
              <button class="btn btn-primary btn-sm" onclick="saveProfile()">Save Changes</button>
            </div>
          </div>
        </div>

        <!-- NOTIFICATIONS -->
        <div class="settings-card">
          <div class="settings-card-header">
            <div class="section-title">
              <div class="section-title-icon" style="background:var(--gold-soft)">🔔</div>
              Notification Preferences
            </div>
          </div>
          <div class="settings-card-body">
            ${[
      { title: 'Roadmap Updates', desc: 'Get notified when your learning roadmap is updated', id: 'ntfRoadmap' },
      { title: 'Skill Gap Alerts', desc: 'Alert when new skill gaps are detected in your profile', id: 'ntfSkillGap' },
      { title: 'Career Insights', desc: 'Weekly digest of market trends and opportunities', id: 'ntfCareer' },
      { title: 'AI Analysis Complete', desc: 'Notify when AI finishes analyzing uploaded resume', id: 'ntfAI' },
      { title: 'Course Recommendations', desc: 'New course recommendations matching your gaps', id: 'ntfCourse' },
      { title: 'Team Updates', desc: 'Updates from your team and organization', id: 'ntfTeam' },
    ].map(n => `
            <div class="toggle-row">
              <div class="toggle-row-left">
                <div class="toggle-row-title">${n.title}</div>
                <div class="toggle-row-desc">${n.desc}</div>
              </div>
              <label class="toggle">
                <input type="checkbox" id="${n.id}" onchange="saveSettings()">
                <div class="toggle-track"></div>
                <div class="toggle-thumb"></div>
              </label>
            </div>`).join('')}
          </div>
        </div>

        <!-- SECURITY -->
        <div class="settings-card">
          <div class="settings-card-header">
            <div class="section-title">
              <div class="section-title-icon" style="background:var(--crimson-soft)">🔒</div>
              Security & Authentication
            </div>
            <span class="badge badge-emerald">Secure</span>
          </div>
          <div class="settings-card-body">
            <div style="font-size:14px;font-weight:700;color:var(--text-primary);margin-bottom:16px">Change Password</div>
            <div class="form-row-3" style="margin-bottom:20px">
              <div class="form-group"><label class="royal-label">Current Password</label><input class="royal-input" type="password" placeholder="••••••••"></div>
              <div class="form-group"><label class="royal-label">New Password</label><input class="royal-input" type="password" placeholder="Min. 12 characters"></div>
              <div class="form-group"><label class="royal-label">Confirm Password</label><input class="royal-input" type="password" placeholder="Repeat new password"></div>
            </div>
            <div class="divider"></div>
            <div style="font-size:14px;font-weight:700;color:var(--text-primary);margin:16px 0">Two-Factor Authentication</div>
            <div class="toggle-row">
              <div class="toggle-row-left">
                <div class="toggle-row-title">Enable 2FA</div>
                <div class="toggle-row-desc">Add an extra layer of security with authenticator app</div>
              </div>
              <label class="toggle"><input type="checkbox" id="sec2FA" onchange="saveSettings()"><div class="toggle-track"></div><div class="toggle-thumb"></div></label>
            </div>
            <div class="divider"></div>
            <div class="danger-zone">
              <div>
                <div class="danger-text">⚠️ Delete Account</div>
                <div class="danger-sub">Permanently delete your account and all data. This cannot be undone.</div>
              </div>
              <button class="btn btn-sm" style="background:rgba(239,68,68,0.15);color:#FCA5A5;border:1px solid rgba(239,68,68,0.25)">Delete Account</button>
            </div>
          </div>
        </div>

        <!-- APPEARANCE -->
        <div class="settings-card">
          <div class="settings-card-header">
            <div class="section-title">
              <div class="section-title-icon" style="background:var(--violet-soft)">🎨</div>
              Appearance
            </div>
          </div>
          <div class="settings-card-body">
            <div style="font-size:14px;font-weight:700;color:var(--text-primary);margin-bottom:16px">Theme</div>
            <div class="theme-grid">
              ${[
      { name: 'Royal Dark', bg: 'linear-gradient(135deg,#01040D,#060E1F)', border: 'rgba(37,99,235,0.5)', selected: true },
      { name: 'Deep Space', bg: 'linear-gradient(135deg,#0a0014,#1a0030)', border: 'rgba(124,58,237,0.5)', selected: false },
      { name: 'Midnight Gold', bg: 'linear-gradient(135deg,#0D1117,#1C1409)', border: 'rgba(245,158,11,0.5)', selected: false },
    ].map(t => `
              <div class="theme-option${t.selected ? ' selected' : ''}" onclick="selectTheme(this)" style="border-color:${t.selected ? 'var(--royal-blue)' : 'var(--border-glass)'}">
                <div class="theme-preview" style="background:${t.bg}">
                  <div style="position:absolute;inset:8px;border-radius:4px;border:1px solid ${t.border};opacity:0.6"></div>
                </div>
                <div class="theme-label">${t.name}${t.selected ? ' ✓' : ''}</div>
              </div>`).join('')}
            </div>
            <div class="divider"></div>
            <div style="font-size:14px;font-weight:700;color:var(--text-primary);margin-bottom:16px">UI Preferences</div>
            ${[
      { title: 'Reduced Motion', desc: 'Minimize animations and transitions', id: 'uiMotion' },
      { title: 'High Contrast Mode', desc: 'Increase contrast for better readability', id: 'uiContrast' },
      { title: 'Compact Layout', desc: 'Denser spacing for more information density', id: 'uiCompact' },
    ].map(p => `
            <div class="toggle-row">
              <div class="toggle-row-left">
                <div class="toggle-row-title">${p.title}</div>
                <div class="toggle-row-desc">${p.desc}</div>
              </div>
              <label class="toggle"><input type="checkbox" id="${p.id}" onchange="saveSettings()"><div class="toggle-track"></div><div class="toggle-thumb"></div></label>
            </div>`).join('')}
          </div>
        </div>

      </div>
    </div>
  </div>
</main>

<!-- TOAST CONTAINER -->
<div class="toast-container" id="toastContainer"></div>

<script>
function switchTab(el,id){
  document.querySelectorAll('.settings-nav-item').forEach(i=>i.classList.remove('active'));
  el.classList.add('active');
}
function selectTheme(el){
  document.querySelectorAll('.theme-option').forEach(t=>{t.classList.remove('selected');t.style.borderColor='var(--border-glass)'});
  el.classList.add('selected');el.style.borderColor='var(--royal-blue)';
  const lbl=el.querySelector('.theme-label');
  document.querySelectorAll('.theme-label').forEach(l=>l.textContent=l.textContent.replace(' ✓',''));
  lbl.textContent+=' ✓';
  showToast('Theme updated to '+lbl.textContent.replace(' ✓',''),'success');
}
function saveSettings(){
  const s = {};
  document.querySelectorAll('input[type="checkbox"]').forEach(c => {
    if(c.id) s[c.id] = c.checked;
  });
  localStorage.setItem('appSettings', JSON.stringify(s));
}

function saveProfile(){
  const f = document.getElementById('inputFirstName').value;
  const l = document.getElementById('inputLastName').value;
  const e = document.getElementById('inputEmail').value;
  const b = document.getElementById('inputBio').value;
  
  const profile = { name: f + ' ' + l, email: e, bio: b };
  const existing = JSON.parse(localStorage.getItem('userProfile') || '{}');
  localStorage.setItem('userProfile', JSON.stringify({...existing, ...profile}));
  
  // Update UI immediately
  const nameDisp = document.getElementById('profileNameDisplay');
  if(nameDisp) nameDisp.textContent = profile.name;
  
  // Update sidebar/header (global)
  const sidebarName = document.querySelector('.user-name');
  if(sidebarName) sidebarName.textContent = profile.name;
  
  showToast('Profile saved successfully!','success');
}
function showToast(msg,type='info'){
  const t=document.getElementById('toastContainer');
  if(!t) return;
  const el=document.createElement('div');
  el.className=\`toast toast-\${type}\`;
  const icons={success:'✅',error:'❌',warning:'⚠️',info:'ℹ️'};
  el.innerHTML=\`<div style="font-size:18px">\${icons[type]||'ℹ️'}</div><div><div class="toast-title">\${type.charAt(0).toUpperCase()+type.slice(1)}</div><div class="toast-body">\${msg}</div></div>\`;
  t.appendChild(el);
  setTimeout(()=>{el.style.opacity='0';el.style.transform='translateX(20px)';el.style.transition='all 0.3s';setTimeout(()=>el.remove(),300)},3000);
}

document.addEventListener('DOMContentLoaded', () => {
  // Load Profile
  const profileStr = localStorage.getItem('userProfile');
  if (profileStr) {
    try {
      const p = JSON.parse(profileStr);
      const avatarEl = document.getElementById('profileAvatar');
      const nameDisp = document.getElementById('profileNameDisplay');
      
      if(nameDisp) nameDisp.textContent = p.name;
      if(p.name) {
        const parts = p.name.split(' ');
        document.getElementById('inputFirstName').value = parts[0] || '';
        document.getElementById('inputLastName').value = parts.slice(1).join(' ') || '';
      }
      if(p.email) document.getElementById('inputEmail').value = p.email;
      if(p.bio) document.getElementById('inputBio').value = p.bio;
      
      if (avatarEl && p.picture) {
        const editBtn = avatarEl.querySelector('.avatar-edit');
        avatarEl.innerHTML = '<img src="' + p.picture + '" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" referrerpolicy="no-referrer">';
        if (editBtn) {
          Object.assign(editBtn.style, {position:'absolute', zIndex:'10'});
          avatarEl.appendChild(editBtn);
        }
        avatarEl.style.background = 'none';
      }
    } catch(e) {}
  }
  
  // Load Settings
  const settingsStr = localStorage.getItem('appSettings');
  if(settingsStr) {
    try {
      const s = JSON.parse(settingsStr);
      Object.keys(s).forEach(id => {
        const el = document.getElementById(id);
        if(el) el.checked = s[id];
      });
    } catch(e) {}
  }
});
</script>
</html>`;
}
