import { royalHead, sidebar, header } from '../components/layout'

export function aiChat(): string {
  return royalHead('AI Assistant — SkillPath AI') + `
<style>
.chat-layout{
  display:grid;grid-template-columns:1fr 320px;
  height:100%;
  flex: 1;
  min-height: 0;
}
/* CHAT PANEL */
.chat-panel{
  flex:1;display:flex;flex-direction:column;
  background:var(--bg-deep);
  min-width:0;position:relative;
  height:100%;
  min-height: 0;
}
.chat-header-bar{
  padding:20px 24px;border-bottom:1px solid var(--border-subtle);
  display:flex;align-items:center;justify-content:space-between;
  background:var(--bg-alpha-high);backdrop-filter:blur(20px);
}
.ai-identity{display:flex;align-items:center;gap:14px}
.ai-avatar{
  width:48px;height:48px;border-radius:50%;
  background:linear-gradient(135deg,var(--royal-blue),var(--violet));
  display:flex;align-items:center;justify-content:center;font-size:22px;
  box-shadow:0 0 20px rgba(37,99,235,0.4),0 0 40px rgba(124,58,237,0.2);
  position:relative;
}
.ai-online{
  position:absolute;bottom:2px;right:2px;width:10px;height:10px;
  background:var(--emerald);border-radius:50%;border:2px solid var(--bg-deep);
  box-shadow:0 0 6px var(--emerald-glow);animation:pulse-dot 2s infinite;
}
.ai-name{font-size:16px;font-weight:700;color:var(--text-primary);font-family:var(--font-display)}
.ai-desc{font-size:12px;color:var(--text-muted);margin-top:2px}
.chat-actions{display:flex;gap:8px}

/* MESSAGES */
.chat-messages{
  flex:1;overflow-y:auto;padding:24px;
  display:flex;flex-direction:column;gap:20px;
  min-height: 0;
}
.message{display:flex;gap:12px;animation:fadeInUp 0.3s ease both}
.message.user-msg{flex-direction:row-reverse}
.msg-avatar{
  width:36px;height:36px;border-radius:50%;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;font-size:16px;
  background:linear-gradient(135deg,var(--royal-blue),var(--violet));font-weight:700;font-size:14px;color:#fff;
  box-shadow:0 0 12px rgba(37,99,235,0.3);
  margin-top:4px;
}
.user-msg .msg-avatar{background:linear-gradient(135deg,var(--violet),#4C1D95)}
.msg-content-wrap{max-width:70%}
.msg-meta{
  font-size:11px;color:var(--text-muted);margin-bottom:6px;
  display:flex;align-items:center;gap:6px;
}
.user-msg .msg-meta{flex-direction:row-reverse}
.msg-bubble{
  padding:14px 18px;border-radius:var(--radius-lg);
  font-size:14px;line-height:1.7;color:var(--text-primary);
  position:relative;
}
.ai-bubble{
  background:var(--bg-glass);backdrop-filter:blur(12px);
  border:1px solid var(--border-glass);
  border-bottom-left-radius:4px;
  box-shadow:var(--shadow-card);
}
.user-bubble{
  background:linear-gradient(135deg,rgba(37,99,235,0.25),rgba(124,58,237,0.15));
  border:1px solid rgba(37,99,235,0.25);
  border-bottom-right-radius:4px;
  text-align:right;
}
.msg-bubble code{
  background:var(--bg-alpha-high);padding:2px 6px;border-radius:4px;
  font-size:12px;font-family:monospace;color:var(--gold-light);
}
.msg-sources{
  display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;
}
.source-chip{
  display:inline-flex;align-items:center;gap:4px;
  padding:4px 10px;border-radius:var(--radius-full);
  font-size:11px;color:var(--royal-blue-light);
  background:var(--royal-blue-soft);border:1px solid rgba(59,130,246,0.2);
}

/* Typing indicator */
.typing-indicator{
  display:flex;gap:12px;align-items:flex-start;
  animation:fadeIn 0.3s ease;
}
.typing-bubble{
  background:var(--bg-glass);border:1px solid var(--border-glass);
  padding:14px 18px;border-radius:var(--radius-lg);border-bottom-left-radius:4px;
  display:flex;align-items:center;gap:6px;
}
.typing-dot{
  width:7px;height:7px;border-radius:50%;background:var(--royal-blue);
  animation:typing-anim 1.2s ease infinite;
}
.typing-dot:nth-child(2){animation-delay:0.2s}
.typing-dot:nth-child(3){animation-delay:0.4s}
@keyframes typing-anim{
  0%,60%,100%{transform:translateY(0);opacity:0.4}
  30%{transform:translateY(-8px);opacity:1}
}

/* SUGGESTION CHIPS */
.suggestions-bar{
  padding:12px 24px;border-top:1px solid var(--border-subtle);
  display:flex;flex-wrap:wrap;gap:8px;
  background:var(--bg-alpha-low);
}
.suggestion-chip{
  padding:8px 16px;border-radius:var(--radius-full);
  font-size:13px;font-weight:500;cursor:pointer;
  background:rgba(37,99,235,0.08);border:1px solid rgba(37,99,235,0.2);
  color:var(--royal-blue-light);transition:all 0.2s;
}
.suggestion-chip:hover{background:rgba(37,99,235,0.18);border-color:rgba(37,99,235,0.4)}

/* INPUT BAR */
.chat-input-area{
  padding:16px 24px 16px;border-top:1px solid var(--border-subtle);
  background:var(--bg-deep);backdrop-filter:blur(20px);
  flex-shrink:0;
  position: sticky;
  bottom: 0;
  z-index: 10;
}
.chat-input-row{
  display:flex;align-items:flex-end;gap:12px;
  background:var(--bg-alpha-low);border:1px solid var(--border-glass);
  border-radius:var(--radius-xl);padding:12px 16px;
  transition:all 0.2s;
}
.chat-input-row:focus-within{
  border-color:rgba(37,99,235,0.4);background:rgba(37,99,235,0.04);
  box-shadow:0 0 0 3px rgba(37,99,235,0.1);
}
.chat-textarea{
  flex:1;background:none;border:none;outline:none;resize:none;
  color:var(--text-primary);font-size:14px;font-family:var(--font-body);
  line-height:1.5;max-height:120px;min-height:22px;
}
.chat-textarea::placeholder{color:var(--text-muted)}
.chat-send{
  width:40px;height:40px;border-radius:var(--radius-md);flex-shrink:0;
  background:linear-gradient(135deg,var(--royal-blue),var(--violet));
  border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;
  color:#fff;transition:all 0.2s;
  box-shadow:0 4px 12px rgba(37,99,235,0.4);
}
.chat-send:hover{box-shadow:0 6px 20px rgba(37,99,235,0.6);transform:scale(1.05)}
.input-meta{
  font-size:11px;color:var(--text-muted);margin-top:8px;
  display:flex;align-items:center;gap:8px;
}

/* RIGHT PANEL */
.chat-sidebar{
  display:flex;flex-direction:column;overflow-y:auto;
  background:var(--bg-alpha-low);
  height:100%;
  min-height: 0;
}
.chat-side-section{padding:20px;border-bottom:1px solid var(--border-subtle)}
.chat-side-title{font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-muted);margin-bottom:14px}
.topic-chip{
  display:flex;align-items:center;gap:8px;padding:10px 12px;
  border-radius:var(--radius-md);cursor:pointer;margin-bottom:6px;
  background:rgba(255,255,255,0.02);border:1px solid var(--border-subtle);
  font-size:13px;color:var(--text-secondary);transition:all 0.2s;
}
.topic-chip:hover{background:rgba(37,99,235,0.08);border-color:rgba(37,99,235,0.2);color:var(--royal-blue-light)}
.topic-icon{width:28px;height:28px;border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.ai-stat-card{
  padding:12px;border-radius:var(--radius-md);
  background:rgba(255,255,255,0.02);border:1px solid var(--border-subtle);
  margin-bottom:8px;
}
.ai-stat-val{font-size:20px;font-weight:800;font-family:var(--font-display)}
.ai-stat-lbl{font-size:11px;color:var(--text-muted);margin-top:2px}
.resource-item{
  display:flex;align-items:center;gap:10px;padding:10px 12px;
  border-radius:var(--radius-md);cursor:pointer;
  background:rgba(255,255,255,0.02);border:1px solid var(--border-subtle);
  margin-bottom:6px;transition:all 0.2s;
}
.resource-item:hover{background:rgba(37,99,235,0.08);border-color:rgba(37,99,235,0.2)}
.resource-icon{width:32px;height:32px;border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.resource-name{font-size:13px;font-weight:600;color:var(--text-primary)}
.resource-type{font-size:11px;color:var(--text-muted)}
</style>

<div class="page-bg"></div>
<div class="orb orb-2"></div>

${sidebar('ai-chat')}
${header('AI Assistant', 'Powered by SkillPath Intelligence Engine')}

<main class="main-content" style="height:100vh;overflow:hidden;padding-top:var(--header-h);padding-bottom:0;display:flex;flex-direction:column;background:var(--bg-deep)">
  <div class="chat-layout">

    <!-- CHAT MAIN PANEL -->
    <div class="chat-panel">
      <!-- Chat header -->
      <div class="chat-header-bar">
        <div class="ai-identity">
          <div class="ai-avatar">🤖<div class="ai-online"></div></div>
          <div>
            <div class="ai-name">SkillPath AI</div>
            <div class="ai-desc">Intelligence Engine · Analyzing your profile</div>
          </div>
        </div>
        <div class="chat-actions">
          <span class="badge badge-emerald">
            <span style="width:6px;height:6px;background:var(--emerald);border-radius:50%;display:inline-block;animation:pulse-dot 2s infinite"></span>
            Online
          </span>
          <button class="btn-icon" title="Clear chat" onclick="clearChat()">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 3h14M6 3V2h4v1M3 3l1 10h8l1-10"/></svg>
          </button>
          <button class="btn-icon" title="Export">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v9M5 8l3 3 3-3M3 13h10"/></svg>
          </button>
        </div>
      </div>

      <!-- Messages container -->
      <div class="chat-messages" id="chatMessages">
        <!-- Welcome message -->
        <div class="message">
          <div class="msg-avatar">🤖</div>
          <div class="msg-content-wrap">
            <div class="msg-meta">SkillPath AI · Just now</div>
            <div class="msg-bubble ai-bubble">
              <strong style="color:var(--royal-blue-light);display:block;margin-bottom:8px">👋 Hello, Alex! I'm your SkillPath AI Assistant.</strong>
              I've analyzed your resume and the <code>Senior Full-Stack Engineer</code> role. Here's what I found:
              <ul style="margin-top:10px;padding-left:18px;display:flex;flex-direction:column;gap:6px">
                <li><strong style="color:var(--emerald-light)">87% skill match</strong> — strong existing foundation</li>
                <li><strong style="color:#FCA5A5">8 critical gaps</strong> — mainly DevOps/Cloud skills</li>
                <li><strong style="color:var(--gold-light)">3-week roadmap</strong> — achievable timeline</li>
              </ul>
              <div style="margin-top:12px;color:var(--text-secondary)">Ask me anything about your roadmap, skill gaps, or career trajectory.</div>
              <div class="msg-sources">
                <span class="source-chip">📄 Resume Analyzed</span>
                <span class="source-chip">📋 JD Matched</span>
                <span class="source-chip">🧠 87% Confidence</span>
              </div>
            </div>
          </div>
        </div>

        <!-- User message -->
        <div class="message user-msg">
          <div class="msg-avatar" style="background:linear-gradient(135deg,#4C1D95,var(--violet))">A</div>
          <div class="msg-content-wrap">
            <div class="msg-meta">You · 2m ago</div>
            <div class="msg-bubble user-bubble">Why is Kubernetes marked as Critical? I've used Docker before.</div>
          </div>
        </div>

        <!-- AI response -->
        <div class="message">
          <div class="msg-avatar">🤖</div>
          <div class="msg-content-wrap">
            <div class="msg-meta">SkillPath AI · 2m ago</div>
            <div class="msg-bubble ai-bubble">
              <strong style="color:var(--gold-light);display:block;margin-bottom:8px">🎯 Great question — Docker is definitely a head start!</strong>
              Here's my reasoning for marking <code>Kubernetes</code> as <strong style="color:#FCA5A5">Critical</strong>:
              <ol style="margin-top:10px;padding-left:18px;display:flex;flex-direction:column;gap:6px">
                <li>The JD mentions "Kubernetes" or "K8s" <strong>4 times</strong>, always as Required</li>
                <li>The team runs <strong>GKE (Google Kubernetes Engine)</strong> in production — day-1 operational need</li>
                <li>Zero K8s signals found in your resume (no kubectl, Helm, K8s config files)</li>
              </ol>
              <div style="margin:12px 0;padding:10px 14px;background:rgba(37,99,235,0.08);border-radius:var(--radius-md);border-left:3px solid var(--royal-blue)">
                <strong style="color:var(--royal-blue-light)">Good news:</strong> Docker expertise gives you ~40% transfer — you understand container concepts, images, and networking. Kubernetes adds orchestration, scaling, and scheduling layers.
              </div>
              <strong style="color:var(--emerald-light)">Suggested path:</strong> Docker → Docker Compose → K8s concepts → kubectl → Deployments/Services → CKAD prep. ~2 weeks to productive level.
              <div class="msg-sources">
                <span class="source-chip">🔍 JD Analysis</span>
                <span class="source-chip">📊 Confidence: 94%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- User message 2 -->
        <div class="message user-msg">
          <div class="msg-avatar" style="background:linear-gradient(135deg,#4C1D95,var(--violet))">A</div>
          <div class="msg-content-wrap">
            <div class="msg-meta">You · 1m ago</div>
            <div class="msg-bubble user-bubble">What's the best resource to learn Kubernetes quickly?</div>
          </div>
        </div>

        <!-- AI response 2 -->
        <div class="message">
          <div class="msg-avatar">🤖</div>
          <div class="msg-content-wrap">
            <div class="msg-meta">SkillPath AI · 1m ago</div>
            <div class="msg-bubble ai-bubble">
              <strong style="color:var(--emerald-light);display:block;margin-bottom:8px">📚 Top resources for your learning style (hands-on, fast):</strong>
              <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
                ${[
      { num: '1', icon: '📖', title: 'Kubernetes in Action, 2nd Ed.', type: 'Book', 'why': 'Best conceptual foundation, real-world patterns' },
      { num: '2', icon: '🎓', title: 'CKAD Exam Prep (Killer.sh)', type: 'Interactive Lab', 'why': 'Hands-on, exam-style, Docker-to-K8s bridge' },
      { num: '3', icon: '🌐', title: 'kubernetes.io/docs', type: 'Official Docs', 'why': 'Interactive tutorials, excellent for kubectl basics' },
      { num: '4', icon: '▶️', title: 'TechWorld with Nana (YouTube)', type: 'Video Series', 'why': 'Free, visual, covers your exact learning gaps' },
    ].map(r => `
                <div style="display:flex;gap:10px;padding:10px;background:rgba(255,255,255,0.03);border-radius:var(--radius-md);border:1px solid var(--border-subtle)">
                  <div style="width:28px;height:28px;border-radius:6px;background:rgba(37,99,235,0.15);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">${r.icon}</div>
                  <div>
                    <div style="font-size:13px;font-weight:600;color:var(--text-primary)">${r.num}. ${r.title}</div>
                    <div style="font-size:11px;color:var(--royal-blue-light)">${r.type}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:2px">${r['why']}</div>
                  </div>
                </div>`).join('')}
              </div>
              <div style="margin-top:12px;font-size:13px;color:var(--text-secondary)">🎯 <strong style="color:var(--gold-light)">My recommendation:</strong> Start with Nana's series (free, 4h), then do Killer.sh labs for exam practice. Your Docker background means you'll progress ~2× faster than average.</div>
            </div>
          </div>
        </div>

        <!-- Typing indicator (initially hidden) -->
        <div class="typing-indicator" id="typingIndicator" style="display:none">
          <div class="msg-avatar">🤖</div>
          <div>
            <div class="msg-meta">SkillPath AI · typing...</div>
            <div class="typing-bubble">
              <div class="typing-dot"></div>
              <div class="typing-dot"></div>
              <div class="typing-dot"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Suggestions -->
      <div class="suggestions-bar">
        ${[
      '🎯 Explain my skill gaps',
      '📅 How long to close all gaps?',
      '💰 What salary boost can I expect?',
      '🔀 Alternative career paths',
      '📚 Top learning resources',
      '⚡ Fastest skills to learn',
      '🤔 Why is X skill important?',
    ].map(s => `<button class="suggestion-chip" onclick="sendSuggestion('${s.replace(/'/g, "\\'")}')">${s}</button>`).join('')}
      </div>

      <!-- Input -->
      <div class="chat-input-area">
        <div class="chat-input-row">
          <textarea class="chat-textarea" id="chatInput" rows="1" placeholder="Ask about your roadmap, skills, learning resources, career strategy..." onkeydown="handleKey(event)"></textarea>
          <button class="chat-send" onclick="sendMessage()">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2L9 14l-2-5-5-2 12-5z"/></svg>
          </button>
        </div>
        <div class="input-meta">
          <span>↵ Enter to send</span>
          <span>·</span>
          <span>Shift+Enter for new line</span>
          <span>·</span>
          <span style="color:var(--emerald-light)">AI responses are contextual to your profile</span>
        </div>
      </div>
    </div>

    <!-- RIGHT SIDEBAR -->
    <div class="chat-sidebar">
      <!-- Session stats -->
      <div class="chat-side-section">
        <div class="chat-side-title">Session Stats</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          ${[
      { val: '12', lbl: 'Messages', color: 'var(--royal-blue-light)' },
      { val: '94%', lbl: 'Avg Confidence', color: 'var(--emerald-light)' },
      { val: '8', lbl: 'Topics Covered', color: 'var(--gold-light)' },
      { val: '5', lbl: 'Resources Cited', color: 'var(--violet-light)' },
    ].map(s => `<div class="ai-stat-card">
            <div class="ai-stat-val" style="color:${s.color}">${s.val}</div>
            <div class="ai-stat-lbl">${s.lbl}</div>
          </div>`).join('')}
        </div>
      </div>

      <!-- Quick topics -->
      <div class="chat-side-section">
        <div class="chat-side-title">Ask About</div>
        ${[
      { icon: '🎯', label: 'Kubernetes roadmap', bg: 'rgba(37,99,235,0.15)' },
      { icon: '💰', label: 'Salary impact analysis', bg: 'rgba(245,158,11,0.15)' },
      { icon: '📈', label: 'Career trajectory', bg: 'rgba(16,185,129,0.15)' },
      { icon: '⚡', label: 'Quick wins (< 1 week)', bg: 'rgba(124,58,237,0.15)' },
      { icon: '🌐', label: 'Industry trends 2024', bg: 'rgba(6,182,212,0.15)' },
      { icon: '🔀', label: 'Alternative paths', bg: 'rgba(239,68,68,0.15)' },
    ].map(t => `<div class="topic-chip" onclick="sendSuggestion('Tell me about ${t.label}')">
          <div class="topic-icon" style="background:${t.bg}">${t.icon}</div>
          <span>${t.label}</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-left:auto;opacity:0.4"><path d="M4 2l4 4-4 4"/></svg>
        </div>`).join('')}
      </div>

      <!-- Resources -->
      <div class="chat-side-section">
        <div class="chat-side-title">Recommended Resources</div>
        ${[
      { icon: '📖', name: 'K8s in Action', type: 'Book · 2 wks' },
      { icon: '🎓', name: 'CKAD Killer.sh', type: 'Lab · 1 wk' },
      { icon: '▶️', name: 'TechWorld w/ Nana', type: 'Video · Free' },
      { icon: '🌐', name: 'kubernetes.io/docs', type: 'Official Docs' },
    ].map(r => `<div class="resource-item">
          <div class="resource-icon" style="background:var(--royal-blue-soft)">${r.icon}</div>
          <div>
            <div class="resource-name">${r.name}</div>
            <div class="resource-type">${r.type}</div>
          </div>
        </div>`).join('')}
      </div>

      <!-- Skill coverage -->
      <div class="chat-side-section">
        <div class="chat-side-title">Topics Discussed</div>
        ${[
      ['Kubernetes', '94%', 'badge-crimson'],
      ['Docker', '88%', 'badge-emerald'],
      ['GraphQL', '72%', 'badge-blue'],
      ['Career Path', '65%', 'badge-violet'],
    ].map(([t, c, b]) => `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <span style="font-size:13px;color:var(--text-secondary)">${t}</span>
          <span class="badge ${b}">${c}</span>
        </div>`).join('')}
      </div>
    </div>
  </div>
