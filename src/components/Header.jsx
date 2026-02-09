// // // // // components/Header.jsx
// // // // import React, { useState } from "react";
// // // // import { motion } from "framer-motion";
// // // // import {
// // // //   FiMenu,
// // // //   FiX,
// // // //   FiHome,
// // // //   FiActivity,
// // // //   FiShoppingBag,
// // // //   FiSmartphone,
// // // //   FiInfo,
// // // //   FiMail,
// // // // } from "react-icons/fi";

// // // // const Header = () => {
// // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // // //   const toggleMenu = () => {
// // // //     setIsMenuOpen(!isMenuOpen);
// // // //   };

// // // //   const navItems = [
// // // //     { name: "Home", path: "/", icon: <FiHome /> },
// // // //     { name: "Fitness", path: "/fitness", icon: <FiActivity /> },
// // // //     { name: "Shop", path: "/shop", icon: <FiShoppingBag /> },
// // // //     { name: "App Preview", path: "/app-preview", icon: <FiSmartphone /> },
// // // //     { name: "About", path: "/about", icon: <FiInfo /> },
// // // //     { name: "Contact", path: "/contact", icon: <FiMail /> },
// // // //   ];

// // // //   return (
// // // //     <header className="bg-white shadow-md sticky top-0 z-50">
// // // //       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
// // // //         <div className="flex items-center">
// // // //           <h1 className="text-2xl font-bold text-green-600">FitShop</h1>
// // // //         </div>

// // // //         {/* Desktop Navigation */}
// // // //         <nav className="hidden md:flex space-x-6">
// // // //           {navItems.map((item) => (
// // // //             <a
// // // //               key={item.name}
// // // //               href={item.path}
// // // //               className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
// // // //             >
// // // //               <span>{item.icon}</span>
// // // //               <span>{item.name}</span>
// // // //             </a>
// // // //           ))}
// // // //         </nav>

// // // //         {/* Mobile Menu Button */}
// // // //         <button
// // // //           className="md:hidden text-gray-700"
// // // //           onClick={toggleMenu}
// // // //           aria-label="Toggle menu"
// // // //         >
// // // //           {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// // // //         </button>
// // // //       </div>

// // // //       {/* Mobile Navigation */}
// // // //       {isMenuOpen && (
// // // //         <motion.div
// // // //           initial={{ opacity: 0, height: 0 }}
// // // //           animate={{ opacity: 1, height: "auto" }}
// // // //           exit={{ opacity: 0, height: 0 }}
// // // //           transition={{ duration: 0.3 }}
// // // //           className="md:hidden bg-white shadow-md"
// // // //         >
// // // //           <nav className="flex flex-col space-y-2 px-4 py-2">
// // // //             {navItems.map((item) => (
// // // //               <a
// // // //                 key={item.name}
// // // //                 href={item.path}
// // // //                 className="flex items-center space-x-2 py-2 text-gray-700 hover:text-green-600 transition-colors"
// // // //                 onClick={() => setIsMenuOpen(false)}
// // // //               >
// // // //                 <span>{item.icon}</span>
// // // //                 <span>{item.name}</span>
// // // //               </a>
// // // //             ))}
// // // //           </nav>
// // // //         </motion.div>
// // // //       )}
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Header;

// // // // components/Header.jsx
// // // import React, { useState, useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { useLocation } from "react-router-dom";
// // // import {
// // //   FiMenu,
// // //   FiX,
// // //   FiHome,
// // //   FiActivity,
// // //   FiShoppingBag,
// // //   FiSmartphone,
// // //   FiInfo,
// // //   FiMail,
// // //   FiShoppingCart,
// // //   FiUser,
// // // } from "react-icons/fi";
// // // // import logo from "../../assets/images/eat_protien_img.webp";
// // // import logo from "../assets/images/eat_protien_img1.webp";
// // // import CTAButton from "./CTAButton";

// // // const Header = () => {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const location = useLocation();

