import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent the browser from restoring scroll position on page reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to the very top of the page on route change or page reload
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
