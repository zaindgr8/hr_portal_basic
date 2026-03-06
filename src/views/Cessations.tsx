import React, { useState } from 'react';
import { Search, Filter, MoreVertical, ShieldAlert, CheckCircle2, Clock, XCircle, AlertTriangle, FileText, Download } from 'lucide-react';
import { useToast } from '../components/ToastContext';

interface CessationRecord {
  id: string;
  candidateName: string;
  role: string;
  regulatoryCategory: 'SMF' | 'CERTIFIED' | 'FRONT_OFFICE';
  cessationDate: string;
  status: 'EXIT_PENDING_REVIEW' | 'EXIT_UNDER_COMPLIANCE_REVIEW' | 'EXIT_CONFIRMED' | 'ARCHIVED';
  fcaNotificationRequired: boolean;
  fcaNotificationConfirmed: boolean;
  legacyRecordFlag: boolean;
}

const mockCessations: CessationRecord[] = [
  {
    id: 'CESS-001',
    candidateName: 'Robert Taylor',
    role: 'CEO',
    regulatoryCategory: 'SMF',
    cessationDate: 'Nov 15, 2026',
    status: 'EXIT_UNDER_COMPLIANCE_REVIEW',
    fcaNotificationRequired: true,
    fcaNotificationConfirmed: false,
    legacyRecordFlag: false,
  },
  {
    id: 'CESS-002',
    candidateName: 'Emma Watson',
    role: 'Financial Advisor',
    regulatoryCategory: 'CERTIFIED',
    cessationDate: 'Oct 30, 2026',
    status: 'EXIT_CONFIRMED',
    fcaNotificationRequired: false,
    fcaNotificationConfirmed: false,
    legacyRecordFlag: false,
  },
  {
    id: 'CESS-003',
    candidateName: 'James Miller',
    role: 'Support Analyst',
    regulatoryCategory: 'FRONT_OFFICE',
    cessationDate: 'Oct 20, 2026',
    status: 'ARCHIVED',
    fcaNotificationRequired: false,
    fcaNotificationConfirmed: false,
    legacyRecordFlag: true,
  },
  {
    id: 'CESS-004',
    candidateName: 'Sarah Jenkins',
    role: 'Chief Risk Officer',
    regulatoryCategory: 'SMF',
    cessationDate: 'Dec 01, 2026',
    status: 'EXIT_PENDING_REVIEW',
    fcaNotificationRequired: true,
    fcaNotificationConfirmed: false,
    legacyRecordFlag: false,
  }
];

