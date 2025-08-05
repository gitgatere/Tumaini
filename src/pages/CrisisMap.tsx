import React, { useState } from 'react';
import { MapPin, AlertTriangle, Users, Heart, Info, Eye, EyeOff } from 'lucide-react';

export default function CrisisMap() {
  const [selectedLayers, setSelectedLayers] = useState({
    conflicts: true,
    refugees: true,
    humanitarian: true
  });
  const [selectedCrisis, setSelectedCrisis] = useState<number | null>(null);

  const crises = [
    {
      id: 1,
      name: 'Congo Crisis',
      location: 'Central Africa',
      coordinates: { x: '55%', y: '25%' },
      type: 'Conflict',
      severity: 'Critical',
      affected: '17.6M people',
      refugees: '6.2M displaced',
      description: 'Ongoing conflict has created one of the largest refugee crises in Africa',
      organizations: ['UNHCR', 'UNICEF', 'WFP', 'Save the Children'],
      lastUpdate: '2 hours ago',
      donations: '$2.4B raised',
      volunteers: 12500
    },
    {
      id: 2,
      name: 'Sudan Crisis',
      location: 'Northeast Africa',
      coordinates: { x: '52%', y: '45%' },
      type: 'Conflict',
      severity: 'Critical',
      affected: '25M people',
      refugees: '1.8M displaced',
      description: 'Armed conflict has led to widespread displacement and humanitarian needs',
      organizations: ['MSF', 'CARE', 'Islamic Relief', 'IRC'],
      lastUpdate: '4 hours ago',
      donations: '$890M raised',
      volunteers: 3200
    },
    {
      id: 3,
      name: 'Gaza Crisis',
      location: 'Middle East',
      coordinates: { x: '68%', y: '35%' },
      type: 'Humanitarian',
      severity: 'Critical',
      affected: '28.3M people',
      refugees: '2.6M displaced',
      description: 'Starvation, armed conflict and restricted humanitarian access affecting millions',
      organizations: ['WFP', 'UNHCR', 'Save the Children', 'ActionAid'],
      lastUpdate: '1 day ago',
      donations: '$1.2B raised',
      volunteers: 5800
    },
    {
      id: 4,
      name: 'Syria Refugee Crisis',
      location: 'Middle East',
      coordinates: { x: '56%', y: '38%' },
      type: 'Refugee',
      severity: 'High',
      affected: '15.3M people',
      refugees: '6.8M displaced',
      description: 'Long-term displacement crisis with millions in need of support',
      organizations: ['UNHCR', 'IRC', 'Mercy Corps', 'World Vision'],
      lastUpdate: '6 hours ago',
      donations: '$4.1B raised',
      volunteers: 18700
    },
    {
      id: 5,
      name: 'Yemen Crisis',
      location: 'Arabian Peninsula',
      coordinates: { x: '58%', y: '48%' },
      type: 'Humanitarian',
      severity: 'High',
      affected: '21.6M people',
      refugees: '4.3M displaced',
      description: 'World\'s worst humanitarian crisis with severe food insecurity',
      organizations: ['WFP', 'UNICEF', 'Oxfam', 'MSF'],
      lastUpdate: '3 hours ago',
      donations: '$1.8B raised',
      volunteers: 4200
    },
    {
      id: 6,
      name: 'Ukraine Crisis',
      location: 'Eastern Europe',
      coordinates: { x: '55%', y: '25%' },
      type: 'Conflict',
      severity: 'Critical',
      affected: '17.6M people',
      refugees: '6.2M displaced',
      description: 'Ongoing conflict has created one of the largest refugee crises in Europe since WWII',
      organizations: ['UNHCR', 'UNICEF', 'WFP', 'Save the Children'],
      lastUpdate: '2 hours ago',
      donations: '$2.4B raised',
      volunteers: 12500
    }
  ];

  const toggleLayer = (layer: keyof typeof selectedLayers) => {
    setSelectedLayers(prev => ({
      ...prev,
      [layer]: !prev[layer]
    }));
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-500 border-red-600';
      case 'High': return 'bg-orange-500 border-orange-600';
      case 'Medium': return 'bg-yellow-500 border-yellow-600';
      default: return 'bg-gray-500 border-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Conflict': return AlertTriangle;
      case 'Refugee': return Users;
      case 'Humanitarian': return Heart;
      default: return MapPin;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Global Crisis Map
          </h1>
          <p className="text-gray-600">
            Real-time view of humanitarian crises and response efforts worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Layer Controls */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Map Layers</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedLayers.conflicts}
                    onChange={() => toggleLayer('conflicts')}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm text-gray-700">Active Conflicts</span>
                  {selectedLayers.conflicts ? (
                    <Eye className="w-4 h-4 ml-auto text-green-500" />
                  ) : (
                    <EyeOff className="w-4 h-4 ml-auto text-gray-400" />
                  )}
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedLayers.refugees}
                    onChange={() => toggleLayer('refugees')}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm text-gray-700">Refugee Flows</span>
                  {selectedLayers.refugees ? (
                    <Eye className="w-4 h-4 ml-auto text-green-500" />
                  ) : (
                    <EyeOff className="w-4 h-4 ml-auto text-gray-400" />
                  )}
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedLayers.humanitarian}
                    onChange={() => toggleLayer('humanitarian')}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm text-gray-700">Aid Operations</span>
                  {selectedLayers.humanitarian ? (
                    <Eye className="w-4 h-4 ml-auto text-green-500" />
                  ) : (
                    <EyeOff className="w-4 h-4 ml-auto text-gray-400" />
                  )}
                </label>
              </div>
            </div>

            {/* Legend */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Legend</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Critical</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">High Priority</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Medium Priority</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-blue-50 to-green-50">
                {/* World Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-30"></div>
                
                {/* Crisis Points */}
                {crises.map((crisis) => {
                  const Icon = getTypeIcon(crisis.type);
                  const shouldShow = 
                    (crisis.type === 'Conflict' && selectedLayers.conflicts) ||
                    (crisis.type === 'Refugee' && selectedLayers.refugees) ||
                    (crisis.type === 'Humanitarian' && selectedLayers.humanitarian);

                  if (!shouldShow) return null;

                  return (
                    <button
                      key={crisis.id}
                      onClick={() => setSelectedCrisis(crisis.id)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${getSeverityColor(crisis.severity)} w-8 h-8 rounded-full border-2 flex items-center justify-center hover:scale-125 transition-all duration-200 pulse`}
                      style={{ left: crisis.coordinates.x, top: crisis.coordinates.y }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </button>
                  );
                })}

                {/* Selected Crisis Info */}
                {selectedCrisis && (
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-md">
                    {(() => {
                      const crisis = crises.find(c => c.id === selectedCrisis);
                      if (!crisis) return null;
                      
                      const Icon = getTypeIcon(crisis.type);
                      return (
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center">
                              <Icon className="w-5 h-5 text-gray-600 mr-2" />
                              <h4 className="font-bold text-gray-900">{crisis.name}</h4>
                            </div>
                            <button
                              onClick={() => setSelectedCrisis(null)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              ×
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{crisis.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                            <div>
                              <span className="text-gray-500">Affected:</span>
                              <p className="font-medium">{crisis.affected}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Displaced:</span>
                              <p className="font-medium">{crisis.refugees}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                              Donate
                            </button>
                            <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-green-700 transition-colors">
                              Volunteer
                            </button>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            </div>

            {/* Crisis List */}
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Active Crises</h3>
              {crises.map((crisis) => (
                <div
                  key={crisis.id}
                  className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer transition-all duration-200 ${
                    selectedCrisis === crisis.id ? 'ring-2 ring-blue-500 border-blue-200' : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedCrisis(crisis.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${getSeverityColor(crisis.severity).split(' ')[0]}`}></div>
                      <h4 className="font-bold text-gray-900">{crisis.name}</h4>
                    </div>
                    <span className="text-xs text-gray-500">{crisis.lastUpdate}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{crisis.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Affected:</span>
                      <p className="font-medium">{crisis.affected}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Displaced:</span>
                      <p className="font-medium">{crisis.refugees}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Donations:</span>
                      <p className="font-medium">{crisis.donations}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Volunteers:</span>
                      <p className="font-medium">{crisis.volunteers.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
          }
        }
      `}</style>
    </div>
  );
}