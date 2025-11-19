import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';
import { initGA, logPageView } from './analytics';

// Initialize Google Analytics
initGA();

function AppWithAnalytics() {
  useEffect(() => {
    // Log initial page view
    logPageView();
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWithAnalytics />
  </React.StrictMode>,
);