export default function Cessations() {
  const { showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<CessationRecord | null>(null);

  const filteredCessations = mockCessations.filter(record => 
    record.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: CessationRecord['status']) => {
    switch (status) {
      case 'EXIT_PENDING_REVIEW':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-medium bg-amber-50 text-amber-700 border border-amber-200"><Clock className="w-3.5 h-3.5" /> Pending Review</span>;
      case 'EXIT_UNDER_COMPLIANCE_REVIEW':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-medium bg-blue-50 text-blue-700 border border-blue-200"><ShieldAlert className="w-3.5 h-3.5" /> Compliance Review</span>;
      case 'EXIT_CONFIRMED':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200"><CheckCircle2 className="w-3.5 h-3.5" /> Confirmed</span>;
      case 'ARCHIVED':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-medium bg-slate-50 text-slate-500 border border-slate-200"><FileText className="w-3.5 h-3.5" /> Archived</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Regulatory Off-Boarding</h1>
          <p className="text-[14px] text-slate-500 mt-1">Manage regulatory accountability and evidence preservation at exit.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => showToast('Initiating manual off-boarding...')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-[13px] font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            Initiate Exit
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, role, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          <button 
            onClick={() => showToast('Filter options opened')}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-[13px] font-medium text-slate-600 hover:bg-slate-50 transition-colors bg-white"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Record ID</th>
                <th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Candidate</th>
                <th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Cessation Date</th>
                <th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">FCA Notification</th>
                <th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60">
              {filteredCessations.map((record) => (
                <tr key={record.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-medium text-slate-900">{record.id}</span>
                      {record.legacyRecordFlag && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-500 border border-slate-200" title="Pre-AuditClean Record">
                          LEGACY
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[13px] font-medium text-slate-900">{record.candidateName}</div>
                    <div className="text-[12px] text-slate-500 mt-0.5">{record.role}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[13px] text-slate-500">{record.regulatoryCategory}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[13px] text-slate-500">{record.cessationDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(record.status)}
                  </td>
                  <td className="px-6 py-4">
                    {record.fcaNotificationRequired ? (
                      record.fcaNotificationConfirmed ? (
                        <span className="inline-flex items-center gap-1 text-[12px] text-emerald-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Submitted
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[12px] text-red-600 font-medium">
                          <AlertTriangle className="w-3.5 h-3.5" /> Required
                        </span>
                      )
                    ) : (
                      <span className="text-[12px] text-slate-500">Not Required</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => {
                        setSelectedRecord(record);
                        showToast(`Viewing details for ${record.candidateName}`);
                      }}
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredCessations.length === 0 && (
            <div className="p-8 text-center text-slate-500 text-[13px]">
              No cessation records found matching your search.
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal / Side Panel Simulation */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 flex items-center justify-center sm:justify-end p-4 sm:p-0">
          <div className="bg-white w-full max-w-md sm:h-screen sm:max-h-screen rounded-2xl sm:rounded-none shadow-2xl flex flex-col animate-in slide-in-from-right-8 duration-300">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Cessation Record</h2>
                <p className="text-[13px] text-slate-500 mt-1">{selectedRecord.id}</p>
              </div>
              <button 
                onClick={() => setSelectedRecord(null)}
                className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {selectedRecord.legacyRecordFlag && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[13px] font-semibold text-amber-800">Pre-AuditClean Record</h4>
                    <p className="text-[12px] text-amber-700 mt-1">This is a legacy record. No retrospective clearance is created. Governance is established from go-live onward.</p>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Candidate Details</h3>
                <div className="bg-slate-50 rounded-lg p-4 space-y-3 border border-slate-200">
                  <div className="flex justify-between">
                    <span className="text-[13px] text-slate-500">Name</span>
                    <span className="text-[13px] font-medium text-slate-900">{selectedRecord.candidateName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-slate-500">Role</span>
                    <span className="text-[13px] font-medium text-slate-900">{selectedRecord.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-slate-500">Category</span>
                    <span className="text-[13px] font-medium text-slate-900">{selectedRecord.regulatoryCategory}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-slate-500">Cessation Date</span>
                    <span className="text-[13px] font-medium text-slate-900">{selectedRecord.cessationDate}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Regulatory Requirements</h3>
                <div className="space-y-3">
                  {selectedRecord.regulatoryCategory === 'SMF' && (
                    <div className="p-4 border border-slate-200 rounded-lg bg-white">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-[13px] font-medium text-slate-900">SUP 10C Cessation Notification</h4>
                          <p className="text-[12px] text-slate-500 mt-1">FCA notification is required for SMF exits.</p>
                        </div>
                        {selectedRecord.fcaNotificationConfirmed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                        )}
                      </div>
                      {!selectedRecord.fcaNotificationConfirmed && selectedRecord.status !== 'ARCHIVED' && (
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                            <span className="text-[13px] text-slate-900">FCA cessation notification submitted</span>
                          </label>
                          <div className="mt-3 flex gap-2">
                            <input type="date" className="flex-1 px-3 py-1.5 border border-slate-300 rounded-md text-[13px]" />
                            <input type="text" placeholder="Ref ID (Optional)" className="flex-1 px-3 py-1.5 border border-slate-300 rounded-md text-[13px]" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {selectedRecord.regulatoryCategory === 'CERTIFIED' && (
                    <div className="p-4 border border-slate-200 rounded-lg bg-white space-y-2">
                      <div className="flex items-center gap-2 text-[13px] text-slate-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Certification status recorded at exit</span>
                      </div>
                      <div className="flex items-center gap-2 text-[13px] text-slate-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Certification record closed</span>
                      </div>
                      <div className="flex items-center gap-2 text-[13px] text-slate-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Certifier decision history frozen</span>
                      </div>
                      <div className="flex items-center gap-2 text-[13px] text-slate-900">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span>6-year reference retention clock started</span>
                      </div>
                    </div>
                  )}

                  {selectedRecord.regulatoryCategory === 'FRONT_OFFICE' && (
                    <div className="p-4 border border-slate-200 rounded-lg bg-white space-y-2">
                      <div className="flex items-center gap-2 text-[13px] text-slate-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Last Fit & Proper review date captured</span>
                      </div>
                      <div className="flex items-center gap-2 text-[13px] text-slate-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Qualification evidence preserved</span>
                      </div>
                      <div className="flex items-center gap-2 text-[13px] text-slate-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Reference history locked</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Exit Snapshot</h3>
                <div className="p-4 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-slate-900">Compliance Snapshot</p>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">hash: a8f9...2c4e</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => showToast('Downloading exit snapshot...')}
                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-white rounded-md transition-colors border border-transparent hover:border-slate-200"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50/50 flex gap-3">
              {selectedRecord.status === 'EXIT_PENDING_REVIEW' && (
                <button 
                  onClick={() => {
                    showToast('Sent to Compliance for review');
                    setSelectedRecord(null);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-[13px] font-medium hover:bg-blue-700 transition-colors"
                >
                  Send to Compliance
                </button>
              )}
              {selectedRecord.status === 'EXIT_UNDER_COMPLIANCE_REVIEW' && (
                <button 
                  onClick={() => {
                    if (selectedRecord.regulatoryCategory === 'SMF' && !selectedRecord.fcaNotificationConfirmed) {
                      showToast('Cannot confirm: FCA notification required');
                    } else {
                      showToast('Exit Confirmed');
                      setSelectedRecord(null);
                    }
                  }}
                  className={`flex-1 px-4 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                    selectedRecord.regulatoryCategory === 'SMF' && !selectedRecord.fcaNotificationConfirmed
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Confirm Exit
                </button>
              )}
              {selectedRecord.status === 'EXIT_CONFIRMED' && (
                <button 
                  onClick={() => {
                    showToast('Record Archived');
                    setSelectedRecord(null);
                  }}
                  className="flex-1 px-4 py-2 bg-white border border-slate-200 text-slate-900 rounded-lg text-[13px] font-medium hover:bg-slate-50 transition-colors"
                >
                  Archive Record
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