// // //   // Change header style on scroll
// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       if (window.scrollY > 20) {
// // //         setScrolled(true);
// // //       } else {
// // //         setScrolled(false);
// // //       }
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const toggleMenu = () => {
// // //     setIsMenuOpen(!isMenuOpen);
// // //   };

// // //   const isActive = (path) => location.pathname === path;

// // //   const navItems = [
// // //     { name: "Home", path: "/", icon: <FiHome /> },
// // //     { name: "Fitness", path: "/fitness", icon: <FiActivity /> },
// // //     { name: "Shop", path: "/shop", icon: <FiShoppingBag /> },
// // //     { name: "App Preview", path: "/app-preview", icon: <FiSmartphone /> },
// // //     { name: "About", path: "/about", icon: <FiInfo /> },
// // //     { name: "Contact", path: "/contact", icon: <FiMail /> },
// // //   ];

// // //   // Mobile menu variants for animation
// // //   const menuVariants = {
// // //     closed: {
// // //       opacity: 0,
// // //       height: 0,
// // //       transition: {
// // //         duration: 0.3,
// // //         ease: "easeInOut",
// // //       },
// // //     },
// // //     open: {
// // //       opacity: 1,
// // //       height: "auto",
// // //       transition: {
// // //         duration: 0.3,
// // //         ease: "easeInOut",
// // //       },
// // //     },
// // //   };

// // //   return (
// // //     <header
// // //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
// // //         scrolled
// // //           ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
// // //           : "bg-gradient-to-r from-green-50 to-emerald-50 shadow-md py-2"
// // //       }`}
// // //     >
// // //       <div className="container mx-auto">
// // //         <div className="flex justify-between items-center">
// // //           {/* Logo with enhanced styling */}
// // //           <motion.div
// // //             className="flex items-center"
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //           >
// // //             <div className="relative">
// // //               <div className="absolute inset-0 bg-green-500 rounded-lg blur-md opacity-30"></div>
// // //               <img src={logo} alt="logo" width={160} height={150} />
// // //             </div>
// // //           </motion.div>

// // //           {/* Desktop Navigation with enhanced styling */}
// // //           <nav className="hidden lg:flex items-center space-x-1">
// // //             {navItems.map((item, index) => (
// // //               <motion.a
// // //                 key={item.name}
// // //                 href={item.path}
// // //                 className={`relative group flex items-center px-4 py-2 font-medium transition-all duration-200
// // //     ${
// // //       isActive(item.path)
// // //         ? "text-green-600 font-extrabold"
// // //         : "text-gray-700 hover:text-green-600"
// // //     }
// // //   `}
// // //                 initial={{ opacity: 0, y: -10 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ delay: index * 0.05 }}
// // //                 whileHover={{ y: -2 }}
// // //               >
// // //                 <span
// // //                   className={`mr-2 text-lg transition-transform ${
// // //                     isActive(item.path)
// // //                       ? "scale-110 text-green-600"
// // //                       : "group-hover:scale-110"
// // //                   }`}
// // //                 >
// // //                   {item.icon}
// // //                 </span>

// // //                 <span>{item.name}</span>

// // //                 {/* Active underline */}
// // //                 <span
// // //                   className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300
// // //       ${isActive(item.path) ? "" : "w-0 group-hover:w-full"}
// // //     `}
// // //                 />
// // //               </motion.a>
// // //             ))}

// // //             {/* <motion.button
// // //               className="ml-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200"
// // //               whileHover={{
// // //                 scale: 1.05,
// // //                 boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
// // //               }}
// // //               whileTap={{ scale: 0.95 }}
// // //             >
// // //               Get Started
// // //             </motion.button> */}
// // //             <CTAButton text="Get Started" to="#download" primary={true} />
// // //           </nav>

// // //           {/* Mobile Menu Button with enhanced animation */}
// // //           <motion.button
// // //             className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
// // //             onClick={toggleMenu}
// // //             aria-label="Toggle menu"
// // //             whileTap={{ scale: 0.9 }}
// // //           >
// // //             <AnimatePresence mode="wait">
// // //               {isMenuOpen ? (
// // //                 <motion.div
// // //                   key="close"
// // //                   initial={{ rotate: -90, opacity: 0 }}
// // //                   animate={{ rotate: 0, opacity: 1 }}
// // //                   exit={{ rotate: 90, opacity: 0 }}
// // //                   transition={{ duration: 0.2 }}
// // //                 >
// // //                   <FiX size={24} />
// // //                 </motion.div>
// // //               ) : (
// // //                 <motion.div
// // //                   key="menu"
// // //                   initial={{ rotate: 90, opacity: 0 }}
// // //                   animate={{ rotate: 0, opacity: 1 }}
// // //                   exit={{ rotate: -90, opacity: 0 }}
// // //                   transition={{ duration: 0.2 }}
// // //                 >
// // //                   <FiMenu size={24} />
// // //                 </motion.div>
// // //               )}
// // //             </AnimatePresence>
// // //           </motion.button>
// // //         </div>

// // //         {/* Mobile Navigation with enhanced animation */}
// // //         <AnimatePresence>
// // //           {isMenuOpen && (
// // //             <motion.div
// // //               variants={menuVariants}
// // //               initial="closed"
// // //               animate="open"
// // //               exit="closed"
// // //               className="lg:hidden overflow-hidden"
// // //             >
// // //               <div className="py-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl">
// // //                 <nav className="flex flex-col space-y-1 px-4">
// // //                   {navItems.map((item, index) => (
// // //                     <motion.a
// // //                       key={item.name}
// // //                       href={item.path}
// // //                       className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-600 rounded-lg transition-all duration-200"
// // //                       onClick={() => setIsMenuOpen(false)}
// // //                       initial={{ opacity: 0, x: -20 }}
// // //                       animate={{ opacity: 1, x: 0 }}
// // //                       transition={{ delay: index * 0.05 }}
// // //                       whileHover={{ x: 5 }}
// // //                     >
// // //                       <span className="mr-3 text-xl">{item.icon}</span>
// // //                       <span className="font-medium">{item.name}</span>
// // //                     </motion.a>
// // //                   ))}

// // //                   <motion.button
// // //                     className="w-full mt-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium shadow-md"
// // //                     whileTap={{ scale: 0.95 }}
// // //                   >
// // //                     Get Started
// // //                   </motion.button>
// // //                 </nav>
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Header;

// // // components/Header.jsx
// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useLocation } from "react-router-dom";
// // import {
// //   FiMenu,
// //   FiX,
// //   FiHome,
// //   FiActivity,
// //   FiShoppingBag,
// //   FiSmartphone,
// //   FiInfo,
// //   FiMail,
// //   FiShoppingCart,
// //   FiUser,
// // } from "react-icons/fi";
// // // import logo from "../../assets/images/eat_protien_img.webp";
// // import logo from "../assets/images/eat_protien_img1.webp";
// // import CTAButton from "./CTAButton";

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);
// //   const location = useLocation();

