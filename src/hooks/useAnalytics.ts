import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../services/analytics';

export const useAnalytics = (pageTitle: string) => {
  const location = useLocation();
  const startTime = useRef<number>(Date.now());
  const scrollDepth = useRef<number>(0);
  const maxScrollDepth = useRef<number>(0);

  // Track page view
  useEffect(() => {
    analytics.init();
    analytics.trackPageView(pageTitle, location.pathname);
    
    // Reset timer for new page
    startTime.current = Date.now();
    scrollDepth.current = 0;
    maxScrollDepth.current = 0;
  }, [location.pathname, pageTitle]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScrollDepth.current) {
        maxScrollDepth.current = scrollPercent;
        
        // Track at key milestones (25%, 50%, 75%, 100%)
        if (scrollPercent >= 25 && scrollDepth.current < 25) {
          analytics.trackScrollDepth(25);
          scrollDepth.current = 25;
        } else if (scrollPercent >= 50 && scrollDepth.current < 50) {
          analytics.trackScrollDepth(50);
          scrollDepth.current = 50;
        } else if (scrollPercent >= 75 && scrollDepth.current < 75) {
          analytics.trackScrollDepth(75);
          scrollDepth.current = 75;
        } else if (scrollPercent >= 100 && scrollDepth.current < 100) {
          analytics.trackScrollDepth(100);
          scrollDepth.current = 100;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track time on page when component unmounts
  useEffect(() => {
    return () => {
      const timeSpent = Date.now() - startTime.current;
      if (timeSpent > 1000) { // Only track if spent more than 1 second
        analytics.trackTimeOnPage(timeSpent, pageTitle);
      }
    };
  }, [pageTitle]);

  // Track user engagement
  const trackEngagement = (action: string, category: string, label?: string) => {
    analytics.trackEngagement(action, category, label);
  };

  return { trackEngagement };
};
