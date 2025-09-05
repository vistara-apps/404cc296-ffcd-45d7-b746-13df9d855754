// US States for location selection
export const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming'
];

// Interaction types
export const INTERACTION_TYPES = [
  { id: 'traffic-stop', label: 'Traffic Stop', icon: '🚗' },
  { id: 'questioning', label: 'Police Questioning', icon: '❓' },
  { id: 'search', label: 'Search Request', icon: '🔍' },
  { id: 'general', label: 'General Interaction', icon: '👮' }
] as const;

// Premium features
export const PREMIUM_FEATURES = [
  'Emergency contact alerts',
  'Incident recording',
  'AI-powered script generation',
  'Advanced legal guidance',
  'Priority support',
  'Unlimited rights cards'
];

// Design tokens
export const DESIGN_TOKENS = {
  colors: {
    background: 'hsl(215 28% 17%)',
    surface: 'hsl(215 28% 21%)',
    primary: 'hsl(220 88% 52%)',
    accent: 'hsl(190 79% 50%)',
  },
  spacing: {
    sm: '8px',
    md: '12px',
    lg: '20px',
  },
  borderRadius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
  },
  animation: {
    duration: {
      fast: '150ms',
      base: '250ms',
    },
    easing: 'cubic-bezier(0.22,1,0.36,1)',
  },
} as const;

// API endpoints (for future implementation)
export const API_ENDPOINTS = {
  users: '/api/users',
  incidents: '/api/incidents',
  rights: '/api/rights',
  generate: '/api/generate',
  alerts: '/api/alerts',
} as const;
