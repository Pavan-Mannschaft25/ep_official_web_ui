// // // pages/AppPreview.jsx
// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import { FiChevronLeft, FiChevronRight, FiDownload } from "react-icons/fi";

// // const AppPreview = () => {
// //   const [currentScreen, setCurrentScreen] = useState(0);

// //   const appScreens = [
// //     {
// //       id: 1,
// //       title: "Home Dashboard",
// //       description: "View your fitness stats at a glance",
// //     },
// //     {
// //       id: 2,
// //       title: "Workout Plans",
// //       description: "Access personalized workout routines",
// //     },
// //     {
// //       id: 3,
// //       title: "Progress Tracking",
// //       description: "Monitor your fitness journey over time",
// //     },
// //     {
// //       id: 4,
// //       title: "Nutrition",
// //       description: "Track your diet and meal plans",
// //     },
// //     {
// //       id: 5,
// //       title: "Community",
// //       description: "Connect with other fitness enthusiasts",
// //     },
// //   ];

// //   const nextScreen = () => {
// //     setCurrentScreen((prev) => (prev + 1) % appScreens.length);
// //   };

// //   const prevScreen = () => {
// //     setCurrentScreen(
// //       (prev) => (prev - 1 + appScreens.length) % appScreens.length,
// //     );
// //   };

// //   return (
// //     <div>
// //       <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
// //         <div className="container mx-auto px-4 text-center">
// //           <h1 className="text-4xl md:text-6xl font-bold mb-6">FitShop App</h1>
// //           <p className="text-xl md:text-2xl mb-8 text-white/90">
// //             Your complete fitness solution in the palm of your hand
// //           </p>
// //           <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
// //             <FiDownload className="mr-2" />
// //             Download App
// //           </button>
// //         </div>
// //       </section>

// //       <section className="py-16 bg-gray-50">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto">
// //             <div className="text-center mb-12">
// //               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //                 App Screens Preview
// //               </h2>
// //               <p className="text-lg text-gray-600">
// //                 Explore the features of our mobile app
// //               </p>
// //             </div>

// //             <div className="relative">
// //               <div className="flex justify-center items-center">
// //                 <button
// //                   onClick={prevScreen}
// //                   className="absolute left-0 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
// //                   aria-label="Previous screen"
// //                 >
// //                   <FiChevronLeft size={24} />
// //                 </button>

// //                 <motion.div
// //                   key={currentScreen}
// //                   initial={{ opacity: 0, x: 100 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   exit={{ opacity: 0, x: -100 }}
// //                   transition={{ duration: 0.3 }}
// //                   className="bg-white rounded-lg shadow-lg p-8 w-full md:w-96 h-96 md:h-[600px] flex flex-col"
// //                 >
// //                   <div className="bg-gray-100 rounded-lg flex-grow flex items-center justify-center mb-4">
// //                     <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
// //                       <span className="text-white text-2xl font-bold">
// //                         Screen {appScreens[currentScreen].id}
// //                       </span>
// //                     </div>
// //                   </div>
// //                   <h3 className="text-xl font-semibold text-center">
// //                     {appScreens[currentScreen].title}
// //                   </h3>
// //                   <p className="text-gray-600 text-center">
// //                     {appScreens[currentScreen].description}
// //                   </p>
// //                 </motion.div>

// //                 <button
// //                   onClick={nextScreen}
// //                   className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
// //                   aria-label="Next screen"
// //                 >
// //                   <FiChevronRight size={24} />
// //                 </button>
// //               </div>

