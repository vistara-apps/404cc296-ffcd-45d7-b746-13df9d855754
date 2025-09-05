'use client';

import { useState, useRef } from 'react';
import { Video, Square, Mic, MicOff, AlertTriangle } from 'lucide-react';

interface IncidentRecorderProps {
  variant?: 'active' | 'idle';
}

export function IncidentRecorder({ variant = 'idle' }: IncidentRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [hasPermission, setHasPermission] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      setHasPermission(true);
      setIsRecording(true);
      setRecordingTime(0);
      
      // Start timer
      intervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

      // In a real app, you would start actual recording here
      console.log('Recording started', stream);
    } catch (error) {
      console.error('Error accessing media devices:', error);
      alert('Unable to access camera/microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // In a real app, you would stop recording and save the file here
    console.log('Recording stopped');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (variant === 'active' || isRecording) {
    return (
      <div className="glass-card p-6 border-2 border-red-500">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Video className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">Recording Active</h3>
          <div className="text-2xl font-mono text-red-400 mb-4">
            {formatTime(recordingTime)}
          </div>
          
          <div className="flex justify-center space-x-4">
            <button 
              onClick={stopRecording}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <Square className="h-4 w-4" />
              <span>Stop Recording</span>
            </button>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-500 bg-opacity-20 rounded-lg">
            <div className="flex items-center space-x-2 text-yellow-400">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm">Recording will be saved securely</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <Video className="h-8 w-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">Record Incident</h3>
        <p className="text-white opacity-75 mb-6">
          Start recording to document your interaction with law enforcement
        </p>
        
        <button 
          onClick={startRecording}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <Mic className="h-5 w-5" />
          <span>Start Recording</span>
        </button>
        
        <div className="mt-4 p-3 bg-blue-500 bg-opacity-20 rounded-lg">
          <p className="text-blue-400 text-sm">
            💡 Recording helps protect your rights and provides evidence if needed
          </p>
        </div>
      </div>
    </div>
  );
}