</main>

<script>
// Conversation history for context
const chatHistory = [];

function getMessages(){return document.getElementById('chatMessages')}
function scrollBottom(){const m=getMessages();m.scrollTop=m.scrollHeight}

function showTyping(){
  document.getElementById('typingIndicator').style.display='flex';scrollBottom();
}
function hideTyping(){document.getElementById('typingIndicator').style.display='none'}

function formatAIText(text) {
  var lines = text.split(String.fromCharCode(10));
  var out = [];
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.trim() === '') { out.push('<div style="height:10px"></div>'); continue; }
    var trimmed = line.trimStart();
    var fc = trimmed.charAt(0);
    if (fc >= '0' && fc <= '9') {
      var dotIdx = trimmed.indexOf('. ');
      if (dotIdx > 0 && dotIdx < 4) {
        var num = trimmed.substring(0, dotIdx);
        var rest = trimmed.substring(dotIdx + 2);
        line = '<div style="display:flex;gap:8px;margin:4px 0"><span style="color:var(--royal-blue-light);font-weight:700;flex-shrink:0">' + num + '.</span><span>' + rest + '</span></div>';
      }
    } else if ((fc === '-' || fc === '*') && trimmed.charAt(1) === ' ') {
      var content = trimmed.substring(2);
      line = '<div style="display:flex;gap:8px;margin:4px 0"><span style="color:var(--emerald-light)">•</span><span>' + content + '</span></div>';
    }
    out.push(line);
  }
  var s = out.join('<br>');
  while (s.indexOf('**') !== -1) {
    var a = s.indexOf('**');
    var b = s.indexOf('**', a + 2);
    if (b === -1) break;
    s = s.substring(0, a) + '<strong style="color:var(--royal-blue-light)">' + s.substring(a+2, b) + '</strong>' + s.substring(b+2);
  }
  return s;
}

