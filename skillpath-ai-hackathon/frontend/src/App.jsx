import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/layout/Container/Container';

// Pages
import { Home } from './pages/Home/Home';
import { Upload } from './pages/Upload/Upload';
import { Analysis } from './pages/Analysis/Analysis';
import { Roadmap } from './pages/Roadmap/Roadmap';
import { Compare } from './pages/Compare/Compare';
import { Login } from './pages/Auth/Login';
import { Signup } from './pages/Auth/Signup';
import { Profile } from './pages/Profile/Profile';
import { ChatWidget } from './components/common/ChatWidget/ChatWidget';
import { ManagerDashboard } from './pages/ManagerDashboard/ManagerDashboard';
import { MockInterview } from './pages/MockInterview/MockInterview';
import { Notifications } from './pages/Notifications/Notifications';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/manager" element={<ManagerDashboard />} />
              <Route path="/interview" element={<MockInterview />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
            <ChatWidget />
          </Container>
        } />
      </Routes>
    </Router>
  );
}

export default App;
