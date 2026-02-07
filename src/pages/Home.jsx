// // pages/Home.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import Hero from "../components/Hero";
// import SectionTitle from "../components/SectionTitle";
// import FeatureCard from "../components/FeatureCard";
// import CTAButton from "../components/CTAButton";
// import {
//   FiActivity,
//   FiShoppingBag,
//   FiAward,
//   FiUsers,
//   FiTrendingUp,
//   FiShield,
//   FiDownload,
//   FiPlay,
//   FiCheck,
//   FiArrowRight,
//   FiStar,
//   FiClock,
//   FiTarget,
//   FiZap,
//   FiHeart,
//   FiBarChart2,
//   FiSmartphone,
//   FiUserCheck,
//   FiTruck,
// } from "react-icons/fi";
// import CarouselComponent from "../components/CarouselComponent";
// import DownloadApp from "../components/DownloadApp";
// import screen1 from "../assets/screens/screen1.jpeg";
// import screen2 from "../assets/screens/screen2.jpeg";
// import screen3 from "../assets/screens/screen3.jpeg";

// const Home = () => {
//   const features = [
//     {
//       icon: <FiActivity size={32} />,
//       title: "Fitness Tracking",
//       description:
//         "Monitor your workouts, track progress, and achieve your fitness goals with our comprehensive tracking system.",
//     },
//     {
//       icon: <FiShoppingBag size={32} />,
//       title: "Premium Products",
//       description:
//         "Shop from our curated selection of high-quality fitness gear, supplements, and accessories.",
//     },
//     {
//       icon: <FiAward size={32} />,
//       title: "Expert Guidance",
//       description:
//         "Get personalized workout plans and nutrition advice from certified fitness professionals.",
//     },
//     {
//       icon: <FiUsers size={32} />,
//       title: "Community Support",
//       description:
//         "Join a thriving community of fitness enthusiasts who share your goals and motivation.",
//     },
//     {
//       icon: <FiTrendingUp size={32} />,
//       title: "Progress Analytics",
//       description:
//         "Visualize your improvement with detailed analytics and insights on your fitness journey.",
//     },
//     {
//       icon: <FiShield size={32} />,
//       title: "Trusted Quality",
//       description:
//         "All our products and services meet the highest standards of quality and effectiveness.",
//     },
//   ];

//   // Enhanced What You Get Section with more compelling content
//   const coreFeatures = [
//     {
//       icon: <FiActivity size={32} />,
//       title: "Live Fitness Classes",
//       description:
//         "Join 200+ daily live sessions with certified trainers. From HIIT to Yoga, find your perfect workout.",
//       stats: "200+ Daily Classes",
//       color: "from-purple-500 to-pink-500",
//       link: "/fitness",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//       icon: <FiShoppingBag size={32} />,
//       title: "Protein Marketplace",
//       description:
//         "Shop from 5000+ verified protein products. Compare prices, read reviews, and get personalized recommendations.",
//       stats: "5000+ Products",
//       color: "from-emerald-500 to-teal-500",
//       link: "/shop",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//       icon: <FiAward size={32} />,
//       title: "Expert Coaching",
//       description:
//         "1-on-1 guidance from top fitness coaches. Get custom plans that fit your lifestyle and goals.",
//       stats: "500+ Certified Coaches",
//       color: "from-orange-500 to-red-500",
//       link: "/coaches",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//   ];

//   // Enhanced How App Works with more benefits
//   const journeySteps = [
//     {
//       icon: <FiTarget size={28} />,
//       title: "Set Your Goal",
//       description:
//         "Take our quick assessment to get a personalized fitness plan tailored to your body type and goals.",
//       badge: "2-min quiz",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//       icon: <FiZap size={28} />,
//       title: "Start Training",
//       description:
//         "Join live classes or follow pre-recorded sessions. Track your calories, macros, and progress in real-time.",
//       badge: "Instant access",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//       icon: <FiTrendingUp size={28} />,
//       title: "See Results",
//       description:
//         "Watch your body transform with our advanced analytics. Celebrate milestones and unlock achievements.",
//       badge: "Track everything",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//   ];