// //               <div className="flex justify-center mt-8 space-x-2">
// //                 {appScreens.map((_, index) => (
// //                   <button
// //                     key={index}
// //                     onClick={() => setCurrentScreen(index)}
// //                     className={`w-3 h-3 rounded-full transition-colors ${
// //                       index === currentScreen ? "bg-green-600" : "bg-gray-300"
// //                     }`}
// //                     aria-label={`Go to screen ${index + 1}`}
// //                   />
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
// //               {[
// //                 {
// //                   title: "Track Progress",
// //                   description:
// //                     "Monitor your fitness journey with detailed analytics and insights.",
// //                 },
// //                 {
// //                   title: "Personalized Plans",
// //                   description:
// //                     "Get workout and nutrition plans tailored to your specific goals.",
// //                 },
// //                 {
// //                   title: "Community Support",
// //                   description:
// //                     "Connect with like-minded individuals and fitness experts.",
// //                 },
// //               ].map((feature, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.5, delay: index * 0.1 }}
// //                   className="bg-white rounded-lg shadow-md p-6"
// //                 >
// //                   <h3 className="text-xl font-semibold mb-2">
// //                     {feature.title}
// //                   </h3>
// //                   <p className="text-gray-600">{feature.description}</p>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-16 bg-white">
// //         <div className="container mx-auto px-4 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
// //             Download Our App
// //           </h2>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
// //               <svg
// //                 className="w-6 h-6 mr-2"
// //                 viewBox="0 0 24 24"
// //                 fill="currentColor"
// //               >
// //                 <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
// //               </svg>
// //               Download for iOS
// //             </button>
// //             <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
// //               <svg
// //                 className="w-6 h-6 mr-2"
// //                 viewBox="0 0 24 24"
// //                 fill="currentColor"
// //               >
// //                 <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
// //               </svg>
// //               Download for Android
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default AppPreview;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FiChevronLeft,
//   FiChevronRight,
//   FiDownload,
//   FiCheck,
//   FiShield,
//   FiZap,
//   FiTruck,
//   FiTrendingUp,
//   FiNavigation,
//   FiLock,
// } from "react-icons/fi";
// import DownloadApp from "../components/DownloadApp";
// import screen1 from "../assets/screens/screen1.jpeg";
// import screen2 from "../assets/screens/screen2.jpeg";
// import screen3 from "../assets/screens/screen3.jpeg";
// import CTAButton from "../components/CTAButton";

// const AppPreview = () => {
//   const [currentScreen, setCurrentScreen] = useState(0);

//   // App screens data
//   const appScreens = [
//     {
//       id: 1,
//       title: "Home Dashboard",
//       description: "View your fitness stats and daily activities at a glance",
//       image: screen1,
//     },
//     {
//       id: 2,
//       title: "Fitness Booking",
//       description: "Book classes with certified trainers in just a few taps",
//       image: screen2,
//     },
//     {
//       id: 3,
//       title: "Protein Shop",
//       description: "Browse and order from our wide range of protein products",
//       image: screen3,
//     },
//     {
//       id: 4,
//       title: "Profile & Tracking",
//       description: "Monitor your progress and track your fitness journey",
//       image: screen1,
//     },
//   ];

//   // App features data
//   const appFeatures = [
//     {
//       icon: <FiNavigation className="text-2xl" />,
//       title: "Easy Navigation",
//       description: "Intuitive interface designed for seamless user experience",
//     },
//     {
//       icon: <FiZap className="text-2xl" />,
//       title: "Fast Booking",
//       description: "Book classes and order products in just a few taps",
//     },
//     {
//       icon: <FiLock className="text-2xl" />,
//       title: "Secure Payment",
//       description: "Multiple payment options with bank-level security",
//     },
//     {
//       icon: <FiTruck className="text-2xl" />,
//       title: "Order Tracking",
//       description:
//         "Real-time tracking of your orders from purchase to delivery",
//     },
//     {
//       icon: <FiTrendingUp className="text-2xl" />,
//       title: "Progress Monitoring",
//       description:
//         "Detailed analytics and insights to track your fitness journey",
//     },
//   ];

//   // Navigation functions
//   const nextScreen = () => {
//     setCurrentScreen((prev) => (prev + 1) % appScreens.length);
//   };

