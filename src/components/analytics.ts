import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-N3GYRPK79X';

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
      anonymizeIp: true, // Anonymize IP for GDPR compliance
    },
  });
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

// Helper function to track form submissions
export const trackFormSubmission = (formName: string) => {
  logEvent('Form', 'Submit', formName);
};

// Helper function to track CTA clicks
export const trackCTAClick = (ctaLocation: string, ctaText: string) => {
  logEvent('CTA', 'Click', `${ctaLocation} - ${ctaText}`);
};

// Helper function to track navigation clicks
export const trackNavigation = (destination: string) => {
  logEvent('Navigation', 'Click', destination);
};

export default ReactGA;