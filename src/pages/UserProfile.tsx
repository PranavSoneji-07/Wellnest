import React, { useState } from 'react';
import { User, Shield, Calendar, Bell, Settings, Edit3, Check, X } from 'lucide-react';

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [activeSection, setActiveSection] = useState('personal');

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2024-01-20',
      time: '10:30 AM',
      hospital: 'City General Hospital',
      type: 'Follow-up'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Dermatology',
      date: '2024-01-25',
      time: '2:15 PM',
      hospital: 'Metro Medical Center',
      type: 'Consultation'
    }
  ];

  const notifications = [
    {
      id: 1,
      title: 'Insurance Renewal Due',
      message: 'Your Complete Protection plan expires in 30 days',
      time: '2 hours ago',
      type: 'warning'
    },
    {
      id: 2,
      title: 'Appointment Confirmed',
      message: 'Your appointment with Dr. Johnson is confirmed',
      time: '1 day ago',
      type: 'success'
    },
    {
      id: 3,
      title: 'Lab Results Available',
      message: 'Your blood test results are now available in your Health Vault',
      time: '2 days ago',
      type: 'info'
    }
  ];

  const healthMetrics = [
    { label: 'Blood Pressure', value: '120/80', status: 'Normal', color: 'green' },
    { label: 'Cholesterol', value: '185 mg/dL', status: 'Normal', color: 'green' },
    { label: 'BMI', value: '23.5', status: 'Healthy', color: 'green' },
    { label: 'Blood Sugar', value: '95 mg/dL', status: 'Normal', color: 'green' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600">Manage your personal information and health preferences</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="space-y-2">
              <button
                onClick={() => setActiveSection('personal')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === 'personal' 
                    ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5" />
                  <span>Personal Info</span>
                </div>
              </button>
              <button
                onClick={() => setActiveSection('insurance')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === 'insurance' 
                    ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5" />
                  <span>Insurance</span>
                </div>
              </button>
              <button
                onClick={() => setActiveSection('appointments')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === 'appointments' 
                    ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5" />
                  <span>Appointments</span>
                </div>
              </button>
              <button
                onClick={() => setActiveSection('notifications')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === 'notifications' 
                    ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </div>
              </button>
              <button
                onClick={() => setActiveSection('settings')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === 'settings' 
                    ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {activeSection === 'personal' && (
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Personal Information</h2>
                  <button
                    onClick={() => setEditMode(!editMode)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      editMode
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    {editMode ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>Save</span>
                      </>
                    ) : (
                      <>
                        <Edit3 className="h-4 w-4" />
                        <span>Edit</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-12 w-12 text-blue-600" />
                    </div>
                    {editMode && (
                      <button className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Change Photo
                      </button>
                    )}
                  </div>
                  
                  <div className="flex-1 grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      {editMode ? (
                        <input
                          type="text"
                          defaultValue="John Anderson"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-gray-900">John Anderson</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      {editMode ? (
                        <input
                          type="email"
                          defaultValue="john.anderson@email.com"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-gray-900">john.anderson@email.com</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      {editMode ? (
                        <input
                          type="tel"
                          defaultValue="(555) 123-4567"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-gray-900">(555) 123-4567</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                      {editMode ? (
                        <input
                          type="date"
                          defaultValue="1985-06-15"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-gray-900">June 15, 1985</p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      {editMode ? (
                        <input
                          type="text"
                          defaultValue="123 Main Street, Anytown, ST 12345"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-gray-900">123 Main Street, Anytown, ST 12345</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Metrics */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Health Metrics</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {healthMetrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                      <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                      <p className={`text-sm font-medium text-${metric.color}-600`}>{metric.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'insurance' && (
            <div className="space-y-6">
              {/* Current Plan */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Current Insurance Plan</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">Complete Protection</h3>
                      <p className="text-blue-700">WellCare Solutions</p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <p className="text-blue-700 text-sm">Monthly Premium</p>
                      <p className="text-2xl font-bold text-blue-900">$279</p>
                    </div>
                    <div>
                      <p className="text-blue-700 text-sm">Deductible</p>
                      <p className="text-2xl font-bold text-blue-900">$1,500</p>
                    </div>
                    <div>
                      <p className="text-blue-700 text-sm">Next Payment</p>
                      <p className="text-lg font-semibold text-blue-900">Feb 1, 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                      Update Plan
                    </button>
                  </div>
                </div>
              </div>

              {/* Coverage Details */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Coverage Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Included Services</h4>
                    <ul className="space-y-2">
                      {[
                        'Emergency Care',
                        'Preventive Care',
                        'Specialist Care',
                        'Prescription Drugs',
                        'Mental Health Services',
                        'Basic Dental'
                      ].map((service, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Network Hospitals</h4>
                    <ul className="space-y-2">
                      {[
                        'City General Hospital',
                        'Metro Medical Center',
                        'Elite Medical Institute',
                        'Specialized Care Center'
                      ].map((hospital, index) => (
                        <li key={index} className="text-gray-700">• {hospital}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'appointments' && (
            <div className="space-y-6">
              {/* Upcoming Appointments */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Upcoming Appointments</h2>
                
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{appointment.doctor}</h3>
                          <p className="text-gray-600 mb-2">{appointment.specialty} • {appointment.type}</p>
                          <p className="text-gray-500 text-sm">{appointment.hospital}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">{appointment.date}</p>
                          <p className="text-gray-600">{appointment.time}</p>
                        </div>
                      </div>
                      <div className="flex space-x-4 mt-4">
                        <button className="text-blue-600 hover:text-blue-700 font-medium">Reschedule</button>
                        <button className="text-red-600 hover:text-red-700 font-medium">Cancel</button>
                        <button className="text-gray-600 hover:text-gray-700 font-medium">View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Schedule New Appointment
                </button>
              </div>

              {/* Past Appointments */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Appointments</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Dr. Sarah Johnson</h4>
                        <p className="text-gray-600">Annual Checkup</p>
                        <p className="text-gray-500 text-sm">City General Hospital</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-900">Jan 10, 2024</p>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Notifications</h2>
              
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className={`border-l-4 p-4 rounded-lg ${
                    notification.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                    notification.type === 'success' ? 'border-green-500 bg-green-50' :
                    'border-blue-500 bg-blue-50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                        <p className="text-gray-700 mt-1">{notification.message}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 text-sm">{notification.time}</span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="space-y-6">
              {/* Notification Preferences */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
                
                <div className="space-y-4">
                  {[
                    { title: 'Appointment Reminders', description: 'Get reminded about upcoming appointments' },
                    { title: 'Insurance Updates', description: 'Receive updates about your insurance plan' },
                    { title: 'Health Vault Changes', description: 'Notifications when records are added or updated' },
                    { title: 'Emergency Alerts', description: 'Important health and safety notifications' }
                  ].map((setting, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{setting.title}</h4>
                        <p className="text-gray-600 text-sm">{setting.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy Settings */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Privacy & Security</h3>
                
                <div className="space-y-4">
                  <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900">Change Password</h4>
                    <p className="text-gray-600 text-sm">Update your account password</p>
                  </button>
                  <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-gray-600 text-sm">Add an extra layer of security</p>
                  </button>
                  <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900">Data Export</h4>
                    <p className="text-gray-600 text-sm">Download all your data</p>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;