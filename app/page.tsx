'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { AppShell } from '@/components/AppShell';
import { RightsCard } from '@/components/RightsCard';
import { ScriptDisplay } from '@/components/ScriptDisplay';
import { IncidentRecorder } from '@/components/IncidentRecorder';
import { AlertContactButton } from '@/components/AlertContactButton';
import { 
  MapPin, 
  Shield, 
  FileText, 
  Video, 
  Phone, 
  TrendingUp,
  Activity,
  Users,
  Clock
} from 'lucide-react';

export default function HomePage() {
  const { setFrameReady } = useMiniKit();
  const [selectedState, setSelectedState] = useState('California');
  const [selectedScenario, setSelectedScenario] = useState('traffic-stop');

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  const scenarios = [
    { id: 'traffic-stop', label: 'Traffic Stop', icon: '🚗' },
    { id: 'questioning', label: 'Questioning', icon: '❓' },
    { id: 'search', label: 'Search Request', icon: '🔍' }
  ];

  const stats = [
    { label: 'Active Users', value: '15,500', change: '+12%', icon: Users },
    { label: 'Rights Cards Generated', value: '50,500', change: '+8%', icon: FileText },
    { label: 'Incidents Recorded', value: '1,250', change: '+15%', icon: Video },
    { label: 'Response Time', value: '2.3s', change: '-5%', icon: Clock }
  ];

  return (
    <AppShell>
      {/* Hero Section */}
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          GuardianGuide
        </h1>
        <p className="text-xl text-white opacity-90 mb-6 max-w-2xl mx-auto">
          Know Your Rights. Stay Safe. Instantly.
        </p>
        <p className="text-white opacity-75 mb-8 max-w-3xl mx-auto">
          A comprehensive guide for understanding and asserting your rights during interactions with law enforcement, 
          offering state-specific information and actionable scripts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary flex items-center justify-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Select Scenario</span>
          </button>
          <button className="btn-secondary flex items-center justify-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Change Location</span>
          </button>
        </div>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="metric-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="h-5 w-5 text-accent" />
              <span className={`text-xs font-medium ${
                stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-white opacity-75">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Scenario Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Select Your Situation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenario(scenario.id)}
              className={`feature-card text-left ${
                selectedScenario === scenario.id ? 'ring-2 ring-accent' : ''
              }`}
            >
              <div className="text-3xl mb-3">{scenario.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{scenario.label}</h3>
              <p className="text-white opacity-75 text-sm">
                Get specific rights and scripts for {scenario.label.toLowerCase()} situations
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Left Column */}
        <div className="space-y-6">
          <RightsCard 
            variant="view" 
            state={selectedState}
            interactionType={scenarios.find(s => s.id === selectedScenario)?.label || 'Traffic Stop'}
          />
          
          <ScriptDisplay 
            variant="copy"
            scriptType={selectedScenario as any}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <IncidentRecorder variant="idle" />
          <AlertContactButton variant="unconfigured" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="feature-card text-center">
            <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
            <span className="text-white font-medium">Know Your Rights</span>
          </button>
          <button className="feature-card text-center">
            <Video className="h-8 w-8 text-accent mx-auto mb-2" />
            <span className="text-white font-medium">Record Incident</span>
          </button>
          <button className="feature-card text-center">
            <FileText className="h-8 w-8 text-accent mx-auto mb-2" />
            <span className="text-white font-medium">Generate Card</span>
          </button>
          <button className="feature-card text-center">
            <Phone className="h-8 w-8 text-accent mx-auto mb-2" />
            <span className="text-white font-medium">Emergency Alert</span>
          </button>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Recent Activity</h3>
          <Activity className="h-5 w-5 text-accent" />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-white bg-opacity-5 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-white opacity-90 text-sm">Rights card generated for California Traffic Stop</span>
            <span className="text-white opacity-50 text-xs ml-auto">2 min ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white bg-opacity-5 rounded-lg">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-white opacity-90 text-sm">Emergency contact configured</span>
            <span className="text-white opacity-50 text-xs ml-auto">1 hour ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white bg-opacity-5 rounded-lg">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-white opacity-90 text-sm">Premium features activated</span>
            <span className="text-white opacity-50 text-xs ml-auto">1 day ago</span>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