// //   // Change header style on scroll
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 20) {
// //         setScrolled(true);
// //       } else {
// //         setScrolled(false);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   const isActive = (path) => location.pathname === path;

// //   const navItems = [
// //     { name: "Home", path: "/", icon: <FiHome /> },
// //     { name: "Fitness", path: "/fitness", icon: <FiActivity /> },
// //     { name: "Shop", path: "/shop", icon: <FiShoppingBag /> },
// //     { name: "App Preview", path: "/app-preview", icon: <FiSmartphone /> },
// //     { name: "About", path: "/about", icon: <FiInfo /> },
// //     { name: "Contact", path: "/contact", icon: <FiMail /> },
// //   ];

// //   // Mobile menu variants for animation
// //   const menuVariants = {
// //     closed: {
// //       opacity: 0,
// //       height: 0,
// //       transition: {
// //         duration: 0.3,
// //         ease: "easeInOut",
// //       },
// //     },
// //     open: {
// //       opacity: 1,
// //       height: "auto",
// //       transition: {
// //         duration: 0.3,
// //         ease: "easeInOut",
// //       },
// //     },
// //   };

// //   // Backdrop for mobile menu
// //   const backdropVariants = {
// //     closed: { opacity: 0 },
// //     open: { opacity: 1 },
// //   };

// //   return (
// //     <>
// //       <header
// //         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
// //           scrolled
// //             ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
// //             : "bg-gradient-to-r from-green-50 to-emerald-50 shadow-md py-2"
// //         }`}
// //       >
// //         <div className="container mx-auto px-4 sm:px-2">
// //           <div className="flex justify-between items-center">
// //             {/* Logo with enhanced styling and responsive sizing */}
// //             <motion.div
// //               className="flex items-center"
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               <div className="relative">
// //                 <div className="absolute inset-0 bg-green-500 rounded-lg blur-md opacity-30"></div>
// //                 <img
// //                   src={logo}
// //                   alt="logo"
// //                   className="h-10 sm:h-12 md:h-14 w-auto"
// //                   width={160}
// //                   height={150}
// //                 />
// //               </div>
// //             </motion.div>

// //             {/* Desktop Navigation - Centered */}
// //             <nav className="hidden lg:flex items-center justify-center flex-1">
// //               {navItems.map((item, index) => (
// //                 <motion.a
// //                   key={item.name}
// //                   href={item.path}
// //                   className={`relative group flex items-center px-4 py-2 font-medium transition-all duration-200
// //         ${
// //           isActive(item.path)
// //             ? "text-green-600 font-extrabold"
// //             : "text-gray-700 hover:text-green-600"
// //         }
// //       `}
// //                   initial={{ opacity: 0, y: -10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.05 }}
// //                   whileHover={{ y: -2 }}
// //                 >
// //                   <span
// //                     className={`mr-2 text-lg transition-transform ${
// //                       isActive(item.path)
// //                         ? "scale-110 text-green-600"
// //                         : "group-hover:scale-110"
// //                     }`}
// //                   >
// //                     {item.icon}
// //                   </span>

// //                   <span>{item.name}</span>

// //                   {/* Active underline */}
// //                   <span
// //                     className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300
// //         ${isActive(item.path) ? "" : "w-0 group-hover:w-full"}
// //       `}
// //                   />
// //                 </motion.a>
// //               ))}
// //             </nav>

// //             {/* CTA Button - Right side for desktop */}
// //             <div className="hidden lg:block">
// //               <CTAButton text="Get Started" to="#download" primary={true} />
// //             </div>

// //             {/* Mobile Menu Button with enhanced animation */}
// //             <motion.button
// //               className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
// //               onClick={toggleMenu}
// //               aria-label="Toggle menu"
// //               whileTap={{ scale: 0.9 }}
// //             >
// //               <AnimatePresence mode="wait">
// //                 {isMenuOpen ? (
// //                   <motion.div
// //                     key="close"
// //                     initial={{ rotate: -90, opacity: 0 }}
// //                     animate={{ rotate: 0, opacity: 1 }}
// //                     exit={{ rotate: 90, opacity: 0 }}
// //                     transition={{ duration: 0.2 }}
// //                   >
// //                     <FiX size={24} />
// //                   </motion.div>
// //                 ) : (
// //                   <motion.div
// //                     key="menu"
// //                     initial={{ rotate: 90, opacity: 0 }}
// //                     animate={{ rotate: 0, opacity: 1 }}
// //                     exit={{ rotate: -90, opacity: 0 }}
// //                     transition={{ duration: 0.2 }}
// //                   >
// //                     <FiMenu size={24} />
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </motion.button>

// //             {/* Tablet Menu Button */}
// //             <motion.button
// //               className="hidden md:block lg:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
// //               onClick={toggleMenu}
// //               aria-label="Toggle menu"
// //               whileTap={{ scale: 0.9 }}
// //             >
// //               <AnimatePresence mode="wait">
// //                 {isMenuOpen ? (
// //                   <motion.div
// //                     key="close"
// //                     initial={{ rotate: -90, opacity: 0 }}
// //                     animate={{ rotate: 0, opacity: 1 }}
// //                     exit={{ rotate: 90, opacity: 0 }}
// //                     transition={{ duration: 0.2 }}
// //                   >
// //                     <FiX size={24} />
// //                   </motion.div>
// //                 ) : (
// //                   <motion.div
// //                     key="menu"
// //                     initial={{ rotate: 90, opacity: 0 }}
// //                     animate={{ rotate: 0, opacity: 1 }}
// //                     exit={{ rotate: -90, opacity: 0 }}
// //                     transition={{ duration: 0.2 }}
// //                   >
// //                     <FiMenu size={24} />
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </motion.button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Mobile/Tablet Navigation with enhanced animation and backdrop */}
// //       <AnimatePresence>
// //         {isMenuOpen && (
// //           <>
// //             {/* Backdrop */}
// //             <motion.div
// //               variants={backdropVariants}
// //               initial="closed"
// //               animate="open"
// //               exit="closed"
// //               className="fixed inset-0 bg-black/50 z-40"
// //               onClick={toggleMenu}
// //             />

