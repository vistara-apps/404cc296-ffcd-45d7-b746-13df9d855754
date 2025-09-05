import { type ClassValue, clsx } from 'clsx';

// Utility function for combining class names (if clsx is available)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format phone number
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

// Format date for display
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

// Get user's location
export async function getUserLocation(): Promise<{
  latitude: number;
  longitude: number;
} | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        resolve(null);
      }
    );
  });
}

// Convert coordinates to state (simplified - in real app would use geocoding API)
export function coordinatesToState(lat: number, lng: number): string {
  // This is a simplified implementation
  // In a real app, you would use a geocoding service
  if (lat >= 32.5 && lat <= 42 && lng >= -124 && lng <= -114) {
    return 'California';
  }
  if (lat >= 25.8 && lat <= 31 && lng >= -87 && lng <= -80) {
    return 'Florida';
  }
  // Add more state boundaries as needed
  return 'Unknown';
}

// Generate shareable text for rights card
export function generateShareableText(
  state: string,
  interactionType: string,
  rights: string[]
): string {
  return `🛡️ GuardianGuide Rights Card - ${state} ${interactionType}

Your Rights:
${rights.map(right => `• ${right}`).join('\n')}

Know Your Rights. Stay Safe. Instantly.
Get GuardianGuide: [app-link]`;
}

// Validate emergency contact
export function validateEmergencyContact(contact: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(contact);
}

// Generate incident ID
export function generateIncidentId(): string {
  return `incident_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Check if user has premium features
export function hasPremiumAccess(user: any): boolean {
  return user?.premiumStatus === true;
}

// Format recording duration
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
