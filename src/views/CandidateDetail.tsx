import React from 'react';
import { ArrowLeft, CheckCircle2, Circle, Clock, FileText, AlertCircle, Shield, UploadCloud, Download, Check, AlertTriangle, UserCheck } from 'lucide-react';
import { ViewState } from '../App';
import { useToast } from '../components/ToastContext';

export default function CandidateDetail({ id, navigateTo }: { id: string, navigateTo: (v: ViewState) => void }) {
  const { showToast } = useToast();

  // Mock data for Sarah Jenkins (SMF)
  const candidate = {
    name: 'Sarah Jenkins',
    role: 'Chief Risk Officer',
    type: 'SMF',
    status: 'Evidence Collection',
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
        className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" /> Back to Candidates
      </button>

      {/* Header Profile Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 relative overflow-hidden">
        {/* Subtle background pattern/gradient */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 font-semibold text-xl shrink-0">
              SJ
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{candidate.name}</h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/50">
                  1 AI FLAG OPEN
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <span className="text-[14px] text-slate-700">{candidate.role}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium border border-slate-200 bg-slate-50 text-slate-700">
                  {candidate.type} ({candidate.smfCode})
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[13px] text-slate-500">Starts: {candidate.startDate}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => showToast('Raise Exception modal opened')}
              className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-[13px] font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <AlertCircle className="w-4 h-4" />
              Raise Exception
            </button>
            <button 
              onClick={() => showToast('Audit Pack generation started')}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-[13px] font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4" />
              Audit Pack
            </button>
          </div>
        </div>

        {/* Evidence Completeness Indicator */}
        <div className="mt-8 pt-6 border-t border-slate-100 relative z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[13px] font-medium text-slate-900">Evidence Completeness</h3>
            <span className="text-[13px] font-medium text-slate-500">4 / 6 items complete</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div className="h-full rounded-full bg-blue-600" style={{ width: '66%' }} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <CheckCircle2 className="w-3.5 h-3.5" /> Identity Verified
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <CheckCircle2 className="w-3.5 h-3.5" /> References Verified
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200/60">
              <Clock className="w-3.5 h-3.5" /> FCA Register Required
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60">
              <Circle className="w-3.5 h-3.5" /> SoR Required
            </span>
          </div>
        </div>

        {/* Hard Gate Status */}
        <div className="mt-6 p-4 bg-amber-50/50 border border-amber-200/60 rounded-2xl flex items-start gap-3 relative z-10">
          <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-[14px] font-medium text-amber-900">Hard Gate Active: Clearance Blocked</h3>
            <p className="text-[13px] text-amber-700/80 mt-1">
              Candidate cannot commence regulated activities. Pending FCA Register Check and subsequent stages.
            </p>
          </div>
        </div>
      </div>

      {/* AI Flag Section */}
      <div className="bg-indigo-50/30 border border-indigo-100 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-semibold text-indigo-900">AI Flag: Date Mismatch Detected</h3>
              <span className="text-[12px] font-medium text-indigo-600 bg-indigo-100/50 px-2 py-0.5 rounded-md">92% Confidence</span>
            </div>
            <p className="text-[13px] text-indigo-800/80 mt-2 leading-relaxed">
              The employment dates on the provided 6-year reference from "Global Bank Inc." (Jan 2020 - Dec 2023) do not match the dates listed on the candidate's submitted CV (Mar 2020 - Nov 2023).
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button 
                onClick={() => showToast('AI Flag Accepted')}
                className="px-4 py-2 bg-indigo-600 text-white text-[12px] font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Accept & Flag for Review
              </button>
              <button 
                onClick={() => showToast('Rejecting AI Flag...')}
                className="px-4 py-2 bg-white border border-indigo-200 text-indigo-700 text-[12px] font-medium rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Reject (Requires Rationale)
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Workflow Stages */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-[16px] font-semibold tracking-tight text-slate-900 mb-8">Clearance Workflow</h2>
            
            <div className="relative">
              <div className="absolute top-2 bottom-2 left-[11px] w-px bg-slate-200" />
              
              <ul className="space-y-8 relative">
                {stages.map((stage, idx) => (
                  <li key={stage.id} className="flex gap-5 group">
                    <div className="relative bg-white z-10 mt-0.5 shrink-0">
                      {stage.status === 'completed' ? (
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shadow-sm">
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        </div>
                      ) : stage.status === 'current' ? (
                        <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center bg-white shadow-sm">
                          <div className="w-2 h-2 rounded-full bg-blue-600" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-slate-200 bg-white" />
                      )}
                    </div>
                    <div className={`flex-1 ${stage.status === 'upcoming' ? 'opacity-50' : ''}`}>
                      <div className="flex items-center justify-between">
                        <h3 className={`text-[14px] font-medium ${stage.status === 'current' ? 'text-slate-900' : 'text-slate-700'}`}>
                          {stage.name}
                        </h3>
                        <span className="text-[12px] text-slate-400">{stage.date}</span>
                      </div>
                      
                      {stage.status === 'current' && (
                        <div className="mt-4 p-5 bg-slate-50/50 border border-slate-200/60 rounded-2xl">
                          <p className="text-[13px] text-slate-700 mb-4">
                            Upload evidence of FCA Register verification to proceed.
                          </p>
                          <div 
                            onClick={() => showToast('File upload dialog opened')}
                            className="border border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer bg-white"
                          >
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                              <UploadCloud className="w-5 h-5 text-slate-500" />
                            </div>
                            <p className="text-[13px] font-medium text-slate-900">Click to upload or drag and drop</p>
                            <p className="text-[12px] text-slate-500 mt-1">PDF, PNG, JPG up to 10MB</p>
                          </div>
                        </div>
                      )}

                      {stage.status === 'completed' && (
                        <div className="mt-2.5 flex items-center gap-2">
                          <div 
                            onClick={() => showToast('Viewing evidence document')}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 rounded-lg text-[12px] font-medium text-slate-700 border border-slate-200/60 hover:bg-slate-100 transition-colors cursor-pointer"
                          >
                            <FileText className="w-3.5 h-3.5 text-slate-400" />
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

          {/* Fit & Proper Assessment Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[16px] font-semibold tracking-tight text-slate-900">Fit & Proper Assessment</h2>
              <button 
                onClick={() => showToast('Opening F&P Assessment form')}
                className="text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                Edit Assessment
              </button>
            </div>
            
            <div className="border border-slate-200/60 rounded-xl overflow-hidden">
              <table className="w-full text-left text-[13px]">
                <thead className="bg-slate-50/50 border-b border-slate-200/60 text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">Section</th>
                    <th className="px-4 py-3 font-medium">Outcome</th>
                    <th className="px-4 py-3 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { section: 'Integrity', outcome: 'PASS', notes: 'No adverse findings in background checks.' },
                    { section: 'Competence & Capability', outcome: 'CONDITIONAL', notes: 'Pending completion of advanced risk module (due in 30 days).' },
                    { section: 'Financial Soundness', outcome: 'PASS', notes: 'Credit checks clear.' },
                    { section: 'Conduct', outcome: 'PASS', notes: 'No prior conduct breaches reported.' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-white">
                      <td className="px-4 py-4 font-medium text-slate-900">{row.section}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold tracking-wider border ${
                          row.outcome === 'PASS' ? 'bg-emerald-50 text-emerald-700 border-emerald-200/60' :
                          row.outcome === 'CONDITIONAL' ? 'bg-amber-50 text-amber-700 border-amber-200/60' :
                          'bg-red-50 text-red-700 border-red-200/60'
                        }`}>
                          {row.outcome}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-slate-500">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-[11px] font-semibold text-slate-400 mb-5 uppercase tracking-widest">Audit Trail</h2>
            <div className="space-y-5">
              {[
                { action: 'References verified', user: 'HR Team', time: 'Sep 15, 14:30' },
                { action: 'Background check cleared', user: 'System', time: 'Sep 10, 09:15' },
                { action: 'Profile created', user: 'Mr. Omer', time: 'Sep 01, 11:00' },
              ].map((log, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-slate-100">
                  <div className="absolute w-2 h-2 rounded-full bg-slate-200 -left-[5px] top-1.5 border-2 border-white" />
                  <p className="text-[13px] font-medium text-slate-900">{log.action}</p>
                  <p className="text-slate-400 text-[11px] mt-1">by {log.user} • {log.time}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={() => showToast('Full audit history opened')}
              className="w-full mt-6 py-2 text-[12px] font-medium text-slate-500 hover:text-slate-900 transition-colors bg-slate-50 rounded-lg"
            >
              View full history
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-[11px] font-semibold text-slate-400 mb-5 uppercase tracking-widest">IT Provisioning</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-slate-700 font-medium">Trading Systems</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-amber-100/50 text-amber-700 border border-amber-200/50">BLOCK</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-slate-700 font-medium">Client Orders</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-amber-100/50 text-amber-700 border border-amber-200/50">BLOCK</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-slate-700 font-medium">Advisory Tools</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-amber-100/50 text-amber-700 border border-amber-200/50">BLOCK</span>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100">
              <p className="text-[12px] text-slate-500 leading-relaxed">
                Access will automatically update to <span className="font-medium text-slate-700">ALLOW</span> once clearance is issued.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
