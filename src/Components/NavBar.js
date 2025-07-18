import React, { useState, useEffect } from 'react';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : 
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Apply dark mode class to document and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navLinkStyle = (section) => ({
    textDecoration: 'none',
    color: activeSection === section ? '#ffedd5' : 'white',
    fontWeight: activeSection === section ? '600' : '500',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
    fontSize: '1.1rem',
    '&:hover': {
      color: '#ffedd5'
    }
  });

  return (
    <nav 
      className="dark:bg-gray-900 dark:bg-opacity-95 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(37, 99, 235, 0.95)' : 'rgb(37, 99, 235)',
        color: 'white',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: scrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease-in-out',
        backdropFilter: scrolled ? 'blur(8px)' : 'none'
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
          <span className="dark:text-white">Ishan</span>
        </div>
        
        <ul style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li>
            <a 
              href="#hero" 
              style={navLinkStyle('hero')}
              onClick={(e) => handleClick(e, 'hero')}
              onMouseEnter={(e) => e.target.style.color = '#ffedd5'}
              onMouseLeave={(e) => e.target.style.color = activeSection === 'hero' ? '#ffedd5' : 'white'}
            >
              {activeSection === 'hero' && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#ffedd5',
                  borderRadius: '50%'
                }} />
              )}
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              style={navLinkStyle('about')}
              onClick={(e) => handleClick(e, 'about')}
              onMouseEnter={(e) => e.target.style.color = '#ffedd5'}
              onMouseLeave={(e) => e.target.style.color = activeSection === 'about' ? '#ffedd5' : 'white'}
            >
              {activeSection === 'about' && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#ffedd5',
                  borderRadius: '50%'
                }} />
              )}
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              style={navLinkStyle('projects')}
              onClick={(e) => handleClick(e, 'projects')}
              onMouseEnter={(e) => e.target.style.color = '#ffedd5'}
              onMouseLeave={(e) => e.target.style.color = activeSection === 'projects' ? '#ffedd5' : 'white'}
            >
              {activeSection === 'projects' && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#ffedd5',
                  borderRadius: '50%'
                }} />
              )}
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              style={navLinkStyle('contact')}
              onClick={(e) => handleClick(e, 'contact')}
              onMouseEnter={(e) => e.target.style.color = '#ffedd5'}
              onMouseLeave={(e) => e.target.style.color = activeSection === 'contact' ? '#ffedd5' : 'white'}
            >
              {activeSection === 'contact' && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#ffedd5',
                  borderRadius: '50%'
                }} />
              )}
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={toggleDarkMode}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.25rem',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;