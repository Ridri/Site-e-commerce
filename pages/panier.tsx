import Navigation from '../containers/Navigation';
import React, { useState, useEffect } from 'react';

const Panier = () => {
  const initialSeconds = 2 * 365 * 24 * 60 * 60; // 2 ans en secondes
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true); // Démarrer le minuteur dès le chargement de la page

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [seconds, isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(initialSeconds);
    setIsActive(false);
  };

  const formatTime = (timeInSeconds) => {
    const years = Math.floor(timeInSeconds / (365 * 24 * 60 * 60));
    const days = Math.floor((timeInSeconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60));
    const remainingSeconds = timeInSeconds % (24 * 60 * 60);
    return `${years} an(s), ${days} jours, ${Math.floor(remainingSeconds / 3600)} heures, ${Math.floor((remainingSeconds % 3600) / 60)} minutes, ${remainingSeconds % 60} secondes`;
  };

  return (
    <div className='panier-css'>
      <h1>Coming soon</h1>
      <p>Temps restant : {formatTime(seconds)}</p>
    </div>
  );
};

export default Panier;








