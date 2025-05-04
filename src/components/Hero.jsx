import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Box, Button, HStack } from "@chakra-ui/react";
import {
  ArrowRight,
  Car,
  Sparkles,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react";
import Typewriter from "typewriter-effect";
import heroImage from "../assets/images/hero.png"; // Replace with your actual image path

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Array of key features to replace stats
  const keyFeatures = [
    {
      icon: Car,
      text: "Smart solutions",
      color: "text-blue-600",
    },
    {
      icon: Shield,
      text: "AI-Driven Safety",
      color: "text-green-600",
    },
    {
      icon: Award,
      text: "Digital Progress",
      color: "text-purple-600",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 20h40m-20-20v40' stroke='%231D4ED8' stroke-opacity='0.05' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto py-24 px-2 lg:py-32 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              className="max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              {/* Badge */}
              <motion.span
                className="inline-flex items-center space-x-2 text-blue-700 mb-6"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 ml-2" />
                <span className="text-sm font-medium">
                  AI-Powered Solutions
                </span>
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 mb-6"
                variants={itemVariants}
              >
                Transform Your Business with
                <br />
                <span className="text-blue-600 relative inline-block">
                  <Typewriter
                    options={{
                      strings: [
                        "AI Technology",
                        "Smart Solutions",
                        "Digital Innovation",
                      ],
                      autoStart: true,
                      loop: true,
                      cursor: "",
                      deleteSpeed: 50,
                      delay: 50,
                    }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Empowering driving institutes across UAE with cutting-edge AI
                solutions to streamline operations, enhance training, and
                deliver exceptional learning experiences.
              </motion.p>

              <motion.div variants={itemVariants}>
                <Box>
                  <HStack
                    spacing={4}
                    className="justify-center lg:justify-start flex-wrap gap-y-4"
                  >
                    <Link
                      to="contact"
                      smooth={true}
                      duration={2000}
                      offset={-50}
                    >
                      <Button
                        size="lg"
                        variant="solid"
                        className="!bg-blue-600 hover:!bg-blue-700 !text-white !px-8 !py-4 !rounded-lg !transition-all !duration-300 !transform hover:!scale-105"
                        rightIcon={<ArrowRight className="w-5 h-5" />}
                      >
                        Request Demo
                      </Button>
                    </Link>
                  </HStack>
                </Box>
              </motion.div>

              {/* Key Features (replacing stats) */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mt-16"
                variants={itemVariants}
              >
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-sm font-medium text-gray-700">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <motion.div
              className="relative max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
            >
              {/* Hero image container */}
              <div className="relative z-10">
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500 rounded-lg opacity-10 transform rotate-45"
                  animate={{ rotate: [45, 90, 45] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-8 -right-8 w-20 h-20 bg-purple-500 rounded-full opacity-10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                {/* Main hero image */}
                <motion.div
                  className="relative z-20 rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={heroImage}
                    alt="DriveXpert AI - Transform Driving Education"
                    className="w-full h-auto"
                    loading="eager"
                  />

                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none" />
                </motion.div>

                {/* Floating cards with better mobile positioning */}
                <motion.div
                  className="absolute top-6 left-1 sm:top-12 sm:-left-6 lg:top-16 lg:-left-8 bg-white rounded-lg shadow-lg p-2 sm:p-3 lg:p-4 max-w-[140px] sm:max-w-[160px] lg:max-w-[200px] z-30"
                  initial={{ opacity: 0, x: -50, y: 50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-blue-100 p-1 sm:p-2 rounded-lg">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-gray-900">
                        AI Safety
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600">
                        Real-time monitoring
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 right-1 sm:bottom-10 sm:-right-8 lg:bottom-10 lg:-right-20 bg-white rounded-lg shadow-lg p-2 sm:p-3 lg:p-4 max-w-[140px] sm:max-w-[160px] lg:max-w-[200px] z-30"
                  initial={{ opacity: 0, x: 50, y: -50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-green-100 p-1 sm:p-2 rounded-lg">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-gray-900">
                        Excellence
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600">
                        Top-rated training
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