// //             {/* Menu */}
// //             <motion.div
// //               variants={menuVariants}
// //               initial="closed"
// //               animate="open"
// //               exit="closed"
// //               className="fixed top-0 right-0 w-72 max-w-[80vw] h-full bg-white shadow-xl z-50"
// //             >
// //               <div className="flex flex-col h-full">
// //                 {/* Header */}
// //                 <div className="flex items-center justify-between p-4 border-b">
// //                   <div className="relative">
// //                     <div className="absolute inset-0 bg-green-500 rounded-lg blur-md opacity-30"></div>
// //                     <img
// //                       src={logo}
// //                       alt="logo"
// //                       className="h-10 w-auto relative z-10"
// //                       width={160}
// //                       height={150}
// //                     />
// //                   </div>
// //                   <button
// //                     className="p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
// //                     onClick={toggleMenu}
// //                     aria-label="Close menu"
// //                   >
// //                     <FiX size={24} />
// //                   </button>
// //                 </div>

// //                 {/* Navigation Items */}
// //                 <nav className="flex-1 overflow-y-auto py-4">
// //                   <div className="flex flex-col space-y-1 px-4">
// //                     {navItems.map((item, index) => (
// //                       <motion.a
// //                         key={item.name}
// //                         href={item.path}
// //                         className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
// //                           isActive(item.path)
// //                             ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-600"
// //                             : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-600"
// //                         }`}
// //                         onClick={() => setIsMenuOpen(false)}
// //                         initial={{ opacity: 0, x: 20 }}
// //                         animate={{ opacity: 1, x: 0 }}
// //                         transition={{ delay: index * 0.05 }}
// //                         whileHover={{ x: 5 }}
// //                       >
// //                         <span className="mr-3 text-xl">{item.icon}</span>
// //                         <span className="font-medium">{item.name}</span>
// //                       </motion.a>
// //                     ))}
// //                   </div>
// //                 </nav>

