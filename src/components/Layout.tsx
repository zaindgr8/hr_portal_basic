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
    <div className="flex h-screen bg-[#F4F6F9] font-sans text-[#032D60] selection:bg-[#DDDBDA]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#DDDBDA]/60 flex-col hidden md:flex z-10">
        <div className="h-16 flex items-center px-6 cursor-pointer" onClick={() => navigateTo('dashboard')}>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#0176D3] rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-[#032D60]">AuditClean</span>
          </div>
        </div>
        
        <div className="px-4 py-2">
          <div className="text-[11px] font-semibold text-[#747474] uppercase tracking-wider mb-2 px-2">Menu</div>
          <nav className="space-y-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id || (currentView === 'candidate-detail' && item.id === 'candidates');
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id as ViewState)}
                  className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#EAEAEA] text-[#032D60]'
                      : 'text-[#444444] hover:bg-[#F4F6F9] hover:text-[#032D60]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#032D60]' : 'text-[#747474]'}`} strokeWidth={isActive ? 2.5 : 2} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <button 
            onClick={() => showToast('Settings panel opening...')}
            className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-[13px] font-medium text-[#444444] hover:bg-[#F4F6F9] hover:text-[#032D60] transition-all duration-200"
          >
            <Settings className="w-4 h-4 text-[#747474]" />
            Settings
          </button>
          
          <div className="relative mt-4 pt-4 border-t border-[#DDDBDA]/60" ref={profileMenuRef}>
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-[#F4F6F9] transition-colors text-left"
            >
              <div className="w-8 h-8 rounded-full bg-[#EAEAEA] border border-[#DDDBDA] flex items-center justify-center text-[#181818] font-medium text-xs">
                OM
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-[#032D60] truncate">Mr. Omer</p>
                <p className="text-[11px] text-[#444444] truncate">Compliance Officer</p>
              </div>
            </button>

            {showProfileMenu && (
              <div className="absolute bottom-full left-0 w-full mb-2 bg-white border border-[#DDDBDA]/80 shadow-lg rounded-xl overflow-hidden py-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <button 
                  onClick={() => { showToast('Profile settings opened'); setShowProfileMenu(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-[13px] text-[#181818] hover:bg-[#F4F6F9] transition-colors"
                >
                  <User className="w-4 h-4 text-[#747474]" />
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
        <header className="h-16 bg-[#FFFFFF]/80 backdrop-blur-md border-b border-[#DDDBDA]/60 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-20">
          <div className="flex items-center flex-1">
            <button 
              onClick={() => showToast('Mobile menu toggled')}
              className="md:hidden p-2 mr-2 text-[#747474] hover:text-[#181818]"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="max-w-md w-full hidden sm:block relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-[#747474] group-focus-within:text-[#181818] transition-colors" />
              </div>
              <input
                type="text"
                onKeyDown={(e) => e.key === 'Enter' && showToast('Searching...')}
                className="block w-full pl-9 pr-3 py-1.5 border border-[#DDDBDA]/80 rounded-lg text-[13px] bg-white placeholder-[#747474] focus:outline-none focus:ring-2 focus:ring-[#0176D3]/5 focus:border-[#747474] transition-all shadow-sm"
                placeholder="Search candidates, roles, or exceptions... (Press Enter)"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => showToast('Notifications opened')}
              className="relative p-2 text-[#747474] hover:text-[#181818] transition-colors rounded-lg hover:bg-[#EAEAEA]"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 block h-1.5 w-1.5 rounded-full bg-[#0176D3] ring-2 ring-[#F4F6F9]" />
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
