import React, { useState } from 'react';
import { Bell, CheckCircle, AlertTriangle, Info, Settings, Clock } from 'lucide-react';
import styles from './Notifications.module.css';

export const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Docker Module Completed',
      message: 'Congratulations! You have successfully passed the Docker Fundamentals quiz and earned a new achievement badge.',
      time: '10 minutes ago',
      unread: true,
      hasAction: true,
      actionText: 'View Badge'
    },
    {
      id: 2,
      type: 'info',
      title: 'New Roadmap Generated',
      message: 'Based on your latest resume upload, we have regenerated your learning pathway. You saved 35 hours of redundant training.',
      time: '2 hours ago',
      unread: true,
      hasAction: true,
      actionText: 'View Roadmap'
    },
    {
      id: 3,
      type: 'alert',
      title: 'HR Review Requested',
      message: 'Your onboarding manager Sarah Chen has requested a brief 1-on-1 to review your skill gap analysis results.',
      time: '1 day ago',
      unread: false,
      hasAction: true,
      actionText: 'Schedule Meeting'
    },
    {
      id: 4,
      type: 'system',
      title: 'System Update',
      message: 'The SkillPath AI engine was updated to v2.4. Generating roadmaps is now 40% faster.',
      time: '3 days ago',
      unread: false,
      hasAction: false
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const getIcon = (type) => {
    switch(type) {
      case 'success': return <CheckCircle size={24} />;
      case 'alert': return <AlertTriangle size={24} />;
      case 'info': return <Info size={24} />;
      default: return <Settings size={24} />;
    }
  };

  return (
    <div className={styles.notificationsContainer}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h1>Notifications</h1>
          <p>Stay updated on your learning progress and system alerts.</p>
        </div>
        <button className={styles.markReadBtn} onClick={markAllAsRead}>
          Mark all as read
        </button>
      </div>

      <div className={styles.notificationsList}>
        {notifications.length === 0 ? (
          <div className={styles.emptyState}>
            <Bell size={48} className={styles.emptyStateIcon} />
            <h3>No new notifications</h3>
            <p>You're all caught up! Check back later.</p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div key={notif.id} className={`${styles.notificationCard} ${notif.unread ? styles.unread : ''}`}>
              <div className={`${styles.iconWrapper} ${styles[notif.type]}`}>
                {getIcon(notif.type)}
              </div>
              
              <div className={styles.content}>
                <div className={styles.contentHeader}>
                  <h3>{notif.title}</h3>
                  <span className={styles.time}><Clock size={12} style={{display: 'inline', marginRight: '4px'}}/>{notif.time}</span>
                </div>
                <p className={styles.message}>{notif.message}</p>
                {notif.hasAction && (
                  <button className={styles.actionBtn}>
                    {notif.actionText}
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
