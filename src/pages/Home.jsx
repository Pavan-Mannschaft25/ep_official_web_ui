// pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import CTAButton from "../components/CTAButton";
import {
  FiActivity,
  FiShoppingBag,
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiDownload,
  FiPlay,
  FiCheck,
  FiArrowRight,
  FiStar,
  FiClock,
  FiTarget,
  FiZap,
  FiHeart,
  FiBarChart2,
  FiSmartphone,
  FiUserCheck,
  FiTruck,
  FiChevronRight,
  FiPlayCircle,
  FiBookOpen,
  FiCalendar,
} from "react-icons/fi";
import CarouselComponent from "../components/CarouselComponent";
import DownloadApp from "../components/DownloadApp";
import screen1 from "../assets/screens/screen1.jpeg";
import screen2 from "../assets/screens/screen2.jpeg";
import screen3 from "../assets/screens/screen3.jpeg";

// ModuleCard component for the navigation tabs
const ModuleCard = ({ title, icon, desc, to, color }) => {
  const colorClasses = {
    emerald:
      "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
    teal: "from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700",
    orange:
      "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
    purple:
      "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
  };

  return (
    <motion.a
      href={to}
      className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`h-full p-6 bg-gradient-to-br ${colorClasses[color]} text-white`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            {icon}
          </div>
          <FiChevronRight className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/80 text-sm">{desc}</p>
      </div>
    </motion.a>
  );
};