//   // Enhanced Why Choose Us with more compelling points and images
//   const uniqueAdvantages = [
//     {
//       icon: <FiUserCheck />,
//       title: "Verified Trainers",
//       description:
//         "All coaches are certified with 5+ years experience and proven track records of transforming lives.",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//       icon: <FiShield />,
//       title: "100% Authentic Products",
//       description:
//         "Every supplement is lab-tested and quality assured. No fake products, no compromises.",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//       icon: <FiClock />,
//       title: "24/7 Support",
//       description:
//         "Get help whenever you need it from our team of fitness and nutrition experts.",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//       icon: <FiHeart />,
//       title: "Community Driven",
//       description:
//         "Join 50,000+ members achieving goals together. Share your journey and celebrate victories.",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//       icon: <FiBarChart2 />,
//       title: "AI-Powered Insights",
//       description:
//         "Get smart recommendations based on your progress. Our AI learns your body and optimizes your plan.",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//       icon: <FiTruck />,
//       title: "Free Delivery",
//       description:
//         "On all orders above $30, delivered in 24 hours. No waiting, no hassle.",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//   ];

//   // Social proof stats
//   const stats = [
//     { number: "50K+", label: "Active Users" },
//     { number: "200+", label: "Daily Classes" },
//     { number: "4.9", label: "App Rating" },
//     { number: "5000+", label: "Products" },
//   ];

//   return (
//     <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
//       {/* Enhanced Hero Section with Image Banners */}
//       <CarouselComponent />

//       {/* Social Proof Stats - Enhanced with subtle gradient */}
//       <section className="py-8 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-b border-emerald-100">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-1">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 text-sm md:text-base">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Section - Enhanced with subtle gradient */}
//       <section className="py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
//         <div className="container mx-auto px-4">
//           <SectionTitle
//             title="Why Choose Eat Protein?"
//             subtitle="We provide everything you need to achieve your fitness goals"
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <FeatureCard
//                 key={index}
//                 icon={feature.icon}
//                 title={feature.title}
//                 description={feature.description}
//                 delay={index * 0.1}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Shop Module Section - Enhanced with gradient background */}
//       <section className="py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg p-3 flex items-center justify-center order-2 md:order-1 shadow-lg"
//             >
//               <video
//                 className="w-full h-full object-cover"
//                 poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
//                 controls
//                 playsInline
//               >
//                 <source
//                   src="https://www.w3schools.com/html/mov_bbb.mp4"
//                   type="video/mp4"
//                 />
//               </video>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="order-1 md:order-2"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Premium Fitness Products
//               </h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Our shop offers a curated selection of high-quality fitness
//                 products. From supplements to accessories and wearables, we
//                 provide everything you need to support your fitness journey.
//               </p>
//               <ul className="space-y-3 mb-8">
//                 <li className="flex items-start">
//                   <span className="text-emerald-600 mr-2">✓</span>
//                   <span>Premium supplements for performance and recovery</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-emerald-600 mr-2">✓</span>
//                   <span>High-quality fitness accessories and equipment</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-emerald-600 mr-2">✓</span>
//                   <span>Advanced wearables for tracking and monitoring</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-emerald-600 mr-2">✓</span>
//                   <span>Exclusive offers and member discounts</span>
//                 </li>
//               </ul>
//               <CTAButton
//                 text="Visit Shop"
//                 to="/shop"
//                 primary={true}
//                 icon={<FiShoppingBag />}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Fitness Module Section - Enhanced with gradient background */}
//       <section className="py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Complete Fitness Management Solution
//               </h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Our fitness module provides everything you need to manage your
//                 health journey. From personalized workout plans to diet tracking
//                 and progress monitoring, we've got you covered.
//               </p>
//               <ul className="space-y-3 mb-8">
//                 <li className="flex items-start">
//                   <span className="text-emerald-600 mr-2">✓</span>
//                   <span>Personalized workout plans tailored to your goals</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-emerald-600 mr-2">✓</span>
//                   <span>Trainer management and consultation</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-emerald-600 mr-2">✓</span>
//                   <span>Attendance tracking for accountability</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-emerald-600 mr-2">✓</span>
//                   <span>Customized diet plans for optimal nutrition</span>
//                 </li>
//               </ul>
//               <CTAButton
//                 text="Explore Fitness Module"
//                 to="/fitness"
//                 primary={true}
//                 icon={<FiActivity />}
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-gradient-to-br from-emerald-600 to-teal-700  rounded-lg p-3 flex items-center justify-center shadow-lg"
//             >
//               {/* <div className="w-full h-64 md:h-80 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center shadow-inner">
//                 <span className="text-white text-2xl font-bold">
//                   Fitness Module Preview
//                 </span>
//               </div> */}
//               <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-inner">
//                 {/* Video element */}
//                 <video
//                   className="w-full h-full object-cover"
//                   poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
//                   controls
//                   playsInline
//                 >
//                   <source
//                     src="https://www.w3schools.com/html/mov_bbb.mp4"
//                     type="video/mp4"
//                   />
//                 </video>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced What You Get Section - Improved background */}
//       <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
//               Everything You Need
//             </span>
//             <SectionTitle
//               title="Your Complete Fitness Solution"
//               subtitle="No more juggling between apps. Get everything in one powerful platform"
//             />
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {coreFeatures.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="relative group"
//               >
//                 <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-emerald-50">
//                   <div className="p-8">
//                     <div
//                       className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
//                     >
//                       {feature.icon}
//                     </div>
//                     <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 mb-3">
//                       {feature.stats}
//                     </span>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {feature.description}
//                     </p>
//                     <a
//                       href={feature.link}
//                       className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
//                     >
//                       Explore {feature.title.split(" ")[0]}
//                       <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced How App Works - Improved background */}
//       <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <SectionTitle
//               title="Your Journey to Fitness"
//               subtitle="Three simple steps to a healthier, stronger you"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {journeySteps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="relative"
//               >
//                 <div className="bg-white rounded-2xl overflow-hidden h-full shadow-lg transition-all duration-300 border border-emerald-50">
//                   <div className="h-40 overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100">
//                     <img
//                       src={step.image}
//                       alt={step.title}
//                       className="w-full h-full object-cover mix-blend-multiply opacity-80"
//                     />
//                   </div>
//                   <div className="p-8">
//                     <div className="flex items-center justify-between mb-6">
//                       <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
//                         {step.icon}
//                       </div>
//                       <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
//                         {step.badge}
//                       </span>
//                     </div>
//                     <div className="flex items-center mb-4">
//                       <span className="flex items-center justify-center w-8 h-8 bg-emerald-600 text-white rounded-full font-bold mr-3 text-sm">
//                         {index + 1}
//                       </span>
//                       <h3 className="text-xl font-bold text-gray-900">
//                         {step.title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-600 leading-relaxed">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//                 {index < journeySteps.length - 1 && (
//                   <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
//                     <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                       <FiArrowRight className="text-gray-400" />
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced App Preview - Improved background */}
//       {/* <section className="py-16 bg-gradient-to-br from-gray-50 via-teal-50/30 to-white">
//         <div className="container mx-auto px-4">
//           <SectionTitle
//             title="App Screens Preview"
//             subtitle="Experience our fitness solution on the go"
//           />

