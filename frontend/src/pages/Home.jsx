import React from 'react';
import { Shield, Users, Award, Clock, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeCategory, setActiveCategory] = React.useState('protect_family');
  const [plans, setPlans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchPlans();
  }, [activeCategory]);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/plans?category=${activeCategory}&type=lic`
      );
      const data = await response.json();
      setPlans(data.slice(0, 3));
    } catch (error) {
      console.error('Error fetching plans:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'protect_family', label: 'Protect my Family' },
    { id: 'wealth_creation', label: 'Wealth Creation' },
    { id: 'children_future', label: "Children's Future Planning" },
    { id: 'retirement_planning', label: 'Retirement Planning' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003876] to-[#005ba8] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-[#FFD700] text-[#003876] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              25+ Years of Trust
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Life Insurance Partner Since 2000
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Over 25 years of proven guidance helping families protect wealth and plan for the future
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919849664800"
                className="bg-[#FFD700] text-[#003876] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFC700] transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +91-9849664800
              </a>
              <a
                href="https://wa.me/919849664800"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#003876] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Award className="w-12 h-12 text-[#003876] mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-[#003876] mb-2">25+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Users className="w-12 h-12 text-[#003876] mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-[#003876] mb-2">1000+</h3>
                <p className="text-gray-600">Happy Families</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Shield className="w-12 h-12 text-[#003876] mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-[#003876] mb-2">100%</h3>
                <p className="text-gray-600">Claim Support</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Clock className="w-12 h-12 text-[#003876] mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-[#003876] mb-2">24/7</h3>
                <p className="text-gray-600">Available Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003876] mb-8 text-center">
              About V.S. Reddy - Your Trusted Advisor
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>Trusted Life Insurance Advisor with LIC of India since 2000</strong> — over 25 years of proven guidance helping families protect wealth and plan for the future.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Founder of <strong>SVR LIC Services</strong>, providing end-to-end policy support for individuals, NRIs, and business owners in Hyderabad and across India.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Specializing in retirement planning, pension-style guaranteed income plans, tax-saving policies, and high-value life cover for long-term family security
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Expert in digital policy onboarding using LIC's ANANDA module - clients can complete verification and activation fully online from anywhere in India (Pan India service)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Clear explanation, zero confusion, and handling all documentation personally
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Building long-term relationships, not one-time sales — most new clients come from referrals of families served for 10+ years
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Supporting NRIs and busy professionals remotely without branch visits
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-[#003876] text-white rounded-lg">
                <p className="text-center text-lg">
                  <strong>Call or WhatsApp V.S. Reddy at</strong>
                  <br />
                  <a href="tel:+919849664800" className="text-[#FFD700] text-2xl font-bold hover:underline">
                    +91-9849664800
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003876] mb-4 text-center">
            Buy LIC plans tailored for you!
          </h2>
          <p className="text-xl text-gray-600 mb-10 text-center">
            Discover insurance plans as per your needs
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#003876] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Plans Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading plans...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {plans.map((plan) => (
                <div key={plan.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">LIC's</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/plan/${plan.id}`}
                    className="block w-full bg-[#003876] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#002856] transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link
              to="/lic-plans"
              className="inline-block bg-[#FFD700] text-[#003876] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFC700] transition-colors"
            >
              View All LIC Plans
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003876] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need help in finding the right policy?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Our experts are all over India and ready to help you
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919849664800"
              className="bg-[#FFD700] text-[#003876] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFC700] transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +91-9849664800
            </a>
            <Link
              to="/contact"
              className="bg-white text-[#003876] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                        >
              Request Callback
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
