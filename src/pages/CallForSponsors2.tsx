/*
###########################################################
# OWASP Boston Application Security Conference Website
# Date: 11/20/2025
# Modern React Conference Website
# Design by Jack Butler
###########################################################
*/

import React from 'react';
import { Briefcase, ArrowLeft, ExternalLink, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallForSponsors: React.FC = () => {
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
              <Briefcase className="h-16 w-16 text-blue-200 mr-4" />
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                  Call for Sponsors
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
            {/* Sponsorship Kit Link */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Become a BASC 2026 Sponsor
              </h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Download our Sponsorship Kit
                </h3>
                <p className="text-gray-700 mb-6">
                  Get detailed information about sponsorship opportunities, packages, and benefits.
                </p>
                
                <a 
                  href="https://basconf.org/assets/files/OWASP%20BASC%202026%20Sponsorship%20Kit.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Sponsorship Kit (PDF)
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Placeholder for Google Form */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="h-10 w-10 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sponsorship Application Form
                </h3>
                
                <p className="text-gray-600 mb-6">
                  The sponsorship application form will be embedded here soon. 
                  In the meantime, please download the sponsorship kit above for detailed information.
                </p>
                
                <div className="text-sm text-gray-500">
                  <p>Coming Soon: Google Form Integration</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Questions about Sponsorship?
              </h3>
              <p className="text-gray-700 mb-4">
                Contact our organizing team for more information about sponsorship opportunities.
              </p>
              <a 
                href="mailto:basc-organizers@owasp.org?subject=BASC 2026 Sponsorship Inquiry"
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

export default CallForSponsors;
