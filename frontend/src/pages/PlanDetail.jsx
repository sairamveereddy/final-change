import React from 'react';
import { CheckCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { useParams } from 'react-router-dom';

const PlanDetail = () => {
  const { id } = useParams();
  const [plan, setPlan] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [showFullDetails, setShowFullDetails] = React.useState(false);

  React.useEffect(() => {
    fetchPlan();
  }, [id]);

  const fetchPlan = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/plans/${id}`
      );
      const data = await response.json();
      setPlan(data);
    } catch (error) {
      console.error('Error fetching plan:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading plan details...</p>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Plan not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Plan Header */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <div className="mb-6">
              <span className="inline-block bg-[#003876] text-white px-4 py-1 rounded-full text-sm mb-4">
                {plan.type === 'lic' ? 'LIC Plan' : 'HDFC ERGO Plan'}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[#003876] mb-4">
                {plan.name}
              </h1>
              <p className="text-xl text-gray-700">{plan.short_description}</p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who It's For */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who It's For</h2>
              <p className="text-gray-700 leading-relaxed">{plan.who_its_for}</p>
            </div>

            {/* Key Benefits */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h2>
              <p className="text-gray-700 leading-relaxed">{plan.key_benefits}</p>
            </div>

            {/* More Details Toggle */}
            <div className="mb-6">
              <button
                onClick={() => setShowFullDetails(!showFullDetails)}
                className="flex items-center gap-2 text-[#003876] font-semibold hover:text-[#002856] transition-colors"
              >
                <span>More Details</span>
                {showFullDetails ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {showFullDetails && (
                <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Full Details</h3>
                  <p className="text-gray-700 leading-relaxed">{plan.full_details}</p>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="bg-[#003876] text-white p-6 rounded-lg text-center">
              <p className="text-lg mb-4">
                <strong>Interested in this plan?</strong>
              </p>
              <p className="mb-6">Call or WhatsApp V.S. Reddy for expert guidance</p>
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
    </div>
  );
};

export default PlanDetail;
