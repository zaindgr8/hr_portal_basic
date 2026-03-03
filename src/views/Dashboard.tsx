import React from 'react';
import { Users, AlertCircle, Clock, CheckCircle2, ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { ViewState } from '../App';

export default function Dashboard({ navigateTo }: { navigateTo: (v: ViewState) => void }) {
  const stats = [
    { label: 'Pending Clearances', value: '12', trend: '+2 this week', status: 'neutral' },
    { label: 'Open Exceptions', value: '3', trend: '1 expiring soon', status: 'warning' },
    { label: 'Overdue Re-certs', value: '0', trend: 'All up to date', status: 'good' },
    { label: 'Cleared This Month', value: '28', trend: '+15% vs last month', status: 'neutral' },
  ];

  const recentActivity = [
    { id: 1, user: 'Sarah Jenkins', action: 'uploaded FCA Register evidence', time: '2h ago', type: 'neutral' },
    { id: 2, user: 'David Chen', action: 'blocked at Certification gate', time: '4h ago', type: 'warning' },
    { id: 3, user: 'Emma Watson', action: 'marked as Cleared', time: '1d ago', type: 'good' },
    { id: 4, user: 'James Miller', action: 'exception approved by Compliance', time: '1d ago', type: 'neutral' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Overview</h1>
        <p className="text-[14px] text-zinc-500">Monitor SMCR clearance status and exceptions across the firm.</p>
      </div>

      {/* Stats Grid - Minimalist */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
            <p className="text-[13px] font-medium text-zinc-500">{stat.label}</p>
            <div className="mt-3 flex items-baseline gap-2">
              <p className="text-4xl font-light tracking-tight text-zinc-900">{stat.value}</p>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <div className={`w-1.5 h-1.5 rounded-full ${
                stat.status === 'warning' ? 'bg-amber-500' :
                stat.status === 'good' ? 'bg-emerald-500' :
                'bg-zinc-300'
              }`} />
              <p className="text-[12px] text-zinc-500">{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Action Required */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-semibold text-zinc-900">Action Required</h2>
            <button 
              onClick={() => navigateTo('candidates')}
              className="text-[13px] font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors"
            >
              View all <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm overflow-hidden">
            <ul className="divide-y divide-zinc-100">
              {[
                { name: 'Sarah Jenkins', role: 'Chief Risk Officer', type: 'SMF', issue: 'Awaiting FCA Register confirmation', days: 2 },
                { name: 'David Chen', role: 'Senior Trader', type: 'Certified', issue: 'Missing 6yr references', days: 5 },
                { name: 'Michael Chang', role: 'Compliance Officer', type: 'Certified', issue: 'Exception expiring in 3 days', days: 3 },
              ].map((item, i) => (
                <li key={i} className="p-4 hover:bg-zinc-50 transition-colors cursor-pointer group" onClick={() => navigateTo('candidates')}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200/60 flex items-center justify-center text-zinc-600 font-medium text-sm">
                        {item.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-[14px] font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">{item.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[12px] text-zinc-500">{item.role}</span>
                          <span className="w-1 h-1 rounded-full bg-zinc-300" />
                          <span className="text-[12px] font-medium text-zinc-500">{item.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-4">
                      <div>
                        <p className="text-[13px] text-amber-600 font-medium flex items-center gap-1.5 justify-end">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {item.issue}
                        </p>
                        <p className="text-[12px] text-zinc-400 mt-0.5">Starts in {item.days} days</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-500 transition-colors" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Audit Log / Recent Activity */}
        <div className="space-y-4">
          <h2 className="text-[15px] font-semibold text-zinc-900">Recent Activity</h2>
          <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-5">
            <div className="space-y-5">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex gap-3 relative">
                  {i !== recentActivity.length - 1 && (
                    <div className="absolute top-5 left-2 -ml-px h-full w-px bg-zinc-100" aria-hidden="true" />
                  )}
                  <div className="relative mt-1 shrink-0">
                    <div className={`w-4 h-4 rounded-full border-2 border-white shadow-sm flex items-center justify-center ${
                      activity.type === 'warning' ? 'bg-amber-100' :
                      activity.type === 'good' ? 'bg-emerald-100' :
                      'bg-zinc-100'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        activity.type === 'warning' ? 'bg-amber-500' :
                        activity.type === 'good' ? 'bg-emerald-500' :
                        'bg-zinc-400'
                      }`} />
                    </div>
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[13px] text-zinc-600 leading-snug">
                      <span className="font-medium text-zinc-900">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-[13px] font-medium text-zinc-600 border border-zinc-200/80 rounded-xl hover:bg-zinc-50 hover:text-zinc-900 transition-colors flex items-center justify-center gap-2">
              <FileText className="w-3.5 h-3.5" />
              View Audit Log
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
