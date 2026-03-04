import React from 'react';
import { Users, Clock, CheckCircle2, Award, ArrowUp, AlertCircle, Filter, Download, ChevronRight } from 'lucide-react';
import { ViewState } from '../App';
import { useToast } from '../components/ToastContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const barData = [
  { name: 'Mon', pending: 12, completed: 10 },
  { name: 'Tue', pending: 18, completed: 19 },
  { name: 'Wed', pending: 15, completed: 15 },
  { name: 'Thu', pending: 35, completed: 25 },
  { name: 'Fri', pending: 28, completed: 22 },
  { name: 'Sat', pending: 12, completed: 10 },
  { name: 'Sun', pending: 10, completed: 8 },
];

const pieData = [
  { name: 'Low Risk', value: 75, color: '#10B981' },
  { name: 'Medium Risk', value: 20, color: '#F59E0B' },
  { name: 'High Risk', value: 5, color: '#EF4444' },
];

export default function Dashboard({ navigateTo }: { navigateTo: (v: ViewState) => void }) {
  const { showToast } = useToast();

  const recentActions = [
    { id: 'JS', name: 'James Smith', ref: '#REF-8832', role: 'Senior Trader', stage: 'FCA Reference Check', status: 'In Progress', risk: 'Low', time: '2 mins ago' },
    { id: 'SJ', name: 'Sarah Jenkins', ref: '#REF-8831', role: 'Investment Advisor', stage: 'Credit Check', status: 'Completed', risk: 'Low', time: '2 hours ago', img: true },
    { id: 'MR', name: 'Michael Ross', ref: '#REF-8829', role: 'Portfolio Manager', stage: 'Criminal Record', status: 'Flagged', risk: 'High', time: 'Yesterday' },
    { id: 'EC', name: 'Emily Chen', ref: '#REF-8825', role: 'Analyst', stage: 'Education Check', status: 'Pending', risk: 'Medium', time: '2 days ago', img: true },
  ];

  const tasks = [
    { title: 'Review Credit Report', candidate: 'A. Wright', status: 'URGENT', time: 'Today', type: 'urgent' },
    { title: 'Approve Reference', candidate: 'S. Miller', status: 'PENDING', time: 'Tomorrow', type: 'pending' },
    { title: 'Final Sign-off', candidate: 'J. Doe', status: 'READY', time: 'Oct 24', type: 'ready' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-12">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Active Candidates</p>
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-3xl font-bold text-slate-900">1,248</p>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-[12px]">
            <span className="text-emerald-600 font-medium flex items-center"><ArrowUp className="w-3 h-3 mr-0.5" /> 12%</span>
            <span className="text-slate-500">from last month</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Pending FCA Checks</p>
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
              <Clock className="w-4 h-4 text-amber-500" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-3xl font-bold text-slate-900">42</p>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-[12px]">
            <span className="text-red-600 font-medium flex items-center"><AlertCircle className="w-3 h-3 mr-0.5" /> Action Req</span>
            <span className="text-slate-500">5 due today</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Compliance Rate</p>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-3xl font-bold text-slate-900">98.5%</p>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-[12px]">
            <span className="text-emerald-600 font-medium flex items-center"><ArrowUp className="w-3 h-3 mr-0.5" /> 0.5%</span>
            <span className="text-slate-500">vs industry avg</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">SMCR Certified</p>
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
              <Award className="w-4 h-4 text-purple-600" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-3xl font-bold text-slate-900">856</p>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-[12px]">
            <span className="text-slate-500">Next review cycle: Oct 2024</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[15px] font-semibold text-slate-900">Compliance Workflow Volume</h2>
            <select className="text-[13px] text-slate-500 bg-transparent border-none focus:ring-0 cursor-pointer outline-none">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <Tooltip cursor={{ fill: '#F8FAFC' }} contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="pending" stackId="a" fill="#CBD5E1" radius={[0, 0, 4, 4]} barSize={40} name="Pending Checks" />
                <Bar dataKey="completed" stackId="a" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={40} name="Completed Checks" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#CBD5E1]"></div>
              <span className="text-[12px] text-slate-500">Pending Checks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#3B82F6]"></div>
              <span className="text-[12px] text-slate-500">Completed Checks</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <h2 className="text-[15px] font-semibold text-slate-900 mb-2">Risk Distribution</h2>
          <div className="flex-1 relative flex items-center justify-center min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
              <span className="text-[14px] text-slate-500">Risk</span>
              <span className="text-2xl font-bold text-slate-900">75%</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            {pieData.map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }}></div>
                <span className="text-[11px] text-slate-500">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Actions Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-[15px] font-semibold text-slate-900">Recent Compliance Actions</h2>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-[13px] font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[13px] font-medium hover:bg-blue-700 transition-colors shadow-sm">
              Export Report
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="px-5 py-3 text-[12px] font-semibold text-slate-500">Candidate</th>
                <th className="px-5 py-3 text-[12px] font-semibold text-slate-500">Role</th>
                <th className="px-5 py-3 text-[12px] font-semibold text-slate-500">Stage</th>
                <th className="px-5 py-3 text-[12px] font-semibold text-slate-500">Status</th>
                <th className="px-5 py-3 text-[12px] font-semibold text-slate-500">Risk Level</th>
                <th className="px-5 py-3 text-[12px] font-semibold text-slate-500">Last Updated</th>
                <th className="px-5 py-3 text-[12px] font-semibold text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentActions.map((action, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      {action.img ? (
                        <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/150?u=${action.id}`} alt={action.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-medium">
                          {action.id}
                        </div>
                      )}
                      <div>
                        <p className="text-[13px] font-medium text-slate-900">{action.name}</p>
                        <p className="text-[11px] text-slate-500">ID: {action.ref}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-[13px] text-slate-600">{action.role}</td>
                  <td className="px-5 py-3 text-[13px] text-slate-600">{action.stage}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${
                      action.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                      action.status === 'Flagged' ? 'bg-red-100 text-red-700' :
                      action.status === 'In Progress' ? 'bg-amber-100 text-amber-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {action.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${
                          action.risk === 'Low' ? 'bg-emerald-500 w-1/3' :
                          action.risk === 'Medium' ? 'bg-amber-500 w-2/3' :
                          'bg-red-500 w-full'
                        }`}></div>
                      </div>
                      <span className="text-[12px] text-slate-500">{action.risk}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-[13px] text-slate-500">{action.time}</td>
                  <td className="px-5 py-3 text-right">
                    <button 
                      onClick={() => navigateTo('candidate-detail')}
                      className="text-[13px] font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {action.status === 'Flagged' ? 'Review' : 'View Details'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-[12px] text-slate-500">
          <span>Showing 1-4 of 128 records</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 text-slate-700">Next</button>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-[15px] font-semibold text-slate-900">Initiate New Background Check</h2>
          <p className="text-[13px] text-slate-500 mt-1 mb-6">Start a new regulated reference request process for a candidate.</p>
          
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); showToast('Background check initiated'); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-slate-700">Candidate Full Name</label>
                <input type="text" placeholder="e.g. John Doe" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-slate-700">Email Address</label>
                <input type="email" placeholder="john.doe@example.com" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-slate-700">Role Type</label>
                <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white">
                  <option>Certified Staff</option>
                  <option>Senior Management Function (SMF)</option>
                  <option>Standard Employee</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-slate-700">FCA Reference Number (IRN)</label>
                <input type="text" placeholder="XX123456" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
              </div>
            </div>
            
            <div className="space-y-2 pt-2">
              <label className="text-[12px] font-medium text-slate-700">Required Checks</label>
              <div className="flex flex-wrap gap-3">
                {['Identity', 'Credit', 'Criminal', 'Directorship'].map((check, i) => (
                  <label key={i} className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                    <input type="checkbox" defaultChecked={i < 3} className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-[13px] text-slate-700">{check}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg text-[13px] font-medium hover:bg-blue-700 transition-colors shadow-sm">
                Initiate Check
              </button>
            </div>
          </form>
        </div>

        <div className="bg-[#151E2D] p-6 rounded-xl shadow-sm text-white flex flex-col">
          <h2 className="text-[15px] font-semibold">My Tasks</h2>
          <p className="text-[13px] text-slate-400 mt-1 mb-6">You have 5 pending actions.</p>
          
          <div className="space-y-3 flex-1">
            {tasks.map((task, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 hover:bg-slate-800 transition-colors cursor-pointer group flex items-center justify-between" onClick={() => showToast(`Opening task: ${task.title}`)}>
                <div>
                  <h3 className="text-[13px] font-medium text-white group-hover:text-blue-400 transition-colors">{task.title}</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">Candidate: {task.candidate}</p>
                  <span className={`inline-block mt-2 text-[9px] font-bold tracking-wider uppercase ${
                    task.type === 'urgent' ? 'text-amber-400' :
                    task.type === 'pending' ? 'text-blue-400' :
                    'text-emerald-400'
                  }`}>{task.status}</span>
                </div>
                <div className="flex flex-col items-end justify-between h-full">
                  <span className="text-[11px] text-slate-400">{task.time}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
