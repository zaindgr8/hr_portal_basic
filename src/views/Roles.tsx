import React from 'react';
import { Shield, Plus, Settings2, Users } from 'lucide-react';

export default function Roles() {
  const roles = [
    { name: 'Senior Manager (SMF)', count: 12, desc: 'CEO, CFO, Chief Risk Officer. Requires FCA approval, 6yr references, SoR.', color: 'bg-blue-600 text-white border-blue-600' },
    { name: 'Certified Person', count: 45, desc: 'Traders, Advisors. Requires firm certification, screening, F&P.', color: 'bg-white text-slate-900 border-slate-200' },
    { name: 'Conduct-Only', count: 128, desc: 'All other staff. Requires declarations and training acknowledgements.', color: 'bg-slate-50 text-slate-700 border-slate-200' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Role Management</h1>
          <p className="text-[14px] text-slate-500 mt-1">Configure regulatory role types and their associated workflow requirements.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[13px] font-medium hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Role
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-all duration-200 group flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div className={`inline-flex items-center px-3 py-1 rounded-lg text-[12px] font-medium border ${role.color}`}>
                {role.name}
              </div>
              <button className="text-slate-400 hover:text-slate-900 transition-colors opacity-0 group-hover:opacity-100">
                <Settings2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[13px] text-slate-500 mb-8 flex-1 leading-relaxed">{role.desc}</p>
            <div className="flex items-center justify-between pt-5 border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-700">
                <Users className="w-4 h-4 text-slate-400" />
                <span className="text-[13px] font-medium">{role.count} Active Staff</span>
              </div>
              <button className="text-[13px] font-medium text-blue-600 hover:underline underline-offset-4">View</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-[16px] font-semibold text-slate-900">Workflow Configuration</h2>
          <p className="text-[13px] text-slate-500 mt-1">Define the mandatory stages for each classification.</p>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-200/60 hover:bg-slate-50 transition-colors group">
              <div>
                <h3 className="text-[14px] font-medium text-slate-900">SMF Workflow Template</h3>
                <p className="text-[13px] text-slate-500 mt-0.5">6 mandatory stages, 2 hard gates</p>
              </div>
              <button className="text-[13px] font-medium text-slate-500 group-hover:text-slate-900 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-200/50">Edit Template</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-200/60 hover:bg-slate-50 transition-colors group">
              <div>
                <h3 className="text-[14px] font-medium text-slate-900">Certified Workflow Template</h3>
                <p className="text-[13px] text-slate-500 mt-0.5">4 mandatory stages, 1 hard gate</p>
              </div>
              <button className="text-[13px] font-medium text-slate-500 group-hover:text-slate-900 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-200/50">Edit Template</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
