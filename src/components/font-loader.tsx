'use client';

import { useEffect } from 'react';
import { FONTS } from '@/data/fonts';

export function FontLoader() {
  useEffect(() => {
    // Dynamically load Google Fonts
    FONTS.forEach((font) => {
      const fontUrl = `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}:wght@100;200;300;400;500;600;700;800;900&display=swap`;
      
      // Check if font is already loaded
      const existingPreload = document.querySelector(`link[href="${fontUrl}"][rel="preload"]`);
      const existingStylesheet = document.querySelector(`link[href="${fontUrl}"][rel="stylesheet"]`);
      
      if (!existingPreload) {
        // Create preload link
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = fontUrl;
        preloadLink.as = 'style';
        document.head.appendChild(preloadLink);
      }
      
      if (!existingStylesheet) {
        // Create stylesheet link
        const stylesheetLink = document.createElement('link');
        stylesheetLink.rel = 'stylesheet';
        stylesheetLink.href = fontUrl;
        document.head.appendChild(stylesheetLink);
      }
    });
  }, []);

  return null; // This component doesn't render anything
}