function addMessage(role,text){
  const m=getMessages();
  const typing=document.getElementById('typingIndicator');
  const msg=document.createElement('div');
  msg.className='message'+(role==='user'?' user-msg':'');
  const avatar=role==='user'?'<div class="msg-avatar" style="background:linear-gradient(135deg,#4C1D95,var(--violet))">A</div>':'<div class="msg-avatar">🤖</div>';
  const bubClass=role==='user'?'user-bubble':'ai-bubble';
  const name=role==='user'?'You':'SkillPath AI';
  const content=role==='user'?text:formatAIText(text);
  msg.innerHTML=\`\${avatar}<div class="msg-content-wrap"><div class="msg-meta">\${name} · Just now</div><div class="msg-bubble \${bubClass}">\${content}</div></div>\`;
  if(role!=='user')msg.style.flexDirection='';
  m.insertBefore(msg,typing);scrollBottom();
}

async function sendMessage(){
  const input=document.getElementById('chatInput');
  const text=input.value.trim();
  if(!text)return;
  addMessage('user',text);
  input.value='';input.style.height='auto';
  showTyping();

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text, history: chatHistory })
    });

    hideTyping();

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      addMessage('ai', '⚠️ Sorry, I encountered an error. ' + (err.error || 'Please try again.'));
      return;
    }

    const data = await res.json();
    const reply = data.reply || 'Sorry, I could not generate a response.';

    // Add to history for context
    chatHistory.push({ role: 'user', content: text });
    chatHistory.push({ role: 'assistant', content: reply });

    // Keep history manageable (last 20 messages)
    while (chatHistory.length > 20) chatHistory.shift();

    addMessage('ai', reply);
  } catch (err) {
    hideTyping();
    addMessage('ai', '⚠️ Could not reach the AI service. Please check your connection and try again.');
  }
}

function sendSuggestion(text){
  const clean=text.replace(/^[^\s]+\s/,'');
  document.getElementById('chatInput').value=clean;
  sendMessage();
}

function handleKey(e){
  if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage()}
}
function clearChat(){
  const m=getMessages();
  while(m.children.length>1)m.removeChild(m.firstChild);
  chatHistory.length = 0;
}

// Auto-resize textarea
document.getElementById('chatInput').addEventListener('input',function(){
  this.style.height='auto';
  this.style.height=Math.min(this.scrollHeight,120)+'px';
});
scrollBottom();
</script>
</html>`;
}

// commit update #2
