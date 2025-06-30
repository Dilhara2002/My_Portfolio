import React, { useState, useEffect, useRef, useCallback } from 'react';

function Projects() {
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedProjects, setAnimatedProjects] = useState(new Set());
  const projectRefs = useRef([]);

  const projects = [
    {
      title: "Dish Craft",
      description: "A cooking community platform where food lovers and chefs share recipes and culinary skills. Built with Spring Boot and modern web technologies.",
      tags: ["Spring Boot", "Java", "Thymeleaf", "Maven/Gradle", "JPA"],
      category: "fullstack",
      github: "https://github.com/Dihara2002/dish-craft",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: { stars: 1, watching: 1, forks: 0, lastUpdated: "last month" }
    },
    {
      title: "TaskFlow",
      description: "Productivity application with Kanban-style task management, calendar integration, and team collaboration features.",
      tags: ["React", "Firebase", "Material UI", "Drag & Drop"],
      category: "frontend",
      github: "https://github.com/Dilhara2002/taskflow",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: { stars: 28, forks: 8, commits: 89 }
    },
    {
      title: "EcoTrack",
      description: "Sustainability app that helps users track their carbon footprint and suggests eco-friendly alternatives.",
      tags: ["Next.js", "Tailwind CSS", "Chart.js", "REST API"],
      category: "frontend",
      github: "https://github.com/Dilhara2002/ecotrack",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: { stars: 35, forks: 14, commits: 124 }
    },
    {
      title: "CodeCollab",
      description: "Real-time code collaboration platform with syntax highlighting and video chat functionality.",
      tags: ["Socket.io", "React", "Monaco Editor", "WebRTC"],
      category: "fullstack",
      github: "https://github.com/Dilhara2002/codecollab",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: { stars: 67, forks: 23, commits: 201 }
    },
    {
      title: "AI ChatBot",
      description: "Intelligent chatbot with natural language processing capabilities and machine learning integration.",
      tags: ["Python", "TensorFlow", "Flask", "NLP"],
      category: "ai",
      github: "https://github.com/Dilhara2002/MyHomeStock.git",
      image: "https://t3.ftcdn.net/jpg/03/28/78/00/360_F_328780060_SFqdJFUTwMLh6uoKv9qaVry9cpY8p498.jpg",
      stats: { stars: 91, forks: 31, commits: 243 }
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
      tags: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      category: "mobile",
      github: "https://github.com/Dilhara2002/mobile-banking",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: { stars: 54, forks: 18, commits: 178 }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🎯' },
    { id: 'fullstack', label: 'Full Stack', icon: '⚡' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'ai', label: 'AI/ML', icon: '🤖' },
    { id: 'mobile', label: 'Mobile', icon: '📱' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedProjects.has(entry.target.dataset.projectId)) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0px)';
            setAnimatedProjects(prev => new Set(prev).add(entry.target.dataset.projectId));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects, animatedProjects]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [filter]);

  const ParticleBackground = React.memo(() => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const animationFrameId = useRef(null);

    const initParticles = useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles.current = Array.from({ length: 30 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1
      }));
    }, []);

    const animate = useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
      initParticles();
      animate();

      const handleResize = () => {
        initParticles();
      };

      window.addEventListener('resize', handleResize);
      
      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        window.removeEventListener('resize', handleResize);
      };
    }, [initParticles, animate]);

    return (
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: 0.3,
          pointerEvents: 'none'
        }}
      />
    );
  });

  const ProjectCard = React.memo(({ project, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
      const img = new Image();
      img.src = project.image;
      img.onload = () => {
        setImageLoaded(true);
      };
    }, [project.image]);

    return (
      <div
        ref={el => projectRefs.current[index] = el}
        data-project-id={project.title}
        style={{
          opacity: animatedProjects.has(project.title) ? 1 : 0,
          transform: animatedProjects.has(project.title) ? 'translateY(0px)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
          transitionDelay: `${index * 0.1}s`
        }}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div
          style={{
            perspective: '1000px',
            height: '450px'
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s ease',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              cursor: 'pointer'
            }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front of card */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: hoveredCard === index 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                {!imageLoaded && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s infinite'
                    }}
                  />
                )}
                <img
                  ref={imgRef}
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                    display: imageLoaded ? 'block' : 'none'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: hoveredCard === index 
                      ? 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8))'
                      : 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1.5rem',
                    transition: 'background 0.3s ease'
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: 'white',
                        margin: '0 0 0.5rem 0'
                      }}
                    >
                      {project.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
                      <span>⭐ {project.stats.stars}</span>
                      <span>🍴 {project.stats.forks}</span>
                      <span>📝 {project.stats.commits}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <p
                  style={{
                    color: '#475569',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6',
                    fontSize: '0.9rem'
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{
                        backgroundColor: '#e0f2fe',
                        color: '#0369a1',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        border: '1px solid #bae6fd',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: '#1e293b',
                      color: 'white',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.2s ease',
                      width: '100%',
                      justifyContent: 'center'
                    }}
                  >
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Back of card */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                backgroundColor: '#1e293b',
                borderRadius: '16px',
                transform: 'rotateY(180deg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Project Details</h3>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{project.stats.stars}</div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Stars</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{project.stats.forks}</div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Forks</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{project.stats.commits}</div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Commits</div>
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}
              >
                Back to Project
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          @keyframes slideIn {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          
          .filter-button {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .filter-button:hover {
            transform: translateY(-2px);
          }
          
          .filter-button.active {
            animation: float 2s ease-in-out infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      
      <ParticleBackground />
      
      <div
        id="projects"
        style={{
          padding: '5rem 1rem',
          maxWidth: '1400px',
          margin: '0 auto',
          backgroundColor: 'transparent',
          position: 'relative'
        }}
      >
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
              position: 'relative',
              display: 'inline-block',
              animation: 'slideIn 1s ease-out'
            }}
          >
            My Projects
            <span
              style={{
                position: 'absolute',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '6px',
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                borderRadius: '3px',
                animation: 'slideIn 1s ease-out 0.5s both'
              }}
            />
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '700px',
              margin: '0 auto 2rem auto',
              lineHeight: '1.6'
            }}
          >
            Explore my portfolio of innovative projects, each crafted with passion and cutting-edge technology.
          </p>

          {/* Category Filter */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2rem'
            }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`filter-button ${filter === category.id ? 'active' : ''}`}
                style={{
                  backgroundColor: filter === category.id ? '#3b82f6' : 'rgba(255, 255, 255, 0.1)',
                  color: filter === category.id ? 'white' : '#64748b',
                  border: filter === category.id ? 'none' : '2px solid #e2e8f0',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backdropFilter: 'blur(10px)',
                  boxShadow: filter === category.id 
                    ? '0 8px 25px -8px rgba(59, 130, 246, 0.4)' 
                    : '0 2px 10px -2px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading Spinner */}
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '200px'
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                border: '3px solid #e2e8f0',
                borderTop: '3px solid #3b82f6',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}
            />
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
              gap: '2.5rem',
              padding: '0 1rem'
            }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a
            href="https://github.com/Dilhara2002?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 25px -5px rgba(102, 126, 234, 0.4)',
              border: 'none'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>🚀</span>
            Explore All Projects
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;