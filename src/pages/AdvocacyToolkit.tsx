import React, { useState } from 'react';
import { Mail, MessageSquare, FileText, Share2, Download, Copy, ExternalLink } from 'lucide-react';

export default function AdvocacyToolkit() {
  const [selectedTab, setSelectedTab] = useState('government');
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const tabs = [
    { id: 'government', label: 'Contact Government', icon: Mail },
    { id: 'social', label: 'Social Media', icon: MessageSquare },
    { id: 'petitions', label: 'Petitions', icon: FileText }
  ];

  const governmentTemplates = [
    {
      id: 1,
      title: 'Ukraine Emergency Aid',
      subject: 'Urgent: Increase Humanitarian Aid for Ukraine Crisis',
      template: `Dear [Representative Name],

I am writing as your constituent to urge immediate action on the humanitarian crisis in Ukraine. With over 17.6 million people affected and 6.2 million displaced, the need for additional aid is critical.

I respectfully request that you:
1. Support increased funding for UNHCR and other humanitarian organizations
2. Advocate for streamlined refugee resettlement processes
3. Ensure transparency in aid distribution

This crisis demands swift action. The international community must respond with the urgency this situation deserves.

Thank you for your attention to this critical matter.

Sincerely,
[Your Name]
[Your Address]`
    },
    {
      id: 2,
      title: 'Sudan Crisis Response',
      subject: 'Call for Action: Sudan Humanitarian Emergency',
      template: `Dear [Representative Name],

I am reaching out regarding the deteriorating humanitarian situation in Sudan, where 25 million people are currently affected by ongoing conflict.

As your constituent, I urge you to:
1. Support emergency humanitarian funding for Sudan
2. Advocate for safe humanitarian corridors
3. Push for diplomatic solutions to end the conflict

The people of Sudan need our immediate support. I trust you will prioritize this urgent humanitarian crisis.

Best regards,
[Your Name]
[Your Address]`
    }
  ];

  const socialMediaContent = [
    {
      platform: 'Instagram',
      type: 'Story Template',
      content: 'Crisis in Ukraine: 17.6M people need help. Small actions = Big impact. #UkraineSupport #HumanitarianAid',
      image: 'https://images.pexels.com/photos/8728558/pexels-photo-8728558.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      platform: 'Twitter',
      type: 'Tweet',
      content: '🚨 25M people in Sudan need urgent humanitarian aid. Every voice matters in raising awareness. How can you help today? #SudanCrisis #HumanitarianAid',
      image: null
    },
    {
      platform: 'TikTok',
      type: 'Video Script',
      content: 'Did you know 100M+ people are displaced worldwide? Here\'s how you can make a difference in 60 seconds... [Include call-to-action]',
      image: null
    },
    {
      platform: 'Facebook',
      type: 'Post',
      content: 'The global refugee crisis affects millions of families. Today, I\'m supporting humanitarian organizations making a real difference. Join me in helping those who need it most.',
      image: 'https://images.pexels.com/photos/6646943/pexels-photo-6646943.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const petitions = [
    {
      id: 1,
      title: 'Increase US Humanitarian Aid Budget',
      description: 'Petition for a 25% increase in US humanitarian aid funding for 2024',
      signatures: 15420,
      target: 25000,
      country: 'United States',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Expedite Refugee Processing in Europe',
      description: 'Call for faster refugee application processing across EU member states',
      signatures: 8930,
      target: 15000,
      country: 'European Union',
      status: 'Active'
    },
    {
      id: 3,
      title: 'Medical Aid Access for Yemen',
      description: 'Demand unrestricted medical aid access to all regions of Yemen',
      signatures: 22100,
      target: 20000,
      country: 'International',
      status: 'Goal Reached'
    }
  ];

  const handleCopyTemplate = (template: string) => {
    navigator.clipboard.writeText(template);
    // You would show a toast notification here
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Advocacy Toolkit
          </h1>
          <p className="text-gray-600">
            Make your voice heard with ready-to-use templates and tools for advocacy
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Government Contact Tab */}
        {selectedTab === 'government' && (
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-900 mb-2">How to Contact Your Representatives</h3>
              <p className="text-blue-800 mb-4">
                Use these templates to email your local representatives about humanitarian crises. 
                We'll help you find their contact information based on your location.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Find My Representatives
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Template List */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Email Templates</h3>
                <div className="space-y-4">
                  {governmentTemplates.map((template) => (
                    <div
                      key={template.id}
                      className={`bg-white rounded-xl shadow-sm border p-6 cursor-pointer transition-all duration-200 ${
                        selectedTemplate === template.id
                          ? 'border-blue-300 ring-2 ring-blue-100'
                          : 'border-gray-200 hover:shadow-md'
                      }`}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <h4 className="font-bold text-gray-900 mb-2">{template.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">Subject: {template.subject}</p>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View Template →
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Template Preview */}
              <div>
                {selectedTemplate && (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">Template Preview</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleCopyTemplate(governmentTemplates.find(t => t.id === selectedTemplate)?.template || '')}
                          className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                          title="Copy to clipboard"
                        >
                          <Copy className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans">
                        {governmentTemplates.find(t => t.id === selectedTemplate)?.template}
                      </pre>
                    </div>
                    <div className="mt-4 flex space-x-3">
                      <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Open in Email App
                      </button>
                      <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Customize
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Social Media Tab */}
        {selectedTab === 'social' && (
          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-900 mb-2">Social Media Advocacy</h3>
              <p className="text-green-800">
                Use these ready-made templates and assets to raise awareness about humanitarian crises on social media.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialMediaContent.map((content, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900">{content.platform}</h3>
                      <p className="text-sm text-gray-600">{content.type}</p>
                    </div>
                    <Share2 className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  {content.image && (
                    <img 
                      src={content.image} 
                      alt="Social media content"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  )}
                  
                  <p className="text-sm text-gray-700 mb-4">{content.content}</p>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      Copy
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Petitions Tab */}
        {selectedTab === 'petitions' && (
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-900 mb-2">Active Petitions</h3>
              <p className="text-purple-800">
                Sign petitions and add your voice to important humanitarian causes worldwide.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {petitions.map((petition) => (
                <div key={petition.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-gray-900 text-lg">{petition.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      petition.status === 'Goal Reached' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {petition.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{petition.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>{petition.signatures.toLocaleString()} signatures</span>
                      <span>Goal: {petition.target.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((petition.signatures / petition.target) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{petition.country}</span>
                    <div className="flex space-x-2">
                      <button 
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                          petition.status === 'Goal Reached'
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {petition.status === 'Goal Reached' ? 'View Results' : 'Sign Petition'}
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}