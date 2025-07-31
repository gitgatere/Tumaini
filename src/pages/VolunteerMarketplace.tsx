import React, { useState } from 'react';
import { Search, Filter, Clock, MapPin, Users, Star, ChevronDown, Calendar } from 'lucide-react';

export default function VolunteerMarketplace() {
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [selectedTime, setSelectedTime] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const opportunities = [
    {
      id: 1,
      title: 'Arabic-English Translation Support',
      organization: 'UNHCR',
      description: 'Help translate critical refugee documents and communications from Arabic to English',
      skills: ['Arabic', 'Translation', 'Remote Work'],
      timeCommitment: '2-3 hours/week',
      type: 'Remote',
      urgency: 'High',
      deadline: '2024-02-15',
      applicants: 12,
      maxVolunteers: 5,
      location: 'Remote',
      requirements: ['Fluent in Arabic and English', 'Previous translation experience preferred'],
      impact: 'Help 100+ refugees access critical services'
    },
    {
      id: 2,
      title: 'Child Education Program Assistant',
      organization: 'Save the Children',
      description: 'Support online tutoring sessions for displaced children in refugee camps',
      skills: ['Teaching', 'Child Development', 'Online Tools'],
      timeCommitment: '4-6 hours/week',
      type: 'Remote',
      urgency: 'Medium',
      deadline: '2024-02-20',
      applicants: 28,
      maxVolunteers: 15,
      location: 'Remote',
      requirements: ['Background in education or tutoring', 'Comfortable with video calls'],
      impact: 'Support education for 50+ children'
    },
    {
      id: 3,
      title: 'Medical Supply Coordinator',
      organization: 'Doctors Without Borders',
      description: 'Coordinate medical supply deliveries to field hospitals in crisis zones',
      skills: ['Logistics', 'Project Management', 'Medical Knowledge'],
      timeCommitment: '10-15 hours/week',
      type: 'Hybrid',
      urgency: 'Critical',
      deadline: '2024-02-10',
      applicants: 8,
      maxVolunteers: 3,
      location: 'New York, NY',
      requirements: ['Supply chain or logistics experience', 'Available for field deployment'],
      impact: 'Ensure medical supplies reach 10,000+ patients'
    },
    {
      id: 4,
      title: 'Social Media Content Creator',
      organization: 'Islamic Relief USA',
      description: 'Create engaging social media content to raise awareness about humanitarian crises',
      skills: ['Social Media', 'Content Creation', 'Design'],
      timeCommitment: '3-5 hours/week',
      type: 'Remote',
      urgency: 'Medium',
      deadline: '2024-03-01',
      applicants: 45,
      maxVolunteers: 8,
      location: 'Remote',
      requirements: ['Experience with Instagram, TikTok, or Twitter', 'Basic design skills'],
      impact: 'Reach 100,000+ people with awareness campaigns'
    },
    {
      id: 5,
      title: 'Grant Writing Specialist',
      organization: 'CARE International',
      description: 'Research and write grant proposals to secure funding for women\'s empowerment programs',
      skills: ['Grant Writing', 'Research', 'Writing'],
      timeCommitment: '6-8 hours/week',
      type: 'Remote',
      urgency: 'High',
      deadline: '2024-02-25',
      applicants: 15,
      maxVolunteers: 4,
      location: 'Remote',
      requirements: ['Grant writing experience', 'Research skills', 'Strong writing abilities'],
      impact: 'Secure funding for 1,000+ women'
    }
  ];

  const skills = ['all', 'Translation', 'Teaching', 'Medical Knowledge', 'Social Media', 'Grant Writing', 'Logistics'];
  const timeCommitments = ['all', '1-2 hours/week', '3-5 hours/week', '6-10 hours/week', '10+ hours/week'];
  const types = ['all', 'Remote', 'On-site', 'Hybrid'];

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSkill = selectedSkill === 'all' || opp.skills.some(skill => skill.includes(selectedSkill));
    const matchesTime = selectedTime === 'all' || opp.timeCommitment.includes(selectedTime.split('/')[0]);
    const matchesType = selectedType === 'all' || opp.type === selectedType;
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSkill && matchesTime && matchesType && matchesSearch;
  });

  const OpportunityCard = ({ opportunity }: { opportunity: typeof opportunities[0] }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{opportunity.title}</h3>
          <p className="text-blue-600 font-medium">{opportunity.organization}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          opportunity.urgency === 'Critical' ? 'bg-red-100 text-red-700' :
          opportunity.urgency === 'High' ? 'bg-orange-100 text-orange-700' :
          'bg-yellow-100 text-yellow-700'
        }`}>
          {opportunity.urgency}
        </span>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{opportunity.description}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          {opportunity.timeCommitment}
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          {opportunity.location}
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-2" />
          {opportunity.applicants}/{opportunity.maxVolunteers} applied
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          Due {new Date(opportunity.deadline).toLocaleDateString()}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Required Skills:</p>
        <div className="flex flex-wrap gap-2">
          {opportunity.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Requirements:</p>
        <ul className="text-sm text-gray-600 space-y-1">
          {opportunity.requirements.map((req, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-green-50 p-3 rounded-lg mb-4">
        <p className="text-sm font-medium text-green-800">Impact:</p>
        <p className="text-sm text-green-700">{opportunity.impact}</p>
      </div>

      <div className="flex space-x-3">
        <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Apply Now
        </button>
        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          Save
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
            Volunteer Marketplace
          </h1>
          <p className="text-gray-600">
            Find meaningful volunteer opportunities with verified humanitarian organizations
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search opportunities, organizations, skills..."
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
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {skills.map(skill => (
                <option key={skill} value={skill}>
                  {skill === 'all' ? 'All Skills' : skill}
                </option>
              ))}
            </select>

            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {timeCommitments.map(time => (
                <option key={time} value={time}>
                  {time === 'all' ? 'Any Time Commitment' : time}
                </option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredOpportunities.length} volunteer opportunities
          </p>
        </div>

        {/* Opportunity Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No opportunities found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}