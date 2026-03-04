import React, { useState, useRef, useEffect } from 'react';
import { LayoutDashboard, Users, Shield, AlertCircle, FileText, Settings, Bell, Search, Menu, LogOut, User, LogOut as LeaveIcon } from 'lucide-react';
import { ViewState } from '../App';
import { useToast } from './ToastContext';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  navigateTo: (view: ViewState) => void;
}

export default function Layout({ children, currentView, navigateTo }: LayoutProps) {
  const { showToast } = useToast();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'candidates', label: 'Candidates', icon: Users },
    { id: 'roles', label: 'Role Management', icon: Shield },
    { id: 'exceptions', label: 'Exceptions', icon: AlertCircle },
    { id: 'audit', label: 'Audit Packs', icon: FileText },
    { id: 'cessations', label: 'Off-Boarding', icon: LeaveIcon },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#151E2D] flex-col hidden md:flex z-10 text-slate-300">
        <div className="h-16 flex items-center px-6 cursor-pointer bg-[#0F172A]" onClick={() => navigateTo('dashboard')}>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-white">ReguGuard</span>
          </div>
        </div>
        
        <div className="px-4 py-6">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">Main</div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id || (currentView === 'candidate-detail' && item.id === 'candidates');
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id as ViewState)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600/10 text-white border-l-4 border-blue-500 rounded-l-none'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-500' : 'text-slate-400'}`} strokeWidth={isActive ? 2.5 : 2} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <button 
            onClick={() => navigateTo('settings')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
              currentView === 'settings'
                ? 'bg-blue-600/10 text-white border-l-4 border-blue-500 rounded-l-none'
                : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
            }`}
          >
            <Settings className={`w-4 h-4 ${currentView === 'settings' ? 'text-blue-500' : 'text-slate-400'}`} strokeWidth={currentView === 'settings' ? 2.5 : 2} />
            Settings
          </button>
          
          <div className="relative mt-4 pt-4 border-t border-slate-700/50" ref={profileMenuRef}>
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-slate-800/50 transition-colors text-left"
            >
              <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-white font-medium text-xs">
                AW
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-white truncate">Alexander Wright</p>
                <p className="text-[11px] text-slate-400 truncate">Compliance Officer</p>
              </div>
            </button>

            {showProfileMenu && (
              <div className="absolute bottom-full left-0 w-full mb-2 bg-white border border-slate-200 shadow-lg rounded-xl overflow-hidden py-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <button 
                  onClick={() => { navigateTo('settings'); setShowProfileMenu(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-[13px] text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  My Profile
                </button>
                <button 
                  onClick={() => { showToast('Logging out...'); setShowProfileMenu(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-[13px] text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4 text-red-400" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-20">
          <div className="flex items-center flex-1">
            <button 
              onClick={() => showToast('Mobile menu toggled')}
              className="md:hidden p-2 mr-2 text-slate-500 hover:text-slate-900"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="max-w-md w-full hidden sm:block relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400 group-focus-within:text-slate-700 transition-colors" />
              </div>
              <input
                type="text"
                onKeyDown={(e) => e.key === 'Enter' && showToast('Searching...')}
                className="block w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-[13px] bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                placeholder="Search candidates, references, or FCA numbers..."
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => showToast('Help opened')}
              className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <AlertCircle className="w-4 h-4" />
              Help
            </button>
            <button 
              onClick={() => showToast('Notifications opened')}
              className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-100"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
            <button 
              onClick={() => showToast('New Hire initiated')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#151E2D] text-white rounded-lg text-[13px] font-medium hover:bg-slate-800 transition-colors shadow-sm"
            >
              + New Hire
            </button>
          </div>
        </header>

        {/* Main scrollable area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
