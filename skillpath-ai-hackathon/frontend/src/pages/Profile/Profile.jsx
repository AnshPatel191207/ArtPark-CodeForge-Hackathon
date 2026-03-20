import React, { useState } from 'react';
import { User, Mail, Briefcase, MapPin, Camera, Save, Shield, Bell, Github } from 'lucide-react';
import styles from './Profile.module.css';

export const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: 'Demo',
    lastName: 'User',
    email: 'demo@company.com',
    role: 'Frontend Engineer',
    location: 'San Francisco, CA',
    bio: 'Passionate frontend developer expanding my skill set into Fullstack Web3 and DevOps methodologies.'
  });

  const [notifications, setNotifications] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.headerInfo}>
          <h1>My Profile</h1>
          <p>Manage your account settings and personal details</p>
        </div>
        <button className={styles.primaryButton}>
          <Save size={18} /> Save Changes
        </button>
      </div>

      <div className={styles.profileGrid}>
        
        {/* Left Column - Avatar & Quick Info */}
        <div className={styles.leftColumn}>
          <div className={styles.card}>
            <div className={styles.avatarSection}>
              <div className={styles.avatarWrapper}>
                <img 
                  src="https://ui-avatars.com/api/?name=Demo+User&background=3B82F6&color=fff&size=256" 
                  alt="Profile Avatar" 
                  className={styles.avatarImg}
                />
                <button className={styles.editAvatarBtn} aria-label="Change Avatar">
                  <Camera size={16} />
                </button>
              </div>
              <div className={styles.userInfo}>
                <h2>{formData.firstName} {formData.lastName}</h2>
                <p className={styles.userRole}>{formData.role}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}>
                  <MapPin size={16} /> {formData.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form Details */}
        <div className={styles.rightColumn}>
          <div className={styles.card} style={{ marginBottom: '2rem' }}>
            <h3 className={styles.cardTitle}><User size={20} /> Personal Information</h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>First Name</label>
                <div className={styles.inputWrapper}>
                  <User size={18} className={styles.inputIcon} />
                  <input type="text" name="firstName" className={styles.formInput} value={formData.firstName} onChange={handleChange} />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>Last Name</label>
                <div className={styles.inputWrapper}>
                  <User size={18} className={styles.inputIcon} />
                  <input type="text" name="lastName" className={styles.formInput} value={formData.lastName} onChange={handleChange} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Email Address</label>
                <div className={styles.inputWrapper}>
                  <Mail size={18} className={styles.inputIcon} />
                  <input type="email" name="email" className={styles.formInput} value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Job Title</label>
                <div className={styles.inputWrapper}>
                  <Briefcase size={18} className={styles.inputIcon} />
                  <input type="text" name="role" className={styles.formInput} value={formData.role} onChange={handleChange} />
                </div>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label>Short Bio</label>
                <textarea 
                  name="bio"
                  className={styles.formInput} 
                  style={{ minHeight: '100px', paddingLeft: '1rem' }}
                  value={formData.bio} 
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}><Shield size={20} /> Preferences</h3>
            <div className={styles.preferencesList}>
              <div className={styles.preferenceItem}>
                <div className={styles.preferenceInfo}>
                  <h4><Bell size={16} style={{ display: 'inline', marginRight: '6px' }} /> Email Notifications</h4>
                  <p>Receive weekly digest and roadmap updates.</p>
                </div>
                <div 
                  className={`${styles.toggleSwitch} ${!notifications ? styles.disabled : ''}`}
                  onClick={() => setNotifications(!notifications)}
                ></div>
              </div>

              <div className={styles.preferenceItem}>
                <div className={styles.preferenceInfo}>
                  <h4><Github size={16} style={{ display: 'inline', marginRight: '6px' }} /> Connected Accounts</h4>
                  <p>Link your Github account to automatically verify code capabilities.</p>
                </div>
                <button className={styles.primaryButton} style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                  Connect
                </button>
              </div>
            </div>
          </div>

          <div className={styles.card} style={{ marginTop: '2rem' }}>
            <h3 className={styles.cardTitle}>🏆 Recent Achievements</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ background: 'var(--color-primary-light)', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🐳</div>
                <h4 style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>Docker Initiate</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Completed 1st DevOps module</p>
              </div>
              <div style={{ background: 'var(--color-success-light)', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                <h4 style={{ color: 'var(--color-success)', fontSize: '0.9rem' }}>Fast Learner</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Bypassed 30+ hours of redundant material</p>
              </div>
              <div style={{ background: 'var(--color-warning-light)', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔥</div>
                <h4 style={{ color: 'var(--color-warning)', fontSize: '0.9rem' }}>3-Day Streak</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Consistent logging</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