//   const prevScreen = () => {
//     setCurrentScreen(
//       (prev) => (prev - 1 + appScreens.length) % appScreens.length,
//     );
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-screen overflow-hidden mt-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700"></div>
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-black opacity-10"></div>
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url("https://www.acemetrix.com/wp-content/uploads/2015/08/black-banner-vector3.png")`,
//             }}
//           ></div>
//         </div>

//         <div className="relative z-10 h-full flex items-center">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-white"
//               >
//                 <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
//                   MOBILE APP
//                 </span>
//                 <h1 className="text-4xl md:text-6xl font-bold mb-6">
//                   Your Fitness Journey in Your Pocket
//                 </h1>
//                 <p className="text-xl mb-8 text-white/90">
//                   Experience the convenience of managing your fitness goals,
//                   booking classes, and ordering protein products all from one
//                   powerful mobile app.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   {/* <button
//                     to="#download"
//                     className="bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
//                   >
//                     <FiDownload className="mr-2" />
//                     Download App
//                   </button> */}
//                   <CTAButton
//                     text="Download App"
//                     to="#download"
//                     className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-emerald-600"
//                   />
//                   {/* <button className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
//                     Learn More
//                   </button> */}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="relative"
//               >
//                 <div className="relative mx-auto w-82 h-[650px]">
//                   {/* Phone frame shadow */}
//                   <div className="absolute inset-0 bg-black/20 rounded-3xl transform translate-y-4 translate-x-4 blur-sm"></div>

//                   {/* Phone frame */}
//                   <div className="relative bg-gray-900 rounded-3xl p-3 shadow-2xl overflow-hidden h-full">
//                     {/* Phone top bar */}
//                     <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 rounded-t-3xl flex items-center justify-center">
//                       <div className="w-20 h-4 bg-black rounded-full"></div>
//                     </div>

//                     {/* Phone screen */}
//                     <div className="bg-white rounded-2xl overflow-hidden mt-6 mb-2 h-full">
//                       <img
//                         src={appScreens[currentScreen].image}
//                         alt={appScreens[currentScreen].title}
//                         className="w-full h-full object-fit"
//                       />
//                     </div>

//                     {/* Phone bottom bar */}
//                     <div className="flex justify-center mb-2">
//                       <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* App Screens Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
//               APP SCREENS
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Explore Our App Features
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Navigate through our intuitive app interface designed to make your
//               fitness journey seamless
//             </p>
//           </motion.div>

//           <div className="max-w-6xl mx-auto">
//             <div className="relative">
//               <div className="flex justify-center items-center">
//                 <button
//                   onClick={prevScreen}
//                   className="absolute left-0 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
//                   aria-label="Previous screen"
//                 >
//                   <FiChevronLeft size={24} />
//                 </button>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                   {appScreens.map((screen, index) => (
//                     <motion.div
//                       key={screen.id}
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       className={`relative ${index === currentScreen ? "scale-105" : "scale-95"} transition-transform duration-300`}
//                     >
//                       <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                         <div className="h-120 w-60 overflow-hidden">
//                           <img
//                             src={screen.image}
//                             alt={screen.title}
//                             className="w-full h-full object-fit"
//                           />
//                         </div>

//                         {/* <div className="p-6">
//                           <h3 className="text-xl font-bold text-gray-900 mb-2">
//                             {screen.title}
//                           </h3>
//                           <p className="text-gray-600">{screen.description}</p>
//                         </div> */}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <button
//                   onClick={nextScreen}
//                   className="absolute right-0 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
//                   aria-label="Next screen"
//                 >
//                   <FiChevronRight size={24} />
//                 </button>
//               </div>

//               <div className="flex justify-center mt-8 space-x-2">
//                 {appScreens.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentScreen(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentScreen
//                         ? "bg-emerald-600 w-8"
//                         : "bg-gray-300"
//                     }`}
//                     aria-label={`Go to screen ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* App Features Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
//               APP FEATURES
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Why Choose Our App
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Experience the convenience and power of our feature-rich mobile
//               app designed to support your fitness journey
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {appFeatures.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-2xl"
//               >
//                 <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-600 mb-6">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Download Section */}
//       {/* <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             }}
//           ></div>
//         </div>

//         <div className="container mx-auto px-4 text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
//               DOWNLOAD NOW
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Get Started Today
//             </h2>
//             <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
//               Download our app now and start your fitness journey with
//               personalized plans, expert guidance, and quality nutrition
//               products
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <a
//                 href="https://play.google.com/store"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-lg flex items-center justify-center transition-colors duration-300"
//               >
//                 <svg
//                   className="w-6 h-6 mr-3"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
//                 </svg>
//                 <div className="text-left">
//                   <div className="text-xs">GET IT ON</div>
//                   <div className="text-lg font-semibold">Google Play</div>
//                 </div>
//               </a>

//               <a
//                 href="https://apps.apple.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-lg flex items-center justify-center transition-colors duration-300"
//               >
//                 <svg
//                   className="w-6 h-6 mr-3"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//                 </svg>
//                 <div className="text-left">
//                   <div className="text-xs">Download on the</div>
//                   <div className="text-lg font-semibold">App Store</div>
//                 </div>
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section> */}
//       <DownloadApp />
//     </div>
//   );
// };

// export default AppPreview;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiCheck,
  FiShield,
  FiZap,
  FiTruck,
  FiTrendingUp,
  FiNavigation,
  FiLock,
} from "react-icons/fi";
import DownloadApp from "../components/DownloadApp";
import screen1 from "../assets/screens/screen1.jpeg";
import screen2 from "../assets/screens/screen2.jpeg";
import screen3 from "../assets/screens/screen3.jpeg";
import CTAButton from "../components/CTAButton";

