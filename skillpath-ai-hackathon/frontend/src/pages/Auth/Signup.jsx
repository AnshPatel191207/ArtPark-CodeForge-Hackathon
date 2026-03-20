import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowLeft, Zap, UserPlus, Github } from 'lucide-react';
import styles from './Auth.module.css';

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup and redirect
    navigate('/upload');
  };

  return (
    <div className={styles.authContainer}>
      {/* Left Branding Panel */}
      <div className={styles.authLeft}>
        <div className={styles.brandGraphic}>
          <Zap size={64} color="white" />
        </div>
        <h1>Supercharge Your Path</h1>
        <p>Create an account to build your personalized skill roadmap and bypass redundant corporate training.</p>
      </div>

      {/* Right Form Panel */}
      <div className={styles.authRight}>
        <button className={styles.backButton} onClick={() => navigate('/')}>
          <ArrowLeft size={18} /> Back to Dashboard
        </button>

        <div className={styles.authCard}>
          <div className={styles.authHeader}>
            <h2>Create Account</h2>
            <p>Start your adaptive onboarding journey</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <div className={styles.inputWrapper}>
                <User size={18} className={styles.inputIcon} />
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className={styles.formInput} 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

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
                  placeholder="Create a strong password" 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <UserPlus size={18} /> Create Account
            </button>
          </form>

          <div className={styles.divider}>OR CONTINUE WITH</div>

          <button className={styles.socialBtn}>
            <Github size={18} />
            GitHub
          </button>

          <div className={styles.authFooter}>
            Already have an account? <Link to="/login">Sign in here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
