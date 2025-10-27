import React from 'react';
import { Award, Shield, Users, Heart, CheckCircle, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003876] mb-4">
            About VSR INSURANCE PLUS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Trusted Life Insurance Partner Since 2000
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* About V.S. Reddy */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-[#003876]" />
              <h2 className="text-3xl font-bold text-[#003876]">
                Meet V.S. Reddy
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>Trusted Life Insurance Advisor with LIC of India since 2000</strong> — 
                over 25 years of proven guidance helping families protect wealth and plan for the future.
              </p>

              <p>
                V.S. Reddy is the founder of <strong>SVR LIC Services</strong>, providing end-to-end policy 
                support for individuals, NRIs, and business owners in Hyderabad and across India.
              </p>

              <div className="bg-[#f0f7ff] p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold text-[#003876] mb-4">Areas of Expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Retirement Planning:</strong> Pension-style guaranteed income plans for secure retirement
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Tax-Saving Policies:</strong> Maximizing tax benefits under Section 80C and 10(10D)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>High-Value Life Cover:</strong> Long-term family security with substantial protection
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Digital Onboarding:</strong> Expert in LIC's ANANDA module for fully online policy activation from anywhere in India
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Term Insurance:</strong> Affordable life cover for earning members and families
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Child Education Plans:</strong> Securing your children's educational future
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Monthly Income Plans:</strong> Guaranteed income for parents and senior citizens
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-[#003876]" />
              <h2 className="text-3xl font-bold text-[#003876]">
                Why Choose VSR Insurance Plus
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#003876] p-3 rounded-full flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Long-Term Relationships
                  </h3>
                  <p className="text-gray-600">
                    We build lasting relationships, not one-time sales. Most new clients come from referrals 
                    of families we've served for 10+ years.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#003876] p-3 rounded-full flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Personal Service
                  </h3>
                  <p className="text-gray-600">
                    Clear explanation, zero confusion, and we handle all documentation personally. 
                    You're never left wondering what happens next.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#003876] p-3 rounded-full flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Lifetime Support
                  </h3>
                  <p className="text-gray-600">
                    We stay available for service and claims even after purchase. Your policy is not just 
                    sold - it's serviced throughout its life.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#003876] p-3 rounded-full flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Pan India Service
                  </h3>
                  <p className="text-gray-600">
                    Supporting NRIs and busy professionals remotely without branch visits. Digital onboarding 
                    available from anywhere in India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#003876] to-[#005ba8] text-white p-8 rounded-lg text-center">
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-lg">Years of Trust & Experience</div>
            </div>
            <div className="bg-gradient-to-br from-[#003876] to-[#005ba8] text-white p-8 rounded-lg text-center">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg">Families Protected</div>
            </div>
            <div className="bg-gradient-to-br from-[#003876] to-[#005ba8] text-white p-8 rounded-lg text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg">Claim Assistance</div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#003876] text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Secure Your Family's Future?
            </h2>
            <p className="text-lg mb-6">
              Call or WhatsApp V.S. Reddy for personalized insurance guidance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919849664800"
                className="bg-[#FFD700] text-[#003876] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFC700] transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +91-9849664800
              </a>
              <a
                href="https://wa.me/919849664800"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#003876] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
