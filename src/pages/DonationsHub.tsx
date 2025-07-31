import React, { useState } from 'react';
import { Search, Filter, Heart, Shield, Users, MapPin, Star, ChevronDown } from 'lucide-react';

export default function DonationsHub() {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedUrgency, setSelectedUrgency] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const ngos = [
    {
      id: 1,
      name: 'UNHCR',
      description: 'Protecting refugees and displaced people worldwide',
      logo: 'https://images.pexels.com/photos/6646892/pexels-photo-6646892.jpeg?auto=compress&cs=tinysrgb&w=100',
      country: 'Global',
      category: 'Refugees',
      urgency: 'Critical',
      rating: 4.9,
      verified: true,
      impact: '100M+ people helped',
      financialBreakdown: {
        programs: 85,
        admin: 8,
        fundraising: 7
      },
      currentCampaigns: ['Ukraine Emergency', 'Sudan Crisis', 'Afghanistan Aid']
    },
    {
      id: 2,
      name: 'Save the Children',
      description: 'Protecting children in crisis and everyday life',
      logo: 'https://images.pexels.com/photos/8428100/pexels-photo-8428100.jpeg?auto=compress&cs=tinysrgb&w=100',
      country: 'Global',
      category: 'Children',
      urgency: 'High',
      rating: 4.8,
      verified: true,
      impact: '200M+ children reached',
      financialBreakdown: {
        programs: 88,
        admin: 7,
        fundraising: 5
      },
      currentCampaigns: ['Child Education', 'Emergency Response', 'Nutrition Programs']
    },
    {
      id: 3,
      name: 'Doctors Without Borders',
      description: 'Medical humanitarian aid in crisis zones',
      logo: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=100',
      country: 'Global',
      category: 'Medical',
      urgency: 'Critical',
      rating: 4.9,
      verified: true,
      impact: '13M+ patients treated',
      financialBreakdown: {
        programs: 82,
        admin: 9,
        fundraising: 9
      },
      currentCampaigns: ['Emergency Surgery', 'Epidemic Response', 'Mental Health']
    },
    {
      id: 4,
      name: 'Islamic Relief USA',
      description: 'Disaster relief and international development',
      logo: 'https://images.pexels.com/photos/6646874/pexels-photo-6646874.jpeg?auto=compress&cs=tinysrgb&w=100',
      country: 'USA',
      category: 'Relief',
      urgency: 'High',
      rating: 4.7,
      verified: true,
      impact: '120+ countries served',
      financialBreakdown: {
        programs: 84,
        admin: 10,
        fundraising: 6
      },
      currentCampaigns: ['Ramadan Appeal', 'Water Projects', 'Orphan Support']
    },
    {
      id: 5,
      name: 'CARE International',
      description: 'Fighting global poverty and empowering women',
      logo: 'https://images.pexels.com/photos/6646943/pexels-photo-6646943.jpeg?auto=compress&cs=tinysrgb&w=100',
      country: 'Global',
      category: 'Development',
      urgency: 'Medium',
      rating: 4.6,
      verified: true,
      impact: '100+ countries active',
      financialBreakdown: {
        programs: 86,
        admin: 8,
        fundraising: 6
      },
      currentCampaigns: ['Women Empowerment', 'Climate Action', 'Food Security']
    }
  ];

  const countries = ['all', 'Global', 'USA', 'Ukraine', 'Sudan', 'Afghanistan'];
  const categories = ['all', 'Refugees', 'Children', 'Medical', 'Relief', 'Development'];
  const urgencyLevels = ['all', 'Critical', 'High', 'Medium'];

  const filteredNGOs = ngos.filter(ngo => {
    const matchesCountry = selectedCountry === 'all' || ngo.country === selectedCountry;
    const matchesCategory = selectedCategory === 'all' || ngo.category === selectedCategory;
    const matchesUrgency = selectedUrgency === 'all' || ngo.urgency === selectedUrgency;
    const matchesSearch = ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ngo.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCountry && matchesCategory && matchesUrgency && matchesSearch;
  });

  const DonationCard = ({ ngo }: { ngo: typeof ngos[0] }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-start space-x-4 mb-4">
        <img 
          src={ngo.logo} 
          alt={ngo.name}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-900">{ngo.name}</h3>
            <div className="flex items-center space-x-2">
              {ngo.verified && (
                <Shield className="w-5 h-5 text-green-500" />
              )}
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                ngo.urgency === 'Critical' ? 'bg-red-100 text-red-700' :
                ngo.urgency === 'High' ? 'bg-orange-100 text-orange-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {ngo.urgency}
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-2">{ngo.description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              {ngo.rating}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {ngo.country}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {ngo.impact}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Where your money goes:</span>
          <button className="text-blue-600 hover:text-blue-700 text-sm">
            View detailed report
          </button>
        </div>
        <div className="flex rounded-lg overflow-hidden">
          <div 
            className="bg-blue-500 h-2"
            style={{ width: `${ngo.financialBreakdown.programs}%` }}
            title={`Programs: ${ngo.financialBreakdown.programs}%`}
          />
          <div 
            className="bg-green-500 h-2"
            style={{ width: `${ngo.financialBreakdown.admin}%` }}
            title={`Administration: ${ngo.financialBreakdown.admin}%`}
          />
          <div 
            className="bg-orange-500 h-2"
            style={{ width: `${ngo.financialBreakdown.fundraising}%` }}
            title={`Fundraising: ${ngo.financialBreakdown.fundraising}%`}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{ngo.financialBreakdown.programs}% Programs</span>
          <span>{ngo.financialBreakdown.admin}% Admin</span>
          <span>{ngo.financialBreakdown.fundraising}% Fundraising</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Active Campaigns:</p>
        <div className="flex flex-wrap gap-2">
          {ngo.currentCampaigns.map((campaign, index) => (
            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg">
              {campaign}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
          <Heart className="w-4 h-4 mr-2" />
          Donate Now
        </button>
        <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Donation Hub
          </h1>
          <p className="text-gray-600">
            Support verified humanitarian organizations making a real difference worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search organizations, causes, locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className={`grid md:grid-cols-3 gap-4 ${showFilters ? 'block' : 'hidden md:grid'}`}>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {countries.map(country => (
                <option key={country} value={country}>
                  {country === 'all' ? 'All Countries' : country}
                </option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            <select
              value={selectedUrgency}
              onChange={(e) => setSelectedUrgency(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {urgencyLevels.map(urgency => (
                <option key={urgency} value={urgency}>
                  {urgency === 'all' ? 'All Urgency Levels' : urgency}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredNGOs.length} verified organizations
          </p>
        </div>

        {/* NGO Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredNGOs.map((ngo) => (
            <DonationCard key={ngo.id} ngo={ngo} />
          ))}
        </div>

        {filteredNGOs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No organizations found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}