//           <div className="flex flex-wrap justify-center gap-8">
//             {[screen1, screen2, screen3].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-gradient-to-br from-gray-100 to-emerald-100/50 rounded-lg p-2 w-64 h-96 flex items-center justify-center shadow-md"
//               >
//                 <div className="w-full h-full rounded-lg overflow-hidden bg-white">
//                   <img
//                     src={item}
//                     alt={`App screen ${index + 1}`}
//                     className="w-full h-full object-scale-down"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <CTAButton
//               text="View All Screens"
//               to="/app-preview"
//               primary={true}
//             />
//           </div>
//         </div>
//       </section> */}
//       <section className="py-10 relative overflow-hidden">
//         {/* Background with gradient and pattern */}
//         <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"></div>

//         {/* Subtle pattern overlay */}
//         <div className="absolute inset-0 opacity-5">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             }}
//           ></div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200 rounded-full filter blur-3xl opacity-30"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-200 rounded-full filter blur-3xl opacity-30"></div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
//               Mobile Experience
//             </span>
//             <SectionTitle
//               title="App Screens Preview"
//               subtitle="Experience our fitness solution on the go"
//             />
//           </div>

//           {/* Phone mockups container */}
//           <div className="relative max-w-6xl mx-auto">
//             {/* Background accent for the phones */}
//             <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-3xl transform -rotate-1"></div>

//             <div className="relative flex flex-wrap justify-center gap-8 p-8">
//               {[screen1, screen2, screen3].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="relative group"
//                   whileHover={{ y: -10 }}
//                 >
//                   {/* Phone frame shadow */}
//                   <div className="absolute inset-0 bg-black/20 rounded-3xl transform translate-y-4 translate-x-4 blur-sm"></div>

//                   {/* Phone frame */}
//                   <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl overflow-hidden">
//                     {/* Phone top bar */}
//                     <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 rounded-t-3xl flex items-center justify-center">
//                       <div className="w-20 h-4 bg-black rounded-full"></div>
//                     </div>

//                     {/* Phone screen container */}
//                     <div
//                       className="bg-white rounded-2xl overflow-hidden mt-6 mb-2"
//                       style={{ width: "280px", height: "500px" }}
//                     >
//                       {/* Image container with proper sizing */}
//                       <div className="w-full h-full flex items-center justify-center bg-gray-50">
//                         <img
//                           src={item}
//                           alt={`App screen ${index + 1}`}
//                           className="max-w-full max-h-full object-contain"
//                         />
//                       </div>
//                     </div>

