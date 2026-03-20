import React, { useState, useEffect, useRef } from 'react';
import { Mic, Video, PhoneOff, MessageSquare, CheckCircle, Brain } from 'lucide-react';
import styles from './MockInterview.module.css';

export const MockInterview = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: "Hello! I'm your AI Interviewer. Based on your skill gap analysis, we'll be focusing on Node.js and Docker architectures today. Are you ready to begin?" }
  ]);
  const endOfLogRef = useRef(null);

  useEffect(() => {
    if (endOfLogRef.current) {
      endOfLogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const simulateProgress = () => {
    setTimeout(() => {
      setMessages(prev => [...prev, { id: 2, sender: 'user', text: "Yes, I'm ready. Let's start with Docker." }]);
      
      setTimeout(() => {
        setMessages(prev => [...prev, { id: 3, sender: 'ai', text: "Great. Can you explain the difference between a Docker image and a Docker container?", feedback: "Excellent clarity on the foundational concepts." }]);
      }, 2000);
    }, 1500);
  };

  useEffect(() => {
    simulateProgress();
  }, []);

  return (
    <div className={styles.interviewContainer}>
      <header className={styles.header}>
        <h1>AI Mock Assessment</h1>
        <p>Real-time conversational evaluation of your capability gaps.</p>
      </header>

      <div className={styles.workspace}>
        {/* Left Video Emulation */}
        <div className={styles.videoSection}>
          <div className={styles.aiAvatarBox}>
            <div className={styles.pulseRing}>
              <img src="https://ui-avatars.com/api/?name=AI&background=0F172A&color=fff&font-size=0.4" alt="AI Agent" />
            </div>
            <div style={{ marginTop: '2rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>
              Interview in progress...
            </div>
          </div>
          
          <div className={styles.controls}>
            <button className={styles.controlBtn} aria-label="Toggle Mic"><Mic size={20} /></button>
            <button className={styles.controlBtn} aria-label="Toggle Video"><Video size={20} /></button>
            <button className={`${styles.controlBtn} ${styles.endCall}`} aria-label="End Call"><PhoneOff size={20} /></button>
          </div>
        </div>

        {/* Right Chat Transcript */}
        <div className={styles.chatSection}>
          <div className={styles.chatHeader}>
            <MessageSquare size={18} /> Live Transcript & Feedback
          </div>
          
          <div className={styles.chatLog}>
            {messages.map((msg) => (
              <div key={msg.id} className={`${styles.message} ${styles[msg.sender]}`}>
                <strong>{msg.sender === 'ai' ? 'AI Assessor' : 'You'}</strong>
                <p style={{ marginTop: '0.25rem' }}>{msg.text}</p>
                {msg.feedback && (
                  <div className={styles.feedbackBadge}>
                    <CheckCircle size={12} /> {msg.feedback}
                  </div>
                )}
              </div>
            ))}
            <div ref={endOfLogRef} />
          </div>
        </div>
      </div>
    </div>
  );
};
