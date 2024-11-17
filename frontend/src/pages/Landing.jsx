import React from 'react';
import { useNavigate } from 'react-router-dom';
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const KeyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
const BackgroundShapes = () => (
  <div className="background-shapes">
    {[...Array(20)].map((_, i) => (
      <div key={i} className="shape" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${Math.random() * 20 + 20}s`
      }} />
    ))}
  </div>
);

const Landing = () => {
  const navigate = useNavigate();

  const handleStartWritingClick = () => {
    navigate('/register');
  };
  return (
    <div className="app">
      <BackgroundShapes />

      <main>
        <div className="hero">
          <h1>
            Your thoughts, <span className="highlight">secured</span>
          </h1>
          <p>
            Write freely knowing your notes are protected with military-grade encryption.
            Simple, secure, and synchronized across all your devices.
          </p>
          
          <div className="cta-buttons">
          <button onClick={handleStartWritingClick} className="primary-btn">
          Start Writing Now
        </button>
          </div>

          <div className="features">
            <div className="feature-card">
              <ShieldIcon />
              <h3>End-to-End Encryption</h3>
              <p>Your notes are encrypted before they leave your device</p>
            </div>

            <div className="feature-card">
              <KeyIcon />
              <h3>Zero-Knowledge</h3>
              <p>We can't read your notes, even if we wanted to</p>
            </div>

            <div className="feature-card">
              <CheckIcon />
              <h3>Always Available</h3>
              <p>Access your notes anytime, anywhere, on any device</p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .app {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%);
}


        .background-shapes {
          position: fixed;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(40px);
          opacity: 0.2;
          width: 200px;
          height: 200px;
          background: #4F46E5;
          animation: float linear infinite;
        }

        .shape:nth-child(even) {
          background: #60A5FA;
        }

        nav {
          position: fixed;
          width: 100%;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          z-index: 20;
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: bold;
          color: #1F2937;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        button {
          border: none;
          background: none;
          cursor: pointer;
          font-size: 1rem;
          color: #4B5563;
          transition: color 0.3s;
        }

        button:hover {
          color: #2563EB;
        }

        .primary-btn {
          background: #2563EB;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: background-color 0.3s, transform 0.2s;
        }

        .primary-btn:hover {
          background: #1D4ED8;
          color: white;
          transform: scale(1.05);
        }

        .secondary-btn {
          border: 2px solid #2563EB;
          color: #2563EB;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: background-color 0.3s, transform 0.2s;
        }

        .secondary-btn:hover {
          background: rgba(37, 99, 235, 0.1);
          transform: scale(1.05);
        }

        main {
          position: relative;
          z-index: 10;
          padding-top: 6rem;
        }

        .hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
          text-align: center;
        }

        h1 {
          font-size: 3.5rem;
          font-weight: bold;
          color: #1F2937;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.6s ease-out;
        }

        .highlight {
          color: #2563EB;
        }

        .hero p {
          font-size: 1.25rem;
          color: #4B5563;
          max-width: 36rem;
          margin: 0 auto 2rem;
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 4rem;
          animation: fadeInUp 0.6s ease-out 0.4s both;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
          animation: fadeInUp 0.6s ease-out 0.6s both;
        }

        .feature-card:hover {
          transform: translateY(-4px);
        }

        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1F2937;
          margin: 1rem 0 0.5rem;
        }

        .feature-card p {
          color: #4B5563;
          font-size: 1rem;
        }

        .icon {
          width: 3rem;
          height: 3rem;
          color: #2563EB;
          margin: 0 auto;
        }

        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-30px, 30px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .nav-links button:not(.primary-btn) {
            display: none;
          }

          h1 {
            font-size: 2.5rem;
          }

          .hero p {
            font-size: 1.125rem;
          }

          .features {
            grid-template-columns: 1fr;
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;