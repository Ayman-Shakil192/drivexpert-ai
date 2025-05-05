import React, { useState, useEffect } from "react";
import test_one from "../assets/images/test_one.jpg";
import test_two from "../assets/images/test_two.jpg";
import test_three from "../assets/images/test_three.jpg";
import test_four from "../assets/images/test_four.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonialData = [
    {
      name: "Ahmed Al Mansoori",
      role: "Director",
      company: "Al Reem Driving School",
      content:
        "DriveXpert AI has transformed our operations completely. The AI system reduced our administrative workload by 60%.",
      rating: 5,
      image: test_one,
    },
    {
      name: "Sarah Abdullah",
      role: "Operations Manager",
      company: "Emirates Driving Institute",
      content:
        "Thanks to DriveXpert AI, We've improved our instructor efficiency by 40% and student pass rates by 25%.",
      rating: 5,
      image: test_two,
    },
    {
      name: "Mohammed Hassan",
      role: "CEO",
      company: "Gulf Driving Academy",
      content:
        "Implementing DriveXpert AI was seamless. The multilingual support has helped us serve Dubai's diverse population much better than before.",
      rating: 5,
      image: test_three,
    },
    {
      name: "Fatima Al Zaabi",
      role: "Training Coordinator",
      company: "Abu Dhabi Driving Center",
      content:
        "The personalized learning modules have been a game-changer. Our students learn faster and retain information better than ever before.",
      rating: 5,
      image: test_four,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-50 to-white overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section header - More compact for mobile */}
          <motion.div
            className="text-center mb-10 md:mb-16"
            variants={containerVariants}
          >
            <div className="inline-flex items-center justify-center mb-3 md:mb-4">
              <span className="h-1 w-6 md:w-8 bg-blue-600 rounded"></span>
              <p className="mx-2 md:mx-3 text-sm md:text-base text-blue-600 font-medium">
                Success Stories
              </p>
              <span className="h-1 w-6 md:w-8 bg-blue-600 rounded"></span>
            </div>

            <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
              What Our Clients Say About{" "}
              <span className="text-blue-600">DriveXpert AI</span>
            </h2>

            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Discover how driving schools across UAE are transforming their
              operations and achieving unprecedented results.
            </p>
          </motion.div>

          {/* Testimonial carousel - Adjusted for mobile */}
          <div className="relative px-2">
            <AnimatePresence mode="wait" custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextTestimonial();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevTestimonial();
                  }
                }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8 lg:p-12 relative">
                  <Quote className="absolute top-5 left-5 md:top-8 md:left-8 w-6 h-6 md:w-10 md:h-10 text-blue-100" />

                  {/* Flex column on mobile, row on larger screens */}
                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 pt-4">
                    <motion.div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={testimonialData[currentIndex].image}
                        alt={testimonialData[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start items-center mb-3 md:mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 md:w-5 md:h-5 ${
                              i < testimonialData[currentIndex].rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6">
                        "{testimonialData[currentIndex].content}"
                      </p>

                      <div>
                        <h4 className="font-bold text-lg md:text-xl text-gray-900">
                          {testimonialData[currentIndex].name}
                        </h4>
                        <p className="text-sm md:text-base text-gray-600">
                          {testimonialData[currentIndex].role},{" "}
                          {testimonialData[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons - Positioned closer on mobile */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-4 lg:-translate-x-12 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-4 lg:translate-x-12 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-6 md:mt-8">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 w-5 md:w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trust indicators - 2 columns on mobile, 4 on larger screens */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 md:mt-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 40,
              transition: { delay: 0.6, duration: 0.6 },
            }}
          >
            {[
              { number: "500+", label: "Driving Schools" },
              { number: "50K+", label: "Students Trained" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-3 md:p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
