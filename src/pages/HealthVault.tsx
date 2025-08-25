import React, { useState } from 'react';
import { FileText, Plus, Download, Share2, Eye, Calendar, Pill, Activity, TestTube, Upload, AlertCircle, Lock } from 'lucide-react';

const HealthVault = () => {
  const [activeTab, setActiveTab] = useState('records');
  const [uploadModal, setUploadModal] = useState(false);

  const medicalRecords = [
    {
      id: 1,
      type: 'Lab Report',
      title: 'Complete Blood Count',
      date: '2024-01-15',
      doctor: 'Dr. Sarah Johnson',
      hospital: 'City General Hospital',
      status: 'Normal',
      icon: TestTube
    },
    {
      id: 2,
      type: 'Prescription',
      title: 'Hypertension Medication',
      date: '2024-01-10',
      doctor: 'Dr. Michael Chen',
      hospital: 'Metro Medical Center',
      status: 'Active',
      icon: Pill
    },
    {
      id: 3,
      type: 'Imaging',
      title: 'Chest X-Ray',
      date: '2024-01-05',
      doctor: 'Dr. Emily Rodriguez',
      hospital: 'Elite Medical Institute',
      status: 'Normal',
      icon: Activity
    }
  ];

  const recentActivity = [
    {
      action: 'Lab results uploaded',
      time: '2 hours ago',
      type: 'upload'
    },
    {
      action: 'Record shared with City General Hospital',
      time: '1 day ago',
      type: 'share'
    },
    {
      action: 'New prescription added',
      time: '3 days ago',
      type: 'add'
    }
  ];

  const emergencyContacts = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Primary Care Physician',
      phone: '(555) 123-4567',
      hospital: 'City General Hospital'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Cardiologist',
      phone: '(555) 987-6543',
      hospital: 'Metro Medical Center'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Vault</h1>
        <p className="text-gray-600">Securely store and manage all your medical records in one place</p>
      </div>

      {/* Security Notice */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
        <div className="flex items-start space-x-3">
          <div className="bg-green-100 p-2 rounded-full">
            <Lock className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-green-900 font-semibold mb-2">Your Data is Secure</h3>
            <p className="text-green-700 text-sm">
              All your medical records are encrypted and stored securely. You control who has access to your information.
              In emergencies, authorized medical professionals can access your records with your consent.
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('records')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'records' 
                    ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5" />
                  <span>Medical Records</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('prescriptions')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'prescriptions' 
                    ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Pill className="h-5 w-5" />
                  <span>Prescriptions</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('emergency')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'emergency' 
                    ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5" />
                  <span>Emergency Info</span>
                </div>
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={() => setUploadModal(true)}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Add Record</span>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Records</span>
                <span className="font-semibold">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Active Prescriptions</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Updated</span>
                <span className="font-semibold">Today</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {activeTab === 'records' && (
            <div className="space-y-6">
              {/* Search and Filter */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search medical records..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>All Types</option>
                      <option>Lab Reports</option>
                      <option>Imaging</option>
                      <option>Prescriptions</option>
                    </select>
                    <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Last 30 Days</option>
                      <option>Last 3 Months</option>
                      <option>Last Year</option>
                      <option>All Time</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Records List */}
              <div className="space-y-4">
                {medicalRecords.map((record) => (
                  <div key={record.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <record.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{record.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              record.status === 'Normal' || record.status === 'Active'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {record.status}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-1">{record.type} • {record.doctor}</p>
                          <p className="text-gray-500 text-sm">{record.hospital} • {record.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Download className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Share2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'emergency' && (
            <div className="space-y-6">
              {/* Emergency Profile */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-red-900 mb-4">Emergency Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-900 mb-2">Medical Conditions</h4>
                        <ul className="text-red-700 space-y-1">
                          <li>• Hypertension</li>
                          <li>• Mild Asthma</li>
                          <li>• Penicillin Allergy</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-900 mb-2">Current Medications</h4>
                        <ul className="text-red-700 space-y-1">
                          <li>• Lisinopril 10mg daily</li>
                          <li>• Albuterol inhaler as needed</li>
                          <li>• Multivitamin daily</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Emergency Contacts</h3>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                        <p className="text-gray-600">{contact.role}</p>
                        <p className="text-gray-500 text-sm">{contact.hospital}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{contact.phone}</p>
                        <button className="text-blue-600 hover:text-blue-700 text-sm">Call Now</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Add Emergency Contact</span>
                </button>
              </div>

              {/* Auto-Share Settings */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Auto-Share</h3>
                <p className="text-gray-600 mb-6">
                  Enable automatic sharing of your medical records with hospitals during emergencies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Critical Medical Information</h4>
                      <p className="text-gray-600 text-sm">Allergies, medications, and conditions</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Recent Medical Records</h4>
                      <p className="text-gray-600 text-sm">Last 6 months of test results and visits</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {uploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Add Medical Record</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Record Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Lab Report</option>
                  <option>Prescription</option>
                  <option>Imaging</option>
                  <option>Doctor's Note</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  placeholder="e.g., Blood Test Results"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload File</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Drop files here or click to browse</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setUploadModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-900">{activity.action}</p>
                <p className="text-gray-500 text-sm">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthVault;