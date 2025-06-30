import React, { useState, useEffect, useRef } from 'react';
import profileImage from '../Image/yelow.png';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const heroRef = useRef(null);
  const profileImageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const fullText = "Full Stack Developer";
  const typingSpeed = 150;

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typeTimer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeTimer);
      }
    }, typingSpeed);
    

    return () => clearInterval(typeTimer);
  }, []);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Trigger the rising animation when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Floating animation keyframes
  const floatingAnimation = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-20px) rotate(1deg); }
      50% { transform: translateY(-15px) rotate(0deg); }
      75% { transform: translateY(-25px) rotate(-1deg); }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.7; }
      50% { transform: scale(1.1); opacity: 1; }
    }
    
    @keyframes riseUp {
      0% { transform: translateY(100vh); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes fadeInUp {
      0% { transform: translateY(30px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes typing {
      from { width: 0; }
      to { width: 100%; }
    }
    
    @keyframes blink {
      0%, 50% { border-color: transparent; }
      51%, 100% { border-color: #3b82f6; }
    }
    
    .typing-cursor::after {
      content: '|';
      animation: blink 1s infinite;
      color: #3b82f6;
      font-weight: 100;
    }
  `;

  const heroStyles = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    color: '#1e293b',
    padding: '0 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(100vh)',
    transition: 'transform 1s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.5s ease-out',
    willChange: 'transform, opacity'
  };

  const backgroundElements = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none'
  };

  const backgroundCircle1 = {
    position: 'absolute',
    top: '10%',
    right: '15%',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'rgba(59, 130, 246, 0.1)',
    filter: 'blur(60px)',
    animation: 'float 8s ease-in-out infinite',
    transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.8s ease-out 0.3s'
  };

  const backgroundCircle2 = {
    position: 'absolute',
    bottom: '20%',
    left: '10%',
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    background: 'rgba(99, 102, 241, 0.1)',
    filter: 'blur(40px)',
    animation: 'pulse 6s ease-in-out infinite',
    transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.8s ease-out 0.5s'
  };

  const containerStyles = {
    maxWidth: '1200px',
    width: '100%',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2
  };

  const contentStyles = {
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: 'transform 0.6s ease-out 0.4s, opacity 0.6s ease-out 0.4s'
  };

  const greetingStyles = {
    fontSize: '1.5rem',
    fontWeight: '400',
    marginBottom: '1rem',
    opacity: '0.9',
    opacity: isLoaded ? 0.9 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: 'transform 0.6s ease-out 0.5s, opacity 0.6s ease-out 0.5s'
  };

  const nameStyles = {
    fontSize: '4rem',
    fontWeight: '800',
    marginBottom: '0.5rem',
    lineHeight: '1.1',
    background: 'linear-gradient(45deg, #3b82f6, #1e40af)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: 'transform 0.6s ease-out 0.6s, opacity 0.6s ease-out 0.6s'
  };

  const titleStyles = {
    fontSize: '2.5rem',
    fontWeight: '600',
    color: '#3b82f6',
    marginBottom: '2rem',
    minHeight: '3rem',
    display: 'flex',
    alignItems: 'center',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: 'transform 0.6s ease-out 0.7s, opacity 0.6s ease-out 0.7s'
  };

  const descriptionStyles = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    opacity: '0.9',
    marginBottom: '3rem',
    maxWidth: '500px',
    color: '#475569',
    opacity: isLoaded ? 0.9 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: 'transform 0.6s ease-out 0.8s, opacity 0.6s ease-out 0.8s'
  };

  const buttonContainerStyles = {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '3rem',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: 'transform 0.6s ease-out 0.9s, opacity 0.6s ease-out 0.9s'
  };

  const primaryButtonStyles = {
    padding: '1rem 2rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
    transform: 'translateY(0)',
    ':hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 15px 40px rgba(59, 130, 246, 0.4)',
      backgroundColor: '#2563eb'
    }
  };

  const secondaryButtonStyles = {
    padding: '1rem 2rem',
    backgroundColor: 'transparent',
    color: '#3b82f6',
    border: '2px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    ':hover': {
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgba(59, 130, 246, 0.5)'
    }
  };

  const socialLinksStyles = {
    display: 'flex',
    gap: '1.5rem',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: 'transform 0.6s ease-out 1s, opacity 0.6s ease-out 1s'
  };

  const socialLinkStyles = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#64748b',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(203, 213, 225, 0.3)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    ':hover': {
      backgroundColor: '#3b82f6',
      color: 'white',
      transform: 'translateY(-3px) scale(1.1)',
      boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)'
    }
  };

  const imageContainerStyles = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: 'transform 0.6s ease-out 0.5s, opacity 0.6s ease-out 0.5s'
  };

  const imageBackgroundStyles = {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg,rgb(0, 98, 255),rgb(0, 4, 255))',
    opacity: '0.1',
    animation: 'pulse 4s ease-in-out infinite',
    transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
    opacity: isLoaded ? 0.1 : 0,
    transition: 'opacity 0.8s ease-out 0.7s'
  };

  const imageStyles = {
    width: '400px',
    height: '400px',
    borderRadius: '300px',
    objectFit: 'cover',
    position: 'relative',
    zIndex: 2,
    border: '8px solid rgba(255, 255, 255, 0.8)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
    transition: 'transform 0.6s ease-out 0.6s, opacity 0.6s ease-out 0.6s'
  };

  const handleImageHover = () => {
    if (profileImageRef.current) {
      profileImageRef.current.style.transform = 'scale(1.05) rotate(2deg)';
      profileImageRef.current.style.boxShadow = '0 25px 80px rgba(0, 0, 0, 0.15)';
    }
  };

  const handleImageLeave = () => {
    if (profileImageRef.current) {
      profileImageRef.current.style.transform = 'scale(1) rotate(0deg)';
      profileImageRef.current.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleButtonHover = (e) => {
    e.target.style.transform = 'translateY(-3px) scale(1.05)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'translateY(0) scale(1)';
  };

  return (
    <>
      <style>{floatingAnimation}</style>
      <section ref={heroRef} style={heroStyles} id="hero">
        {/* Background Elements */}
        <div style={backgroundElements}>
          <div style={backgroundCircle1}></div>
          <div style={backgroundCircle2}></div>
        </div>

        <div style={containerStyles}>
          {/* Content Side */}
          <div style={contentStyles}>
            <div style={greetingStyles}>
              Hi, I'm
            </div>
            
            <h1 style={nameStyles}>
              Ishan 👋
            </h1>
            
            <div style={titleStyles}>
              <span className="typing-cursor">
                {typedText}
              </span>
            </div>
            
            <p style={descriptionStyles}>
              Aspiring Full Stack Developer & IT Undergraduate passionate about building modern web applications
            </p>
            
            <div style={buttonContainerStyles}>
              <a 
                href="#projects" 
                style={primaryButtonStyles}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                style={secondaryButtonStyles}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                Contact Me
              </a>
            </div>
            
            <div style={socialLinksStyles}>
              <a 
                href="https://github.com/Dilhara2002" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={socialLinkStyles}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/ishan-wijesinghe-5200a1318/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={socialLinkStyles}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:your.email@example.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={socialLinkStyles}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Image Side */}
          <div style={imageContainerStyles}>
            <div style={imageBackgroundStyles}></div>
            <img 
              ref={profileImageRef}
              src={profileImage}
              alt="Ishan Wijesinghe - Full Stack Developer" 
              style={imageStyles}
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;