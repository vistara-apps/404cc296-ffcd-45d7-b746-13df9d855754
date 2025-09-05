'use client';

import { ReactNode } from 'react';
import { Shield, Menu, User } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-primary to-gradient-end">
      {/* Header */}
      <header className="glass-card mx-4 mt-4 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-accent" />
            <h1 className="text-xl font-bold text-white">GuardianGuide</h1>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="text-white hover:text-accent transition-colors duration-200">Dashboard</a>
              <a href="#" className="text-white hover:text-accent transition-colors duration-200">Rights Guide</a>
              <a href="#" className="text-white hover:text-accent transition-colors duration-200">Emergency</a>
              <a href="#" className="text-white hover:text-accent transition-colors duration-200">Contact</a>
              <a href="#" className="text-white hover:text-accent transition-colors duration-200">History</a>
            </nav>
            <button className="btn-secondary flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Premium</span>
            </button>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        {children}
      </main>
    </div>
  );
}
