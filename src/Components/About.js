import React, { useState, useEffect, useRef } from 'react';
import profileImage from '../Image/i1.JPG'; // Using just one image

function About() {
  const [visibleSkills, setVisibleSkills] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'Express', 'Git', 'Docker'];
  const stats = [
    { value: 15, label: 'Projects Completed' },
    { value: 2, label: 'Years of Experience' },
    { value: 10, label: 'Technologies Learned' }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Skill animation
  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setVisibleSkills(prev => (prev < skills.length ? prev + 1 : prev));
      }, 150);
      return () => clearInterval(timer);
    }
  }, [isVisible, skills.length]);

  // Animation keyframes
  const animations = `
    @keyframes fadeInUp {
      0% { transform: translateY(30px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes slideInLeft {
      0% { transform: translateX(-100px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideInRight {
      0% { transform: translateX(100px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
  `;

  // Style objects
  const containerStyles = {
    padding: '5rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '3rem',
    position: 'relative',
    zIndex: 1,
    animation: isVisible ? 'fadeInUp 0.8s ease-out both' : 'none'
  };

  const titleStyles = {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: '1rem',
    position: 'relative',
    display: 'inline-block'
  };

  const underlineStyles = {
    position: 'absolute',
    bottom: '-8px',
    left: '0',
    width: '100%',
    height: '4px',
    backgroundColor: '#3b82f6',
    borderRadius: '2px'
  };

  const imageContainerStyles = {
    width: '300px',
    height: '350px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    animation: isVisible ? 'slideInLeft 0.8s ease-out both' : 'none'
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const contentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    alignItems: 'center',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'flex-start'
    }
  };

  return (
    <>
      <style>{animations}</style>
      <div id="about" ref={aboutRef} style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>
            About Me
            <span style={underlineStyles} />
          </h2>
          <p>Get to know more about my journey, skills, and passions</p>
        </div>

        <div style={contentContainerStyles}>
          <div style={imageContainerStyles}>
            <img 
              src={profileImage} 
              alt="Profile" 
              style={imageStyles}
            />
          </div>

          <div>
            <h3>My Journey</h3>
            <p>
            My Journey

I'm currently pursuing a Bachelor of Science Honours in Information Technology, specializing in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT). My passion for technology was inspired by my role model, whose journey in the tech world motivated me to follow a similar path. Over the years, I've developed a strong interest in both frontend and backend development. My ultimate goal is to become a Full-Stack Developer, mastering the entire development process. I aspire to work at a leading tech company or even launch my own startup, building innovative solutions that make a real impact.
            </p>
            
            <h3>My Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {skills.map((skill, index) => (
                <span key={skill} style={{
                  backgroundColor: '#e0f2fe',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  opacity: index < visibleSkills ? 1 : 0,
                  transition: `opacity 0.3s ease ${index * 0.1}s`
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;