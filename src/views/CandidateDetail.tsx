import React from 'react';
import { ArrowLeft, CheckCircle2, Circle, Clock, FileText, AlertCircle, Shield, UploadCloud, Download, Check } from 'lucide-react';
import { ViewState } from '../App';

export default function CandidateDetail({ id, navigateTo }: { id: string, navigateTo: (v: ViewState) => void }) {
  // Mock data for Sarah Jenkins (SMF)
  const candidate = {
    name: 'Sarah Jenkins',
    role: 'Chief Risk Officer',
    type: 'SMF',
    status: 'In Progress',
    department: 'Risk Management',
    startDate: 'Oct 12, 2026',
    smfCode: 'SMF4',
  };

  const stages = [
    { id: 1, name: 'Identity & Background', status: 'completed', date: 'Sep 10, 2026' },
    { id: 2, name: '6-Year References', status: 'completed', date: 'Sep 15, 2026' },
    { id: 3, name: 'FCA Register Check', status: 'current', date: 'Pending' },
    { id: 4, name: 'Statement of Responsibilities', status: 'upcoming', date: '-' },
    { id: 5, name: 'Fit & Proper Assessment', status: 'upcoming', date: '-' },
    { id: 6, name: 'Final Approval', status: 'upcoming', date: '-' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12 animate-in fade-in duration-500">
      <button 
        onClick={() => navigateTo('candidates')}
        className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" /> Back to Candidates
      </button>

      {/* Header Profile Card */}
      <div className="bg-white rounded-3xl border border-zinc-200/60 shadow-sm p-8 relative overflow-hidden">
        {/* Subtle background pattern/gradient */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-zinc-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-zinc-100 border border-zinc-200/60 flex items-center justify-center text-zinc-900 font-semibold text-xl shrink-0">
              SJ
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">{candidate.name}</h1>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <span className="text-[14px] text-zinc-600">{candidate.role}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-300" />
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium border border-zinc-200 bg-zinc-50 text-zinc-700">
                  {candidate.type} ({candidate.smfCode})
                </span>
                <span className="w-1 h-1 rounded-full bg-zinc-300" />
                <span className="text-[13px] text-zinc-500">Starts: {candidate.startDate}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-xl text-[13px] font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
              <AlertCircle className="w-4 h-4" />
              Raise Exception
            </button>
            <button className="px-4 py-2 bg-zinc-900 text-white rounded-xl text-[13px] font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-sm">
              <Download className="w-4 h-4" />
              Audit Pack
            </button>
          </div>
        </div>

        {/* Hard Gate Status */}
        <div className="mt-8 p-4 bg-amber-50/50 border border-amber-200/60 rounded-2xl flex items-start gap-3 relative z-10">
          <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-[14px] font-medium text-amber-900">Hard Gate Active: Clearance Blocked</h3>
            <p className="text-[13px] text-amber-700/80 mt-1">
              Candidate cannot commence regulated activities. Pending FCA Register Check and subsequent stages.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Workflow Stages */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-zinc-200/60 shadow-sm p-8">
            <h2 className="text-[16px] font-semibold tracking-tight text-zinc-900 mb-8">Clearance Workflow</h2>
            
            <div className="relative">
              <div className="absolute top-2 bottom-2 left-[11px] w-px bg-zinc-100" />
              
              <ul className="space-y-8 relative">
                {stages.map((stage, idx) => (
                  <li key={stage.id} className="flex gap-5 group">
                    <div className="relative bg-white z-10 mt-0.5 shrink-0">
                      {stage.status === 'completed' ? (
                        <div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center shadow-sm">
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        </div>
                      ) : stage.status === 'current' ? (
                        <div className="w-6 h-6 rounded-full border-2 border-zinc-900 flex items-center justify-center bg-white shadow-sm">
                          <div className="w-2 h-2 rounded-full bg-zinc-900" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-zinc-200 bg-white" />
                      )}
                    </div>
                    <div className={`flex-1 ${stage.status === 'upcoming' ? 'opacity-50' : ''}`}>
                      <div className="flex items-center justify-between">
                        <h3 className={`text-[14px] font-medium ${stage.status === 'current' ? 'text-zinc-900' : 'text-zinc-700'}`}>
                          {stage.name}
                        </h3>
                        <span className="text-[12px] text-zinc-400">{stage.date}</span>
                      </div>
                      
                      {stage.status === 'current' && (
                        <div className="mt-4 p-5 bg-zinc-50/50 border border-zinc-200/60 rounded-2xl">
                          <p className="text-[13px] text-zinc-600 mb-4">
                            Upload evidence of FCA Register verification to proceed.
                          </p>
                          <div className="border border-dashed border-zinc-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-zinc-50 transition-colors cursor-pointer bg-white">
                            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-3">
                              <UploadCloud className="w-5 h-5 text-zinc-500" />
                            </div>
                            <p className="text-[13px] font-medium text-zinc-900">Click to upload or drag and drop</p>
                            <p className="text-[12px] text-zinc-500 mt-1">PDF, PNG, JPG up to 10MB</p>
                          </div>
                        </div>
                      )}

                      {stage.status === 'completed' && (
                        <div className="mt-2.5 flex items-center gap-2">
                          <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-zinc-50 rounded-lg text-[12px] font-medium text-zinc-600 border border-zinc-200/60 hover:bg-zinc-100 transition-colors cursor-pointer">
                            <FileText className="w-3.5 h-3.5 text-zinc-400" />
                            evidence_document.pdf
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-zinc-200/60 shadow-sm p-6">
            <h2 className="text-[11px] font-semibold text-zinc-400 mb-5 uppercase tracking-widest">Audit Trail</h2>
            <div className="space-y-5">
              {[
                { action: 'References verified', user: 'HR Team', time: 'Sep 15, 14:30' },
                { action: 'Background check cleared', user: 'System', time: 'Sep 10, 09:15' },
                { action: 'Profile created', user: 'Mr. Omer', time: 'Sep 01, 11:00' },
              ].map((log, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-zinc-100">
                  <div className="absolute w-2 h-2 rounded-full bg-zinc-200 -left-[5px] top-1.5 border-2 border-white" />
                  <p className="text-[13px] font-medium text-zinc-900">{log.action}</p>
                  <p className="text-zinc-400 text-[11px] mt-1">by {log.user} • {log.time}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-[12px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors bg-zinc-50 rounded-lg">
              View full history
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-zinc-200/60 shadow-sm p-6">
            <h2 className="text-[11px] font-semibold text-zinc-400 mb-5 uppercase tracking-widest">IT Provisioning</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-zinc-600 font-medium">Trading Systems</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-amber-100/50 text-amber-700 border border-amber-200/50">BLOCK</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-zinc-600 font-medium">Client Orders</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-amber-100/50 text-amber-700 border border-amber-200/50">BLOCK</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-zinc-600 font-medium">Advisory Tools</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-amber-100/50 text-amber-700 border border-amber-200/50">BLOCK</span>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-zinc-100">
              <p className="text-[12px] text-zinc-500 leading-relaxed">
                Access will automatically update to <span className="font-medium text-zinc-700">ALLOW</span> once clearance is issued.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
