import React from 'react';
import { LayoutDashboard, Users, Shield, AlertCircle, FileText, Settings, Bell, Search, Menu } from 'lucide-react';
import { ViewState } from '../App';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  navigateTo: (view: ViewState) => void;
}

export default function Layout({ children, currentView, navigateTo }: LayoutProps) {
  const navItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'candidates', label: 'Candidates', icon: Users },
    { id: 'roles', label: 'Role Management', icon: Shield },
    { id: 'exceptions', label: 'Exceptions', icon: AlertCircle },
    { id: 'audit', label: 'Audit Packs', icon: FileText },
  ];

  return (
    <div className="flex h-screen bg-[#FAFAFA] font-sans text-zinc-900 selection:bg-zinc-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-zinc-200/60 flex-col hidden md:flex z-10">
        <div className="h-16 flex items-center px-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-zinc-900 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-zinc-900">AuditClean</span>
          </div>
        </div>
        
        <div className="px-4 py-2">
          <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2 px-2">Menu</div>
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
                      ? 'bg-zinc-100 text-zinc-900'
                      : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-zinc-900' : 'text-zinc-400'}`} strokeWidth={isActive ? 2.5 : 2} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <button className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-[13px] font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-all duration-200">
            <Settings className="w-4 h-4 text-zinc-400" />
            Settings
          </button>
          
          <div className="mt-4 pt-4 border-t border-zinc-200/60 flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 font-medium text-xs">
              OM
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-zinc-900 truncate">Mr. Omer</p>
              <p className="text-[11px] text-zinc-500 truncate">Compliance Officer</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-16 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/60 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-20">
          <div className="flex items-center flex-1">
            <button className="md:hidden p-2 mr-2 text-zinc-400 hover:text-zinc-600">
              <Menu className="w-5 h-5" />
            </button>
            <div className="max-w-md w-full hidden sm:block relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-zinc-400 group-focus-within:text-zinc-600 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-9 pr-3 py-1.5 border border-zinc-200/80 rounded-lg text-[13px] bg-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-400 transition-all shadow-sm"
                placeholder="Search candidates, roles, or exceptions..."
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 text-zinc-400 hover:text-zinc-600 transition-colors rounded-lg hover:bg-zinc-100">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 block h-1.5 w-1.5 rounded-full bg-zinc-900 ring-2 ring-[#FAFAFA]" />
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
