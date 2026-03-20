import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, UploadCloud, Map, BarChart2, CheckCircle } from 'lucide-react';
import styles from './Sidebar.module.css';

const navItems = [
  { path: '/', label: 'Dashboard', icon: Home },
  { path: '/upload', label: 'Upload & Analyze', icon: UploadCloud },
  { path: '/roadmap', label: 'Roadmap', icon: Map },
  { path: '/analysis', label: 'Skills Analysis', icon: BarChart2 },
];

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <h1 className={styles.logoText}>SkillPath AI</h1>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navSection}>MENU</div>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
            >
              <Icon className={styles.navIcon} size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className={styles.statusBox}>
        <div className={styles.statusHeader}>
          <span className={styles.statusDot}></span>
          <span>AI Status</span>
        </div>
        <p className={styles.statusText}>Engine Ready</p>
        <div className={styles.statusMetric}>
          <CheckCircle size={14} className={styles.successIcon} />
          <span>All systems operational</span>
        </div>
      </div>
    </aside>
  );
};
