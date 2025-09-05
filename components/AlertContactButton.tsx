'use client';

import { useState } from 'react';
import { Phone, UserPlus, CheckCircle } from 'lucide-react';

interface AlertContactButtonProps {
  variant?: 'configured' | 'unconfigured';
}

export function AlertContactButton({ variant = 'unconfigured' }: AlertContactButtonProps) {
  const [isAlertSent, setIsAlertSent] = useState(false);
  const [emergencyContact, setEmergencyContact] = useState('');

  const sendAlert = async () => {
    // Simulate sending alert
    setIsAlertSent(true);
    setTimeout(() => setIsAlertSent(false), 3000);
    
    // In a real app, this would send location and alert to emergency contact
    console.log('Emergency alert sent');
  };

  const configureContact = () => {
    // In a real app, this would open a modal or navigate to settings
    const contact = prompt('Enter emergency contact phone number:');
    if (contact) {
      setEmergencyContact(contact);
    }
  };

  if (variant === 'unconfigured' && !emergencyContact) {
    return (
      <div className="glass-card p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">Setup Emergency Contact</h3>
          <p className="text-white opacity-75 mb-6">
            Configure an emergency contact to receive alerts during incidents
          </p>
          
          <button 
            onClick={configureContact}
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            <UserPlus className="h-5 w-5" />
            <span>Add Emergency Contact</span>
          </button>
          
          <div className="mt-4 p-3 bg-purple-500 bg-opacity-20 rounded-lg">
            <p className="text-purple-400 text-sm">
              🔒 Premium Feature - Upgrade to enable emergency alerts
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      <div className="text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
          isAlertSent ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {isAlertSent ? (
            <CheckCircle className="h-8 w-8 text-white" />
          ) : (
            <Phone className="h-8 w-8 text-white" />
          )}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">
          {isAlertSent ? 'Alert Sent!' : 'Emergency Alert'}
        </h3>
        <p className="text-white opacity-75 mb-6">
          {isAlertSent 
            ? 'Your emergency contact has been notified with your location'
            : 'Send immediate alert to your emergency contact with location data'
          }
        </p>
        
        {!isAlertSent && (
          <button 
            onClick={sendAlert}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 w-full flex items-center justify-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Send Emergency Alert</span>
          </button>
        )}
        
        <div className="mt-4 p-3 bg-red-500 bg-opacity-20 rounded-lg">
          <p className="text-red-400 text-sm">
            ⚠️ Use only in genuine emergency situations
          </p>
        </div>
      </div>
    </div>
  );
}
