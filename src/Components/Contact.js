import React from 'react';

function Contact() {
  return (
    <div 
      style={{
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '2.5rem',
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto'
        }}
      >
        <h2 
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#2d3748',
            marginBottom: '1.5rem',
            textAlign: 'center',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '0.5rem'
          }}
        >
          Contact Me
        </h2>
        
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div 
              style={{
                backgroundColor: '#edf2f7',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0'
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#4a5568" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <p style={{ fontWeight: '600', color: '#4a5568', marginBottom: '0.25rem' }}>Email</p>
              <a 
                href="mailto:your.email@example.com" 
                style={{
                  color: '#3182ce',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.color = '#2c5282'}
                onMouseOut={(e) => e.target.style.color = '#3182ce'}
              >
                your.email@example.com
              </a>
            </div>
          </div>
          
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div 
              style={{
                backgroundColor: '#edf2f7',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0'
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#4a5568" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <div>
              <p style={{ fontWeight: '600', color: '#4a5568', marginBottom: '0.25rem' }}>GitHub</p>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#3182ce',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.color = '#2c5282'}
                onMouseOut={(e) => e.target.style.color = '#3182ce'}
              >
                github.com/yourusername
              </a>
            </div>
          </div>
          
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div 
              style={{
                backgroundColor: '#edf2f7',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0'
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#4a5568" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div>
              <p style={{ fontWeight: '600', color: '#4a5568', marginBottom: '0.25rem' }}>LinkedIn</p>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#3182ce',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.color = '#2c5282'}
                onMouseOut={(e) => e.target.style.color = '#3182ce'}
              >
                linkedin.com/in/yourusername
              </a>
            </div>
          </div>
        </div>
        
        <form 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {/* <h3 
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#2d3748',
              marginBottom: '0.5rem'
            }}
          >
            Send me a message
          </h3> */}
          
          {/* <div>
            <label 
              htmlFor="name" 
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#4a5568'
              }}
            >
              Your Name
            </label>
            <input 
              type="text" 
              id="name" 
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3182ce'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div> */}
          
          {/* <div>
            <label 
              htmlFor="email" 
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#4a5568'
              }}
            >
              Your Email
            </label>
            <input 
              type="email" 
              id="email" 
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3182ce'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div> */}
          
          {/* <div>
            <label 
              htmlFor="message" 
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#4a5568'
              }}
            >
              Message
            </label>
            <textarea 
              id="message" 
              rows="4" 
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3182ce'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            ></textarea>
          </div> */}
          
          {/* <button 
            type="submit" 
            style={{
              backgroundColor: '#3182ce',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              alignSelf: 'flex-start'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2c5282'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#3182ce'}
          >
            Send Message
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default Contact;