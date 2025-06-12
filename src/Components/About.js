import React, { useState, useEffect, useRef } from 'react';

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
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
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-10px) rotate(1deg); }
      50% { transform: translateY(-5px) rotate(0deg); }
      75% { transform: translateY(-15px) rotate(-1deg); }
    }
  `;

  const containerStyles = {
    padding: '5rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden'
  };

  const backgroundElements = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 0
  };

  const backgroundCircle1 = {
    position: 'absolute',
    top: '10%',
    right: '5%',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'rgba(59, 130, 246, 0.1)',
    filter: 'blur(40px)',
    animation: 'float 8s ease-in-out infinite'
  };

  const backgroundCircle2 = {
    position: 'absolute',
    bottom: '20%',
    left: '5%',
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    background: 'rgba(99, 102, 241, 0.1)',
    filter: 'blur(40px)',
    animation: 'pulse 6s ease-in-out infinite'
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
    display: 'inline-block',
    animation: isVisible ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none'
  };

  const underlineStyles = {
    position: 'absolute',
    bottom: '-8px',
    left: '0',
    width: '100%',
    height: '4px',
    backgroundColor: '#3b82f6',
    borderRadius: '2px',
    animation: isVisible ? 'slideInLeft 0.8s ease-out 0.4s both' : 'none'
  };

  const subtitleStyles = {
    fontSize: '1.125rem',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto',
    animation: isVisible ? 'fadeInUp 0.8s ease-out 0.6s both' : 'none'
  };

  const contentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'flex-start'
    }
  };

  const imageContainerStyles = {
    flex: '1',
    minWidth: '300px',
    height: '350px',
    borderRadius: '12px',
    backgroundColor: '#f1f5f9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    animation: isVisible ? 'slideInLeft 0.8s ease-out 0.8s both' : 'none',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)'
    }
  };

  const imagePlaceholderStyles = {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #e2e8f0 0%, #f1f5f9 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const textContentStyles = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    animation: isVisible ? 'slideInRight 0.8s ease-out 0.8s both' : 'none'
  };

  const sectionStyles = {
    animation: isVisible ? 'fadeInUp 0.8s ease-out both' : 'none'
  };

  const sectionTitleStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '1rem',
    position: 'relative',
    display: 'inline-block',
    ':after': {
      content: '""',
      position: 'absolute',
      bottom: '-4px',
      left: '0',
      width: '50%',
      height: '2px',
      backgroundColor: '#3b82f6',
      transition: 'width 0.3s ease'
    },
    ':hover:after': {
      width: '100%'
    }
  };

  const sectionTextStyles = {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: '1.7'
  };

  const skillsContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginBottom: '1rem'
  };

  const skillTagStyles = (index) => ({
    backgroundColor: '#e0f2fe',
    color: '#0369a1',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
    opacity: index < visibleSkills ? 1 : 0,
    transform: index < visibleSkills ? 'translateY(0)' : 'translateY(10px)',
    transition: 'all 0.3s ease',
    transitionDelay: `${index * 0.1}s`
  });

  const statsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    width: '100%',
    marginTop: '3rem',
    flexWrap: 'wrap',
    animation: isVisible ? 'fadeInUp 0.8s ease-out 1s both' : 'none'
  };

  const statCardStyles = (delay) => ({
    textAlign: 'center',
    padding: '1.5rem',
    borderRadius: '12px',
    backgroundColor: '#f8fafc',
    minWidth: '150px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    animation: isVisible ? `fadeInUp 0.8s ease-out ${0.8 + delay * 0.2}s both` : 'none',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff'
    }
  });

  const statValueStyles = {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: '#3b82f6',
    marginBottom: '0.5rem'
  };

  const statLabelStyles = {
    fontSize: '0.875rem',
    color: '#64748b',
    fontWeight: '500'
  };

  return (
    <>
      <style>{animations}</style>
      <div 
        id="about"
        ref={aboutRef}
        style={containerStyles}
      >
        {/* Background Elements */}
        <div style={backgroundElements}>
          <div style={backgroundCircle1}></div>
          <div style={backgroundCircle2}></div>
        </div>

        {/* Section Header */}
        <div style={headerStyles}>
          <h2 style={titleStyles}>
            About Me
            <span style={underlineStyles} />
          </h2>
          <p style={subtitleStyles}>
            Get to know more about my journey, skills, and passions
          </p>
        </div>

        {/* Content Container */}
        <div style={contentContainerStyles}>
          {/* Image/Graphic Placeholder */}
          <div style={imageContainerStyles}>
            <div style={imagePlaceholderStyles}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="80" 
                height="80" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#94a3b8" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ animation: 'pulse 2s ease-in-out infinite' }}
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div style={textContentStyles}>
            <div style={{ ...sectionStyles, animationDelay: '0.8s' }}>
              <h3 style={sectionTitleStyles}>My Journey</h3>
              <p style={sectionTextStyles}>
                I'm currently studying Information Technology at the University of Colombo School of Computing. 
                My passion for technology started when I built my first website at 16, and since then I've been 
                obsessed with creating digital solutions that solve real-world problems.
              </p>
            </div>

            <div style={{ ...sectionStyles, animationDelay: '1s' }}>
              <h3 style={sectionTitleStyles}>My Skills</h3>
              <div style={skillsContainerStyles}>
                {skills.map((skill, index) => (
                  <span 
                    key={skill}
                    style={skillTagStyles(index)}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ ...sectionStyles, animationDelay: '1.2s' }}>
              <h3 style={sectionTitleStyles}>My Approach</h3>
              <p style={sectionTextStyles}>
                I believe in clean, efficient code and user-centric design. When I'm not coding, 
                I'm either contributing to open-source projects, learning new frameworks, or mentoring 
                junior developers in my university's coding club.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={statsContainerStyles}>
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              style={statCardStyles(index)}
            >
              <div style={statValueStyles}>
                {stat.value}+
              </div>
              <div style={statLabelStyles}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;