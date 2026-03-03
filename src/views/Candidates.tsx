import React from 'react';
import { Search, Filter, MoreHorizontal, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { ViewState } from '../App';

const CANDIDATES = [
  { id: '1', name: 'Sarah Jenkins', role: 'Chief Risk Officer', type: 'SMF', status: 'In Progress', progress: 65, date: 'Oct 12, 2026' },
  { id: '2', name: 'David Chen', role: 'Senior Trader', type: 'Certified', status: 'Blocked', progress: 40, date: 'Oct 15, 2026' },
  { id: '3', name: 'Emma Watson', role: 'Financial Advisor', type: 'Certified', status: 'Cleared', progress: 100, date: 'Sep 28, 2026' },
  { id: '4', name: 'James Miller', role: 'Support Analyst', type: 'Conduct-Only', status: 'In Progress', progress: 80, date: 'Oct 20, 2026' },
  { id: '5', name: 'Robert Taylor', role: 'CEO', type: 'SMF', status: 'Cleared', progress: 100, date: 'Sep 15, 2026' },
];

export default function Candidates({ navigateTo }: { navigateTo: (v: ViewState, id?: string) => void }) {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Candidates & Staff</h1>
          <p className="text-[14px] text-zinc-500 mt-1">Manage clearance workflows for all regulated individuals.</p>
        </div>
        <button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-[13px] font-medium hover:bg-zinc-800 transition-colors shadow-sm">
          Add Candidate
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="relative max-w-md w-full group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-zinc-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search by name or role..." 
              className="w-full pl-9 pr-4 py-1.5 text-[13px] border border-zinc-200/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-400 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium text-zinc-600 bg-white border border-zinc-200/80 rounded-lg hover:bg-zinc-50 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-zinc-50/50 border-b border-zinc-100 text-zinc-500">
              <tr>
                <th className="px-6 py-3 font-medium">Name & Role</th>
                <th className="px-6 py-3 font-medium">Classification</th>
                <th className="px-6 py-3 font-medium">Start Date</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Progress</th>
                <th className="px-6 py-3 font-medium text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {CANDIDATES.map((candidate) => (
                <tr 
                  key={candidate.id} 
                  className="hover:bg-zinc-50/80 transition-colors cursor-pointer group"
                  onClick={() => navigateTo('candidate-detail', candidate.id)}
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-zinc-900">{candidate.name}</div>
                    <div className="text-zinc-500 mt-0.5 text-[12px]">{candidate.role}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium border border-zinc-200 bg-zinc-50 text-zinc-700">
                      {candidate.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-500">{candidate.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      {candidate.status === 'Cleared' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      {candidate.status === 'Blocked' && <XCircle className="w-4 h-4 text-amber-500" />}
                      {candidate.status === 'In Progress' && <Clock className="w-4 h-4 text-zinc-400" />}
                      <span className={`font-medium text-[12px] ${
                        candidate.status === 'Cleared' ? 'text-emerald-700' :
                        candidate.status === 'Blocked' ? 'text-amber-700' :
                        'text-zinc-600'
                      }`}>
                        {candidate.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-zinc-100 rounded-full h-1.5 max-w-[80px] overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            candidate.progress === 100 ? 'bg-emerald-500' : 
                            candidate.status === 'Blocked' ? 'bg-amber-500' : 
                            'bg-zinc-900'
                          }`} 
                          style={{ width: `${candidate.progress}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-zinc-500 font-medium w-6">{candidate.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-zinc-300 hover:text-zinc-600 p-1.5 rounded-md hover:bg-zinc-100 transition-colors opacity-0 group-hover:opacity-100" onClick={(e) => e.stopPropagation()}>
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
