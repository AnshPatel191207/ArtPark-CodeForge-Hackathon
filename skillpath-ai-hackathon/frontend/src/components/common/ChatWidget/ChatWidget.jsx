import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Brain, Cpu } from 'lucide-react';
import styles from './ChatWidget.module.css';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your AI Tutor. I noticed you have some gaps in Docker and DevOps. How can I help you prepare?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (isOpen && endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question. Docker uses containerization to package software so it runs reliably in any environment.",
        "Your roadmap is customized based on the job description you uploaded. Let's focus on CI/CD pipelines next.",
        "I can generate a quick 5-question quiz on that topic if you'd like to test your knowledge?",
        "Don't worry, the course 'Docker Mastery' on your roadmap covers this exact scenario in Week 2."
      ];
      const botMessage = { 
        id: Date.now() + 1, 
        text: responses[Math.floor(Math.random() * responses.length)], 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className={styles.chatWidgetContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <h3><Brain size={18} /> SkillPath AI Tutor</h3>
              <p>Active - Context: DevOps Path</p>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className={styles.chatBody}>
            {messages.map((msg) => (
              <div key={msg.id} className={`${styles.message} ${styles[msg.sender]}`}>
                {msg.text}
              </div>
            ))}
            {/* Invisible div to target for auto-scroll */}
            <div ref={endOfMessagesRef} />
          </div>

          <form className={styles.chatFooter} onSubmit={handleSend}>
            <input 
              type="text" 
              className={styles.chatInput} 
              placeholder="Ask about your roadmap..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className={styles.sendBtn} disabled={!inputValue.trim()}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <button className={styles.floatingBtn} onClick={() => setIsOpen(true)}>
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};
