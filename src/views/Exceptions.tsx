import React from 'react';
import { Search, Filter, Plus, AlertCircle, CheckCircle2, Clock, XCircle, MoreHorizontal } from 'lucide-react';

const EXCEPTIONS = [
  { id: '1', candidate: 'Michael Chang', role: 'Compliance Officer', type: 'Missing 6yr Reference', status: 'Pending', expiry: 'Oct 25, 2026', raisedBy: 'HR Team' },
  { id: '2', candidate: 'Sarah Jenkins', role: 'Chief Risk Officer', type: 'FCA Register Delay', status: 'Approved', expiry: 'Nov 12, 2026', raisedBy: 'Mr. Omer' },
  { id: '3', candidate: 'David Chen', role: 'Senior Trader', type: 'Pending Certification', status: 'Expired', expiry: 'Sep 30, 2026', raisedBy: 'HR Team' },
  { id: '4', candidate: 'Elena Rostova', role: 'Advisory Lead', type: 'Qualification Pending', status: 'Approved', expiry: 'Dec 01, 2026', raisedBy: 'Mr. Omer' },
];

export default function Exceptions() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Exceptions</h1>
          <p className="text-[14px] text-zinc-500 mt-1">Manage temporary approvals and blocked clearance overrides.</p>
        </div>
        <button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-[13px] font-medium hover:bg-zinc-800 transition-colors shadow-sm flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Raise Exception
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="relative max-w-md w-full group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-zinc-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search exceptions by candidate or type..." 
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
                <th className="px-6 py-3 font-medium">Candidate & Role</th>
                <th className="px-6 py-3 font-medium">Exception Type</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Expiry Date</th>
                <th className="px-6 py-3 font-medium">Raised By</th>
                <th className="px-6 py-3 font-medium text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {EXCEPTIONS.map((exc) => (
                <tr key={exc.id} className="hover:bg-zinc-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-medium text-zinc-900">{exc.candidate}</div>
                    <div className="text-zinc-500 mt-0.5 text-[12px]">{exc.role}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-zinc-400" />
                      <span className="text-zinc-700">{exc.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      {exc.status === 'Approved' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      {exc.status === 'Expired' && <XCircle className="w-4 h-4 text-red-500" />}
                      {exc.status === 'Pending' && <Clock className="w-4 h-4 text-amber-500" />}
                      <span className={`font-medium text-[12px] ${
                        exc.status === 'Approved' ? 'text-emerald-700' :
                        exc.status === 'Expired' ? 'text-red-700' :
                        'text-amber-700'
                      }`}>
                        {exc.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[13px] ${exc.status === 'Expired' ? 'text-red-600 font-medium' : 'text-zinc-600'}`}>
                      {exc.expiry}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-500">{exc.raisedBy}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-zinc-300 hover:text-zinc-600 p-1.5 rounded-md hover:bg-zinc-100 transition-colors opacity-0 group-hover:opacity-100">
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
