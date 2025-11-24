/*
###########################################################
# OWASP Boston Application Security Conference Website
# Date: 11/20/2025
# Modern React Conference Website
# Design by Jack Butler
###########################################################
*/

import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CodeOfConduct: React.FC = () => {
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
              <Shield className="h-16 w-16 text-blue-200 mr-4" />
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                  Code of Conduct
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2026 BASC Event Code of Conduct</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                All attendees, speakers, sponsors, and volunteers at our conference are required to agree to the following code of conduct. Organizers will enforce this code throughout the event. We expect cooperation from all participants to help ensure a safe environment for everybody.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-blue-900 font-semibold">
                  <strong>Need Help?</strong> Find any of the event volunteers or staff members to help you in any situation.
                </p>
              </div>
            </div>

            {/* The Quick Version */}
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
                The Quick Version
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, race, religion, etc… We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter, and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.
                </p>
              </div>
            </motion.div>

            {/* The Less Quick Version */}
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
                The Less Quick Version
              </h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Attendees, staff, sponsors, and exhibitors at Foundation Conferences and Events shall together provide a harassment-free experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, age, or religion. We do not tolerate harassment of conference participants in any form. Additionally, participating in our events means you shall also adhere to the Code of Conduct.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Conference participants who violate these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers. Harassment includes offensive verbal comments related to gender, sexual orientation, disability, physical appearance, body size, race, or religion, and actions such as deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Participants who are asked to stop any harassing behavior are expected to comply immediately.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Exhibitors in the expo hall, sponsor or vendor booths, or similar activities are also subject to the anti-harassment policy. In particular, exhibitors should not use sexualized images, activities, or other material. Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    If a participant engages in harassing behavior, the conference organizers may take appropriate action, including warning the offender or expulsion from the conference with no refund.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Conference staff will be available to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <div className="grid gap-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <p className="text-gray-700">We value your attendance.</p>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <p className="text-gray-700">We expect participants to follow these rules at conference and workshop venues and conference-related social events.</p>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <p className="text-gray-700">We hope you enjoy the event.</p>
                </div>
              </div>
            </motion.div>

            {/* Legal Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="border-t border-gray-200 pt-8"
            >
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  OWASP, the OWASP logo, and Global AppSec are registered trademarks and AppSec Days, AppSec California, AppSec Cali, SnowFROC, OWASP Boston Application Security Conference, and LASCON are trademarks of the OWASP Foundation, Inc. Unless otherwise specified, all content on the site is Creative Commons Attribution-ShareAlike v4.0 and provided without warranty of service or accuracy. For more information, please refer to our General Disclaimer. OWASP does not endorse or recommend commercial products or services, allowing our community to remain vendor neutral with the collective wisdom of the best minds in software security worldwide. Copyright 2025, OWASP Foundation, Inc.
                </p>
              </div>
            </motion.div>

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

export default CodeOfConduct;
