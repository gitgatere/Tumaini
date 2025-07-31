import React, { useState } from 'react';
import { MessageSquare, Users, HelpCircle, Star, Clock, Pin, Search } from 'lucide-react';

export default function Community() {
  const [selectedForum, setSelectedForum] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');

  const forums = [
    { id: 'general', name: 'General Discussion', icon: MessageSquare, posts: 145, color: 'blue' },
    { id: 'trauma', name: 'Trauma & Mental Health', icon: HelpCircle, posts: 89, color: 'purple' },
    { id: 'logistics', name: 'Aid Logistics', icon: Users, posts: 67, color: 'green' },
    { id: 'advocacy', name: 'Advocacy & Policy', icon: Star, posts: 123, color: 'orange' }
  ];

  const posts = [
    {
      id: 1,
      title: 'Best practices for first-time volunteers in refugee camps',
      author: 'Sarah M.',
      authorRole: 'UNHCR Volunteer Coordinator',
      category: 'general',
      replies: 23,
      views: 450,
      timeAgo: '2 hours ago',
      pinned: true,
      tags: ['volunteers', 'refugee camps', 'best practices'],
      preview: 'I wanted to share some insights for newcomers based on my 5 years of experience...'
    },
    {
      id: 2,
      title: 'Mental health support for humanitarian workers',
      author: 'Dr. Ahmed R.',
      authorRole: 'Psychologist, MSF',
      category: 'trauma',
      replies: 15,
      views: 320,
      timeAgo: '4 hours ago',
      pinned: false,
      tags: ['mental health', 'burnout', 'self care'],
      preview: 'Working in crisis zones takes a toll. Here are some strategies that have helped me and my team...'
    },
    {
      id: 3,
      title: 'Supply chain challenges in Ukraine response',
      author: 'Maria L.',
      authorRole: 'Supply Chain Manager',
      category: 'logistics',
      replies: 31,
      views: 580,
      timeAgo: '6 hours ago',
      pinned: false,
      tags: ['ukraine', 'supply chain', 'logistics'],
      preview: 'The complexity of delivering aid across the Ukrainian border has taught us valuable lessons...'
    },
    {
      id: 4,
      title: 'How to effectively lobby for refugee rights',
      author: 'Jennifer K.',
      authorRole: 'Policy Advocate',
      category: 'advocacy',
      replies: 18,
      views: 290,
      timeAgo: '8 hours ago',
      pinned: false,
      tags: ['advocacy', 'policy', 'refugees'],
      preview: 'Successful advocacy requires understanding both the political landscape and human stories...'
    },
    {
      id: 5,
      title: 'Anonymous: Dealing with secondary trauma',
      author: 'Anonymous',
      authorRole: 'Field Worker',
      category: 'trauma',
      replies: 7,
      views: 150,
      timeAgo: '12 hours ago',
      pinned: false,
      tags: ['trauma', 'anonymous', 'support'],
      preview: 'I\'ve been struggling with what I\'ve witnessed in the field and could use some advice...'
    }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Hassan',
      role: 'Senior Protection Officer, UNHCR',
      expertise: ['Refugee Law', 'Protection', 'Crisis Response'],
      experience: '12 years',
      rating: 4.9,
      sessions: 85,
      available: true
    },
    {
      id: 2,
      name: 'Ahmed Al-Rashid',
      role: 'Emergency Coordinator, MSF',
      expertise: ['Medical Response', 'Team Leadership', 'Logistics'],
      experience: '8 years',
      rating: 4.8,
      sessions: 62,
      available: false
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: 'Communications Director, CARE',
      expertise: ['Advocacy', 'Media Relations', 'Campaign Strategy'],
      experience: '10 years',
      rating: 4.9,
      sessions: 93,
      available: true
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesForum = selectedForum === 'general' || post.category === selectedForum;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesForum && matchesSearch;
  });

  const getForumColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      orange: 'bg-orange-100 text-orange-700 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Community Hub
          </h1>
          <p className="text-gray-600">
            Connect with fellow humanitarian workers, share experiences, and learn from experts
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Forum Categories */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Forums</h3>
              <div className="space-y-2">
                {forums.map((forum) => (
                  <button
                    key={forum.id}
                    onClick={() => setSelectedForum(forum.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedForum === forum.id
                        ? getForumColor(forum.color)
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <forum.icon className="w-5 h-5" />
                        <span className="font-medium">{forum.name}</span>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {forum.posts}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Ask a Mentor */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Ask a Mentor</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get guidance from experienced humanitarian professionals
              </p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-4">
                Find a Mentor
              </button>
              
              <div className="space-y-3">
                {mentors.slice(0, 2).map((mentor) => (
                  <div key={mentor.id} className="border border-gray-100 rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{mentor.name}</h4>
                        <p className="text-xs text-gray-600">{mentor.role}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${mentor.available ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                      {mentor.rating} • {mentor.sessions} sessions
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and New Post */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  New Post
                </button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            {post.pinned && <Pin className="w-4 h-4 text-orange-500" />}
                            <h3 className="font-bold text-gray-900 hover:text-blue-600 cursor-pointer">
                              {post.title}
                            </h3>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span className="font-medium">{post.author}</span>
                            <span>•</span>
                            <span>{post.authorRole}</span>
                            <span>•</span>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.timeAgo}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-3 line-clamp-2">{post.preview}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            {post.replies} replies
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {post.views} views
                          </div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                          Join Discussion
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No discussions found</h3>
                <p className="text-gray-600">Try adjusting your search or start a new discussion</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}