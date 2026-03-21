import { royalHead, sidebar, header } from '../components/layout'

export function courseSubscription(courseId: string): string {
  // Mock course data
  const courses = {
    'aws-1': { name: 'AWS Solutions Architect – Professional', provider: 'A Cloud Guru', price: 149 },
    'k8s-1': { name: 'Kubernetes Certified Administrator (CKA)', provider: 'Linux Foundation', price: 199 },
    'react-1': { name: 'Advanced React Patterns', provider: 'Frontend Masters', price: 99 },
  };
  
  const course = courses[courseId as keyof typeof courses] || { name: 'Advanced AI Development', provider: 'SkillPath Academy', price: 129 };

  return royalHead('Course Subscription — ' + course.name) + `
<style>
.course-hero { padding: 48px; text-align: center; background: rgba(37,99,235,0.05); border-radius: var(--radius-xl); border: 1px solid var(--border-glass); margin-bottom: 32px; }
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
.plan-card { padding: 32px; display: flex; flex-direction: column; position: relative; }
.plan-card.featured { border-color: var(--royal-blue); background: rgba(37,99,235,0.03); }
.plan-card.featured::after { content: 'BEST VALUE'; position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--royal-blue); color: #fff; font-size: 10px; font-weight: 800; padding: 4px 12px; border-radius: var(--radius-full); letter-spacing: 0.05em; }
.plan-price { font-size: 48px; font-weight: 900; margin: 24px 0; font-family: var(--font-display); }
.plan-price span { font-size: 18px; color: var(--text-muted); font-weight: 500; }
.feature-list { list-style: none; padding: 0; margin: 0 0 32px 0; flex: 1; }
.feature-list li { margin-bottom: 12px; display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--text-secondary); }
.feature-check { color: var(--emerald-light); font-weight: 700; }

.course-meta { display: flex; align-items: center; justify-content: center; gap: 24px; margin-top: 24px; color: var(--text-muted); font-size: 14px; }
</style>

<div class="page-bg"></div>
<div class="orb orb-1"></div>

${sidebar('admin')}
${header('Course Subscription', course.name)}

<main class="main-content page-wrapper">
  <div class="content-inner" style="max-width:1100px;margin:0 auto;position:relative">
    <div style="margin-bottom: 24px">
      <a href="/admin" class="btn btn-ghost btn-sm" style="display:inline-flex;align-items:center;gap:8px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Back to Admin
      </a>
    </div>
    
    <div class="course-hero anim-fade-up">
      <div class="badge badge-indigo" style="margin-bottom:16px">${course.provider}</div>
      <h1 class="gradient-text-royal" style="font-size:36px;margin-bottom:16px">${course.name}</h1>
      <p style="color:var(--text-secondary);max-width:600px;margin:0 auto">Master the advanced concepts and practical skills required for the Senior role. Includes lifetime access, certificate of completion, and 1-on-1 AI mentoring.</p>
      
      <div class="course-meta">
        <div class="course-meta-item">⏱ 24 Hours Content</div>
        <div class="course-meta-item">📁 12 Project Files</div>
        <div class="course-meta-item">⭐ 4.9/5 Rating</div>
        <div class="course-meta-item">👨‍🎓 12,400+ Enrolled</div>
      </div>
    </div>

    <div class="anim-fade-up delay-1">
      <div class="section-title" style="justify-content:center;margin-bottom:32px">Select Your Learning Plan</div>
      
      <div class="pricing-grid">
        <!-- Self-Paced -->
        <div class="glass-card plan-card">
          <div style="font-size:18px;font-weight:700">Self-Paced</div>
          <div style="font-size:12px;color:var(--text-muted)">Perfect for individual learners</div>
          <div class="plan-price">$${course.price}<span>/one-time</span></div>
          <ul class="feature-list">
            <li><span class="feature-check">✓</span> Lifetime course access</li>
            <li><span class="feature-check">✓</span> All exercise files</li>
            <li><span class="feature-check">✓</span> Community discord access</li>
            <li style="opacity:0.5"><span>✕</span> 1-on-1 AI Mentoring</li>
            <li style="opacity:0.5"><span>✕</span> Priority job placement</li>
          </ul>
          <button class="btn btn-ghost" style="width:100%">Buy Now</button>
        </div>

        <!-- Professional -->
        <div class="glass-card plan-card featured">
          <div style="font-size:18px;font-weight:700">Professional</div>
          <div style="font-size:12px;color:var(--text-muted)">The choice of career accelerators</div>
          <div class="plan-price">$${Math.floor(course.price * 1.5)}<span>/one-time</span></div>
          <ul class="feature-list">
            <li><span class="feature-check">✓</span> Everything in Self-Paced</li>
            <li><span class="feature-check">✓</span> <strong>AI Mentoring Pro</strong></li>
            <li><span class="feature-check">✓</span> SkillPath Certification</li>
            <li><span class="feature-check">✓</span> Automated Portfolio Builder</li>
            <li style="opacity:0.5"><span>✕</span> Priority job placement</li>
          </ul>
          <button class="btn btn-primary" style="width:100%">Get Pro Access</button>
        </div>

        <!-- Enterprise / Team -->
        <div class="glass-card plan-card">
          <div style="font-size:18px;font-weight:700">Career Elite</div>
          <div style="font-size:12px;color:var(--text-muted)">Guaranteed career growth path</div>
          <div class="plan-price">$${Math.floor(course.price * 2.5)}<span>/one-time</span></div>
          <ul class="feature-list">
            <li><span class="feature-check">✓</span> Everything in Pro</li>
            <li><span class="feature-check">✓</span> Priority job placement</li>
            <li><span class="feature-check">✓</span> Resume rewrite service</li>
            <li><span class="feature-check">✓</span> Mock interviews with AI</li>
            <li><span class="feature-check">✓</span> Direct team referals</li>
          </ul>
          <button class="btn btn-ghost" style="width:100%">Go Elite</button>
        </div>
      </div>
    </div>

  </div>
</main>
</html>`;
}

// commit update #4

// commit update #10
