import React, { useState } from 'react';
import { ArrowRight, Globe, Users, Heart, Shield, Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface WelcomePageProps {
  onContinue: () => void;
}

export default function WelcomePage({ onContinue }: WelcomePageProps) {
  const { continueAsGuest, login } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSignup, setShowSignup] = useState(false);
  const [selectedCauses, setSelectedCauses] = useState<string[]>([]);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Crisis in Congo',
      subtitle: 'Millions need immediate humanitarian aid'
    },
    {
      image: 'https://images.pexels.com/photos/6646892/pexels-photo-6646892.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Sudan Emergency',
      subtitle: 'Displacement crisis requires urgent response'
    },
    {
      image: 'https://images.pexels.com/photos/6646943/pexels-photo-6646943.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Global Refugee Crisis',
      subtitle: 'Over 100 million people displaced worldwide'
    }
  ];

  const causes = [
    'Refugees & Displacement',
    'Child Protection',
    'Emergency Medical Care',
    'Food Security',
    'Education',
    'Women\'s Rights',
    'Trauma Recovery',
    'Clean Water',
    'Shelter & Housing'
  ];

  const handleCauseToggle = (cause: string) => {
    setSelectedCauses(prev =>
      prev.includes(cause)
        ? prev.filter(c => c !== cause)
        : [...prev, cause]
    );
  };

  const handleSignup = () => {
    login({
      name: 'New User',
      email: 'user@example.com',
      causes: selectedCauses
    });
    onContinue();
  };

  const handleGuestContinue = () => {
    continueAsGuest();
    onContinue();
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-6">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-16 pb-8">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Tumaini</h2>
            </div>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Connect directly with verified humanitarian organizations to make a meaningful impact for those affected by crises worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGuestContinue}
                className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Continue as Guest
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => setShowSignup(true)}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Sign Up for Full Access
              </button>
            </div>

            
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Tumaini</h3>
                <p className="text-gray-600">Start making a difference today</p>
              </div>

              <div className="space-y-4 mb-6">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">What causes matter to you?</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {causes.map((cause) => (
                    <button
                      key={cause}
                      onClick={() => handleCauseToggle(cause)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                        selectedCauses.includes(cause)
                          ? 'bg-blue-50 border-blue-200 text-blue-700'
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {selectedCauses.includes(cause) && (
                        <Check className="w-4 h-4 inline mr-1" />
                      )}
                      {cause}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowSignup(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSignup}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Create Account
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    Bank-level security
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    50+ verified NGOs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}