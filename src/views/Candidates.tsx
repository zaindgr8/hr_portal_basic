import React from 'react';
import { Search, Filter, MoreHorizontal, CheckCircle2, XCircle, Clock, AlertTriangle } from 'lucide-react';
import { ViewState } from '../App';
import { useToast } from '../components/ToastContext';

const CANDIDATES = [
  { id: '1', name: 'Sarah Jenkins', role: 'Chief Risk Officer', type: 'SMF', status: 'Evidence Collection', progress: 65, date: 'Oct 12, 2026' },
  { id: '2', name: 'David Chen', role: 'Senior Trader', type: 'Certified', status: 'Blocked', progress: 40, date: 'Oct 15, 2026' },
  { id: '3', name: 'Emma Watson', role: 'Financial Advisor', type: 'Certified', status: 'Cleared', progress: 100, date: 'Sep 28, 2026' },
  { id: '4', name: 'James Miller', role: 'Support Analyst', type: 'Conduct-Only', status: 'Intake in Progress', progress: 20, date: 'Oct 20, 2026' },
  { id: '5', name: 'Robert Taylor', role: 'CEO', type: 'SMF', status: 'Re-Clearance Required', progress: 80, date: 'Sep 15, 2026' },
];

export default function Candidates({ navigateTo }: { navigateTo: (v: ViewState, id?: string) => void }) {
  const { showToast } = useToast();

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Candidates & Staff</h1>
          <p className="text-[14px] text-slate-500 mt-1">Manage clearance workflows for all regulated individuals.</p>
        </div>
        <button 
          onClick={() => showToast('Add Candidate modal opened')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[13px] font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          Add Candidate
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="relative max-w-md w-full group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-slate-700 transition-colors" />
            <input 
              type="text" 
              placeholder="Search by name or role..." 
              className="w-full pl-9 pr-4 py-2 text-[13px] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-slate-50"
            />
          </div>
          <button 
            onClick={() => showToast('Filter options opened')}
            className="flex items-center gap-2 px-3 py-2 text-[13px] font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-slate-50/50 border-b border-slate-200 text-slate-500">
              <tr>
                <th className="px-6 py-3 font-semibold">Name & Role</th>
                <th className="px-6 py-3 font-semibold">Classification</th>
                <th className="px-6 py-3 font-semibold">Start Date</th>
                <th className="px-6 py-3 font-semibold">Status</th>
                <th className="px-6 py-3 font-semibold">Progress</th>
                <th className="px-6 py-3 font-semibold text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {CANDIDATES.map((candidate) => (
                <tr 
                  key={candidate.id} 
                  className="hover:bg-slate-50/50 transition-colors cursor-pointer group"
                  onClick={() => navigateTo('candidate-detail', candidate.id)}
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900">{candidate.name}</div>
                    <div className="text-slate-500 mt-0.5 text-[12px]">{candidate.role}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border border-slate-200 bg-slate-50 text-slate-700">
                      {candidate.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{candidate.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      {candidate.status === 'Cleared' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      {candidate.status === 'Blocked' && <XCircle className="w-4 h-4 text-red-500" />}
                      {candidate.status === 'Re-Clearance Required' && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                      {(candidate.status === 'Intake in Progress' || candidate.status === 'Evidence Collection') && <Clock className="w-4 h-4 text-slate-400" />}
                      <span className={`font-medium text-[12px] ${
                        candidate.status === 'Cleared' ? 'text-emerald-700' :
                        candidate.status === 'Blocked' ? 'text-red-700' :
                        candidate.status === 'Re-Clearance Required' ? 'text-amber-700' :
                        'text-slate-700'
                      }`}>
                        {candidate.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-slate-100 rounded-full h-1.5 max-w-[80px] overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            candidate.progress === 100 ? 'bg-emerald-500' : 
                            candidate.status === 'Blocked' ? 'bg-red-500' : 
                            candidate.status === 'Re-Clearance Required' ? 'bg-amber-500' :
                            'bg-blue-600'
                          }`} 
                          style={{ width: `${candidate.progress}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium w-6">{candidate.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={(e) => { e.stopPropagation(); showToast('Candidate actions opened'); }}
                      className="text-slate-400 hover:text-slate-700 p-1.5 rounded-md hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100"
                    >
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