const AppPreview = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  // App screens data
  const appScreens = [
    {
      id: 1,
      title: "Home Dashboard",
      description: "View your fitness stats and daily activities at a glance",
      image: screen1,
    },
    {
      id: 2,
      title: "Fitness Booking",
      description: "Book classes with certified trainers in just a few taps",
      image: screen2,
    },
    {
      id: 3,
      title: "Protein Shop",
      description: "Browse and order from our wide range of protein products",
      image: screen3,
    },
    {
      id: 4,
      title: "Profile & Tracking",
      description: "Monitor your progress and track your fitness journey",
      image: screen1,
    },
  ];

  // App features data
  const appFeatures = [
    {
      icon: <FiNavigation className="text-2xl" />,
      title: "Easy Navigation",
      description: "Intuitive interface designed for seamless user experience",
    },
    {
      icon: <FiZap className="text-2xl" />,
      title: "Fast Booking",
      description: "Book classes and order products in just a few taps",
    },
    {
      icon: <FiLock className="text-2xl" />,
      title: "Secure Payment",
      description: "Multiple payment options with bank-level security",
    },
    {
      icon: <FiTruck className="text-2xl" />,
      title: "Order Tracking",
      description:
        "Real-time tracking of your orders from purchase to delivery",
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Progress Monitoring",
      description:
        "Detailed analytics and insights to track your fitness journey",
    },
  ];

  // Navigation functions
  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % appScreens.length);
  };

  const prevScreen = () => {
    setCurrentScreen(
      (prev) => (prev - 1 + appScreens.length) % appScreens.length,
    );
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen overflow-hidden mt-14 lg:mt-12 p-4 lg:p-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("https://www.acemetrix.com/wp-content/uploads/2015/08/black-banner-vector3.png")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 min-h-[90vh] sm:min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 sm:mb-6">
                  MOBILE APP
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                  Your Fitness Journey in Your Pocket
                </h1>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90">
                  Experience the convenience of managing your fitness goals,
                  booking classes, and ordering protein products all from one
                  powerful mobile app.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <CTAButton
                    text="Download App"
                    to="#download"
                    className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-emerald-600 w-full sm:w-auto"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mt-8 lg:mt-0"
              >
                <div
                  className="relative mx-auto"
                  style={{
                    width: "clamp(280px, 90vw, 320px)",
                    height: "clamp(600px, 150vw, 650px)",
                  }}
                >
                  {/* Phone frame shadow */}
                  <div className="absolute inset-0 bg-black/20 rounded-3xl transform translate-y-4 translate-x-4 blur-sm"></div>

                  {/* Phone frame */}
                  <div className="relative bg-gray-900 rounded-3xl p-3 shadow-2xl overflow-hidden h-full">
                    {/* Phone top bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 rounded-t-3xl flex items-center justify-center">
                      <div className="w-20 h-4 bg-black rounded-full"></div>
                    </div>

                    {/* Phone screen */}
                    <div className="bg-white rounded-2xl overflow-hidden mt-6 mb-2 h-full">
                      <img
                        src={appScreens[currentScreen].image}
                        alt={appScreens[currentScreen].title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Phone bottom bar */}
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screens Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              APP SCREENS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Explore Our App Features
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Navigate through our intuitive app interface designed to make your
              fitness journey seamless
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="flex justify-center items-center">
                <button
                  onClick={prevScreen}
                  className="absolute left-0 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow"
                  aria-label="Previous screen"
                >
                  <FiChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {appScreens.map((screen, index) => (
                    <motion.div
                      key={screen.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative ${index === currentScreen ? "scale-105" : "scale-95"} transition-transform duration-300`}
                    >
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="h-64 sm:h-80 lg:h-96 overflow-hidden">
                          <img
                            src={screen.image}
                            alt={screen.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={nextScreen}
                  className="absolute right-0 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow"
                  aria-label="Next screen"
                >
                  <FiChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>

              <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                {appScreens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScreen(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentScreen
                        ? "bg-emerald-600 w-8"
                        : "bg-gray-300 w-3"
                    }`}
                    aria-label={`Go to screen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              APP FEATURES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose Our App
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the convenience and power of our feature-rich mobile
              app designed to support your fitness journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-emerald-50 p-6 sm:p-8 rounded-2xl"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-600 mb-4 sm:mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DownloadApp />
    </div>
  );
};

export default AppPreview;
