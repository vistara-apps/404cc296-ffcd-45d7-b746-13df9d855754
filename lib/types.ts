// User data model
export interface User {
  userId: string;
  state: string;
  premiumStatus: boolean;
  emergencyContact?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Incident log data model
export interface IncidentLog {
  logId: string;
  userId: string;
  timestamp: Date;
  location: {
    latitude: number;
    longitude: number;
    address?: string;
  };
  notes: string;
  recordingUrl?: string;
  interactionType: 'traffic-stop' | 'questioning' | 'search' | 'other';
  status: 'active' | 'completed' | 'archived';
}

// Rights content data model
export interface RightsContent {
  contentId: string;
  state: string;
  interactionType: 'traffic-stop' | 'questioning' | 'search' | 'general';
  rightsText: string[];
  scriptText: {
    dos: string[];
    donts: string[];
    phrases: string[];
  };
  scriptType: 'basic' | 'advanced' | 'premium';
  lastUpdated: Date;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Component prop types
export interface ComponentVariants {
  AppShell: 'default';
  RightsCard: 'view' | 'shareable';
  ScriptDisplay: 'read' | 'copy';
  IncidentRecorder: 'active' | 'idle';
  AlertContactButton: 'configured' | 'unconfigured';
}

// State management types
export interface AppState {
  user: User | null;
  currentLocation: {
    state: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  activeIncident: IncidentLog | null;
  premiumFeatures: boolean;
}
