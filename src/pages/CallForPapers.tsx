/*
###########################################################
# OWASP Boston Application Security Conference Website
# Date: 11/20/2025
# Modern React Conference Website
# Design by Jack Butler
###########################################################
*/

import React from 'react';
import { PresentationChart, ArrowLeft, ExternalLink, Users, Code, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallForPapers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center mb-6">
              <PresentationChart className="h-16 w-16 text-blue-200 mr-4" />
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                  Call for Papers & Workshops
                </h1>
                <p className="text-xl text-blue-100">
                  2026 Boston Application Security Conference - April 11
                </p>
              </div>
            </div>
            
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors mt-6"
              onClick={() => {
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Conference Home
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                OWASP BASC 2026 Call For Papers and Workshops is now Open!
              </h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8">
                <p className="text-2xl text-blue-900 font-bold mb-4">
                  This year's theme is Trends & Innovation!
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We are looking for talks and workshops across three different tracks - Leadership, Development & Research
                </p>
                
                <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
                  <p className="text-lg text-gray-800 mb-4">
                    <strong>Ready to submit?</strong> Please submit your talk/workshop proposal through Sessionize:
                  </p>
                  <a 
                    href="https://sessionize.com/owasp-basc-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
                  >
                    Submit on Sessionize
                    <ExternalLink className="h-5 w-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Tracks */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership</h3>
                <p className="text-gray-700">
                  Security leadership, governance, strategy, and organizational transformation
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl"
              >
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
                <p className="text-gray-700">
                  Secure coding, DevSecOps, application security testing, and development practices
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl"
              >
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Research</h3>
                <p className="text-gray-700">
                  Cutting-edge security research, emerging threats, innovative solutions, and academic research
                </p>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                Ready to Share Your Expertise?
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Submit your talk or workshop proposal through our Sessionize platform
              </p>
              
              <a 
                href="https://sessionize.com/owasp-basc-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Submit Your Proposal on Sessionize
                <ExternalLink className="h-5 w-5 ml-2" />
              </a>
            </motion.div>

            {/* Additional Information */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  What We're Looking For
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Innovative approaches to application security
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Practical implementation experiences
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emerging technologies and security implications
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Case studies and lessons learned
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Important Dates
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>CFP Opens:</span>
                    <span className="font-semibold text-green-600">Now Open</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Submission Deadline:</span>
                    <span className="font-semibold">February 15, 2026</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Speaker Notification:</span>
                    <span className="font-semibold">March 1, 2026</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Conference Date:</span>
                    <span className="font-semibold text-blue-600">April 11, 2026</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <a 
                    href="https://sessionize.com/owasp-basc-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Submit Now →
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Questions about Speaking?
              </h3>
              <p className="text-gray-700 mb-4">
                Contact our organizing team for more information about speaking opportunities.
              </p>
              <a 
                href="mailto:basc-organizers@owasp.org?subject=BASC 2026 Speaking Inquiry"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                basc-organizers@owasp.org
              </a>
            </div>

            {/* Back Button */}
            <div className="text-center mt-12">
              <Link 
                to="/" 
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
                onClick={() => {
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                }}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Return to Conference Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CallForPapers;
