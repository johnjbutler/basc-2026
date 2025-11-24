/*
###########################################################
# OWASP Boston Application Security Conference Website
# Date: 11/20/2025
# Modern React Conference Website
# Design by Jack Butler
###########################################################
*/

import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Filter, ChevronDown, Menu, X, Shield, Hotel } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';

// import Speakers from './pages/Speakers';
import CodeOfConduct from './pages/CodeOfConduct';
import CallForSponsors from './pages/CallForSponsors';
import SpeakerGuidelines from './pages/SpeakerGuidelines';

// ⭐ Dynamic base URL for GitHub Pages / local development
const BASE = import.meta.env.BASE_URL;

interface Event {
  id: string;
  title: string;
  speaker: string;
  time: string;
  duration: string;
  track: string;
  type: string;
}

const mockEvents: Event[] = [
  { id: '1', title: 'Coming Soon!', speaker: 'TBD', time: '09:00', duration: '45 min', track: 'Development', type: 'Speaker' },
  { id: '2', title: 'Coming Soon!', speaker: 'TBD', time: '10:00', duration: '20 min', track: 'Development', type: 'Workshop' },
  { id: '3', title: 'Coming Soon!', speaker: 'TBD', time: '10:45', duration: '45 min', track: 'Research', type: 'Speaker' },
  { id: '4', title: 'Coming Soon!', speaker: 'TBD', time: '11:30', duration: '20 min', track: 'Leadership', type: 'Keynote' },
  { id: '5', title: 'Coming Soon!', speaker: 'TBD', time: '14:00', duration: '45 min', track: 'Research', type: 'Workshop' },
  { id: '6', title: 'Coming Soon!', speaker: 'TBD', time: '15:00', duration: '20 min', track: 'Leadership', type: 'Speaker' }
];

const sponsors = [
  { name: 'Coming Soon', logo: '/api/placeholder/150/80' },
  { name: 'Coming Soon', logo: '/api/placeholder/150/80' },
  { name: 'Coming Soon', logo: '/api/placeholder/150/80' },
  { name: 'Coming Soon', logo: '/api/placeholder/150/80' },
  { name: 'Coming Soon', logo: '/api/placeholder/150/80' },
  { name: 'Coming Soon', logo: '/api/placeholder/150/80' },
  { name: 'Coming Soon', logo: '/api/placeholder/150/80' },
  { name: 'Coming Soon', logo: '/api/placeholder/150/80' }
];

