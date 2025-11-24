/*
###########################################################
# OWASP Boston Application Security Conference Website
# Date: 11/20/2025
# Modern React Conference Website
# Design by Jack Butler
###########################################################
*/

import React from 'react';
import { Users, ArrowLeft, ExternalLink, Clock, Target, CheckCircle, XCircle, Star, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SpeakerGuidelines: React.FC = () => {
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
              <Users className="h-16 w-16 text-blue-200 mr-4" />
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                  Speaker Guidelines
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
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Application Security practitioners, software engineers, and researchers from all over the world gather at OWASP's BASC conferences to discover, present and discuss the latest developments in software security, collaborate with their peers, and share the newest innovations in the field.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-900 font-semibold">
                  The conference will take place on April 11, 2026 in Boston, MA. The event will also offer hands-on training with vetted and leading trainers on the same day.
                </p>
              </div>
            </div>

            {/* Call for Presentations */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                Call for Presentations & Workshops
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The OWASP BASC Team is formally issuing a call for presentations, opening Nov 1st, 2025, and closing Jan 11th, 2026, at 11:59 EST.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sessions will be scheduled for <strong>45 minutes or 20 minutes</strong>, with an additional expected 5-10 minute Q&A period.
                </p>
              </div>
            </motion.div>

            {/* Tracks */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                Conference Tracks
              </h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">LEADERSHIP</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Show the community how to create an effective AppSec culture, communicating AppSec value to leadership, or case studies about risk tradeoffs.
                  </p>
                  <p className="text-gray-700 font-semibold">Key themes:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>State of Security</li>
                    <li>AppSec Strategy & Trends</li>
                    <li>Compliance, Regulation & Policy</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">RESEARCH</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you are a project leader and want to share updates on your OWASP project with the community, this would be the track for you! If you are working on something new or improving an existing area we would love to hear from you.
                  </p>
                  <p className="text-gray-700 font-semibold">Key themes:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>OSS Security Threats</li>
                    <li>State of AI</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">DEVELOPER</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Show the community how to build more secure apps, how to securely use technology in our code, and how to secure our systems at scale.
                  </p>
                  <p className="text-gray-700 font-semibold">Key themes:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>OWASP Projects Usage</li>
                    <li>Is DevSecOps Dead or has it changed?</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Important Dates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                Important Dates
              </h2>
              <div className="grid gap-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <div className="flex justify-between w-full">
                    <span className="text-gray-700">Opens:</span>
                    <span className="font-semibold text-green-600">November 1, 2025</span>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <div className="flex justify-between w-full">
                    <span className="text-gray-700">Closes:</span>
                    <span className="font-semibold">January 11th, 2026</span>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <div className="flex justify-between w-full">
                    <span className="text-gray-700">Notification:</span>
                    <span className="font-semibold">Week of Jan 26, 2026</span>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <div className="flex justify-between w-full">
                    <span className="text-gray-700">Program Announced:</span>
                    <span className="font-semibold">Week of Feb 9, 2026</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Review Considerations - What Gets Disqualified */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                Submission Will Be Disqualified If:
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      Your submission was submitted by someone who is not one of the speakers such as the marketing team or a marketing agency.
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      Your submission has self-identifying elements in its abstract, outline, slides, past presentations, etc. OWASP strives to have a completely blind review process.
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      Your submission is identified as having been generated by an AI.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* What Makes Top Submissions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                Top Scored Submissions:
              </h2>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Have a clear abstract that describes an interesting and relevant talk
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Have an outline that leaves no doubts about the structure of the talk and the timings
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Tell the reviewer exactly what you will be covering - don't keep secrets!
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Discuss a new or novel topic that attendees couldn't see in previous conferences
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Describe a real-life story of how you solved a problem in a real-world environment
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Demonstrate clear takeaways that attendees can immediately implement
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Top Reasons for Rejection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                Top Reasons Submissions Get Rejected:
              </h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      No clear link to the conference topics
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      Poorly formatted or significant spelling and grammatical mistakes
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      Submission sounds like it was created by an AI
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      Sounds like a direct sales pitch for your product
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      Full of buzzwords without clarity on tangible value
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      Too short - lacks sufficient details for proper review
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Sample Submissions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Sample High-Quality Submissions
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                <p className="text-gray-700 mb-4">
                  You can see sample, high-quality submissions to help guide your own submission:
                </p>
                <a 
                  href="https://docs.google.com/document/d/1m_IroyqjYwGL-8arwAxY-aDxWCH_3xda0BjNytkvaQ0/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
                >
                  View Sample Submissions
                  <ExternalLink className="h-5 w-5 ml-2" />
                </a>
              </div>
            </motion.div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Questions about Speaking?
              </h3>
              <p className="text-gray-700 mb-4">
                For any questions, please reach out to the event organizers.
              </p>
              <a 
                href="mailto:basc-organizers@owasp.org?subject=BASC 2026 Speaker Guidelines Question"
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

export default SpeakerGuidelines;
