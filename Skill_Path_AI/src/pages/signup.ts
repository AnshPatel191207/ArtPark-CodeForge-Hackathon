import { royalHead } from '../components/layout'

export function signup(): string {
  const CLIENT_ID = '768670971737-6jhmck873gr5gg0b1jjcgpvginnqh0ru.apps.googleusercontent.com'; // User will replace this

  return royalHead('Sign Up — SkillPath AI') + `
<script src="https://accounts.google.com/gsi/client" async defer></script>
<style>
/* AUTH LAYOUT */
body {
  overflow-x: hidden;
  background: var(--bg-deep);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.auth-nav {
  position: absolute;
  top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 80px; height: 70px;
  display: flex; align-items: center; justify-content: space-between;
}
.nav-logo {
  display: flex; align-items: center; gap: 12px; text-decoration: none;
  font-family: var(--font-display); font-weight: 800; font-size: 20px;
}
.nav-logo-icon {
  width: 36px; height: 36px; border-radius: 9px;
  background: linear-gradient(135deg, var(--royal-blue), var(--violet));
  display: flex; align-items: center; justify-content: center; font-size: 18px;
  box-shadow: 0 0 20px rgba(37, 99, 235, 0.4);
}
.nav-logo-text {
  background:linear-gradient(90deg,#fff,#9B72F3,#FB923C);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

.auth-container {
  flex: 1;
  display: flex; align-items: center; justify-content: center;
  position: relative;
  padding: 40px;
  margin-top: 40px; /* Accounts for extra fields */
}

.auth-glow {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(37, 99, 235, 0.1) 40%, transparent 70%);
  pointer-events: none; z-index: 0;
}

.auth-card {
  width: 100%; max-width: 440px;
  background: rgba(3, 7, 18, 0.6); backdrop-filter: blur(24px);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-2xl);
  padding: 48px 40px;
  position: relative; z-index: 1;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.03) inset;
  animation: fadeInUp 0.6s ease both;
}

.auth-header {
  text-align: center; margin-bottom: 32px;
}
.auth-title {
  font-family: var(--font-display); font-size: 28px; font-weight: 800;
  color: #fff; margin-bottom: 8px;
}
.auth-subtitle {
  font-size: 15px; color: var(--text-secondary);
}

.auth-form {
  display: flex; flex-direction: column; gap: 20px;
}

.form-group {
  display: flex; flex-direction: column; gap: 8px;
}
.form-label {
  font-size: 13px; font-weight: 600; color: var(--text-primary);
}
.form-input {
  width: 100%; height: 48px; padding: 0 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  color: #fff; font-size: 15px;
  transition: all 0.2s;
}
.form-input:focus {
  outline: none; border-color: rgba(124, 58, 237, 0.5);
  background: rgba(124, 58, 237, 0.05);
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
}

.btn-auth {
  height: 48px; border-radius: var(--radius-lg);
  display: flex; align-items: center; justify-content: center; gap: 10px;
  font-size: 16px; font-weight: 600; font-family: var(--font-display);
  border: none; cursor: pointer; transition: all 0.2s;
  width: 100%;
}
.btn-auth-primary {
  background: linear-gradient(135deg, var(--violet), #4C1D95);
  color: #fff;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.3);
}
.btn-auth-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.5);
}

.auth-divider {
  display: flex; align-items: center; gap: 16px; margin: 24px 0;
}
.auth-divider-line {
  flex: 1; height: 1px; background: var(--border-subtle);
}
.auth-divider-text {
  font-size: 12px; font-weight: 600; color: var(--text-muted); text-transform: uppercase;
}

.btn-google {
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.btn-google:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.auth-footer {
  text-align: center; margin-top: 32px; font-size: 14px; color: var(--text-secondary);
}
.auth-footer a {
  color: var(--violet-light); font-weight: 600; text-decoration: none;
}
.auth-footer a:hover { color: #fff; }

@media (max-width: 600px) {
  .auth-nav { padding: 0 24px; }
  .auth-card { padding: 40px 24px; }
}
</style>

<div class="page-bg"></div>

<!-- NAVIGATION -->
<nav class="auth-nav">
  <a href="/" class="nav-logo">
    <div class="logo-icon" style="background:linear-gradient(135deg,#1e293b,#0f172a);display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(66,133,244,0.15);width:38px;height:38px;border-radius:10px;flex-shrink:0">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285F4" />
            <stop offset="50%" style="stop-color:#9B72F3" />
            <stop offset="100%" style="stop-color:#FB923C" />
          </linearGradient>
        </defs>
        <path d="M12 3C12 3 13.5 10 19 12C13.5 14 12 21 12 21C12 21 10.5 14 5 12C10.5 10 12 3 12 3Z" fill="url(#navLogoGrad)" />
        <circle cx="12" cy="12" r="1.5" fill="white" style="opacity:0.6" />
      </svg>
    </div>
    <span class="nav-logo-text">SkillPath AI</span>
  </a>
</nav>

<!-- MAIN CONTAINER -->
<div class="auth-container">
  <div class="auth-glow"></div>
  
  <div class="auth-card">
    <div class="auth-header">
      <h1 class="auth-title">Create an account</h1>
      <p class="auth-subtitle">Join thousands accelerating their career with AI.</p>
    </div>

    <!-- GOOGLE LOGIN -->
    <div id="g_id_onload"
         data-client_id="${CLIENT_ID}"
         data-context="signup"
         data-ux_mode="popup"
         data-callback="handleCredentialResponse"
         data-auto_prompt="false">
    </div>
    <div class="g_id_signin"
         data-type="standard"
         data-shape="rectangular"
         data-theme="outline"
         data-text="signup_with"
         data-size="large"
         data-logo_alignment="left"
         style="display:flex;justify-content:center;">
    </div>

    <div class="auth-divider">
      <div class="auth-divider-line"></div>
      <div class="auth-divider-text">Or sign up with email</div>
      <div class="auth-divider-line"></div>
    </div>

    <!-- EMAIL FORM -->
    <form class="auth-form" onsubmit="event.preventDefault(); const hasUploaded = localStorage.getItem('hasUploaded') === 'true'; window.location.href = hasUploaded ? '/dashboard' : '/upload';">
      <div class="form-group">
        <label class="form-label" for="name">Full Name</label>
        <input type="text" id="name" class="form-input" placeholder="Alex Morgan" required>
      </div>

      <div class="form-group">
        <label class="form-label" for="email">Email address</label>
        <input type="email" id="email" class="form-input" placeholder="you@example.com" required>
      </div>

      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input type="password" id="password" class="form-input" placeholder="••••••••" required>
      </div>

      <button type="submit" class="btn-auth btn-auth-primary">Create Account</button>
    </form>

    <div class="auth-footer">
      Already have an account? <a href="/login">Log in</a>
    </div>
  </div>
</div>
<script>
function handleCredentialResponse(response) {
  try {
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    localStorage.setItem('userProfile', JSON.stringify({
      name: payload.name,
      email: payload.email,
      picture: payload.picture
    }));
    const hasUploaded = localStorage.getItem('hasUploaded') === 'true';
    window.location.href = hasUploaded ? '/dashboard' : '/upload';
  } catch (e) {
    console.error('Error parsing Google JWT', e);
  }
}
</script>
</html>
`
}
