import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bell, Search, Moon, Sun } from 'lucide-react';
import styles from './Header.module.css';

const routeNames = {
  '/': 'Dashboard Overview',
  '/upload': 'Upload & Analyze Documents',
  '/roadmap': 'Your Learning Roadmap',
  '/analysis': 'Detailed Skills Analysis',
  '/compare': 'Cross-Domain Comparison'
};

export const Header = () => {
  const location = useLocation();
  const pageTitle = routeNames[location.pathname] || 'SkillPath AI';

  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h2 className={styles.pageTitle}>{pageTitle}</h2>
      </div>

      <div className={styles.actions}>
        <div className={styles.searchBar}>
          <Search size={18} className={styles.searchIcon} />
          <input type="text" placeholder="Search skills, courses..." className={styles.searchInput} />
        </div>
        
        <button className={styles.iconButton} onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <Link to="/notifications" className={styles.iconButton} aria-label="Notifications">
          <Bell size={20} />
          <span className={styles.notificationBadge}></span>
        </Link>

        <Link to="/profile" className={styles.avatar} style={{ cursor: 'pointer' }}>
          <img src="https://ui-avatars.com/api/?name=Demo+User&background=3B82F6&color=fff" alt="User Avatar" />
        </Link>
      </div>
    </header>
  );
};
