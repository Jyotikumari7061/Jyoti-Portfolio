import React, { useState, useEffect } from 'react';
import { ChevronDown, Code2, BarChart3, Database, TrendingUp } from 'lucide-react';

const Hero = ({ data }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const fullText = "DATA ANALYST";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowStats(true), 500);
    }
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Code2, value: "2+", label: "PROJECTS", color: "#1E40AF" },
    { icon: Database, value: "100%", label: "COMMITMENT", color: "#0066CC" },
    { icon: BarChart3, value: "BCA", label: "GRADUATE", color: "#06B6D4" },
    { icon: TrendingUp, value: "∞", label: "LEARNING", color: "#1D4ED8" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 section-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-600/10 to-blue-600/10 rounded-full blur-3xl floating-element" style={{animationDelay: '-3s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Section */}
        <div className="mb-12">
          <div className="relative inline-block mb-8">
            <div className="relative">
              <img
                src={data.profileImage}
                alt="Jyoti Kumari"
                className="w-56 h-56 md:w-72 md:h-72 object-cover mx-auto rounded-3xl shadow-2xl border-4 border-white/20"
                style={{ aspectRatio: '1/1' }}
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl transform scale-110"></div>
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg floating-element">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg floating-element" style={{animationDelay: '-2s'}}>
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-12">
          <h1 className="hero-title mb-6">{data.name}</h1>
          <div className="text-big mb-6">
            <span className="text-gray-300">Transitioning to</span>
            <br />
            <span className="animated-gradient font-bold text-4xl md:text-6xl">
              {displayText}<span className="animate-pulse text-blue-500">|</span>
            </span>
          </div>
          <p className="text-body max-w-3xl mx-auto leading-relaxed">
            {data.tagline}
          </p>
        </div>

        {/* Current Role Badge */}
        <div className="mb-12">
          <div className="inline-block glass-card backdrop-blur-xl">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <span className="label text-sm">CURRENTLY</span>
                <div className="text-regular text-primary">{data.currentRole}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        {showStats && (
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="glass-card text-center fade-in-up animate"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="label text-xs">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              VIEW PROJECTS
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              HIRE ME
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="animate-bounce hover:text-blue-400 transition-colors group"
        >
          <div className="flex flex-col items-center">
            <span className="label text-xs mb-2 opacity-70 group-hover:opacity-100">EXPLORE</span>
            <ChevronDown size={32} className="text-blue-500" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;