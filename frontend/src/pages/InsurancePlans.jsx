import React from 'react';
import { CheckCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsurancePlans = () => {
  const [plans, setPlans] = React.useState([]);
  const [filteredPlans, setFilteredPlans] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    fetchPlans();
  }, []);

  React.useEffect(() => {
    filterPlans();
  }, [activeCategory, searchTerm, plans]);

  const fetchPlans = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/plans?type=hdfc`
      );
      const data = await response.json();
      setPlans(data);
      setFilteredPlans(data);
    } catch (error) {
      console.error('Error fetching plans:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPlans = () => {
    let filtered = plans;

    if (activeCategory !== 'all') {
      filtered = filtered.filter((plan) => plan.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter((plan) =>
        plan.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPlans(filtered);
  };

  const categories = [
    { id: 'all', label: 'All Plans' },
    { id: 'health', label: 'Health Insurance' },
    { id: 'motor', label: 'Motor Insurance' },
    { id: 'travel', label: 'Travel Insurance' },
    { id: 'home', label: 'Home Insurance' },
    { id: 'accident', label: 'Accident Insurance' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003876] mb-4">
            HDFC ERGO Insurance Plans
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive health, motor, travel, home, and accident insurance solutions
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for plans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003876]"
              />
            </div>
          </div>
        </div>

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
        ) : filteredPlans.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No plans found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <span className="inline-block bg-[#003876] text-white px-3 py-1 rounded-full text-xs mb-3">
                    HDFC ERGO
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{plan.short_description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.slice(0, 3).map((feature, idx) => (
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

        {/* Contact CTA */}
        <div className="mt-16 bg-[#003876] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need help choosing the right plan?
          </h2>
          <p className="text-lg mb-6">
            Call or WhatsApp V.S. Reddy at{' '}
            <a href="tel:+919849664800" className="text-[#FFD700] font-bold hover:underline">
              +91-9849664800
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsurancePlans;
