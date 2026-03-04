import React from 'react';
import { Shield, Plus, Settings2, Users } from 'lucide-react';

export default function Roles() {
  const roles = [
    { name: 'Senior Manager (SMF)', count: 12, desc: 'CEO, CFO, Chief Risk Officer. Requires FCA approval, 6yr references, SoR.', color: 'bg-[#0176D3] text-white border-[#0176D3]' },
    { name: 'Certified Person', count: 45, desc: 'Traders, Advisors. Requires firm certification, screening, F&P.', color: 'bg-white text-[#032D60] border-[#DDDBDA]' },
    { name: 'Conduct-Only', count: 128, desc: 'All other staff. Requires declarations and training acknowledgements.', color: 'bg-[#F4F6F9] text-[#181818] border-[#DDDBDA]' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#032D60]">Role Management</h1>
          <p className="text-[14px] text-[#444444] mt-1">Configure regulatory role types and their associated workflow requirements.</p>
        </div>
        <button className="bg-[#0176D3] text-white px-4 py-2 rounded-lg text-[13px] font-medium hover:bg-[#014486] transition-colors shadow-sm flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Role
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((role, i) => (
          <div key={i} className="bg-white rounded-3xl border border-[#DDDBDA]/60 shadow-sm p-6 hover:shadow-md transition-all duration-200 group flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div className={`inline-flex items-center px-3 py-1 rounded-lg text-[12px] font-medium border ${role.color}`}>
                {role.name}
              </div>
              <button className="text-[#747474] hover:text-[#032D60] transition-colors opacity-0 group-hover:opacity-100">
                <Settings2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[13px] text-[#444444] mb-8 flex-1 leading-relaxed">{role.desc}</p>
            <div className="flex items-center justify-between pt-5 border-t border-[#EAEAEA]">
              <div className="flex items-center gap-2 text-[#181818]">
                <Users className="w-4 h-4 text-[#747474]" />
                <span className="text-[13px] font-medium">{role.count} Active Staff</span>
              </div>
              <button className="text-[13px] font-medium text-[#032D60] hover:underline underline-offset-4">View</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-[#DDDBDA]/60 shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-[#EAEAEA]">
          <h2 className="text-[16px] font-semibold text-[#032D60]">Workflow Configuration</h2>
          <p className="text-[13px] text-[#444444] mt-1">Define the mandatory stages for each classification.</p>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-[#F4F6F9]/50 rounded-2xl border border-[#DDDBDA]/60 hover:bg-[#F4F6F9] transition-colors group">
              <div>
                <h3 className="text-[14px] font-medium text-[#032D60]">SMF Workflow Template</h3>
                <p className="text-[13px] text-[#444444] mt-0.5">6 mandatory stages, 2 hard gates</p>
              </div>
              <button className="text-[13px] font-medium text-[#444444] group-hover:text-[#032D60] transition-colors px-3 py-1.5 rounded-lg hover:bg-[#DDDBDA]/50">Edit Template</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#F4F6F9]/50 rounded-2xl border border-[#DDDBDA]/60 hover:bg-[#F4F6F9] transition-colors group">
              <div>
                <h3 className="text-[14px] font-medium text-[#032D60]">Certified Workflow Template</h3>
                <p className="text-[13px] text-[#444444] mt-0.5">4 mandatory stages, 1 hard gate</p>
              </div>
              <button className="text-[13px] font-medium text-[#444444] group-hover:text-[#032D60] transition-colors px-3 py-1.5 rounded-lg hover:bg-[#DDDBDA]/50">Edit Template</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
