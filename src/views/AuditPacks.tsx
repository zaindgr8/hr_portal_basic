import React from 'react';
import { Search, Filter, Download, FileText, FileArchive, Plus, Clock, CheckCircle2 } from 'lucide-react';

const AUDIT_PACKS = [
  { id: '1', candidate: 'Robert Taylor', role: 'CEO', type: 'SMF Full Pack', date: 'Oct 20, 2026', size: '12.4 MB', status: 'Ready' },
  { id: '2', candidate: 'Emma Watson', role: 'Financial Advisor', type: 'Certified Pack', date: 'Oct 18, 2026', size: '8.1 MB', status: 'Ready' },
  { id: '3', candidate: 'James Miller', role: 'Support Analyst', type: 'Conduct Summary', date: 'Oct 18, 2026', size: '2.3 MB', status: 'Ready' },
  { id: '4', candidate: 'Sarah Jenkins', role: 'Chief Risk Officer', type: 'SMF Full Pack', date: 'Just now', size: '-', status: 'Generating' },
];

export default function AuditPacks() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Audit Packs</h1>
          <p className="text-[14px] text-slate-500 mt-1">Generate and download immutable compliance records and evidence bundles.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[13px] font-medium hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Generate New Pack
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
            <FileArchive className="w-6 h-6 text-slate-700" />
          </div>
          <div>
            <p className="text-[13px] font-medium text-slate-500">Total Packs Generated</p>
            <p className="text-2xl font-light tracking-tight text-slate-900 mt-1">1,248</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
            <FileText className="w-6 h-6 text-slate-700" />
          </div>
          <div>
            <p className="text-[13px] font-medium text-slate-500">Storage Used</p>
            <p className="text-2xl font-light tracking-tight text-slate-900 mt-1">4.2 GB</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <p className="text-[13px] font-medium text-slate-500">FCA Ready</p>
            <p className="text-2xl font-light tracking-tight text-slate-900 mt-1">100%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="relative max-w-md w-full group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-slate-700 transition-colors" />
            <input 
              type="text" 
              placeholder="Search audit packs by candidate name..." 
              className="w-full pl-9 pr-4 py-2 text-[13px] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-slate-50"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-[13px] font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-slate-50/50 border-b border-slate-200 text-slate-500">
              <tr>
                <th className="px-6 py-3 font-semibold">Candidate & Role</th>
                <th className="px-6 py-3 font-semibold">Pack Type</th>
                <th className="px-6 py-3 font-semibold">Generated Date</th>
                <th className="px-6 py-3 font-semibold">Size</th>
                <th className="px-6 py-3 font-semibold">Status</th>
                <th className="px-6 py-3 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {AUDIT_PACKS.map((pack) => (
                <tr key={pack.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900">{pack.candidate}</div>
                    <div className="text-slate-500 mt-0.5 text-[12px]">{pack.role}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FileArchive className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">{pack.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{pack.date}</td>
                  <td className="px-6 py-4 text-slate-500">{pack.size}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      {pack.status === 'Ready' ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span className="font-medium text-[12px] text-emerald-700">Ready</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-4 h-4 text-amber-500 animate-pulse" />
                          <span className="font-medium text-[12px] text-amber-700">Generating...</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      disabled={pack.status !== 'Ready'}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                        pack.status === 'Ready' 
                          ? 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm' 
                          : 'bg-slate-50 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download ZIP
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
