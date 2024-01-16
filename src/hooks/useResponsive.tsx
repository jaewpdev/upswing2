"use client";

import { useState, useEffect } from "react";

function useResponsive() {
  const getBreakpoint = (width: number) => {
    if (width < 640) return 0; // Width below the smallest breakpoint
    if (width < 768) return 1; // sm
    if (width < 1024) return 2; // md
    if (width < 1280) return 3; // lg
    if (width < 1536) return 4; // xl
    return 5; // 2xl
  };

    // Initialize state with a default value
    const [breakpoint, setBreakpoint] = useState(() => {
      // Check if window is defined to avoid issues during SSR or SSG
      if (typeof window !== 'undefined') {
        return getBreakpoint(window.innerWidth);
      }
      // Return a default value (you can adjust this based on your needs)
      return 1;
    });
  
    useEffect(() => {
      // Ensure that this code runs only in the browser
      if (typeof window !== 'undefined') {
        const handleResize = () => {
          setBreakpoint(getBreakpoint(window.innerWidth));
        };
  
        // Attach the event listener
        window.addEventListener('resize', handleResize);
  
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []); // An empty dependency array ensures this effect runs only once after the initial render
  
    return breakpoint;
  };
  
  export default useResponsive;