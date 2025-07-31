import React, { useState } from 'react';
import { Play, BookOpen, Clock, Users, Star, Search, Filter } from 'lucide-react';

export default function LearningCenter() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'Crisis Response', 'Refugee Rights', 'Child Protection', 'Medical Aid', 'Advocacy'];

  const learningContent = [
    {
      id: 1,
      title: 'Understanding Refugee Rights Under International Law',
      description: 'Comprehensive course on refugee protection principles and international humanitarian law',
      type: 'Course',
      category: 'Refugee Rights',
      duration: '4 weeks',
      difficulty: 'Intermediate',
      rating: 4.8,
      students: 1250,
      instructor: 'Dr. Sarah Hassan, UNHCR',
      thumbnail: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400',
      lessons: 12,
      certificate: true
    },
    {
      id: 2,
      title: 'Crisis Communication: Telling Stories That Matter',
      description: 'Learn how to effectively communicate humanitarian crises to drive action and awareness',
      type: 'Workshop',
      category: 'Advocacy',
      duration: '2 hours',
      difficulty: 'Beginner',
      rating: 4.6,
      students: 890,
      instructor: 'Maria Rodriguez, Journalist',
      thumbnail: 'https://images.pexels.com/photos/6646892/pexels-photo-6646892.jpeg?auto=compress&cs=tinysrgb&w=400',
      lessons: 4,
      certificate: false
    },
    {
      id: 3,
      title: 'Emergency Medical Response in Crisis Zones',
      description: 'Essential medical protocols and procedures for humanitarian emergencies',
      type: 'Course',
      category: 'Medical Aid',
      duration: '6 weeks',
      difficulty: 'Advanced',
      rating: 4.9,
      students: 650,
      instructor: 'Dr. Ahmed Al-Rashid, MSF',
      thumbnail: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400',
      lessons: 18,
      certificate: true
    },
    {
      id: 4,
      title: 'Child Protection in Humanitarian Settings',
      description: 'Protecting children\'s rights and wellbeing during emergencies and displacement',
      type: 'Course',
      category: 'Child Protection',
      duration: '3 weeks',
      difficulty: 'Intermediate',
      rating: 4.7,
      students: 980,
      instructor: 'Lisa Chen, Save the Children',
      thumbnail: 'https://images.pexels.com/photos/8428100/pexels-photo-8428100.jpeg?auto=compress&cs=tinysrgb&w=400',
      lessons: 9,
      certificate: true
    },
    {
      id: 5,
      title: 'Rapid Needs Assessment Techniques',
      description: 'Learn to quickly assess humanitarian needs in emergency situations',
      type: 'Workshop',
      category: 'Crisis Response',
      duration: '3 hours',
      difficulty: 'Intermediate',
      rating: 4.5,
      students: 420,
      instructor: 'James Patterson, CARE',
      thumbnail: 'https://images.pexels.com/photos/6646874/pexels-photo-6646874.jpeg?auto=compress&cs=tinysrgb&w=400',
      lessons: 6,
      certificate: false
    },
    {
      id: 6,
      title: 'Stories from the Field: Refugee Experiences',
      description: 'Personal testimonies and stories from refugees around the world',
      type: 'Documentary',
      category: 'Refugee Rights',
      duration: '45 minutes',
      difficulty: 'Beginner',
      rating: 4.9,
      students: 2100,
      instructor: 'Various Contributors',
      thumbnail: 'https://images.pexels.com/photos/6646943/pexels-photo-6646943.jpeg?auto=compress&cs=tinysrgb&w=400',
      lessons: 1,
      certificate: false
    }
  ];

  const filteredContent = learningContent.filter(content => {
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Course': return BookOpen;
      case 'Workshop': return Users;
      case 'Documentary': return Play;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Learning Center
          </h1>
          <p className="text-gray-600">
            Build your knowledge and skills in humanitarian action and crisis response
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses, workshops, topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
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
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Featured Learning</h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Crisis Timeline Explorer</h3>
                <p className="text-blue-100 mb-6">
                  Interactive timeline exploring major humanitarian crises of the past decade. 
                  Understand causes, responses, and outcomes through an immersive experience.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Explore Timeline
                </button>
              </div>
              <div className="hidden md:block">
                <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm">2022: Ukraine Crisis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-sm">2021: Afghanistan Withdrawal</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm">2020: COVID-19 Global Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Content Grid */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredContent.length} learning resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content) => {
            const TypeIcon = getTypeIcon(content.type);
            return (
              <div key={content.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200">
                <div className="relative">
                  <img 
                    src={content.thumbnail} 
                    alt={content.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(content.difficulty)}`}>
                      {content.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-lg p-2">
                      <TypeIcon className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>
                  {content.type !== 'Documentary' && (
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                      {content.lessons} lessons
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                      {content.type}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {content.rating}
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{content.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{content.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {content.students}
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mb-4">by {content.instructor}</p>

                  <div className="flex items-center justify-between">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors mr-2">
                      {content.type === 'Documentary' ? 'Watch' : 'Start Learning'}
                    </button>
                    {content.certificate && (
                      <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                        Certificate
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
}