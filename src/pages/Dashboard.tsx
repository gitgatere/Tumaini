import React from 'react';
import { Heart, Users, MessageSquare, MapPin, TrendingUp, Award, Clock, DollarSign } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  const quickActions = [
    {
      id: 'donate',
      title: 'Donate Now',
      description: 'Support verified NGOs',
      icon: Heart,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    },
    {
      id: 'volunteer',
      title: 'Volunteer',
      description: 'Find opportunities',
      icon: Users,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      id: 'advocacy',
      title: 'Advocate',
      description: 'Make your voice heard',
      icon: MessageSquare,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    }
  ];

  const urgentCrises = [
    {
      location: 'Ukraine',
      description: 'Ongoing conflict displacement',
      urgency: 'Critical',
      image: 'https://images.pexels.com/photos/8728558/pexels-photo-8728558.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      location: 'Sudan',
      description: 'Food security crisis',
      urgency: 'High',
      image: 'https://images.pexels.com/photos/6646874/pexels-photo-6646874.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      location: 'Afghanistan',
      description: 'Humanitarian access limited',
      urgency: 'High',
      image: 'https://images.pexels.com/photos/5591727/pexels-photo-5591727.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const personalizedOpportunities = [
    {
      title: 'Translate Emergency Messages',
      org: 'UNHCR',
      type: 'Remote Volunteer',
      skills: ['Arabic', 'Translation'],
      time: '2-3 hours'
    },
    {
      title: 'Monthly Education Support',
      org: 'Save the Children',
      type: 'Recurring Donation',
      amount: '$25/month',
      impact: 'Educates 1 child'
    },
    {
      title: 'Crisis Response Training',
      org: 'Doctors Without Borders',
      type: 'Learning Course',
      duration: '4 weeks',
      level: 'Beginner'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.isGuest ? 'Guest' : user?.name || 'Friend'}
          </h1>
          <p className="text-gray-600">
            {user?.isGuest 
              ? 'Start making a difference today - your impact matters.'
              : 'Your contributions are creating real change around the world.'
            }
          </p>
        </div>

        {/* Stats Cards */}
        {!user?.isGuest && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Donated</p>
                  <p className="text-2xl font-bold text-gray-900">${user?.totalDonated || 0}</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Volunteer Hours</p>
                  <p className="text-2xl font-bold text-gray-900">{user?.volunteerHours || 0}</p>
                </div>
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">People Helped</p>
                  <p className="text-2xl font-bold text-gray-900">47</p>
                </div>
                <Users className="w-8 h-8 text-purple-500" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Badges Earned</p>
                  <p className="text-2xl font-bold text-gray-900">{user?.badges?.length || 0}</p>
                </div>
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {quickActions.map((action) => (
              <button
                key={action.id}
                className={`${action.color} ${action.hoverColor} text-white p-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
              >
                <action.icon className="w-8 h-8 mb-3" />
                <h3 className="text-lg font-bold mb-1">{action.title}</h3>
                <p className="text-white text-opacity-90">{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Crisis Map Preview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Crisis Hotspots</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                View Full Map
                <MapPin className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              {urgentCrises.map((crisis, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                  <img 
                    src={crisis.image} 
                    alt={crisis.location}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">{crisis.location}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        crisis.urgency === 'Critical' 
                          ? 'bg-red-100 text-red-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {crisis.urgency}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{crisis.description}</p>
                    <div className="flex space-x-2 mt-2">
                      <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors">
                        Donate
                      </button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg hover:bg-gray-200 transition-colors">
                        Volunteer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personalized Opportunities */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Recommended for You</h2>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="space-y-4">
              {personalizedOpportunities.map((opportunity, index) => (
                <div key={index} className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{opportunity.title}</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {opportunity.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{opportunity.org}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {opportunity.time && `⏱ ${opportunity.time}`}
                      {opportunity.amount && `💰 ${opportunity.amount}`}
                      {opportunity.duration && `📚 ${opportunity.duration}`}
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                      {opportunity.type.includes('Donation') ? 'Donate' : 
                       opportunity.type.includes('Volunteer') ? 'Apply' : 'Start'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}