import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Box, Button, HStack } from "@chakra-ui/react";
import { ArrowRight, Car, Sparkles, Shield, Award } from "lucide-react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const keyFeatures = [
    { icon: Car, text: "Smart solutions", color: "text-blue-600" },
    { icon: Shield, text: "AI-Driven Safety", color: "text-green-600" },
    { icon: Award, text: "Digital Progress", color: "text-purple-600" },
  ];

  return (
    <section
      id="hero"
      className="relative bg-white overflow-hidden py-24 sm:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 20h40m-20-20v40' stroke='%231D4ED8' stroke-opacity='0.05' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-center text-center">
          <motion.div className="max-w-3xl" variants={itemVariants}>
            <motion.span
              className="inline-flex items-center space-x-2 text-blue-700 mb-6"
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Solutions</span>
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6"
              variants={itemVariants}
            >
              Transform Your Business with
              <br />
              <span className="text-blue-600 inline-block">
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
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Empowering driving institutes across UAE with cutting-edge AI
              solutions to streamline operations, enhance training, and deliver
              exceptional learning experiences.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Box>
                <HStack
                  spacing={4}
                  className="justify-center flex-wrap gap-y-4"
                >
                  <Link to="contact" smooth duration={2000} offset={-50}>
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

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-12"
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
      </motion.div>

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
