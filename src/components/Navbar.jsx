import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../assets/images/logo-text-with-icon-removebg-preview.png";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Navigation items with icons
  const navigation = [
    { name: "About", to: "about" },
    { name: "Features", to: "features" },
    {
      name: "Testimonials",
      to: "testimonials",
    },
    {
      name: "Contact",
      to: "contact",
    },
  ];

  // Handle scroll event to change navbar appearance
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

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      } ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center space-x-2"
            >
              <img src={logo} alt="Logo" className="w-30 h-10" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-gray-700">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden"
                      >
                        {item.dropdown.map((dropItem, idx) => (
                          <Link
                            key={idx}
                            to={dropItem.to}
                            smooth={true}
                            duration={500}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="text-blue-600"
                    className="flex items-center space-x-1 px-3 py-2 text-base font-medium rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-300 text-gray-700 hover:text-blue-600"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none transition-colors text-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-lg"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 rounded-md"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="pl-6">
                        {item.dropdown.map((dropItem, idx) => (
                          <Link
                            key={idx}
                            to={dropItem.to}
                            smooth={true}
                            duration={500}
                            className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="text-blue-600"
                    className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
