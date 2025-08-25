import React, { useState } from 'react';
import { MapPin, Clock, Star, Phone, Calendar, Filter, Search, Navigation } from 'lucide-react';

const HospitalDoctor = () => {
  const [activeTab, setActiveTab] = useState('hospitals');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');

  const hospitals = [
    {
      id: 1,
      name: 'City General Hospital',
      address: '123 Healthcare Blvd, Downtown',
      distance: '0.8 miles',
      rating: 4.8,
      reviews: 1240,
      specialties: ['Emergency Care', 'Cardiology', 'Orthopedics', 'Pediatrics'],
      phone: '(555) 123-4567',
      waitTime: '15 min',
      networkStatus: 'In-Network',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg'
    },
    {
      id: 2,
      name: 'Metro Medical Center',
      address: '456 Medical Plaza, Midtown',
      distance: '1.2 miles',
      rating: 4.6,
      reviews: 892,
      specialties: ['Cancer Treatment', 'Neurology', 'Surgery', 'Radiology'],
      phone: '(555) 987-6543',
      waitTime: '25 min',
      networkStatus: 'In-Network',
      image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg'
    },
    {
      id: 3,
      name: 'Elite Medical Institute',
      address: '789 Excellence Ave, Uptown',
      distance: '2.1 miles',
      rating: 4.9,
      reviews: 2156,
      specialties: ['Specialized Surgery', 'Research', 'Advanced Diagnostics'],
      phone: '(555) 456-7890',
      waitTime: '10 min',
      networkStatus: 'In-Network',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg'
    }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      hospital: 'City General Hospital',
      rating: 4.9,
      reviews: 324,
      experience: '15 years',
      nextAvailable: 'Today 3:30 PM',
      waitTime: '5 min',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      hospital: 'Metro Medical Center',
      rating: 4.7,
      reviews: 218,
      experience: '12 years',
      nextAvailable: 'Tomorrow 10:00 AM',
      waitTime: '15 min',
      image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      hospital: 'City General Hospital',
      rating: 4.8,
      reviews: 456,
      experience: '10 years',
      nextAvailable: 'Today 5:00 PM',
      waitTime: '8 min',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hospitals & Doctors</h1>
        <p className="text-gray-600">Find nearby healthcare providers and book appointments</p>
      </div>

      {/* Location and Emergency */}
      <div className="mb-8 grid md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <MapPin className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-blue-900 font-semibold">Current Location</h3>
          </div>
          <p className="text-blue-700 mb-4">Downtown District, City Center</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Navigation className="h-4 w-4" />
            <span>Update Location</span>
          </button>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-red-100 p-2 rounded-lg">
              <Phone className="h-5 w-5 text-red-600" />
            </div>
            <h3 className="text-red-900 font-semibold">Emergency Services</h3>
          </div>
          <p className="text-red-700 mb-4">Need immediate medical attention?</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Call 112
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('hospitals')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'hospitals'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Hospitals
            </button>
            <button
              onClick={() => setActiveTab('doctors')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'doctors'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Doctors
            </button>
          </nav>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={activeTab === 'hospitals' ? 'Search hospitals...' : 'Search doctors...'}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>All Specialties</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Pediatrics</option>
                  <option>Orthopedics</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Distance</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Within 5 miles</option>
                  <option>Within 10 miles</option>
                  <option>Within 25 miles</option>
                  <option>Any distance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Insurance</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>In-Network Only</option>
                  <option>All Providers</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Any time</option>
                  <option>Today</option>
                  <option>This week</option>
                  <option>Next 30 days</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="space-y-6">
        {activeTab === 'hospitals' && hospitals.map((hospital) => (
          <div key={hospital.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-48 lg:h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="lg:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{hospital.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{hospital.address}</span>
                      <span className="text-blue-600 font-medium">• {hospital.distance}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    hospital.networkStatus === 'In-Network'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {hospital.networkStatus}
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{hospital.rating}</span>
                    <span className="text-gray-500">({hospital.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">~{hospital.waitTime} wait</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">{hospital.phone}</span>
                </div>
              </div>

              <div className="lg:col-span-1 flex flex-col space-y-3">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Book Appointment</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  View Details
                </button>
                <button className="border border-blue-300 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        ))}

        {activeTab === 'doctors' && doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 lg:h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                  <p className="text-gray-600">{doctor.hospital}</p>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-gray-500">({doctor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">~{doctor.waitTime} wait</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="font-medium text-gray-900">{doctor.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Next Available</p>
                    <p className="font-medium text-gray-900">{doctor.nextAvailable}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 flex flex-col space-y-3">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Book Now</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  View Profile
                </button>
                <button className="border border-blue-300 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Booking Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Care?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our emergency booking system can connect you with available doctors in your area within minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Emergency Booking
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              Call Health Hotline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDoctor;