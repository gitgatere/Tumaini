import React, { useState } from 'react';
import { User, MapPin, Heart, Clock, Award, Settings, Edit3, Share, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user || user.isGuest) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 md:pb-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Sign up to access your profile</h3>
          <p className="text-gray-600">Create an account to track your contributions and connect with the community</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'contributions', label: 'Contributions' },
    { id: 'saved', label: 'Saved Items' },
    { id: 'settings', label: 'Settings' }
  ];

  const recentActivity = [
    {
      type: 'donation',
      title: 'Donated to UNHCR Ukraine Emergency',
      amount: '$50',
      date: '2 days ago',
      icon: Heart
    },
    {
      type: 'volunteer',
      title: 'Applied for Translation Support',
      organization: 'Save the Children',
      date: '1 week ago',
      icon: Clock
    },
    {
      type: 'badge',
      title: 'Earned "First Volunteer" badge',
      date: '2 weeks ago',
      icon: Award
    }
  ];

  const savedItems = [
    {
      type: 'opportunity',
      title: 'Medical Supply Coordinator',
      organization: 'Doctors Without Borders',
      saved: '3 days ago'
    },
    {
      type: 'course',
      title: 'Crisis Communication Workshop',
      provider: 'Learning Center',
      saved: '1 week ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="relative h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-xl">
            <div className="absolute -bottom-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-white flex items-center justify-center">
                <User className="w-12 h-12 text-gray-600" />
              </div>
            </div>
          </div>
          <div className="pt-16 pb-6 px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h1>
                <p className="text-gray-600 mb-4">Humanitarian volunteer since 2023</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    New York, USA
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Joined January 2024
                  </div>
                </div>
              </div>
              <div className="flex space-x-3 mt-4 md:mt-0">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">${user.totalDonated}</p>
            <p className="text-sm text-gray-600">Total Donated</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{user.volunteerHours}</p>
            <p className="text-sm text-gray-600">Hours Volunteered</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{user.badges.length}</p>
            <p className="text-sm text-gray-600">Badges Earned</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <User className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">47</p>
            <p className="text-sm text-gray-600">People Helped</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === 'donation' ? 'bg-red-100' :
                          activity.type === 'volunteer' ? 'bg-blue-100' : 'bg-yellow-100'
                        }`}>
                          <activity.icon className={`w-5 h-5 ${
                            activity.type === 'donation' ? 'text-red-600' :
                            activity.type === 'volunteer' ? 'text-blue-600' : 'text-yellow-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.title}</p>
                          {activity.organization && (
                            <p className="text-sm text-gray-600">{activity.organization}</p>
                          )}
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                        {activity.amount && (
                          <span className="text-lg font-bold text-green-600">{activity.amount}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Badges</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {user.badges.map((badge, index) => (
                      <div key={index} className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-lg text-white text-center">
                        <Award className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-medium text-sm">{badge}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Areas of Interest</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.causes.map((cause, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {cause}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Contributions Tab */}
            {activeTab === 'contributions' && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Your Contributions</h3>
                <div className="text-center py-12">
                  <p className="text-gray-600">Detailed contribution history would be displayed here</p>
                </div>
              </div>
            )}

            {/* Saved Items Tab */}
            {activeTab === 'saved' && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Saved Items</h3>
                <div className="space-y-4">
                  {savedItems.map((item, index) => (
                    <div key={index} className="p-4 border border-gray-100 rounded-lg">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.organization || item.provider}</p>
                      <p className="text-xs text-gray-500">Saved {item.saved}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Account Settings</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Privacy Settings</h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                        <span className="ml-3 text-sm text-gray-700">Show my donation amounts publicly</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                        <span className="ml-3 text-sm text-gray-700">Allow others to see my volunteer hours</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Notifications</h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                        <span className="ml-3 text-sm text-gray-700">Crisis alerts</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                        <span className="ml-3 text-sm text-gray-700">Volunteer opportunities</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-blue-600" />
                        <span className="ml-3 text-sm text-gray-700">Community updates</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}