// //                 {/* CTA Button at bottom */}
// //                 <div className="p-4 border-t">
// //                   <CTAButton
// //                     text="Get Started"
// //                     to="#download"
// //                     primary={true}
// //                     fullWidth={true}
// //                     onClick={() => setIsMenuOpen(false)}
// //                   />
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // export default Header;

// // components/Header.jsx
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom";
// import {
//   FiMenu,
//   FiX,
//   FiHome,
//   FiActivity,
//   FiShoppingBag,
//   FiSmartphone,
//   FiInfo,
//   FiMail,
//   FiShoppingCart,
//   FiUser,
//   FiGrid,
//   FiChevronLeft,
//   FiDroplet,
//   FiBookOpen,
//   FiTarget,
// } from "react-icons/fi";
// import logo from "../assets/images/eat_protien_img1.webp";
// import CTAButton from "./CTAButton";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   // Change header style on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleCategories = () => {
//     setIsCategoriesOpen(!isCategoriesOpen);
//   };

//   const isActive = (path) => location.pathname === path;

//   const navItems = [
//     { name: "Home", path: "/", icon: <FiHome /> },
//     { name: "App Preview", path: "/app-preview", icon: <FiSmartphone /> },
//     { name: "About", path: "/about", icon: <FiInfo /> },
//     { name: "Contact", path: "/contact", icon: <FiMail /> },
//   ];

//   const categoryItems = [
//     {
//       name: "Fitness",
//       path: "/fitness",
//       icon: <FiActivity />,
//       color: "text-blue-600",
//     },
//     {
//       name: "Shop",
//       path: "/shop",
//       icon: <FiShoppingBag />,
//       color: "text-purple-600",
//     },
//     {
//       name: "Diet",
//       path: "/diet",
//       icon: <FiDroplet />,
//       color: "text-green-600",
//     },
//     {
//       name: "Recipes",
//       path: "/recipes",
//       icon: <FiBookOpen />,
//       color: "text-orange-600",
//     },
//   ];

//   // Mobile menu variants for animation
//   const menuVariants = {
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//   };

//   // Sidebar variants for animation
//   const sidebarVariants = {
//     closed: {
//       x: "100%",
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//     open: {
//       x: 0,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//   };

//   // Backdrop for mobile menu
//   const backdropVariants = {
//     closed: { opacity: 0 },
//     open: { opacity: 1 },
//   };

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
//             : "bg-gradient-to-r from-green-50 to-emerald-50 shadow-md py-2"
//         }`}
//       >
//         <div className="container mx-auto px-4 sm:px-2">
//           <div className="flex justify-between items-center">
//             {/* Logo with enhanced styling and responsive sizing */}
//             <motion.div
//               className="flex items-center"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="relative">
//                 <div className="absolute inset-0 bg-green-500 rounded-lg blur-md opacity-30"></div>
//                 <img
//                   src={logo}
//                   alt="logo"
//                   className="h-10 sm:h-12 md:h-14 w-auto"
//                   width={160}
//                   height={150}
//                 />
//               </div>
//             </motion.div>

//             {/* Desktop Navigation - Centered */}
//             <nav className="hidden lg:flex items-center justify-center flex-1">
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.path}
//                   className={`relative group flex items-center px-4 py-2 font-medium transition-all duration-200 ${
//                     isActive(item.path)
//                       ? "text-green-600 font-extrabold"
//                       : "text-gray-700 hover:text-green-600"
//                   }`}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                   whileHover={{ y: -2 }}
//                 >
//                   <span
//                     className={`mr-2 text-lg transition-transform ${
//                       isActive(item.path)
//                         ? "scale-110 text-green-600"
//                         : "group-hover:scale-110"
//                     }`}
//                   >
//                     {item.icon}
//                   </span>

//                   <span>{item.name}</span>

//                   {/* Active underline */}
//                   <span
//                     className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 ${
//                       isActive(item.path) ? "" : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </motion.a>
//               ))}
//             </nav>

