import React, { useState } from 'react';
import { Shield, Star, MapPin, Check, X, Filter } from 'lucide-react';

const InsuranceMarketplace = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [filters, setFilters] = useState({
    coverage: 'all',
    premium: 'all',
    network: 'all'
  });

  const insurancePlans = [
    {
      id: 1,
      name: 'Essential Care',
      provider: 'HealthFirst Insurance',
      premium: 149,
      deductible: 2500,
      coverage: 'Basic',
      rating: 4.2,
      features: ['Emergency Care', 'Preventive Care', 'Generic Drugs', 'Basic Lab Tests'],
      networkSize: '15,000+ providers',
      nearbyHospitals: ['City General Hospital', 'Metro Medical Center', 'Community Health Center'],
      popular: false
    },
    {
      id: 2,
      name: 'Complete Protection',
      provider: 'WellCare Solutions',
      premium: 279,
      deductible: 1500,
      coverage: 'Comprehensive',
      rating: 4.7,
      features: ['All Essential Features', 'Specialist Care', 'Brand Name Drugs', 'Advanced Imaging', 'Mental Health', 'Dental Basic'],
      networkSize: '25,000+ providers',
      nearbyHospitals: ['City General Hospital', 'Metro Medical Center', 'Elite Medical Institute', 'Specialized Care Center'],
      popular: true
    },
    {
      id: 3,
      name: 'Premium Elite',
      provider: 'PremiumHealth Group',
      premium: 389,
      deductible: 500,
      coverage: 'Premium',
      rating: 4.9,
      features: ['All Complete Features', 'Concierge Service', 'International Coverage', 'Alternative Medicine', 'Full Dental & Vision'],
      networkSize: '35,000+ providers',
      nearbyHospitals: ['City General Hospital', 'Metro Medical Center', 'Elite Medical Institute', 'Specialized Care Center', 'Premier Health Resort'],
      popular: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Insurance Marketplace</h1>
        <p className="text-gray-600">Find the perfect health insurance plan tailored to your needs</p>
      </div>

      {/* Medical History Input Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Personalize Your Options</h2>
        <p className="text-blue-700 mb-6">
          Help us recommend the best insurance plans by providing some basic information about your health needs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">Age Range</label>
            <select className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>18-25</option>
              <option>26-35</option>
              <option>36-45</option>
              <option>46-55</option>
              <option>56-65</option>
              <option>65+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">Chronic Conditions</label>
            <select className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>None</option>
              <option>Diabetes</option>
              <option>Hypertension</option>
              <option>Heart Disease</option>
              <option>Multiple</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">Family Size</label>
            <select className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Individual</option>
              <option>Couple</option>
              <option>Family (3-4)</option>
              <option>Large Family (5+)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">Preferred Budget</label>
            <select className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Under $200</option>
              <option>$200-$300</option>
              <option>$300-$400</option>
              <option>$400+</option>
            </select>
          </div>
        </div>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Update Recommendations
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
        
        {showFilters && (
          <div className="mt-4 bg-white p-4 border border-gray-200 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Type</label>
                <select
                  value={filters.coverage}
                  onChange={(e) => setFilters({...filters, coverage: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">All Types</option>
                  <option value="basic">Basic</option>
                  <option value="comprehensive">Comprehensive</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Premium</label>
                <select
                  value={filters.premium}
                  onChange={(e) => setFilters({...filters, premium: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">All Ranges</option>
                  <option value="low">Under $200</option>
                  <option value="mid">$200-$350</option>
                  <option value="high">$350+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Network Size</label>
                <select
                  value={filters.network}
                  onChange={(e) => setFilters({...filters, network: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">All Networks</option>
                  <option value="large">25,000+ providers</option>
                  <option value="medium">15,000-25,000 providers</option>
                  <option value="small">Under 15,000 providers</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Insurance Plans */}
      <div className="space-y-6">
        {insurancePlans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white border-2 rounded-2xl p-8 transition-all duration-200 hover:shadow-lg ${
              plan.popular ? 'border-blue-500 relative' : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-6">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Plan Info */}
              <div className="lg:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600">{plan.provider}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-gray-700 font-medium">{plan.rating}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Monthly Premium</p>
                    <p className="text-2xl font-bold text-gray-900">${plan.premium}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Deductible</p>
                    <p className="text-2xl font-bold text-gray-900">${plan.deductible.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Coverage</p>
                    <p className="text-lg font-semibold text-gray-900">{plan.coverage}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <span className="font-semibold text-gray-900">{plan.networkSize}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Nearby Affiliated Hospitals:</p>
                    <div className="flex flex-wrap gap-2">
                      {plan.nearbyHospitals.map((hospital, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {hospital}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Panel */}
              <div className="border-l border-gray-200 pl-8">
                <div className="space-y-4">
                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Select Plan
                  </button>
                  <button className="w-full py-3 px-6 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium">
                    View Details
                  </button>
                  <button className="w-full py-3 px-6 rounded-lg border-2 border-blue-300 text-blue-600 hover:bg-blue-50 transition-colors font-medium">
                    Compare Plans
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    ⚡ Instant approval available
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div className="mt-12 bg-gray-50 rounded-2xl p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
          <p className="text-gray-600 mb-6">
            Our insurance experts are here to help you find the perfect plan for your needs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceMarketplace;