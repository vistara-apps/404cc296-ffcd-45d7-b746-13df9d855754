'use client';

import { useState } from 'react';
import { Copy, Volume2 } from 'lucide-react';

interface ScriptDisplayProps {
  variant?: 'read' | 'copy';
  scriptType?: 'traffic-stop' | 'questioning' | 'search';
}

export function ScriptDisplay({ 
  variant = 'read',
  scriptType = 'traffic-stop'
}: ScriptDisplayProps) {
  const [copied, setCopied] = useState(false);

  const scripts = {
    'traffic-stop': {
      title: 'Traffic Stop Script',
      content: `"Officer, I am exercising my right to remain silent. I do not consent to any searches. Am I free to leave?"`,
      description: 'Use this script during traffic stops to assert your rights clearly and politely.'
    },
    'questioning': {
      title: 'Police Questioning Script',
      content: `"I am exercising my right to remain silent and I want to speak to a lawyer. I do not consent to any searches."`,
      description: 'Use when being questioned by police officers.'
    },
    'search': {
      title: 'Search Refusal Script',
      content: `"I do not consent to this search. I am exercising my constitutional rights."`,
      description: 'Use when officers request to search you, your vehicle, or property.'
    }
  };

  const currentScript = scripts[scriptType];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentScript.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentScript.content);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">{currentScript.title}</h3>
        <div className="flex space-x-2">
          <button 
            onClick={handleSpeak}
            className="btn-secondary flex items-center space-x-2"
          >
            <Volume2 className="h-4 w-4" />
            <span className="hidden sm:inline">Listen</span>
          </button>
          <button 
            onClick={handleCopy}
            className="btn-primary flex items-center space-x-2"
          >
            <Copy className="h-4 w-4" />
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      <div className="bg-black bg-opacity-20 rounded-lg p-4 mb-4">
        <p className="text-white text-lg leading-relaxed font-medium">
          "{currentScript.content}"
        </p>
      </div>

      <p className="text-white opacity-75 text-sm">
        {currentScript.description}
      </p>

      {variant === 'copy' && (
        <div className="mt-4 p-3 bg-accent bg-opacity-20 rounded-lg">
          <p className="text-accent text-sm font-medium">
            💡 Tip: Practice saying this script out loud so you can use it confidently when needed.
          </p>
        </div>
      )}
    </div>
  );
}
