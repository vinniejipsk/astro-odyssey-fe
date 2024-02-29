import React, { useEffect } from 'react';
import './particles.js';

import './ParticlesBackground.css'
import backgroundImage from '../../../assets/images/background/night_sky_edit2.jpg'; // Adjust the path as necessary

const ParticlesBackground = ({ reloadKey }) => {
  useEffect(() => {
    const loadParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', 'path_to_particles.json', function() {
          console.log('callback - particles.js config loaded');
        });
      }
    };

    loadParticles();
  }, [reloadKey]); 
  
  return (
    <div 
      id="particles-js" 
      style={{ 
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        // Removed backgroundAttachment: 'fixed' to allow scrolling
      }}
    ></div>
  );
};

export default ParticlesBackground;
