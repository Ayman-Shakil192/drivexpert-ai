import React from "react";
import lead_one from "../assets/images/lead_one.jpg";
import lead_two from "../assets/images/lead_two.jpg";
import lead_three from "../assets/images/lead_three.jpg";
import lead_four from "../assets/images/lead_four.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Rocket,
  Shield,
  Users,
  Award,
  Target,
  Brain,
  Car,
  Globe,
  ArrowRight,
  Star,
  Trophy,
  Heart,
  Calendar,
  Cpu,
  TrendingUp,
} from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const stats = [
    {
      number: "500+",
      label: "Driving Schools",
      icon: <Car className="w-8 h-8 text-blue-500" />,
    },
    {
      number: "50K+",
      label: "Students Trained",
      icon: <Users className="w-8 h-8 text-green-500" />,
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    },
    {
      number: "15+",
      label: "UAE Cities",
      icon: <Globe className="w-8 h-8 text-purple-500" />,
    },
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Leveraging AI technology to revolutionize driving education",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description:
        "Prioritizing student and instructor safety in every solution",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Focus",
      description: "Building solutions that truly serve our clients' needs",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Delivering high-quality solutions with measurable results",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const teamMembers = [
    {
      name: "Md. Shakil Ahmad",
      role: "Founder & CEO",
      image: lead_one,
      bio: "15+ years in automotive technology and AI solutions",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Md. Akil Ahmad",
      role: "Vice President & Buisness Head",
      image: lead_two,
      bio: "AI specialist with expertise in machine learning and automation",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Ayman Shakil",
      role: "Head of Operations",
      image: lead_three,
      bio: "Operations expert with 10+ years in education sector",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Saad Shakil",
      role: "Head of Customer Success",
      image: lead_four,
      bio: "Customer experience leader passionate about client success",
      social: { linkedin: "#", twitter: "#" },
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description:
        "DriveXpert AI established with a vision to transform driving education",
    },
    {
      year: "2020",
      title: "First AI Solution",
      description: "Launched intelligent solutions system for driving schools",
    },
    {
      year: "2021",
      title: "100+ Clients",
      description:
        "Reached milestone of 100 driving schools using our platform",
    },
    {
      year: "2022",
      title: "UAE Expansion",
      description:
        "Expanded services across all Emirates with localized support",
    },
    {
      year: "2023",
      title: "50,000 Students",
      description: "Helped train over 50,000 students across UAE",
    },
    {
      year: "2024",
      title: "AI Recognition",
      description:
        "Recognized as leading AI solution provider for education sector",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-8 bg-blue-600 rounded"></span>
              <p className="mx-3 text-blue-600 font-medium">About Us</p>
              <span className="h-1 w-8 bg-blue-600 rounded"></span>
            </div>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Transforming Driving Education with{" "}
              <span className="text-blue-600">AI Innovation</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize the driving education sector
              across UAE by leveraging cutting-edge AI technology to create
              smarter, safer, and more efficient learning experiences.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-24"
            variants={containerVariants}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-10"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 text-lg">
                To empower driving schools across the UAE with AI-driven
                solutions that enhance operational efficiency, improve student
                outcomes, and elevate the standard of driving education
                throughout the region.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 md:p-10"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg">
                To become the leading AI technology provider for driving
                education globally, setting new standards for innovation,
                safety, and educational excellence in the automotive training
                industry.
              </p>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="mb-24">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-16 h-16 rounded-lg mb-4 flex items-center justify-center ${value.color}`}
                  >
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={itemVariants} className="mb-24">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Meet Our Leadership Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <div className="flex space-x-4">
                        <a
                          href={member.social.linkedin}
                          className="text-white hover:text-blue-400"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href={member.social.twitter}
                          className="text-white hover:text-blue-400"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-1.212.159 4.5 4.5 0 01-.93-.092 4.936 4.936 0 004.605 3.417A9.867 9.867 0 011 19.54a13.94 13.94 0 007.548 2.212c9.058 0 14.01-7.514 14.01-13.986 0-.21-.005-.42-.014-.63A9.936 9.936 0 0024 4.59z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-blue-600 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section - Enhanced for better mobile responsiveness and animations */}
          <motion.div variants={itemVariants} className="mb-24">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Journey
            </h3>

            {/* Enhanced Responsive Timeline Design */}
            <div className="relative max-w-5xl mx-auto">
              {/* Center Line - Hidden on mobile */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 rounded-full hidden md:block" />

              {/* Responsive Timeline for mobile devices */}
              <div className="block md:hidden w-1 bg-blue-200 rounded-full absolute left-8 top-0 bottom-0"></div>

              {milestones.map((milestone, index) => {
                // Define color and icon based on the milestone type
                const milestoneStyles = [
                  {
                    color: "bg-blue-100 text-blue-600",
                    icon: <Calendar className="w-6 h-6" />,
                  },
                  {
                    color: "bg-purple-100 text-purple-600",
                    icon: <Cpu className="w-6 h-6" />,
                  },
                  {
                    color: "bg-green-100 text-green-600",
                    icon: <Award className="w-6 h-6" />,
                  },
                  {
                    color: "bg-orange-100 text-orange-600",
                    icon: <Globe className="w-6 h-6" />,
                  },
                  {
                    color: "bg-red-100 text-red-600",
                    icon: <Users className="w-6 h-6" />,
                  },
                  {
                    color: "bg-teal-100 text-teal-600",
                    icon: <TrendingUp className="w-6 h-6" />,
                  },
                ][index % 6];

                // Create individual refs for each milestone to trigger animations independently
                const [milestoneRef, milestoneInView] = useInView({
                  triggerOnce: true,
                  threshold: 0.2,
                });

                return (
                  <div
                    key={index}
                    className="mb-20 relative"
                    ref={milestoneRef}
                  >
                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                      <motion.div
                        className={`flex ${
                          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        } items-center`}
                        initial={{
                          opacity: 0,
                          x: index % 2 === 0 ? -100 : 100,
                        }}
                        animate={
                          milestoneInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
                        }
                        transition={{
                          duration: 0.7,
                          ease: "easeOut",
                        }}
                      >
                        {/* Content */}
                        <div
                          className={`w-5/12 ${
                            index % 2 === 0
                              ? "text-right pr-8"
                              : "text-left pl-8"
                          }`}
                        >
                          <motion.div
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                            whileHover={{
                              y: -5,
                              boxShadow:
                                "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                              {milestone.title}
                            </h4>
                            <p className="text-gray-600">
                              {milestone.description}
                            </p>
                          </motion.div>
                        </div>

                        {/* Center Circle */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                          <motion.div
                            className={`${milestoneStyles.color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                            whileHover={{ scale: 1.2 }}
                            initial={{ scale: 0 }}
                            animate={
                              milestoneInView ? { scale: 1 } : { scale: 0 }
                            }
                            transition={{
                              duration: 0.5,
                              delay: 0.2,
                            }}
                          >
                            {milestoneStyles.icon}
                          </motion.div>
                          <div className="bg-blue-600 text-white font-bold py-1 px-4 rounded-full mt-2 text-sm shadow-md">
                            {milestone.year}
                          </div>
                        </div>

                        {/* Empty space for the other side */}
                        <div className="w-5/12"></div>
                      </motion.div>
                    </div>

                    {/* Mobile/Tablet Layout - Fixed alignment */}
                    <motion.div
                      className="md:hidden flex items-start"
                      initial={{ opacity: 0, x: -50 }}
                      animate={
                        milestoneInView
                          ? { opacity: 1, x: -25 }
                          : { opacity: 0, x: -50 }
                      }
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      {/* Left Circle - Fixed alignment with the line */}
                      <div className="flex-shrink-0 z-10 flex flex-col items-center ml-8 mr-4 mt-3 relative">
                        <motion.div
                          className={`${milestoneStyles.color} w-12 h-12 rounded-full flex items-center justify-center shadow-md border-4 border-white`}
                          initial={{ scale: 0 }}
                          animate={
                            milestoneInView ? { scale: 1 } : { scale: 0 }
                          }
                          transition={{
                            duration: 0.5,
                            delay: 0.1,
                          }}
                        >
                          {milestoneStyles.icon}
                        </motion.div>
                        <div className="bg-blue-600 text-white font-bold py-1 px-3 rounded-full mt-2 text-xs shadow-md text-center">
                          {milestone.year}
                        </div>
                      </div>

                      {/* Content */}
                      <motion.div
                        className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 flex-1"
                        whileHover={{
                          y: -3,
                          boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {milestone.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 transform translate-x-32 -translate-y-32">
              <div className="w-96 h-96 bg-white opacity-10 rounded-full" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of driving schools across UAE that are
                revolutionizing their operations with DriveXpert AI.
              </p>
              <motion.button
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
