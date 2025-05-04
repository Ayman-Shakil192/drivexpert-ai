import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  Calendar,
  BookOpenCheck,
  Shield,
  LineChart,
  MessageSquare,
  Car,
  BarChart3,
  GraduationCap,
  FileText,
  Database,
  Smartphone,
} from "lucide-react";

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const featureData = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI-Powered Scheduling",
      description:
        "Optimize instructor schedules and student bookings with intelligent algorithms. Maximize resource utilization and minimize wait times.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      delay: 0.1,
    },
    {
      icon: <BookOpenCheck className="w-10 h-10" />,
      title: "Smart Learning Modules",
      description:
        "Adaptive learning paths that adjust to each student's pace and learning style. Personalized driving courses for optimal results.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      delay: 0.2,
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "Performance Analytics",
      description:
        "Real-time tracking of student progress, instructor performance, and institute metrics. Make data-driven decisions for better outcomes.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      delay: 0.3,
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Advanced Safety Features",
      description:
        "AI-monitored driving lessons with instant feedback. Ensure safety compliance and risk assessment for every student.",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      delay: 0.4,
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Smart Booking System",
      description:
        "Seamless online booking platform for students. Automated reminders, rescheduling options, and waitlist management.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      delay: 0.5,
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Multi-Language Support",
      description:
        "Support for Arabic, English, and other languages. Cater to UAE's diverse population with localized content and communication.",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="features"
      className="py-24 px-4 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 100px 50px, #eef2ff 1px, transparent 1px), 
                           radial-gradient(circle at 200px 150px, #eef2ff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section header */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={headerVariants}
          >
            <motion.div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-8 bg-blue-600 rounded"></span>
              <p className="mx-3 text-blue-600 font-medium">
                Revolutionary Solutions
              </p>
              <span className="h-1 w-8 bg-blue-600 rounded"></span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Buisness with{" "}
              <span className="text-blue-600">AI Powered Features</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of driving education with our comprehensive
              suite of AI-driven tools designed specifically for UAE driving
              institutes.
            </p>
          </motion.div>

          {/* Features grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
          >
            {featureData.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </motion.div>

          {/* Additional Features */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 40,
              transition: { delay: 0.8, duration: 0.6 },
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              Advanced Technology Stack
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                {
                  icon: <Car className="w-8 h-8" />,
                  label: "Fleet Management",
                  color: "text-blue-600",
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  label: "Business Intelligence",
                  color: "text-purple-600",
                },
                {
                  icon: <GraduationCap className="w-8 h-8" />,
                  label: "Exam Preparation",
                  color: "text-green-600",
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  label: "Digital Documentation",
                  color: "text-red-600",
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  label: "Student Database",
                  color: "text-orange-600",
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  label: "Mobile App",
                  color: "text-teal-600",
                },
              ].map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 20,
                    transition: { delay: 0.9 + idx * 0.1, duration: 0.5 },
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`${tech.color} mb-3`}>{tech.icon}</div>
                  <span className="text-sm text-gray-600 font-medium">
                    {tech.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
  bgColor,
  iconColor,
  delay,
  index,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 -inset-x-2 -inset-y-4 -z-10 transform scale-95 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />

      <div className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
        <div
          className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110`}
        >
          <span className={iconColor}>{icon}</span>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h4>

        <div className="flex-1">
          <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        </div>

        <motion.a
          href="#contact"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-auto"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Learn more
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </motion.a>

        <div className="absolute top-6 right-6 text-4xl font-bold text-gray-100 opacity-50">
          {(index + 1).toString().padStart(2, "0")}
        </div>

        <motion.div
          className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1))",
            filter: "blur(8px)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Features;
