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
} from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", to: "hero" },
    { name: "Features", to: "features" },
    { name: "About Us", to: "about" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  const services = [
    { name: "AI Scheduling", href: "#" },
    { name: "Performance Analytics", href: "#" },
    { name: "Student Management", href: "#" },
    { name: "Fleet Management", href: "#" },
    { name: "Mobile App", href: "#" },
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

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                to="/"
                className="flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity"
              >
                <span className="text-xl font-bold text-white">
                  DriveXpert AI
                </span>
              </Link>

              <p className="mb-6 text-lg">
                Transforming driving education across UAE with cutting-edge AI
                technology. Streamline operations, enhance training, and deliver
                exceptional learning experiences.
              </p>

              <div className="space-y-3">
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
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>
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

          {/* Newsletter & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-semibold mb-6">
              Stay Updated
            </h3>

            <Box bg="gray.800" borderRadius="lg" p={6} mb={8}>
              <Text mb={4} color="gray.400">
                Subscribe to our newsletter for updates and exclusive offers.
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

            <h4 className="text-white font-semibold mb-4">Legal</h4>
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

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <h3 className="text-white text-lg font-semibold mb-8 text-center">
            Certifications & Compliance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                <span className="text-white">{cert.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
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
              <p>© {currentYear} DriveXpert AI. All rights reserved.</p>
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
