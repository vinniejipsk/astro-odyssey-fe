import React, { createContext, useContext, useState } from 'react';

const ParticleContext = createContext();

export const useParticleContext = () => useContext(ParticleContext);

export const ParticleProvider = ({ children }) => {
  const [reload, setReload] = useState(false);

  const triggerReload = () => setReload(!reload);

  return (
    <ParticleContext.Provider value={{ triggerReload }}>
      {children}
    </ParticleContext.Provider>
  );
};
