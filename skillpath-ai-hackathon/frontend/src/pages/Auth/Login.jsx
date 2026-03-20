import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ArrowLeft, Brain, LogIn, Github } from 'lucide-react';
import styles from './Auth.module.css';

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login and redirect
    navigate('/');
  };

  return (
    <div className={styles.authContainer}>
      {/* Left Branding Panel */}
      <div className={styles.authLeft}>
        <div className={styles.brandGraphic}>
          <Brain size={64} color="white" />
        </div>
        <h1>Welcome Back</h1>
        <p>Log in to access your adaptive learning roadmap and skill gap analysis engine.</p>
      </div>

      {/* Right Form Panel */}
      <div className={styles.authRight}>
        <button className={styles.backButton} onClick={() => navigate('/')}>
          <ArrowLeft size={18} /> Back to Dashboard
        </button>

        <div className={styles.authCard}>
          <div className={styles.authHeader}>
            <h2>Sign In</h2>
            <p>Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <div className={styles.inputWrapper}>
                <Mail size={18} className={styles.inputIcon} />
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className={styles.formInput} 
                  placeholder="name@company.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <div className={styles.inputWrapper}>
                <Lock size={18} className={styles.inputIcon} />
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  className={styles.formInput} 
                  placeholder="••••••••" 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </div>
              <a href="#" className={styles.forgotPassword}>Forgot password?</a>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <LogIn size={18} /> Sign In
            </button>
          </form>

          <div className={styles.divider}>OR CONTINUE WITH</div>

          <button className={styles.socialBtn}>
            <Github size={18} />
            GitHub
          </button>

          <div className={styles.authFooter}>
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
