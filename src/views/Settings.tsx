import React, { useState } from 'react';
import { User, Mail, Shield, Bell, Lock, Save, Camera } from 'lucide-react';
import { useToast } from '../components/ToastContext';

export default function Settings() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security'>('profile');
  
  const [profileData, setProfileData] = useState({
    firstName: 'Omer',
    lastName: 'M',
    email: 'omer@auditclean.com',
    role: 'Compliance Officer',
    department: 'Risk & Compliance',
    timezone: 'Europe/London'
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Profile settings saved successfully');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#032D60] tracking-tight">Settings</h1>
        <p className="text-[14px] text-[#444444] mt-1">Manage your account settings and preferences.</p>
      </div>

      <div className="bg-white border border-[#DDDBDA]/80 rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-[#DDDBDA]/80 bg-[#F4F6F9]/30 p-4 space-y-1">
          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors ${
              activeTab === 'profile' 
                ? 'bg-[#EAEAEA] text-[#032D60]' 
                : 'text-[#444444] hover:bg-[#F4F6F9] hover:text-[#032D60]'
            }`}
          >
            <User className={`w-4 h-4 ${activeTab === 'profile' ? 'text-[#032D60]' : 'text-[#747474]'}`} />
            Profile Information
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors ${
              activeTab === 'notifications' 
                ? 'bg-[#EAEAEA] text-[#032D60]' 
                : 'text-[#444444] hover:bg-[#F4F6F9] hover:text-[#032D60]'
            }`}
          >
            <Bell className={`w-4 h-4 ${activeTab === 'notifications' ? 'text-[#032D60]' : 'text-[#747474]'}`} />
            Notifications
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors ${
              activeTab === 'security' 
                ? 'bg-[#EAEAEA] text-[#032D60]' 
                : 'text-[#444444] hover:bg-[#F4F6F9] hover:text-[#032D60]'
            }`}
          >
            <Lock className={`w-4 h-4 ${activeTab === 'security' ? 'text-[#032D60]' : 'text-[#747474]'}`} />
            Security
          </button>
        </div>

        {/* Settings Content */}
        <div className="flex-1 p-6 md:p-8">
          {activeTab === 'profile' && (
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-lg font-semibold text-[#032D60] mb-6">Profile Information</h2>
              
              <div className="mb-8 flex items-center gap-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-[#EAEAEA] border-2 border-[#DDDBDA] flex items-center justify-center text-[#181818] text-2xl font-medium">
                    {profileData.firstName[0]}{profileData.lastName[0]}
                  </div>
                  <button 
                    className="absolute bottom-0 right-0 p-1.5 bg-white border border-[#DDDBDA] rounded-full text-[#444444] hover:text-[#0176D3] hover:border-[#0176D3] transition-colors shadow-sm"
                    onClick={() => showToast('Upload photo dialog opened')}
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <h3 className="text-[14px] font-medium text-[#181818]">Profile Photo</h3>
                  <p className="text-[12px] text-[#747474] mt-1">Upload a new photo or remove the current one.</p>
                  <div className="flex gap-3 mt-3">
                    <button 
                      className="px-3 py-1.5 bg-white border border-[#DDDBDA] text-[#444444] rounded-md text-[12px] font-medium hover:bg-[#F4F6F9] transition-colors"
                      onClick={() => showToast('Upload photo dialog opened')}
                    >
                      Change
                    </button>
                    <button 
                      className="px-3 py-1.5 text-red-600 rounded-md text-[12px] font-medium hover:bg-red-50 transition-colors"
                      onClick={() => showToast('Photo removed')}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[13px] font-medium text-[#444444]">First Name</label>
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                      className="w-full px-3 py-2 bg-white border border-[#DDDBDA] rounded-lg text-[13px] text-[#181818] focus:outline-none focus:ring-2 focus:ring-[#0176D3]/20 focus:border-[#0176D3] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[13px] font-medium text-[#444444]">Last Name</label>
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                      className="w-full px-3 py-2 bg-white border border-[#DDDBDA] rounded-lg text-[13px] text-[#181818] focus:outline-none focus:ring-2 focus:ring-[#0176D3]/20 focus:border-[#0176D3] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-[#444444]">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#747474]" />
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="w-full pl-9 pr-3 py-2 bg-white border border-[#DDDBDA] rounded-lg text-[13px] text-[#181818] focus:outline-none focus:ring-2 focus:ring-[#0176D3]/20 focus:border-[#0176D3] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[13px] font-medium text-[#444444]">Role</label>
                    <div className="relative">
                      <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#747474]" />
                      <input
                        type="text"
                        value={profileData.role}
                        disabled
                        className="w-full pl-9 pr-3 py-2 bg-[#F4F6F9] border border-[#DDDBDA] rounded-lg text-[13px] text-[#747474] cursor-not-allowed"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[13px] font-medium text-[#444444]">Department</label>
                    <input
                      type="text"
                      value={profileData.department}
                      disabled
                      className="w-full px-3 py-2 bg-[#F4F6F9] border border-[#DDDBDA] rounded-lg text-[13px] text-[#747474] cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-[#444444]">Timezone</label>
                  <select
                    value={profileData.timezone}
                    onChange={(e) => setProfileData({...profileData, timezone: e.target.value})}
                    className="w-full px-3 py-2 bg-white border border-[#DDDBDA] rounded-lg text-[13px] text-[#181818] focus:outline-none focus:ring-2 focus:ring-[#0176D3]/20 focus:border-[#0176D3] transition-all appearance-none"
                  >
                    <option value="Europe/London">London (GMT/BST)</option>
                    <option value="America/New_York">New York (EST/EDT)</option>
                    <option value="Asia/Singapore">Singapore (SGT)</option>
                  </select>
                </div>

                <div className="pt-6 border-t border-[#DDDBDA]/60 flex justify-end gap-3">
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-[#DDDBDA] text-[#444444] rounded-lg text-[13px] font-medium hover:bg-[#F4F6F9] transition-colors"
                    onClick={() => showToast('Changes discarded')}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0176D3] text-white rounded-lg text-[13px] font-medium hover:bg-[#015EAA] transition-colors shadow-sm"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-lg font-semibold text-[#032D60] mb-6">Notification Preferences</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-[14px] font-medium text-[#181818]">Email Notifications</h3>
                  <div className="space-y-3">
                    {[
                      { id: 'n1', label: 'New Candidate Assignments', desc: 'When a new candidate is assigned to you for review.' },
                      { id: 'n2', label: 'Exception Approvals', desc: 'When an exception you raised is approved or rejected.' },
                      { id: 'n3', label: 'System Alerts', desc: 'Important system updates and maintenance notices.' },
                    ].map((item) => (
                      <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center pt-0.5">
                          <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-[#DDDBDA] text-[#0176D3] focus:ring-[#0176D3]" />
                        </div>
                        <div>
                          <p className="text-[13px] font-medium text-[#181818] group-hover:text-[#0176D3] transition-colors">{item.label}</p>
                          <p className="text-[12px] text-[#747474]">{item.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t border-[#DDDBDA]/60">
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-[#0176D3] text-white rounded-lg text-[13px] font-medium hover:bg-[#015EAA] transition-colors shadow-sm"
                    onClick={() => showToast('Notification preferences saved')}
                  >
                    <Save className="w-4 h-4" />
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-lg font-semibold text-[#032D60] mb-6">Security Settings</h2>
              <div className="space-y-6">
                <div className="p-4 border border-[#DDDBDA] rounded-lg bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[14px] font-medium text-[#181818]">Password</h3>
                      <p className="text-[12px] text-[#747474] mt-1">Last changed 3 months ago</p>
                    </div>
                    <button 
                      className="px-4 py-2 bg-white border border-[#DDDBDA] text-[#444444] rounded-lg text-[13px] font-medium hover:bg-[#F4F6F9] transition-colors"
                      onClick={() => showToast('Password change dialog opened')}
                    >
                      Change Password
                    </button>
                  </div>
                </div>

                <div className="p-4 border border-[#DDDBDA] rounded-lg bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[14px] font-medium text-[#181818]">Two-Factor Authentication (2FA)</h3>
                      <p className="text-[12px] text-[#747474] mt-1">Add an extra layer of security to your account.</p>
                    </div>
                    <button 
                      className="px-4 py-2 bg-[#0176D3] text-white rounded-lg text-[13px] font-medium hover:bg-[#015EAA] transition-colors shadow-sm"
                      onClick={() => showToast('2FA setup initiated')}
                    >
                      Enable 2FA
                    </button>
                  </div>
                </div>
                
                <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[14px] font-medium text-red-800">Active Sessions</h3>
                      <p className="text-[12px] text-red-600 mt-1">Sign out of all other active sessions across your devices.</p>
                    </div>
                    <button 
                      className="px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-[13px] font-medium hover:bg-red-50 transition-colors"
                      onClick={() => showToast('Signed out of all other sessions')}
                    >
                      Sign Out All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
