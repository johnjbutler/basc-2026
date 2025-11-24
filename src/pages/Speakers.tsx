import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Twitter, Globe, Mail, Users, Building, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  image: string;
  bio: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    email?: string;
  };
  achievements: string[];
  sessions: string[];
}

const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    title: 'Chief Security Officer',
    company: 'TechSecure Inc.',
    image: 'https://us.images.westend61.de/0001742086pw/businesswoman-speaking-from-a-podium-in-a-seminar-female-professional-addressing-a-conference-JLPSF15159.jpg',
    bio: 'Dr. Sarah Chen is a renowned cybersecurity expert with over 15 years of experience in application security. She has led security initiatives at Fortune 500 companies and holds a Ph.D. in Computer Science from MIT. Her research focuses on AI-driven security solutions and zero-trust architectures.',
    expertise: ['Application Security', 'AI in Cybersecurity', 'Cloud Security', 'Zero Trust'],
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen_sec',
      website: 'https://sarahchen.dev',
      email: 'sarah@techsecure.com'
    },
    achievements: [
      'Named Security Executive of the Year 2024',
      'Author of "AI-Powered Security" (O\'Reilly, 2023)',
      '25+ patents in cybersecurity technology'
    ],
    sessions: [
      'Opening Keynote: The Future of Application Security',
      'AI in Security: Opportunities and Threats'
    ]
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    title: 'Senior Security Architect',
    company: 'CloudDefend Solutions',
    image: 'https://images.pexels.com/photos/6949416/pexels-photo-6949416.jpeg',
    bio: 'Mike Rodriguez is a security architect specializing in OWASP standards and secure development practices. With 12 years in the industry, he has helped numerous organizations implement comprehensive security programs and has contributed extensively to OWASP projects.',
    expertise: ['OWASP Standards', 'Secure Development', 'DevSecOps', 'Penetration Testing'],
    social: {
      linkedin: 'https://linkedin.com/in/mikerodriguez',
      twitter: 'https://twitter.com/mike_sec',
      website: 'https://mikerodriguez.security'
    },
    achievements: [
      'OWASP Top 10 contributor for 2023 and 2024',
      'Certified Ethical Hacker (CEH)',
      'Speaker at 50+ security conferences'
    ],
    sessions: [
      'OWASP Top 10 2024: What\'s Changed?'
    ]
  },
  {
    id: '3',
    name: 'Alex Thompson',
    title: 'DevSecOps Lead',
    company: 'SecurePipeline Corp',
    image: 'https://static.vecteezy.com/system/resources/previews/047/353/174/non_2x/confidence-business-man-giving-speech-at-conference-photo.jpeg',
    bio: 'Alex Thompson is a DevSecOps evangelist who has revolutionized security integration in CI/CD pipelines. He specializes in automation, container security, and has built security toolchains for companies ranging from startups to enterprise organizations.',
    expertise: ['DevSecOps', 'Container Security', 'CI/CD Security', 'Automation'],
    social: {
      linkedin: 'https://linkedin.com/in/alexthompson',
      website: 'https://devsecopsguru.com',
      email: 'alex@securepipeline.com'
    },
    achievements: [
      'Kubernetes Security Specialist certification',
      'Created open-source security scanner with 10k+ stars',
      'DevSecOps Innovator Award 2023'
    ],
    sessions: [
      'DevSecOps Implementation Workshop'
    ]
  },
  {
    id: '4',
    name: 'Dr. Jennifer Park',
    title: 'AI Research Director',
    company: 'CyberAI Labs',
    image: 'https://c8.alamy.com/comp/2RB52A8/presentation-teamwork-and-businesswoman-talking-to-colleagues-in-the-office-conference-room-discussion-meeting-and-professional-female-manager-2RB52A8.jpg',
    bio: 'Dr. Jennifer Park leads groundbreaking research in artificial intelligence applications for cybersecurity. She has published over 40 research papers and her work on machine learning-based threat detection has been adopted by major security vendors worldwide.',
    expertise: ['AI/ML Security', 'Threat Intelligence', 'Research & Development', 'Machine Learning'],
    social: {
      linkedin: 'https://linkedin.com/in/jenniferpark',
      twitter: 'https://twitter.com/jenpark_ai',
      website: 'https://jenniferpark.ai'
    },
    achievements: [
      'IEEE Fellow in Cybersecurity',
      '40+ peer-reviewed publications',
      'Winner of AI Security Research Award 2024'
    ],
    sessions: [
      'AI in Security: Opportunities and Threats'
    ]
  },
  {
    id: '5',
    name: 'Robert Kim',
    title: 'Principal Security Engineer',
    company: 'CodeSecure Technologies',
    image: 'https://images.pexels.com/photos/8761319/pexels-photo-8761319.jpeg',
    bio: 'Robert Kim is an expert in secure code review and static analysis. He has developed security methodologies that have been adopted across the industry and regularly trains development teams on secure coding practices.',
    expertise: ['Secure Code Review', 'Static Analysis', 'Vulnerability Assessment', 'Security Training'],
    social: {
      linkedin: 'https://linkedin.com/in/robertkim',
      twitter: 'https://twitter.com/robkim_sec',
      email: 'robert@codesecure.tech'
    },
    achievements: [
      'CISSP and CSSLP certified',
      'Author of "Secure Code Review Handbook"',
      'Trained 1000+ developers in secure coding'
    ],
    sessions: [
      'Secure Code Review Best Practices'
    ]
  },
  {
    id: '6',
    name: 'Lisa Johnson',
    title: 'VP of Security Culture',
    company: 'SecureOrg Consulting',
    image: 'https://www.shutterstock.com/shutterstock/photos/1857228814/display_1500/stock-photo-smiling-businesswoman-delivering-a-speech-during-a-conference-successful-business-professional-1857228814.jpg',
    bio: 'Lisa Johnson specializes in building security-conscious cultures within organizations. She has helped transform security practices at over 100 companies and is a recognized expert in security awareness and organizational change management.',
    expertise: ['Security Culture', 'Organizational Change', 'Security Awareness', 'Leadership'],
    social: {
      linkedin: 'https://linkedin.com/in/lisajohnson',
      website: 'https://secureorg.consulting',
      email: 'lisa@secureorg.consulting'
    },
    achievements: [
      'Security Culture Transformation Award',
      'Keynote speaker at 30+ leadership conferences',
      'Certified Change Management Professional'
    ],
    sessions: [
      'Building Security Culture in Organizations'
    ]
  }
];

