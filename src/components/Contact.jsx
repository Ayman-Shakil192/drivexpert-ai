import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageSquare,
  User,
  Building,
  Shield,
  Calendar,
  Bot,
  Star,
  ArrowRight,
} from "lucide-react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Select,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  VStack,
  HStack,
  Grid,
  chakra,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const subjectOptions = {
    demo: "Demo Request",
    pricing: "Pricing Information Request",
    technical: "Technical Support Request",
    partnership: "Partnership Opportunity",
    other: "General Inquiry",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const currentDate = new Date().toLocaleString("en-AE", {
        timeZone: "Asia/Dubai",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        from_company: formData.company,
        from_phone: formData.phone,
        subject: subjectOptions[formData.subject] || formData.subject,
        message: formData.message,
        submission_date: currentDate,
        to_name: "DriveXpert Team",
      };

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Dubai Investment Park, Dubai",
      bgColor: useColorModeValue("blue.50", "blue.900"),
      iconColor: useColorModeValue("blue.600", "blue.400"),
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+971 4 555 1234 ",
      bgColor: useColorModeValue("green.50", "green.900"),
      iconColor: useColorModeValue("green.600", "green.400"),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "support@drivexpert.ae",
      bgColor: useColorModeValue("purple.50", "purple.900"),
      iconColor: useColorModeValue("purple.600", "purple.400"),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "9:00 AM - 7:00 PM",
      bgColor: useColorModeValue("orange.50", "orange.900"),
      iconColor: useColorModeValue("orange.600", "orange.400"),
    },
  ];

  const bgGradient = useColorModeValue(
    "linear(to-br, white, blue.50)",
    "linear(to-br, gray.900, blue.900)"
  );

  return (
    <Box
      id="contact"
      py={24}
      px={8}
      bgGradient={bgGradient}
      position="relative"
      overflow="hidden"
      ref={ref}
    >
      {/* Background decorations */}
      <Box position="absolute" top={0} left={0} right={0} bottom={0}>
        <Box
          position="absolute"
          top="0"
          left="0"
          w="96"
          h="96"
          bg="blue.200"
          borderRadius="full"
          mixBlendMode="multiply"
          filter="blur(40px)"
          opacity={0.2}
          transform="translate(-50%, -50%)"
          animation="blob 7s infinite"
        />
        <Box
          position="absolute"
          bottom="0"
          right="0"
          w="96"
          h="96"
          bg="purple.200"
          borderRadius="full"
          mixBlendMode="multiply"
          filter="blur(40px)"
          opacity={0.2}
          transform="translate(50%, 50%)"
          animation="blob 7s infinite"
          className="animation-delay-2000"
        />
      </Box>

      <Box maxW="7xl" mx="auto" position="relative" zIndex={10}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-8 bg-blue-600 rounded"></span>
              <p className="mx-3 text-blue-600 font-medium">Get In Touch</p>
              <span className="h-1 w-8 bg-blue-600 rounded"></span>
            </div>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your{" "}
              <span className="text-blue-600">Business?</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Contact us today to schedule a demo and discover how DriveXpert AI
              can revolutionize your driving institute operations.
            </p>
          </motion.div>

          <Grid templateColumns={{ lg: "1fr 1fr" }} gap={{ base: 12, lg: 16 }}>
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Box
                bg="white"
                borderRadius="3xl"
                shadow="2xl"
                p={{ base: 8, md: 10 }}
                position="relative"
                overflow="hidden"
              >
                {/* Decorative elements */}
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  w="40"
                  h="40"
                  transform="translate(50%, -50%)"
                  opacity={0.1}
                >
                  <Box
                    w="full"
                    h="full"
                    bgGradient="linear(to-br, blue.400, purple.500)"
                    borderRadius="full"
                    filter="blur(20px)"
                  />
                </Box>

                <Box position="relative" zIndex={10}>
                  <HStack spacing={3} mb={8}>
                    <Box bg="blue.100" p={3} borderRadius="lg">
                      <MessageSquare color="#3B82F6" />
                    </Box>
                    <Box>
                      <chakra.h3 fontSize="2xl" fontWeight="bold">
                        Send us a message
                      </chakra.h3>
                      <chakra.p color="gray.600">Let's connect!</chakra.p>
                    </Box>
                  </HStack>

                  <form onSubmit={handleSubmit}>
                    <VStack spacing={6}>
                      <Grid
                        templateColumns={{ md: "1fr 1fr" }}
                        gap={6}
                        w="full"
                      >
                        <FormControl isRequired>
                          <FormLabel>Full Name</FormLabel>
                          <InputGroup>
                            <InputLeftElement pointerEvents="none">
                              <User size={16} className="mt-2" />
                            </InputLeftElement>
                            <Input
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your Full Name"
                              h={12}
                              borderRadius="lg"
                              focusBorderColor="blue.500"
                              _focus={{ boxShadow: "lg" }}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel>Email Address</FormLabel>
                          <InputGroup>
                            <InputLeftElement pointerEvents="none">
                              <Mail size={16} className="mt-2" />
                            </InputLeftElement>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Your Email Address"
                              h={12}
                              borderRadius="lg"
                              focusBorderColor="blue.500"
                              _focus={{ boxShadow: "lg" }}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel>Company Name</FormLabel>
                          <InputGroup>
                            <InputLeftElement pointerEvents="none">
                              <Building size={16} className="mt-2" />
                            </InputLeftElement>
                            <Input
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your Company Name"
                              h={12}
                              borderRadius="lg"
                              focusBorderColor="blue.500"
                              _focus={{ boxShadow: "lg" }}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel>Phone Number</FormLabel>
                          <InputGroup>
                            <InputLeftElement pointerEvents="none">
                              <Phone size={16} className="mt-2" />
                            </InputLeftElement>
                            <Input
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Your Phone Number"
                              h={12}
                              borderRadius="lg"
                              focusBorderColor="blue.500"
                              _focus={{ boxShadow: "lg" }}
                            />
                          </InputGroup>
                        </FormControl>
                      </Grid>

                      <FormControl isRequired>
                        <FormLabel>Subject</FormLabel>
                        <Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Select a subject"
                          h={12}
                          borderRadius="lg"
                          focusBorderColor="blue.500"
                          _focus={{ boxShadow: "lg" }}
                        >
                          <option value="demo">Request a Demo</option>
                          <option value="pricing">Pricing Information</option>
                          <option value="technical">Technical Support</option>
                          <option value="partnership">
                            Partnership Opportunity
                          </option>
                          <option value="other">Other</option>
                        </Select>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Message</FormLabel>
                        <InputGroup>
                          <Textarea
                            name="message"
                            height={95}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            rows={5}
                            borderRadius="lg"
                            focusBorderColor="blue.500"
                            _focus={{ boxShadow: "lg" }}
                            pl={4}
                          />
                        </InputGroup>
                      </FormControl>

                      <Button
                        type="submit"
                        isLoading={isSubmitting}
                        loadingText="Sending..."
                        w="full"
                        h={12}
                        bg="#2563eb"
                        color="white"
                        borderRadius="lg"
                        _hover={{
                          bg: "blue.700",
                          transform: "translateY(-2px)",
                        }}
                        rightIcon={<Send />}
                      >
                        Send Message
                      </Button>

                      {submitStatus === "success" && (
                        <Alert status="success" borderRadius="lg">
                          <AlertIcon />
                          <AlertDescription>
                            Message sent successfully! We'll get back to you
                            soon.
                          </AlertDescription>
                        </Alert>
                      )}

                      {submitStatus === "error" && (
                        <Alert status="error" borderRadius="lg">
                          <AlertIcon />
                          <AlertDescription>
                            Error sending message. Please try again.
                          </AlertDescription>
                        </Alert>
                      )}
                    </VStack>
                  </form>
                </Box>
              </Box>

              {/* Quick connect options */}
              <Box
                mt={8}
                bg="#fff"
                borderRadius="3xl"
                p={8}
                color="#000"
                shadow="xl"
              >
                <chakra.h3 fontSize="xl" fontWeight="bold" mb={6}>
                  Quick Connect
                </chakra.h3>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                  <Button
                    bg="#fff"
                    variant={"outline"}
                    color="#2563eb"
                    borderRadius="lg"
                    p={4}
                    h="auto"
                    justifyContent="flex-start"
                    leftIcon={<Calendar />}
                  >
                    Book a meeting
                  </Button>

                  <Button
                    bg="#fff"
                    variant={"outline"}
                    color="#2563eb"
                    borderRadius="lg"
                    p={4}
                    h="auto"
                    justifyContent="flex-start"
                    leftIcon={<Bot />}
                  >
                    Live Chat
                  </Button>
                </Grid>
              </Box>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <VStack spacing={8}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    style={{ width: "100%" }}
                  >
                    <Box
                      bg="white"
                      borderRadius="xl"
                      shadow="md"
                      p={6}
                      display="flex"
                      alignItems="flex-start"
                      gap={4}
                      _hover={{ shadow: "xl" }}
                      transition="all 0.3s"
                      border="1px solid"
                      borderColor="gray.100"
                    >
                      <Box bg={info.bgColor} p={4} borderRadius="lg">
                        <chakra.span color={info.iconColor}>
                          {info.icon}
                        </chakra.span>
                      </Box>
                      <Box>
                        <chakra.h4 fontWeight="bold" fontSize="lg" mb={1}>
                          {info.title}
                        </chakra.h4>
                        <chakra.p color="gray.500" fontWeight="sm">
                          {info.content}
                        </chakra.p>
                      </Box>
                    </Box>
                  </motion.div>
                ))}

                {/* Why Choose DriveXpert AI */}
                <Box
                  w="full"
                  bg="#2563eb"
                  borderRadius={{ base: "xl", md: "2xl" }}
                  p={{ base: 4, sm: 6, md: 8 }}
                  color="white"
                  position="relative"
                  overflow="hidden"
                  shadow="2xl"
                >
                  <Box position="relative" zIndex={10}>
                    <chakra.h3
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="bold"
                      mb={{ base: 4, md: 6 }}
                      textAlign={{ base: "center", md: "left" }}
                    >
                      Why Choose DriveXpert AI?
                    </chakra.h3>
                    <VStack spacing={{ base: 3, md: 4 }} align="stretch">
                      {[
                        "Customized solutions for UAE driving schools",
                        "Seamless integration with existing systems",
                        "24/7 support with dedicated account managers",
                        "ROI-driven results with measurable outcomes",
                      ].map((item, idx) => (
                        <HStack
                          key={idx}
                          align="flex-start"
                          spacing={{ base: 2, md: 3 }}
                        >
                          <Box flexShrink={0}>
                            <CheckCircle color="#4ADE80" />
                          </Box>
                          <chakra.span fontSize={{ base: "sm", md: "md" }}>
                            {item}
                          </chakra.span>
                        </HStack>
                      ))}
                    </VStack>

                    <Button
                      mt={{ base: 6, md: 8 }}
                      w="full"
                      bg="white"
                      color="gray.900"
                      borderRadius="lg"
                      fontWeight="semibold"
                      size={{ base: "md", md: "lg" }}
                      rightIcon={<ArrowRight />}
                      _hover={{ bg: "gray.100" }}
                    >
                      Learn More About Features
                    </Button>
                  </Box>
                </Box>

                {/* Trust indicators */}
                <Grid templateColumns="repeat(3, 1fr)" gap={4} w="full">
                  {[
                    {
                      value: "100%",
                      label: "Secure",
                      icon: <Shield />,
                      color: "green.600",
                    },
                    {
                      value: "24/7",
                      label: "Support",
                      icon: <Clock />,
                      color: "blue.600",
                    },
                    {
                      value: "4.9/5",
                      label: "Rating",
                      icon: <Star />,
                      color: "yellow.600",
                    },
                  ].map((stat, idx) => (
                    <Box
                      key={idx}
                      bg="white"
                      borderRadius="lg"
                      shadow="md"
                      p={4}
                      textAlign="center"
                      _hover={{ shadow: "lg" }}
                      transition="shadow 0.3s"
                    >
                      <Box color={stat.color} fontSize="xl" mb={2}>
                        {stat.icon}
                      </Box>
                      <chakra.div fontSize="xl" fontWeight="bold" mb={1}>
                        {stat.value}
                      </chakra.div>
                      <chakra.div fontSize="sm" color="gray.600">
                        {stat.label}
                      </chakra.div>
                    </Box>
                  ))}
                </Grid>
              </VStack>
            </motion.div>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Contact;