const Home = () => {
  const modules = [
    {
      title: "Fitness",
      icon: <FiActivity size={28} />,
      desc: "Workouts, trainers & progress",
      to: "/fitness",
      color: "emerald",
    },
    {
      title: "Shop",
      icon: <FiShoppingBag size={28} />,
      desc: "Supplements & fitness gear",
      to: "/shop",
      color: "teal",
    },
    {
      title: "Diet",
      icon: <FiTarget size={28} />,
      desc: "Personalized diet plans",
      to: "/diet",
      color: "orange",
    },
    {
      title: "Recipes",
      icon: <FiHeart size={28} />,
      desc: "Healthy & easy recipes",
      to: "/recipes",
      color: "purple",
    },
  ];

  const features = [
    {
      icon: <FiActivity size={32} />,
      title: "Fitness Tracking",
      description:
        "Monitor your workouts, track progress, and achieve your fitness goals with our comprehensive tracking system.",
    },
    {
      icon: <FiShoppingBag size={32} />,
      title: "Premium Products",
      description:
        "Shop from our curated selection of high-quality fitness gear, supplements, and accessories.",
    },
    {
      icon: <FiAward size={32} />,
      title: "Expert Guidance",
      description:
        "Get personalized workout plans and nutrition advice from certified fitness professionals.",
    },
    {
      icon: <FiUsers size={32} />,
      title: "Community Support",
      description:
        "Join a thriving community of fitness enthusiasts who share your goals and motivation.",
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: "Progress Analytics",
      description:
        "Visualize your improvement with detailed analytics and insights on your fitness journey.",
    },
    {
      icon: <FiShield size={32} />,
      title: "Trusted Quality",
      description:
        "All our products and services meet the highest standards of quality and effectiveness.",
    },
  ];

  // Enhanced What You Get Section with more compelling content
  const coreFeatures = [
    {
      icon: <FiActivity size={32} />,
      title: "Live Fitness Classes",
      description:
        "Join 200+ daily live sessions with certified trainers. From HIIT to Yoga, find your perfect workout.",
      stats: "200+ Daily Classes",
      color: "from-purple-500 to-pink-500",
      link: "/fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiShoppingBag size={32} />,
      title: "Protein Marketplace",
      description:
        "Shop from 5000+ verified protein products. Compare prices, read reviews, and get personalized recommendations.",
      stats: "5000+ Products",
      color: "from-emerald-500 to-teal-500",
      link: "/shop",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiAward size={32} />,
      title: "Expert Coaching",
      description:
        "1-on-1 guidance from top fitness coaches. Get custom plans that fit your lifestyle and goals.",
      stats: "500+ Certified Coaches",
      color: "from-orange-500 to-red-500",
      // link: "#coaches",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  // Enhanced Why Choose Us with more compelling points and images
  const uniqueAdvantages = [
    {
      icon: <FiUserCheck />,
      title: "Verified Trainers",
      description:
        "All coaches are certified with 5+ years experience and proven track records of transforming lives.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiShield />,
      title: "100% Authentic Products",
      description:
        "Every supplement is lab-tested and quality assured. No fake products, no compromises.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiClock />,
      title: "24/7 Support",
      description:
        "Get help whenever you need it from our team of fitness and nutrition experts.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiHeart />,
      title: "Community Driven",
      description:
        "Join 50,000+ members achieving goals together. Share your journey and celebrate victories.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiBarChart2 />,
      title: "AI-Powered Insights",
      description:
        "Get smart recommendations based on your progress. Our AI learns your body and optimizes your plan.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <FiTruck />,
      title: "Free Delivery",
      description:
        "On all orders above $30, delivered in 24 hours. No waiting, no hassle.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  // Social proof stats
  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "200+", label: "Daily Classes" },
    { number: "4.9", label: "App Rating" },
    { number: "5000+", label: "Products" },
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 w-full overflow-x-hidden">
      {/* Enhanced Hero Section with Image Banners */}
      <CarouselComponent />

      {/* Social Proof Stats - Enhanced with subtle gradient */}
      <section className="py-6 sm:py-8 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-b border-emerald-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Enhanced with subtle gradient */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose Eat Protein App?"
            subtitle="We provide everything you need to achieve your fitness goals"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Module Navigation Tabs */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Explore Our Modules"
            subtitle="Discover all the tools you need for your fitness journey"
            centered={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {modules.map((module, index) => (
              <ModuleCard
                key={index}
                title={module.title}
                icon={module.icon}
                desc={module.desc}
                to={module.to}
                color={module.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fitness Module Section - Enhanced with visual elements and social proof */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full">
                  TRUSTED BY 10,000+ FITNESS ENTHUSIASTS
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Train Smarter, Track Better,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Achieve Faster
                </span>
              </h2>

              <div className="mb-8 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-base sm:text-lg text-gray-600 mb-2">
                  <span className="text-red-500 font-medium">Problem:</span>{" "}
                  Managing workouts, trainers, and diet separately is confusing.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-2">
                  <span className="text-emerald-600 font-medium">
                    Solution:
                  </span>{" "}
                  Our Fitness Module brings everything into one powerful system.
                </p>
                <p className="text-base sm:text-lg font-medium text-emerald-700">
                  <span className="text-blue-600 font-medium">Result:</span>{" "}
                  Stay consistent, track progress, and reach your goals 3x
                  faster.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600">💪</span>
                    </div>
                    <span className="text-sm sm:text-base font-medium">
                      Personalized workouts
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Designed for your body & goals
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600">👨‍🏫</span>
                    </div>
                    <span className="text-sm sm:text-base font-medium">
                      Expert guidance
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Connect with trainers who understand your journey
                  </p>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-700 mb-6">
                <span className="font-semibold mr-2">Perfect for:</span>{" "}
                beginners, gym members, and serious fitness enthusiasts
              </div>

              <CTAButton
                text="Start Your Fitness Journey"
                to="/fitness"
                primary={true}
                icon={<FiActivity />}
                className="w-full sm:w-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg p-3 flex flex-col items-center justify-center shadow-lg"
            >
              <div className="w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden relative">
                <video
                  className="w-full h-full object-cover"
                  poster="https://img.lovepik.com/photo/20211119/medium/lovepik-instructor-training-picture_500292642.jpg"
                  controls
                  playsInline
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Video overlay with key features */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="grid grid-cols-2 gap-2 text-white text-xs">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-1"></span>{" "}
                      Dashboard
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-1"></span>{" "}
                      Workout flow
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-1"></span>{" "}
                      Progress tracking
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-1"></span>{" "}
                      Mobile-friendly
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="w-full bg-white rounded-lg p-4 mt-4 shadow-md">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <div className="flex text-yellow-400 text-xs">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 italic">
                  "This fitness module helped me lose 15 lbs in just 8 weeks.
                  The personalized workouts and nutrition guidance were
                  game-changers!"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop Module Section - Premium Products for Peak Performance */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg p-3 flex flex-col items-center justify-center order-2 md:order-1 shadow-lg"
            >
              <div className="w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  poster="https://okcredit-blog-images-prod.storage.googleapis.com/2020/11/shutterstock_566591296.jpg"
                  controls
                  playsInline
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* Trust indicators */}
              <div className="w-full bg-white rounded-lg p-3 mt-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 text-xs mr-2">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <span className="text-xs text-gray-700">
                    4.9/5 (2,341 reviews)
                  </span>
                </div>
                <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">
                  25% OFF
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full">
                  LIMITED TIME: UP TO 25% OFF
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Transform Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Fitness Journey
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Stop wasting money on ineffective products. Our science-backed
                fitness essentials deliver real results in 30 days or your money
                back.
              </p>

              <div className="grid grid-cols-1 gap-4 mb-6 sm:mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-emerald-600">💪</span>
                  </div>
                  <div>
                    <span className="text-base font-medium">
                      Enhance performance & recovery
                    </span>
                    <p className="text-sm text-gray-600">
                      Premium supplements backed by science
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-emerald-600">🛡️</span>
                  </div>
                  <div>
                    <span className="text-base font-medium">
                      Train smarter & prevent injuries
                    </span>
                    <p className="text-sm text-gray-600">
                      High-quality accessories and wearables
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-emerald-600">💰</span>
                  </div>
                  <div>
                    <span className="text-base font-medium">
                      Save with exclusive member pricing
                    </span>
                    <p className="text-sm text-gray-600">
                      Special discounts on premium products
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <CTAButton
                  text="Shop Now - Save 25%"
                  to="/shop"
                  primary={true}
                  icon={<FiShoppingBag />}
                  className="w-full sm:w-auto"
                />
                {/* <CTAButton
                  text="View Bestsellers"
                  to="/shop/bestsellers"
                  primary={false}
                  icon={<FiTrendingUp />}
                  className="w-full sm:w-auto"
                /> */}
              </div>

              <p className="text-xs text-gray-500 flex items-center">
                <span className="mr-1">🚚</span> Free shipping over $50
                <span className="mx-2">•</span>
                <span className="mr-1">🔄</span> 30-day returns
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diet Module Section - Delicious Meals for Your Fitness Goals */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full">
                  TRUSTED BY 8,000+ NUTRITION ENTHUSIASTS
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Eat Right,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Live Better
                </span>
              </h2>

              <div className="mb-8 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-base sm:text-lg text-gray-600 mb-2">
                  <span className="text-red-500 font-medium">Problem:</span>{" "}
                  Nutrition advice is confusing and one-size-fits-all diets
                  don't work.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-2">
                  <span className="text-emerald-600 font-medium">
                    Solution:
                  </span>{" "}
                  Our Diet Module creates personalized nutrition plans based on
                  your body and goals.
                </p>
                <p className="text-base sm:text-lg font-medium text-emerald-700">
                  <span className="text-blue-600 font-medium">Result:</span>{" "}
                  Reach your goals 2x faster with sustainable eating habits
                  you'll actually enjoy.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600">🎯</span>
                    </div>
                    <span className="text-sm sm:text-base font-medium">
                      Personalized for you
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Plans designed for your body type & goals
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600">🍽️</span>
                    </div>
                    <span className="text-sm sm:text-base font-medium">
                      Delicious meals
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Recipes you'll love that fuel your progress
                  </p>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-700 mb-6">
                <span className="font-semibold mr-2">Perfect for:</span> weight
                loss, muscle gain, and healthy living
              </div>

              <CTAButton
                text="Start Your Nutrition Plan"
                to="/diet"
                primary={true}
                icon={<FiTarget />}
                className="w-full sm:w-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg p-3 flex flex-col items-center justify-center shadow-lg"
            >
              <div className="w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden relative">
                <video
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
                  controls
                  playsInline
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Video overlay with key features */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="grid grid-cols-2 gap-2 text-white text-xs">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-1"></span>{" "}
                      Custom plans
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-1"></span>{" "}
                      Easy recipes
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-1"></span>{" "}
                      Progress tracking
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-1"></span>{" "}
                      Shopping lists
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="w-full bg-white rounded-lg p-4 mt-4 shadow-md">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <div className="flex text-yellow-400 text-xs">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 italic">
                  "Lost 20 lbs in 10 weeks without feeling deprived. The
                  personalized plan made all the difference!"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recipe Module Section - Delicious Meals for Your Fitness Goals */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg p-3 flex flex-col items-center justify-center order-2 md:order-1 shadow-lg"
            >
              <div className="w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445"
                  controls
                  playsInline
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* Trust indicators */}
              <div className="w-full bg-white rounded-lg p-3 mt-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 text-xs mr-2">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <span className="text-xs text-gray-700">
                    4.9/5 (3,127 reviews)
                  </span>
                </div>
                <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">
                  NEW RECIPES
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full">
                  UPDATED WEEKLY: 50+ NEW RECIPES
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Discover{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Delicious Nutrition
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Stop struggling with boring meals. Our nutritionist-approved
                recipes make healthy eating delicious and simple, with meals
                ready in under 30 minutes.
              </p>

              <div className="grid grid-cols-1 gap-4 mb-6 sm:mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-emerald-600">🍳</span>
                  </div>
                  <div>
                    <span className="text-base font-medium">
                      Nutritionist-approved recipes
                    </span>
                    <p className="text-sm text-gray-600">
                      Balanced macros for your fitness goals
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-emerald-600">⏱️</span>
                  </div>
                  <div>
                    <span className="text-base font-medium">
                      Quick & easy preparation
                    </span>
                    <p className="text-sm text-gray-600">
                      Most meals ready in under 30 minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-emerald-600">🛒</span>
                  </div>
                  <div>
                    <span className="text-base font-medium">
                      Smart shopping lists
                    </span>
                    <p className="text-sm text-gray-600">
                      Automated grocery lists for meal planning
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <CTAButton
                  text="Explore Recipes"
                  to="/recipes"
                  primary={true}
                  icon={<FiBookOpen />}
                  className="w-full sm:w-auto"
                />
              </div>

              <p className="text-xs text-gray-500 flex items-center">
                <span className="mr-1">🍽️</span> 500+ recipes available
                <span className="mx-2">•</span>
                <span className="mr-1">📱</span> Mobile-friendly
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced What You Get Section - Improved background */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Everything You Need
            </span>
            <SectionTitle
              title="Your Complete Fitness Solution"
              subtitle="No more juggling between apps. Get everything in one powerful platform"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group h-full"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-emerald-50 flex flex-col">
                  <div className="p-6 sm:p-6 flex-1 flex flex-col">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <span className="inline-block w-40 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 mb-3">
                      {feature.stats}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-1">
                      {feature.description}
                    </p>
                    {/* <a
                      href={feature.link}
                      className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                    >
                      Explore {feature.title.split(" ")[0]}
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced App Preview - Improved background */}
      <section className="py-10 sm:py-16 relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-200 rounded-full filter blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Mobile Experience
            </span>
            <SectionTitle
              title="App Screens Preview"
              subtitle="Experience our fitness solution on the go"
            />
          </div>

          {/* Phone mockups container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Background accent for the phones */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-3xl transform -rotate-1"></div>

            <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-8">
              {[screen1, screen2, screen3].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                  whileHover={{ y: -10 }}
                >
                  {/* Phone frame shadow */}
                  <div className="absolute inset-0 bg-black/20 rounded-3xl transform translate-y-4 translate-x-4 blur-sm"></div>

                  {/* Phone frame */}
                  <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl overflow-hidden">
                    {/* Phone top bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 rounded-t-3xl flex items-center justify-center">
                      <div className="w-20 h-4 bg-black rounded-full"></div>
                    </div>

                    {/* Phone screen container - Responsive sizing */}
                    <div
                      className="bg-white rounded-2xl overflow-hidden mt-6 mb-2 mx-auto"
                      style={{
                        width: "clamp(200px, 90vw, 280px)",
                        height: "clamp(350px, 160vw, 500px)",
                      }}
                    >
                      {/* Image container with proper sizing */}
                      <div className="w-full h-full flex items-center justify-center bg-gray-50">
                        <img
                          src={item}
                          alt={`App screen ${index + 1}`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Phone bottom bar */}
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>

                  {/* Interactive hover effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <CTAButton
              text="View All Screens"
              to="/app-preview"
              primary={true}
            />
          </div>
        </div>
      </section>

      <DownloadApp />
    </div>
  );
};

export default Home;
