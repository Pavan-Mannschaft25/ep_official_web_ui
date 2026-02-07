// // // components/Header.jsx
// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   FiMenu,
// //   FiX,
// //   FiHome,
// //   FiActivity,
// //   FiShoppingBag,
// //   FiSmartphone,
// //   FiInfo,
// //   FiMail,
// // } from "react-icons/fi";

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   const navItems = [
// //     { name: "Home", path: "/", icon: <FiHome /> },
// //     { name: "Fitness", path: "/fitness", icon: <FiActivity /> },
// //     { name: "Shop", path: "/shop", icon: <FiShoppingBag /> },
// //     { name: "App Preview", path: "/app-preview", icon: <FiSmartphone /> },
// //     { name: "About", path: "/about", icon: <FiInfo /> },
// //     { name: "Contact", path: "/contact", icon: <FiMail /> },
// //   ];

// //   return (
// //     <header className="bg-white shadow-md sticky top-0 z-50">
// //       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
// //         <div className="flex items-center">
// //           <h1 className="text-2xl font-bold text-green-600">FitShop</h1>
// //         </div>

// //         {/* Desktop Navigation */}
// //         <nav className="hidden md:flex space-x-6">
// //           {navItems.map((item) => (
// //             <a
// //               key={item.name}
// //               href={item.path}
// //               className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
// //             >
// //               <span>{item.icon}</span>
// //               <span>{item.name}</span>
// //             </a>
// //           ))}
// //         </nav>

// //         {/* Mobile Menu Button */}
// //         <button
// //           className="md:hidden text-gray-700"
// //           onClick={toggleMenu}
// //           aria-label="Toggle menu"
// //         >
// //           {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// //         </button>
// //       </div>

// //       {/* Mobile Navigation */}
// //       {isMenuOpen && (
// //         <motion.div
// //           initial={{ opacity: 0, height: 0 }}
// //           animate={{ opacity: 1, height: "auto" }}
// //           exit={{ opacity: 0, height: 0 }}
// //           transition={{ duration: 0.3 }}
// //           className="md:hidden bg-white shadow-md"
// //         >
// //           <nav className="flex flex-col space-y-2 px-4 py-2">
// //             {navItems.map((item) => (
// //               <a
// //                 key={item.name}
// //                 href={item.path}
// //                 className="flex items-center space-x-2 py-2 text-gray-700 hover:text-green-600 transition-colors"
// //                 onClick={() => setIsMenuOpen(false)}
// //               >
// //                 <span>{item.icon}</span>
// //                 <span>{item.name}</span>
// //               </a>
// //             ))}
// //           </nav>
// //         </motion.div>
// //       )}
// //     </header>
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
// } from "react-icons/fi";
// // import logo from "../../assets/images/eat_protien_img.webp";
// import logo from "../assets/images/eat_protien_img1.webp";
// import CTAButton from "./CTAButton";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
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

//   const isActive = (path) => location.pathname === path;

//   const navItems = [
//     { name: "Home", path: "/", icon: <FiHome /> },
//     { name: "Fitness", path: "/fitness", icon: <FiActivity /> },
//     { name: "Shop", path: "/shop", icon: <FiShoppingBag /> },
//     { name: "App Preview", path: "/app-preview", icon: <FiSmartphone /> },
//     { name: "About", path: "/about", icon: <FiInfo /> },
//     { name: "Contact", path: "/contact", icon: <FiMail /> },
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

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
//           : "bg-gradient-to-r from-green-50 to-emerald-50 shadow-md py-2"
//       }`}
//     >
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center">
//           {/* Logo with enhanced styling */}
//           <motion.div
//             className="flex items-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-green-500 rounded-lg blur-md opacity-30"></div>
//               <img src={logo} alt="logo" width={160} height={150} />
//             </div>
//           </motion.div>

//           {/* Desktop Navigation with enhanced styling */}
//           <nav className="hidden lg:flex items-center space-x-1">
//             {navItems.map((item, index) => (
//               <motion.a
//                 key={item.name}
//                 href={item.path}
//                 className={`relative group flex items-center px-4 py-2 font-medium transition-all duration-200
//     ${
//       isActive(item.path)
//         ? "text-green-600 font-extrabold"
//         : "text-gray-700 hover:text-green-600"
//     }
//   `}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 whileHover={{ y: -2 }}
//               >
//                 <span
//                   className={`mr-2 text-lg transition-transform ${
//                     isActive(item.path)
//                       ? "scale-110 text-green-600"
//                       : "group-hover:scale-110"
//                   }`}
//                 >
//                   {item.icon}
//                 </span>

//                 <span>{item.name}</span>

//                 {/* Active underline */}
//                 <span
//                   className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300
//       ${isActive(item.path) ? "" : "w-0 group-hover:w-full"}
//     `}
//                 />
//               </motion.a>
//             ))}

//             {/* <motion.button
//               className="ml-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200"
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Started
//             </motion.button> */}
//             <CTAButton text="Get Started" to="#download" primary={true} />
//           </nav>

//           {/* Mobile Menu Button with enhanced animation */}
//           <motion.button
//             className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//             whileTap={{ scale: 0.9 }}
//           >
//             <AnimatePresence mode="wait">
//               {isMenuOpen ? (
//                 <motion.div
//                   key="close"
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <FiX size={24} />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="menu"
//                   initial={{ rotate: 90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: -90, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <FiMenu size={24} />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.button>
//         </div>

//         {/* Mobile Navigation with enhanced animation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               variants={menuVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="lg:hidden overflow-hidden"
//             >
//               <div className="py-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl">
//                 <nav className="flex flex-col space-y-1 px-4">
//                   {navItems.map((item, index) => (
//                     <motion.a
//                       key={item.name}
//                       href={item.path}
//                       className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-600 rounded-lg transition-all duration-200"
//                       onClick={() => setIsMenuOpen(false)}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       whileHover={{ x: 5 }}
//                     >
//                       <span className="mr-3 text-xl">{item.icon}</span>
//                       <span className="font-medium">{item.name}</span>
//                     </motion.a>
//                   ))}

//                   <motion.button
//                     className="w-full mt-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium shadow-md"
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Get Started
//                   </motion.button>
//                 </nav>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// };

// export default Header;

// components/Header.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiHome,
  FiActivity,
  FiShoppingBag,
  FiSmartphone,
  FiInfo,
  FiMail,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
// import logo from "../../assets/images/eat_protien_img.webp";
import logo from "../assets/images/eat_protien_img1.webp";
import CTAButton from "./CTAButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Fitness", path: "/fitness", icon: <FiActivity /> },
    { name: "Shop", path: "/shop", icon: <FiShoppingBag /> },
    { name: "App Preview", path: "/app-preview", icon: <FiSmartphone /> },
    { name: "About", path: "/about", icon: <FiInfo /> },
    { name: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  // Mobile menu variants for animation
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Backdrop for mobile menu
  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
            : "bg-gradient-to-r from-green-50 to-emerald-50 shadow-md py-2"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-2">
          <div className="flex justify-between items-center">
            {/* Logo with enhanced styling and responsive sizing */}
            <motion.div
              className="flex items-center"
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

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  className={`relative group flex items-center px-4 py-2 font-medium transition-all duration-200
        ${
          isActive(item.path)
            ? "text-green-600 font-extrabold"
            : "text-gray-700 hover:text-green-600"
        }
      `}
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
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300
        ${isActive(item.path) ? "" : "w-0 group-hover:w-full"}
      `}
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button - Right side for desktop */}
            <div className="hidden lg:block">
              <CTAButton text="Get Started" to="#download" primary={true} />
            </div>

            {/* Mobile Menu Button with enhanced animation */}
            <motion.button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
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

            {/* Tablet Menu Button */}
            <motion.button
              className="hidden md:block lg:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
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
      </header>

      {/* Mobile/Tablet Navigation with enhanced animation and backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/50 z-40"
              onClick={toggleMenu}
            />

            {/* Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 w-72 max-w-[80vw] h-full bg-white shadow-xl z-50"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
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
                  <div className="flex flex-col space-y-1 px-4">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.path}
                        className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActive(item.path)
                            ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-600"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-600"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="mr-3 text-xl">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* CTA Button at bottom */}
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