interface SpeakerModalProps {
  speaker: Speaker;
  isOpen: boolean;
  onClose: () => void;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 bg-white rounded-full shadow-md z-10"
            >
              <X size={24} />
            </button>
            
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Speaker Image and Basic Info */}
                <div className="flex-shrink-0">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-64 h-64 object-cover rounded-2xl shadow-lg mx-auto lg:mx-0"
                  />
                  <div className="mt-6 text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{speaker.name}</h2>
                    <p className="text-xl text-blue-600 font-semibold mb-1">{speaker.title}</p>
                    <p className="text-lg text-gray-600 mb-4">{speaker.company}</p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start space-x-4">
                      {speaker.social.linkedin && (
                        <a
                          href={speaker.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                      {speaker.social.twitter && (
                        <a
                          href={speaker.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                        >
                          <Twitter size={20} />
                        </a>
                      )}
                      {speaker.social.website && (
                        <a
                          href={speaker.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                        >
                          <Globe size={20} />
                        </a>
                      )}
                      {speaker.social.email && (
                        <a
                          href={`mailto:${speaker.social.email}`}
                          className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                        >
                          <Mail size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Detailed Information */}
                <div className="flex-1">
                  {/* Biography */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Users className="mr-3 text-blue-600" size={24} />
                      Biography
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{speaker.bio}</p>
                  </div>
                  
                  {/* Expertise */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
                    <div className="flex flex-wrap gap-3">
                      {speaker.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="mr-3 text-blue-600" size={24} />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {speaker.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 text-lg">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Sessions */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Building className="mr-3 text-blue-600" size={24} />
                      Conference Sessions
                    </h3>
                    <ul className="space-y-3">
                      {speaker.sessions.map((session, index) => (
                        <li key={index} className="bg-gray-50 p-4 rounded-lg">
                          <span className="text-gray-900 font-semibold text-lg">{session}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert
            <span className="block text-blue-600">Speakers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Learn from industry leaders, security experts, and innovative thinkers who are shaping 
            the future of application security. Our speakers bring decades of combined experience 
            and cutting-edge insights to OWASP BASC 2026.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-gray-600">Expert Speakers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Years Avg Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Industry Awards</div>
            </div>
          </div>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedSpeaker(speaker)}
            >
              {/* Speaker Image */}
              <div className="relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-3">
                    {speaker.social.linkedin && (
                      <div className="p-2 bg-white/90 text-blue-600 rounded-full hover:bg-white transition-colors">
                        <Linkedin size={16} />
                      </div>
                    )}
                    {speaker.social.twitter && (
                      <div className="p-2 bg-white/90 text-blue-400 rounded-full hover:bg-white transition-colors">
                        <Twitter size={16} />
                      </div>
                    )}
                    {speaker.social.website && (
                      <div className="p-2 bg-white/90 text-gray-600 rounded-full hover:bg-white transition-colors">
                        <Globe size={16} />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-1">{speaker.title}</p>
                <p className="text-gray-600 mb-4">{speaker.company}</p>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {speaker.expertise.slice(0, 2).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {speaker.expertise.length > 2 && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                      +{speaker.expertise.length - 2} more
                    </span>
                  )}
                </div>

                {/* Bio Preview */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {speaker.bio.substring(0, 120)}...
                </p>

                {/* View Profile Button */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                    View Full Profile →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join Our Speaker Lineup
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Share your expertise with the security community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg">
                Submit Your Proposal
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all font-semibold text-lg">
                Speaker Guidelines
              </button>
            </div>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-600">
            <Link 
              to="/" 
              className="hover:text-blue-600 transition-colors font-medium"
            >
              ← Back to Home
            </Link>
            <span className="hidden sm:block text-gray-400">|</span>
            <Link 
              to="/#about" 
              className="hover:text-blue-600 transition-colors font-medium"
              onClick={() => {
                window.location.href = '/#about';
              }}
            >
              About OWASP
            </Link>
            <span className="hidden sm:block text-gray-400">|</span>
            <Link 
              to="/#program" 
              className="hover:text-blue-600 transition-colors font-medium"
              onClick={() => {
                window.location.href = '/#program';
              }}
            >
              View Program
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Speaker Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        isOpen={!!selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </div>
  );
};

export default Speakers;