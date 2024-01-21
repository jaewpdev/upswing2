'use client';

import { useEffect, useRef } from 'react';

export default function SchedulePage() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    // Function to load the Calendly script
    const loadCalendlyScript = () => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    };

    // Check if Calendly script is already loaded
    if (!window.Calendly) {
      loadCalendlyScript();
    }

    // Initialize Calendly widget when the script is loaded
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/useupswing/discovery-call',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });
        clearInterval(checkCalendly);
      }
    }, 200);

    // Cleanup
    return () => clearInterval(checkCalendly);
  }, []);

  return (
    <div className='min-h-page'>
      <div ref={calendlyRef} style={{ minWidth: '320px', height: '700px' }}></div>
    </div>
  );
}
