import React, { useState } from 'react';
import { Pill, MapPin, Clock, Star, ShoppingCart, Calendar, Plus, RefreshCw, AlertTriangle, CheckCircle, Search, Filter } from 'lucide-react';

const Pharmacy = () => {
  const [activeTab, setActiveTab] = useState('prescriptions');
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);

  const currentPrescriptions = [
    {
      id: 1,
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      prescribedBy: 'Dr. Sarah Johnson',
      refillsLeft: 2,
      lastFilled: '2024-01-10',
      nextRefill: '2024-02-10',
      insurance: 'Covered',
      cost: '$15.99',
      status: 'active'
    },
    {
      id: 2,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      prescribedBy: 'Dr. Michael Chen',
      refillsLeft: 0,
      lastFilled: '2024-01-05',
      nextRefill: '2024-02-05',
      insurance: 'Covered',
      cost: '$12.50',
      status: 'renewal_needed'
    },
    {
      id: 3,
      name: 'Albuterol Inhaler',
      dosage: '90mcg',
      frequency: 'As needed',
      prescribedBy: 'Dr. Emily Rodriguez',
      refillsLeft: 1,
      lastFilled: '2024-01-15',
      nextRefill: '2024-03-15',
      insurance: 'Covered',
      cost: '$45.00',
      status: 'active'
    }
  ];

  const nearbyPharmacies = [
    {
      id: 1,
      name: 'HealthMart Pharmacy',
      address: '123 Main St, Downtown',
      distance: '0.5 miles',
      rating: 4.8,
      reviews: 542,
      phone: '(555) 123-4567',
      hours: 'Open until 9 PM',
      services: ['Drive-thru', '24/7 Online', 'Delivery', 'Vaccination'],
      waitTime: '5 min',
      inNetwork: true
    },
    {
      id: 2,
      name: 'Metro Drugs & More',
      address: '456 Health Ave, Midtown',
      distance: '1.2 miles',
      rating: 4.6,
      reviews: 389,
      phone: '(555) 987-6543',
      hours: 'Open until 10 PM',
      services: ['Drive-thru', 'Delivery', 'Compounding'],
      waitTime: '12 min',
      inNetwork: true
    },
    {
      id: 3,
      name: 'QuickCare Pharmacy',
      address: '789 Wellness Blvd, Uptown',
      distance: '2.1 miles',
      rating: 4.7,
      reviews: 623,
      phone: '(555) 456-7890',
      hours: 'Open until 8 PM',
      services: ['24/7 Online', 'Delivery', 'Health Screening'],
      waitTime: '8 min',
      inNetwork: false
    }
  ];

  const labTests = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      category: 'Blood Work',
      price: '$45.00',
      fasting: false,
      duration: '1 hour',
      description: 'Measures different components of your blood'
    },
    {
      id: 2,
      name: 'Lipid Panel',
      category: 'Cholesterol',
      price: '$55.00',
      fasting: true,
      duration: '30 minutes',
      description: 'Checks cholesterol and triglyceride levels'
    },
    {
      id: 3,
      name: 'HbA1c Test',
      category: 'Diabetes',
      price: '$40.00',
      fasting: false,
      duration: '15 minutes',
      description: 'Measures average blood sugar over 3 months'
    },
    {
      id: 4,
      name: 'Thyroid Panel',
      category: 'Hormones',
      price: '$65.00',
      fasting: false,
      duration: '30 minutes',
      description: 'Evaluates thyroid gland function'
    }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Pharmacy & Lab Services</h1>
        <p className="text-gray-600">Manage prescriptions, find pharmacies, and schedule lab tests</p>
      </div>

      {/* Quick Actions */}
      <div className="mb-8 grid md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <RefreshCw className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-blue-900 font-semibold">Quick Refill</h3>
          </div>
          <p className="text-blue-700 text-sm mb-4">Refill your active prescriptions with one click</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            Refill Now
          </button>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <MapPin className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-green-900 font-semibold">Find Pharmacy</h3>
          </div>
          <p className="text-green-700 text-sm mb-4">Locate nearby pharmacies and check availability</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
            Search Now
          </button>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Calendar className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="text-purple-900 font-semibold">Book Lab Test</h3>
          </div>
          <p className="text-purple-700 text-sm mb-4">Schedule lab tests and get results in Health Vault</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
            Schedule Test
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'prescriptions', label: 'My Prescriptions', icon: Pill },
              { id: 'pharmacies', label: 'Nearby Pharmacies', icon: MapPin },
              { id: 'lab-tests', label: 'Lab Tests', icon: Calendar }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'prescriptions' && (
        <div className="space-y-6">
          {/* Prescription Alerts */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1" />
              <div>
                <h3 className="text-yellow-900 font-semibold mb-2">Prescription Renewal Needed</h3>
                <p className="text-yellow-700 text-sm mb-4">
                  Your Metformin prescription has no refills left and expires in 5 days. Contact your doctor for renewal.
                </p>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium">
                  Request Renewal
                </button>
              </div>
            </div>
          </div>

          {/* Prescription List */}
          <div className="grid gap-6">
            {currentPrescriptions.map((prescription) => (
              <div key={prescription.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{prescription.name}</h3>
                        <p className="text-gray-600">{prescription.dosage} • {prescription.frequency}</p>
                        <p className="text-gray-500 text-sm">Prescribed by {prescription.prescribedBy}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        prescription.status === 'active' 
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {prescription.status === 'active' ? 'Active' : 'Renewal Needed'}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Refills Remaining</p>
                        <p className="font-semibold text-gray-900">{prescription.refillsLeft}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Last Filled</p>
                        <p className="font-semibold text-gray-900">{prescription.lastFilled}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Next Refill Due</p>
                        <p className="font-semibold text-gray-900">{prescription.nextRefill}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Cost</p>
                        <div className="flex items-center space-x-2">
                          <p className="font-semibold text-gray-900">{prescription.cost}</p>
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                            {prescription.insurance}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 flex flex-col space-y-3">
                    <button 
                      onClick={() => addToCart(prescription)}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
                      disabled={prescription.refillsLeft === 0}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>{prescription.refillsLeft > 0 ? 'Add to Cart' : 'Renewal Required'}</span>
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                      View Details
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="border border-blue-300 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                        Transfer Rx
                      </button>
                      <button className="border border-green-300 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors text-sm">
                        Set Reminder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Drug Interaction Checker */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Drug Interaction Checker</h3>
            <p className="text-gray-600 mb-4">Check for potential interactions between your medications</p>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Enter medication name..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Check Interactions
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pharmacies' && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search pharmacies by name or location..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>

            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Services</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                      <option>All Services</option>
                      <option>Drive-thru</option>
                      <option>Delivery</option>
                      <option>24/7 Online</option>
                      <option>Vaccination</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Distance</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                      <option>Within 5 miles</option>
                      <option>Within 10 miles</option>
                      <option>Within 25 miles</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Insurance</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                      <option>In-Network Only</option>
                      <option>All Pharmacies</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hours</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                      <option>Open Now</option>
                      <option>24 Hours</option>
                      <option>Extended Hours</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pharmacy Results */}
          <div className="space-y-4">
            {nearbyPharmacies.map((pharmacy) => (
              <div key={pharmacy.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{pharmacy.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600">{pharmacy.address}</span>
                          <span className="text-blue-600 font-medium">• {pharmacy.distance}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          pharmacy.inNetwork ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {pharmacy.inNetwork ? 'In-Network' : 'Out-of-Network'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="font-medium">{pharmacy.rating}</span>
                        <span className="text-gray-500 text-sm">({pharmacy.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{pharmacy.hours}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600">~{pharmacy.waitTime} wait</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {pharmacy.services.map((service, index) => (
                          <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600">📞 {pharmacy.phone}</p>
                  </div>

                  <div className="lg:col-span-1 flex flex-col space-y-3">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Transfer Prescriptions
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                      Call Pharmacy
                    </button>
                    <button className="border border-blue-300 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'lab-tests' && (
        <div className="space-y-6">
          {/* Lab Test Categories */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Lab Tests</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Blood Work', 'Cholesterol', 'Diabetes', 'Hormones', 'Vitamins', 'Heart Health', 'Kidney Function', 'Liver Function'].map((category) => (
                <button key={category} className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors text-left">
                  <h4 className="font-medium text-gray-900">{category}</h4>
                </button>
              ))}
            </div>
          </div>

          {/* Available Tests */}
          <div className="grid md:grid-cols-2 gap-6">
            {labTests.map((test) => (
              <div key={test.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{test.name}</h3>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                      {test.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{test.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-600">Price</p>
                    <p className="font-semibold text-gray-900">{test.price}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Duration</p>
                    <p className="font-semibold text-gray-900">{test.duration}</p>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        test.fasting ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {test.fasting ? 'Fasting Required' : 'No Fasting'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                    Schedule Test
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Lab Test Booking */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Need Custom Lab Work?</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Can't find the test you need? Our lab specialists can help you find and schedule any lab test prescribed by your doctor.
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Contact Lab Specialist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar (if items in cart) */}
      {cart.length > 0 && (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Prescription Cart ({cart.length})</h3>
            <button onClick={() => setCart([])} className="text-gray-500 hover:text-gray-700">
              ×
            </button>
          </div>
          <div className="space-y-2 mb-4">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                <span className="text-sm">{item.name}</span>
                <span className="text-sm font-medium">{item.cost}</span>
              </div>
            ))}
          </div>
          <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Pharmacy;