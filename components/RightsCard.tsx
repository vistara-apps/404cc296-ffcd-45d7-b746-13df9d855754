'use client';

import { useState } from 'react';
import { Share2, Copy, Download } from 'lucide-react';

interface RightsCardProps {
  variant?: 'view' | 'shareable';
  state?: string;
  interactionType?: string;
}

export function RightsCard({ 
  variant = 'view', 
  state = 'California',
  interactionType = 'Traffic Stop'
}: RightsCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `GuardianGuide Rights Card - ${state} ${interactionType}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rightsData = {
    title: `${state} ${interactionType} Rights`,
    rights: [
      'You have the right to remain silent',
      'You have the right to refuse searches without a warrant',
      'You have the right to ask if you are free to leave',
      'You have the right to record the interaction',
      'You have the right to an attorney'
    ],
    scripts: {
      dos: [
        'Keep your hands visible',
        'Stay calm and polite',
        'Clearly state: "I am exercising my right to remain silent"',
        'Ask: "Am I free to leave?"'
      ],
      donts: [
        'Don\'t argue or resist',
        'Don\'t consent to searches',
        'Don\'t answer questions without an attorney',
        'Don\'t make sudden movements'
      ]
    }
  };

  if (variant === 'shareable') {
    return (
      <div className="glass-card p-6 max-w-md mx-auto">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-white mb-2">{rightsData.title}</h3>
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Share2 className="h-6 w-6 text-white" />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-accent mb-2">Your Rights:</h4>
            <ul className="text-sm space-y-1">
              {rightsData.rights.slice(0, 3).map((right, index) => (
                <li key={index} className="text-white opacity-90">• {right}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={handleCopy}
              className="btn-secondary flex-1 flex items-center justify-center space-x-2"
            >
              <Copy className="h-4 w-4" />
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
            <button className="btn-primary flex items-center justify-center px-4">
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">{rightsData.title}</h3>
        <button 
          onClick={handleCopy}
          className="btn-secondary flex items-center space-x-2"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-accent mb-3">Your Rights:</h4>
          <ul className="space-y-2">
            {rightsData.rights.map((right, index) => (
              <li key={index} className="text-white opacity-90 text-sm">
                • {right}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-green-400 mb-2">DO:</h4>
            <ul className="space-y-1">
              {rightsData.scripts.dos.map((item, index) => (
                <li key={index} className="text-white opacity-90 text-sm">
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-400 mb-2">DON'T:</h4>
            <ul className="space-y-1">
              {rightsData.scripts.donts.map((item, index) => (
                <li key={index} className="text-white opacity-90 text-sm">
                  ✗ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
