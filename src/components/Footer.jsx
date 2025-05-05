import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Shield,
  Award,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", to: "hero" },
    { name: "Features", to: "features" },
    { name: "About Us", to: "about" },
    { name: "Testimonials", to: "testimonials" },
  ];

  const services = [
    { name: "AI solutions", href: "#" },
    { name: "Performance Analytics", href: "#" },
    { name: "Student Management", href: "#" },
    { name: "Fleet Management", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR Compliance", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "#",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
      color: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "#",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      href: "#",
      color: "hover:text-red-500",
    },
  ];

  // Mobile/Tablet Footer Component
  const MobileFooter = () => (
    <div className="block lg:hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <Link
          to="/"
          className="flex items-center justify-center md:justify-start space-x-2 mb-6 hover:opacity-80 transition-opacity"
        >
          <span className="text-xl font-bold text-white">DriveXpert AI</span>
        </Link>

        <p className="mb-6 text-base text-center md:text-left">
          Transforming driving education across UAE with cutting-edge AI
          technology. Streamline operations, enhance training, and deliver
          exceptional learning experiences.
        </p>

        <div className="space-y-3 flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span>Dubai Investment Park, Dubai, UAE</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-blue-500" />
            <span>+971 4 555 1234</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-blue-500" />
            <span>support@drivexpert.ae</span>
          </div>
        </div>
      </motion.div>

      {/* Accordion for mobile */}
      <Accordion allowToggle className="mb-8">
        <AccordionItem border="none" mb={4}>
          <h3>
            <AccordionButton
              _expanded={{ bg: "gray.700", color: "white" }}
              className="rounded-lg"
              px={4}
              py={3}
            >
              <Box flex="1" textAlign="left" fontWeight="semibold">
                Quick Links
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4} pt={2}>
            <ul className="space-y-3 pl-1">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border="none" mb={4}>
          <h3>
            <AccordionButton
              _expanded={{ bg: "gray.700", color: "white" }}
              className="rounded-lg"
              px={4}
              py={3}
            >
              <Box flex="1" textAlign="left" fontWeight="semibold">
                Our Services
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4} pt={2}>
            <ul className="space-y-3 pl-1">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border="none">
          <h3>
            <AccordionButton
              _expanded={{ bg: "gray.700", color: "white" }}
              className="rounded-lg"
              px={4}
              py={3}
            >
              <Box flex="1" textAlign="left" fontWeight="semibold">
                Legal
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4} pt={2}>
            <ul className="space-y-3 pl-1">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* Newsletter for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h3 className="text-white text-lg font-semibold mb-4 text-center md:text-left">
          Stay Updated
        </h3>

        <Box bg="gray.800" borderRadius="lg" p={4} mb={8}>
          <Text
            mb={4}
            color="gray.400"
            fontSize="sm"
            textAlign="center"
            md={{ textAlign: "left" }}
          >
            Subscribe to our newsletter for the latest updates, industry news,
            and exclusive offers.
          </Text>
          <InputGroup size="md">
            <Input
              type="email"
              placeholder="Enter your email"
              bg="gray.700"
              color="white"
              border="none"
              _placeholder={{ color: "gray.500" }}
              _hover={{ bg: "gray.600" }}
              _focus={{
                bg: "gray.600",
                boxShadow: "0 0 0 2px #3182ce",
              }}
              pr="4rem"
            />
            <InputRightElement width="3rem">
              <Button
                size="sm"
                bg="#2563eb"
                color="white"
                _hover={{ bg: "blue.700" }}
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </motion.div>
    </div>
  );

  // Improved Desktop Footer Component
  const DesktopFooter = () => (
    <div className="hidden lg:block">
      {/* Top Section: Company Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <Link
            to="/"
            className="flex items-center space-x-2 mb-4 md:mb-0 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl font-bold text-white">DriveXpert AI</span>
          </Link>
        </div>

        <p className="text-lg mb-6 max-w-5xl">
          Transforming driving education across UAE with cutting-edge AI
          technology. Streamline operations, enhance training, and deliver
          exceptional learning experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <span>Dubai Investment Park, Dubai, UAE</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <span>+971 4 555 1234</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <span>support@drivexpert.ae</span>
          </div>
        </div>
      </motion.div>

      {/* Middle Section: Links Grid */}
      <div className="grid grid-cols-3 gap-8 mb-12 border-t border-gray-800 pt-10">
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-lg font-semibold mb-6">
            Our Services
          </h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <a
                  href={service.href}
                  className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-lg font-semibold mb-6">Legal</h3>
          <ul className="space-y-3">
            {legalLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section: Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gray-800 rounded-xl p-8 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-semibold mb-3">
              Stay Updated
            </h3>
            <Text mb={3} color="gray.300">
              Subscribe to our newsletter for the latest updates, industry news,
              and exclusive offers.
            </Text>
          </div>
          <div>
            <InputGroup size="lg">
              <Input
                type="email"
                placeholder="Enter your email"
                bg="gray.700"
                color="white"
                border="none"
                _placeholder={{ color: "gray.500" }}
                _hover={{ bg: "gray.600" }}
                _focus={{
                  bg: "gray.600",
                  boxShadow: "0 0 0 2px #3182ce",
                }}
                pr="4.5rem"
              />
              <InputRightElement width="4.5rem">
                <Button
                  size="sm"
                  bg="#2563eb"
                  color="white"
                  _hover={{ bg: "blue.700" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Responsive sections */}
        <DesktopFooter />
        <MobileFooter />

        {/* Certificates Section - Responsive for all devices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <h3 className="text-white text-lg font-semibold mb-8 text-center">
            Certifications & Compliance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-blue-500" />,
                text: "GDPR Compliant",
              },
              {
                icon: <Award className="w-8 h-8 text-green-500" />,
                text: "ISO Certified",
              },
              {
                icon: <Globe className="w-8 h-8 text-purple-500" />,
                text: "UAE Licensed",
              },
              {
                icon: <Car className="w-8 h-8 text-red-500" />,
                text: "RTA Approved",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-2">{cert.icon}</div>
                <span className="text-white text-sm sm:text-base">
                  {cert.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar - Responsive for all devices */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={{ base: 4, md: 0 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-sm sm:text-base">
                © {currentYear} DriveXpert AI. All rights reserved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`transition-colors duration-300 ${social.color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </Flex>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