// Navigation Component
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const goTo = (hash: string) => {
    if (location.pathname !== '/') {
      window.location.href = `${BASE}#${hash}`;
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (path: string) => {
    return location.pathname.replace(BASE, '/') === path;
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ⭐ Logo - GitHub Pages compatible */}
          <Link 
            to="/" 
            className="flex items-center space-x-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={`${BASE}owasp-logo.png`}
              alt="OWASP Logo"
              className="h-8 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">BASC</span>
              <span className="text-sm text-gray-600 ml-2">2026</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <button 
              onClick={() => goTo("program")} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Program
            </button>
            <button 
              onClick={() => goTo("sponsors")} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Event Sponsors
            </button>
            <button 
              onClick={() => goTo("about")} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <Link
              to="/callforsponsors"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              Call for Sponsors
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-2">
              <Link 
                to="/" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Home
              </Link>
              <button 
                onClick={() => { setIsMenuOpen(false); goTo("program"); }} 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
              >
                Program
              </button>
              <button 
                onClick={() => { setIsMenuOpen(false); goTo("sponsors"); }} 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
              >
                Event Sponsors
              </button>
              <button 
                onClick={() => { setIsMenuOpen(false); goTo("about"); }} 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
              >
                About
              </button>
              <Link
                to="/callforsponsors"
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium block text-center"
              >
                Call for Sponsors
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// HomePage Component - Complete Implementation
const HomePage: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const tracks = ['all', 'Main Stage', 'Leadership', 'Development', 'Research'];
  const eventTypes = ['all', 'Speaking', 'Workshop', 'Keynote'];

  const filteredEvents = mockEvents.filter(event => {
    const matchesTrack = selectedTrack === 'all' || event.track === selectedTrack;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesTrack && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Shield className="h-16 w-16 text-white" />
              <div className="text-left">
                <h1 className="text-6xl lg:text-8xl font-bold mb-2">BASC</h1>
                <p className="text-2xl lg:text-3xl font-light">2026</p>
              </div>
            </div>
            
            <p className="text-2xl lg:text-4xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Boston Application Security Conference
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 text-lg">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Calendar className="w-6 h-6" />
                <span>April 11, 2026</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Hotel className="w-6 h-6" />
                <span>Boston Marriott Cambridge</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <MapPin className="w-6 h-6" />
                <span>50 Broadway, Cambridge MA 02142</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Users className="w-6 h-6" />
                <span>300+ Security Professionals Expected</span>
              </motion.div>
            </div>
            
            <motion.div 
              className="space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link
                to="/callforsponsors"
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Call for Sponsors
              </Link>
              <a 
                href="https://sessionize.com/owasp-basc-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-block"
              >
                Call for Speakers
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Conference Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Two days of cutting-edge application security content, workshops, and networking opportunities with industry leaders and security researchers.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-wrap gap-4 justify-center items-center"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            
            <div className="relative">
              <select
                value={selectedTrack}
                onChange={(e) => setSelectedTrack(e.target.value)}
                className="appearance-none bg-white border-2 border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {tracks.map(track => (
                  <option key={track} value={track}>
                    {track === 'all' ? 'All Tracks' : track}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="appearance-none bg-white border-2 border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {eventTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* Schedule Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    event.type === 'Keynote' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                    event.type === 'Workshop' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                    'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  }`}>
                    {event.type}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {event.duration}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                <p className="text-gray-600 mb-4 font-medium">by {event.speaker}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{event.time}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-medium text-gray-700">{event.track}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About OWASP Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">About OWASP</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Open Worldwide Application Security Project (OWASP) is a nonprofit foundation that works to improve the security of software. Through community-led open source software projects, hundreds of local chapters worldwide, tens of thousands of members, and by hosting local and global conferences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">Built by volunteers from around the world who share a passion for application security.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Open Source</h3>
              <p className="text-gray-600">All OWASP materials are freely available and open source under an approved open source license.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education & Training</h3>
              <p className="text-gray-600">Leading educational conferences and training programs advancing application security knowledge.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Event Sponsors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proudly supported by industry leaders who believe in advancing application security
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-items-center mb-12">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 group-hover:bg-white group-hover:scale-110 group-hover:shadow-xl">
                  <div className="w-32 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                    {sponsor.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/callforsponsors"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Become a Sponsor
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={`${BASE}owasp-logo.png`}
                  alt="OWASP Logo"
                  className="h-8 w-auto invert"
                />
                <div>
                  <span className="text-xl font-bold">OWASP BASC</span>
                  <span className="text-sm text-gray-400 ml-2">2026</span>
                </div>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                The premier application security conference, bringing together security professionals, 
                developers, and researchers to advance the field of application security.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link 
                    to="/" 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Program
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('sponsors')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Sponsors
                  </button>
                </li>
                <li>
                  <a 
                    href="https://sessionize.com/owasp-basc-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Call for Speakers
                  </a>
                </li>
                <li>
                  <Link 
                    to="/speaker-guidelines"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    Speaker Guidelines
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/callforsponsors"
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Call for Sponsors
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="mailto:basc-organizers@owasp.org" className="hover:text-white transition-colors">
                    basc-organizers@owasp.org
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                  >
                    About OWASP
                  </button>
                </li>
                <li>
                  <Link 
                    to="/code-of-conduct"
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Code of Conduct
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 OWASP Boston Application Security Conference. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router basename={BASE}>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/callforsponsors" element={<CallForSponsors />} />
          <Route path="/speaker-guidelines" element={<SpeakerGuidelines />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
