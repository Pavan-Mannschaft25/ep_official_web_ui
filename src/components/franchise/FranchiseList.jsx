import {
  FiSearch,
  FiTrendingUp,
  FiMapPin,
  FiUsers,
  FiAward,
  FiGrid,
  FiList,
  FiHeart,
  FiStar,
  FiClock,
  FiPhone,
} from "react-icons/fi";

const stats = [
  {
    icon: FiTrendingUp,
    label: "Active Franchises",
    value: "500+",
    color: "emerald",
  },
  { icon: FiMapPin, label: "Cities", value: "100+", color: "blue" },
  { icon: FiUsers, label: "Happy Partners", value: "2000+", color: "purple" },
  { icon: FiAward, label: "Success Rate", value: "95%", color: "orange" },
];

const categories = [
  "All",
  "Food & Beverage",
  "Health",
  "Education",
  "Retail",
  "Service",
  "Technology",
];

const franchises = [
  {
    name: "Amul Ice Cream",
    category: "Food & Beverage",
    location: "Mumbai",
    rating: 4.9,
    investment: "₹5-10L",
    monthly: "₹1-3L",
    roi: "85%",
    months: "8M",
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  },
  {
    name: "Domino's Pizza",
    category: "Food & Beverage",
    location: "Delhi NCR",
    rating: 4.8,
    investment: "₹30-50L",
    monthly: "₹5-8L",
    roi: "75%",
    months: "18M",
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  },
  {
    name: "Starbucks",
    category: "Cafe",
    location: "Bangalore",
    rating: 4.7,
    investment: "₹70-1Cr",
    monthly: "₹8-15L",
    roi: "65%",
    months: "24M",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    name: "Starbucks",
    category: "Cafe",
    location: "Bangalore",
    rating: 4.7,
    investment: "₹70-1Cr",
    monthly: "₹8-15L",
    roi: "65%",
    months: "24M",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    name: "Domino's Pizza",
    category: "Food & Beverage",
    location: "Delhi NCR",
    rating: 4.8,
    investment: "₹30-50L",
    monthly: "₹5-8L",
    roi: "75%",
    months: "18M",
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  },
  {
    name: "Starbucks",
    category: "Cafe",
    location: "Bangalore",
    rating: 4.7,
    investment: "₹70-1Cr",
    monthly: "₹8-15L",
    roi: "65%",
    months: "24M",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
];

export default function FranchiseList({ isDarkMode }) {
  return (
    <section
      className={`py-20 relative ${
        isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-white"
      }`}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1
            className={`text-5xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Find Your Perfect
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Franchise
            </span>
          </h1>
          <p
            className={`text-xl ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            500+ Verified Business Opportunities Across India
          </p>
        </div>

        {/* FRANCHISE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {franchises.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                  {item.badge}
                </span>
              </div>

              <div className="p-6">
                <div className="flex justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.category} • {item.location}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FiStar className="text-yellow-500" size={16} />
                    <span className="ml-1 font-bold">{item.rating}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gray-50">
                    <p className="text-xs text-gray-500">Investment</p>
                    <p className="font-bold text-emerald-600">
                      {item.investment}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50">
                    <p className="text-xs text-gray-500">Monthly</p>
                    <p className="font-bold text-blue-600">{item.monthly}</p>
                  </div>
                </div>

                <div className="flex justify-between mb-4 text-sm">
                  <span className="flex items-center gap-1">
                    <FiTrendingUp /> {item.roi} ROI
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock /> {item.months}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 rounded-xl font-bold">
                    View Details
                  </button>
                  <button className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <FiPhone />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-2xl font-bold hover:scale-105 transition">
            Load More Franchises
          </button>
        </div>
      </div>
    </section>
  );
}