//                     {/* Phone bottom bar */}
//                     <div className="flex justify-center mb-2">
//                       <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
//                     </div>
//                   </div>

//                   {/* Interactive hover effect */}
//                   <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Interactive dots for navigation */}
//           {/* <div className="flex justify-center mt-8 space-x-2">
//             {[screen1, screen2, screen3].map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === 0 ? "bg-emerald-600 w-8" : "bg-gray-300"
//                 }`}
//                 aria-label={`View screen ${index + 1}`}
//               ></button>
//             ))}
//           </div> */}

//           <div className="text-center mt-10">
//             <CTAButton
//               text="View All Screens"
//               to="/app-preview"
//               primary={true}
//             />
//           </div>
//         </div>
//       </section>

//       <DownloadApp />
//     </div>
//   );
// };

// export default Home;

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
} from "react-icons/fi";
import CarouselComponent from "../components/CarouselComponent";
import DownloadApp from "../components/DownloadApp";
import screen1 from "../assets/screens/screen1.jpeg";
import screen2 from "../assets/screens/screen2.jpeg";
import screen3 from "../assets/screens/screen3.jpeg";

import process1 from "../assets/screens/goal-img.avif";
import process2 from "../assets/screens/start-training.avif";
import process3 from "../assets/screens/result.jpg";

const Home = () => {
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

  // Enhanced How App Works with more benefits
  const journeySteps = [
    {
      icon: <FiTarget size={28} />,
      title: "Set Your Goal",
      description:
        "Take our quick assessment to get a personalized fitness plan tailored to your body type and goals.",
      badge: "2-min quiz",
      image: process1,
    },
    {
      icon: <FiZap size={28} />,
      title: "Start Training",
      description:
        "Join live classes or follow pre-recorded sessions. Track your calories, macros, and progress in real-time.",
      badge: "Instant access",
      image: process2,
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: "See Results",
      description:
        "Watch your body transform with our advanced analytics. Celebrate milestones and unlock achievements.",
      badge: "Track everything",
      image: process3,
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
            title="Why Choose Eat Protein?"
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

      {/* Shop Module Section - Enhanced with gradient background */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg p-3 flex items-center justify-center order-2 md:order-1 shadow-lg"
            >
              <div className="w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
                  controls
                  playsInline
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Premium Fitness Products
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Our shop offers a curated selection of high-quality fitness
                products. From supplements to accessories and wearables, we
                provide everything you need to support your fitness journey.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
                  <span className="text-sm sm:text-base">
                    Premium supplements for performance and recovery
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
                  <span className="text-sm sm:text-base">
                    High-quality fitness accessories and equipment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
                  <span className="text-sm sm:text-base">
                    Advanced wearables for tracking and monitoring
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
                  <span className="text-sm sm:text-base">
                    Exclusive offers and member discounts
                  </span>
                </li>
              </ul>
              <CTAButton
                text="Visit Shop"
                to="/shop"
                primary={true}
                icon={<FiShoppingBag />}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fitness Module Section - Enhanced with gradient background */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Complete Fitness Management Solution
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Our fitness module provides everything you need to manage your
                health journey. From personalized workout plans to diet tracking
                and progress monitoring, we've got you covered.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
                  <span className="text-sm sm:text-base">
                    Personalized workout plans tailored to your goals
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
                  <span className="text-sm sm:text-base">
                    Trainer management and consultation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
                  <span className="text-sm sm:text-base">
                    Attendance tracking for accountability
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
                  <span className="text-sm sm:text-base">
                    Customized diet plans for optimal nutrition
                  </span>
                </li>
              </ul>
              <CTAButton
                text="Explore Fitness Module"
                to="/fitness"
                primary={true}
                icon={<FiActivity />}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg p-3 flex items-center justify-center shadow-lg"
            >
              <div className="w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
                  controls
                  playsInline
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
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

      {/* Enhanced How App Works - Improved background */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <SectionTitle
              title="Your Journey to Fitness"
              subtitle="Three simple steps to a healthier, stronger you"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl overflow-hidden h-full shadow-lg transition-all duration-300 border border-emerald-50 flex flex-col">
                  <div className="h-32 sm:h-40 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover mix-blend-multiply opacity-80"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                        {step.icon}
                      </div>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                        {step.badge}
                      </span>
                    </div>
                    <div className="flex items-center mb-3 sm:mb-4">
                      <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-emerald-600 text-white rounded-full font-bold mr-3 text-sm">
                        {index + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1 text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <FiArrowRight className="text-gray-400" />
                    </div>
                  </div>
                )}
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
