import React, { useState, useEffect } from 'react';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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
    const offset = 80; // Adjust this value based on your navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav 
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
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ul 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}
        >
          <li>
            <a 
              href="#hero" 
              style={{
                textDecoration: 'none',
                color: activeSection === 'hero' ? '#ffedd5' : 'white',
                fontWeight: activeSection === 'hero' ? '600' : '500',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                transition: 'all 0.2s ease-in-out',
                position: 'relative',
                fontSize: '1.1rem'
              }}
              onClick={(e) => handleClick(e, 'hero')}
              onMouseEnter={(e) => e.target.style.color = '#ffedd5'}
              onMouseLeave={(e) => e.target.style.color = activeSection === 'hero' ? '#ffedd5' : 'white'}
            >
              {activeSection === 'hero' && (
                <span 
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#ffedd5',
                    borderRadius: '50%'
                  }}
                />
              )}
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              style={{
                textDecoration: 'none',
                color: activeSection === 'about' ? '#ffedd5' : 'white',
                fontWeight: activeSection === 'about' ? '600' : '500',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                transition: 'all 0.2s ease-in-out',
                position: 'relative',
                fontSize: '1.1rem'
              }}
              onClick={(e) => handleClick(e, 'about')}
              onMouseEnter={(e) => e.target.style.color = '#ffedd5'}
              onMouseLeave={(e) => e.target.style.color = activeSection === 'about' ? '#ffedd5' : 'white'}
            >
              {activeSection === 'about' && (
                <span 
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#ffedd5',
                    borderRadius: '50%'
                  }}
                />
              )}
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              style={{
                textDecoration: 'none',
                color: activeSection === 'projects' ? '#ffedd5' : 'white',
                fontWeight: activeSection === 'projects' ? '600' : '500',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                transition: 'all 0.2s ease-in-out',
                position: 'relative',
                fontSize: '1.1rem'
              }}
              onClick={(e) => handleClick(e, 'projects')}
              onMouseEnter={(e) => e.target.style.color = '#ffedd5'}
              onMouseLeave={(e) => e.target.style.color = activeSection === 'projects' ? '#ffedd5' : 'white'}
            >
              {activeSection === 'projects' && (
                <span 
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#ffedd5',
                    borderRadius: '50%'
                  }}
                />
              )}
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              style={{
                textDecoration: 'none',
                color: activeSection === 'contact' ? '#ffedd5' : 'white',
                fontWeight: activeSection === 'contact' ? '600' : '500',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                transition: 'all 0.2s ease-in-out',
                position: 'relative',
                fontSize: '1.1rem'
              }}
              onClick={(e) => handleClick(e, 'contact')}
              onMouseEnter={(e) => e.target.style.color = '#ffedd5'}
              onMouseLeave={(e) => e.target.style.color = activeSection === 'contact' ? '#ffedd5' : 'white'}
            >
              {activeSection === 'contact' && (
                <span 
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#ffedd5',
                    borderRadius: '50%'
                  }}
                />
              )}
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;