//             {/* Right side buttons */}
//             <div className="flex items-center space-x-2">
//               {/* Categories button - visible on all screen sizes */}
//               <motion.button
//                 className="p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
//                 onClick={toggleCategories}
//                 aria-label="Toggle categories"
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <FiGrid size={20} />
//               </motion.button>

//               {/* CTA Button - Right side for desktop */}
//               <div className="hidden lg:block">
//                 <CTAButton text="Get Started" to="#download" primary={true} />
//               </div>

//               {/* Mobile Menu Button with enhanced animation */}
//               <motion.button
//                 className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
//                 onClick={toggleMenu}
//                 aria-label="Toggle menu"
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <AnimatePresence mode="wait">
//                   {isMenuOpen ? (
//                     <motion.div
//                       key="close"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 90, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <FiX size={24} />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="menu"
//                       initial={{ rotate: 90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: -90, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <FiMenu size={24} />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.button>

//               {/* Tablet Menu Button */}
//               <motion.button
//                 className="hidden md:block lg:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
//                 onClick={toggleMenu}
//                 aria-label="Toggle menu"
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <AnimatePresence mode="wait">
//                   {isMenuOpen ? (
//                     <motion.div
//                       key="close"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 90, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <FiX size={24} />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="menu"
//                       initial={{ rotate: 90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: -90, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <FiMenu size={24} />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Categories Sidebar */}
//       <AnimatePresence>
//         {isCategoriesOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               variants={backdropVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="fixed inset-0 bg-black/50 z-40"
//               onClick={toggleCategories}
//             />

//             {/* Sidebar */}
//             <motion.div
//               variants={sidebarVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="fixed top-0 right-0 w-80 max-w-[90vw] h-full bg-white shadow-xl z-50"
//             >
//               <div className="flex flex-col h-full">
//                 {/* Header */}
//                 <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-green-50 to-emerald-50">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     Categories
//                   </h3>
//                   <button
//                     className="p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
//                     onClick={toggleCategories}
//                     aria-label="Close categories"
//                   >
//                     <FiX size={20} />
//                   </button>
//                 </div>

//                 {/* Categories */}
//                 <div className="flex-1 overflow-y-auto py-4">
//                   <div className="px-4">
//                     <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
//                       Explore
//                     </h4>
//                     <div className="space-y-2">
//                       {categoryItems.map((item, index) => (
//                         <motion.a
//                           key={item.name}
//                           href={item.path}
//                           className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
//                             isActive(item.path)
//                               ? "bg-gradient-to-r from-green-50 to-emerald-50"
//                               : "hover:bg-gray-50"
//                           }`}
//                           onClick={() => setIsCategoriesOpen(false)}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: index * 0.05 }}
//                           whileHover={{ x: 5 }}
//                         >
//                           <span className={`mr-3 text-xl ${item.color}`}>
//                             {item.icon}
//                           </span>
//                           <span className="font-medium">{item.name}</span>
//                           {isActive(item.path) && (
//                             <span className="ml-auto">
//                               <FiChevronLeft className="rotate-180 text-gray-400" />
//                             </span>
//                           )}
//                         </motion.a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="p-4 border-t bg-gray-50">
//                   <CTAButton
//                     text="Explore All"
//                     to="/categories"
//                     primary={false}
//                     fullWidth={true}
//                     onClick={() => setIsCategoriesOpen(false)}
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Mobile/Tablet Navigation with enhanced animation and backdrop */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               variants={backdropVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="fixed inset-0 bg-black/50 z-40"
//               onClick={toggleMenu}
//             />

//             {/* Menu */}
//             <motion.div
//               variants={menuVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="fixed top-0 right-0 w-72 max-w-[80vw] h-full bg-white shadow-xl z-50"
//             >
//               <div className="flex flex-col h-full">
//                 {/* Header */}
//                 <div className="flex items-center justify-between p-4 border-b">
//                   <div className="relative">
//                     <div className="absolute inset-0 bg-green-500 rounded-lg blur-md opacity-30"></div>
//                     <img
//                       src={logo}
//                       alt="logo"
//                       className="h-10 w-auto relative z-10"
//                       width={160}
//                       height={150}
//                     />
//                   </div>
//                   <button
//                     className="p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
//                     onClick={toggleMenu}
//                     aria-label="Close menu"
//                   >
//                     <FiX size={24} />
//                   </button>
//                 </div>

//                 {/* Navigation Items */}
//                 <nav className="flex-1 overflow-y-auto py-4">
//                   <div className="flex flex-col space-y-1 px-4">
//                     {navItems.map((item, index) => (
//                       <motion.a
//                         key={item.name}
//                         href={item.path}
//                         className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
//                           isActive(item.path)
//                             ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-600"
//                             : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-600"
//                         }`}
//                         onClick={() => setIsMenuOpen(false)}
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.05 }}
//                         whileHover={{ x: 5 }}
//                       >
//                         <span className="mr-3 text-xl">{item.icon}</span>
//                         <span className="font-medium">{item.name}</span>
//                       </motion.a>
//                     ))}

