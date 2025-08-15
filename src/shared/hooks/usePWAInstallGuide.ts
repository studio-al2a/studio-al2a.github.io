import { useEffect, useState } from 'react';

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean; // iOS Safari
}

export const usePWAInstallGuide = () => {
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('seen_pwa_guide');

    const isPWAInstalled = () => {
      const nav = window.navigator as NavigatorWithStandalone;

      // iOS
      if (nav.standalone) return true;

      // Android / Desktop (fullscreen or standalone)
      if (
        window.matchMedia('(display-mode: standalone)').matches ||
        window.matchMedia('(display-mode: fullscreen)').matches
      ) {
        return true;
      }

      return false;
    };

    if (!seen && !isPWAInstalled()) {
      setShowGuide(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('seen_pwa_guide', 'true');
    setShowGuide(false);
  };

  return { showGuide, handleClose };
};
