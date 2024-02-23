import React, { useEffect } from 'react';
import './particles.js'; // Adjust based on actual export of particles.js
import backgroundImage from '../../../assets/images/background/night_sky_edit2.jpg'; // Adjust the path as necessary

const ParticlesBackground = () => {
  useEffect(() => {
    // Initialize particles.js after import
    particlesJS('particles-js', 'path_to_particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

    return () => {
      // Cleanup on component unmount
      window.pJSDom = window.pJSDom.filter((pJS) => {
        pJS.pJS.fn.vendors.destroypJS();
        return false; // Remove the instance from the array
      });
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      style={{ 
        position: 'absolute', 
        width: '100%', 
        height: '100%', 
        zIndex: -1,
        backgroundImage: `url(${backgroundImage})`, // Use the imported image here
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the background image
      }}
    ></div>
  );
};

export default ParticlesBackground;