//                     {/* Categories in mobile menu */}
//                     <div className="pt-2 mt-2 border-t">
//                       <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 px-4">
//                         Categories
//                       </h4>
//                       {categoryItems.map((item, index) => (
//                         <motion.a
//                           key={item.name}
//                           href={item.path}
//                           className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
//                             isActive(item.path)
//                               ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-600"
//                               : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-600"
//                           }`}
//                           onClick={() => setIsMenuOpen(false)}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{
//                             delay: (navItems.length + index) * 0.05,
//                           }}
//                           whileHover={{ x: 5 }}
//                         >
//                           <span className={`mr-3 text-xl ${item.color}`}>
//                             {item.icon}
//                           </span>
//                           <span className="font-medium">{item.name}</span>
//                         </motion.a>
//                       ))}
//                     </div>
//                   </div>
//                 </nav>

//                 {/* CTA Button at bottom */}
//                 <div className="p-4 border-t">
//                   <CTAButton
//                     text="Get Started"
//                     to="#download"
//                     primary={true}
//                     fullWidth={true}
//                     onClick={() => setIsMenuOpen(false)}
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Header;

// components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiHome,
  FiActivity,
  FiShoppingBag,
  FiSmartphone,
  FiInfo,
  FiMail,
  FiChevronDown,
  FiDroplet,
  FiBookOpen,
  FiTarget,
  FiShoppingCart,
  FiUser,
  FiGrid,
} from "react-icons/fi";
import logo from "../assets/images/eat_protien_img1.webp";
import CTAButton from "./CTAButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const categoriesTimeoutRef = useRef(null);

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Clear any existing timeout when component unmounts
  useEffect(() => {
    return () => {
      if (categoriesTimeoutRef.current) {
        clearTimeout(categoriesTimeoutRef.current);
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoriesToggle = () => {
    // Clear any existing timeout
    if (categoriesTimeoutRef.current) {
      clearTimeout(categoriesTimeoutRef.current);
    }
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleCategoriesMouseEnter = () => {
    // Clear any existing timeout
    if (categoriesTimeoutRef.current) {
      clearTimeout(categoriesTimeoutRef.current);
    }
    setIsCategoriesOpen(true);
  };

  const handleCategoriesMouseLeave = () => {
    // Set a small delay before closing to allow moving to dropdown
    categoriesTimeoutRef.current = setTimeout(() => {
      setIsCategoriesOpen(false);
    }, 150);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Home", path: "/", icon: <FiHome /> },
    {
      name: "Categories",
      path: "#",
      icon: <FiGrid />,
      hasDropdown: true,
    },
    { name: "App Preview", path: "/app-preview", icon: <FiSmartphone /> },
    { name: "About", path: "/about", icon: <FiInfo /> },
    { name: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  const categoryItems = [
    {
      name: "Fitness",
      path: "/fitness",
      icon: <FiActivity />,
      color: "text-blue-600",
      description: "Workouts & Training",
    },
    {
      name: "Shop",
      path: "/shop",
      icon: <FiShoppingBag />,
      color: "text-purple-600",
      description: "Products & Gear",
    },
    {
      name: "Diet",
      path: "/diet",
      icon: <FiDroplet />,
      color: "text-green-600",
      description: "Nutrition Plans",
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: <FiBookOpen />,
      color: "text-orange-600",
      description: "Healthy Meals",
    },
  ];

  // Dropdown menu variants
  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-gradient-to-r from-green-50 to-emerald-50 shadow-md py-2"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 rounded-lg blur-md opacity-30"></div>
                  <img
                    src={logo}
                    alt="logo"
                    className="h-10 sm:h-12 md:h-14 w-auto"
                    width={160}
                    height={150}
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  ref={item.hasDropdown ? dropdownRef : null}
                  onMouseEnter={
                    item.hasDropdown ? handleCategoriesMouseEnter : undefined
                  }
                  onMouseLeave={
                    item.hasDropdown ? handleCategoriesMouseLeave : undefined
                  }
                >
                  {item.hasDropdown ? (
                    <motion.button
                      onClick={handleCategoriesToggle}
                      className={`relative group flex items-center px-4 py-2 font-medium transition-all duration-200 ${
                        isActive(item.path)
                          ? "text-green-600 font-extrabold"
                          : "text-gray-700 hover:text-green-600"
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -2 }}
                    >
                      <span
                        className={`mr-2 text-lg transition-transform ${
                          isActive(item.path)
                            ? "scale-110 text-green-600"
                            : "group-hover:scale-110"
                        }`}
                      >
                        {item.icon}
                      </span>

                      <span>{item.name}</span>

                      <motion.span
                        className={`ml-2 transition-transform ${
                          isCategoriesOpen ? "rotate-180" : ""
                        }`}
                        animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                      >
                        <FiChevronDown size={16} />
                      </motion.span>

                      {/* Active underline */}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 ${
                          isActive(item.path) ? "" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </motion.button>
                  ) : (
                    <Link to={item.path}>
                      <motion.button
                        className={`relative group flex items-center px-4 py-2 font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? "text-green-600 font-extrabold"
                            : "text-gray-700 hover:text-green-600"
                        }`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -2 }}
                      >
                        <span
                          className={`mr-2 text-lg transition-transform ${
                            isActive(item.path)
                              ? "scale-110 text-green-600"
                              : "group-hover:scale-110"
                          }`}
                        >
                          {item.icon}
                        </span>

                        <span>{item.name}</span>

                        {/* Active underline */}
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 ${
                            isActive(item.path) ? "" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </motion.button>
                    </Link>
                  )}

                  {/* Categories Dropdown */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {isCategoriesOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                          onMouseEnter={() => {
                            if (categoriesTimeoutRef.current) {
                              clearTimeout(categoriesTimeoutRef.current);
                            }
                          }}
                          onMouseLeave={handleCategoriesMouseLeave}
                        >
                          <div className="py-2">
                            {categoryItems.map((category, index) => (
                              <Link
                                key={category.name}
                                to={category.path}
                                onClick={() => setIsCategoriesOpen(false)}
                              >
                                <motion.div
                                  className={`flex items-center px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer ${
                                    isActive(category.path) ? "bg-green-50" : ""
                                  }`}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <span
                                    className={`mr-3 text-xl ${category.color}`}
                                  >
                                    {category.icon}
                                  </span>
                                  <div className="flex-1">
                                    <div className="font-medium text-gray-800">
                                      {category.name}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {category.description}
                                    </div>
                                  </div>
                                  {isActive(category.path) && (
                                    <span className="text-green-600">
                                      <FiChevronDown className="rotate-270" />
                                    </span>
                                  )}
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-3">
              {/* CTA Button - Desktop */}
              <div className="hidden lg:block">
                <CTAButton text="Get Started" to="#download" primary={true} />
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiX size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiMenu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={toggleMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-80 max-w-[90vw] h-full bg-white shadow-xl z-50"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500 rounded-lg blur-md opacity-30"></div>
                      <img
                        src={logo}
                        alt="logo"
                        className="h-10 w-auto relative z-10"
                        width={160}
                        height={150}
                      />
                    </div>
                  </Link>
                  <button
                    className="p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto py-4">
                  <div className="px-4 space-y-1">
                    {navItems.map((item, index) => (
                      <div key={item.name}>
                        {!item.hasDropdown ? (
                          <Link
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <motion.div
                              className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                                isActive(item.path)
                                  ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-600"
                                  : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-600"
                              }`}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <span className="mr-3 text-xl">{item.icon}</span>
                              <span className="font-medium">{item.name}</span>
                            </motion.div>
                          </Link>
                        ) : (
                          <div>
                            <div className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                              {item.icon}
                              <span className="ml-2">{item.name}</span>
                            </div>
                            <div className="pl-4 space-y-1">
                              {categoryItems.map((category, catIndex) => (
                                <Link
                                  key={category.name}
                                  to={category.path}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <motion.div
                                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                                      isActive(category.path)
                                        ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-600"
                                        : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-600"
                                    }`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: (index + catIndex) * 0.05,
                                    }}
                                  >
                                    <span
                                      className={`mr-3 text-xl ${category.color}`}
                                    >
                                      {category.icon}
                                    </span>
                                    <div className="flex-1">
                                      <div className="font-medium">
                                        {category.name}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        {category.description}
                                      </div>
                                    </div>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>

                {/* CTA Button */}
                <div className="p-4 border-t">
                  <CTAButton
                    text="Get Started"
                    to="#download"
                    primary={true}
                    fullWidth={true}
                    onClick={() => setIsMenuOpen(false)}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
