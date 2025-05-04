import React from "react";
import {
  Box,
  Flex,
  Text,
  CloseButton,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircle, AlertCircle, Info } from "lucide-react";

const slideIn = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const slideOut = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100%); opacity: 0; }
`;

const CustomToast = ({ status, title, description, onClose, isClosing }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case "success":
        return {
          bg: useColorModeValue("green.50", "green.900"),
          borderColor: "green.500",
          icon: <CheckCircle color="#48BB78" size={24} />,
          iconBg: "green.100",
        };
      case "error":
        return {
          bg: useColorModeValue("red.50", "red.900"),
          borderColor: "red.500",
          icon: <AlertCircle color="#E53E3E" size={24} />,
          iconBg: "red.100",
        };
      case "info":
      default:
        return {
          bg: useColorModeValue("blue.50", "blue.900"),
          borderColor: "blue.500",
          icon: <Info color="#3182CE" size={24} />,
          iconBg: "blue.100",
        };
    }
  };

  const { bg, borderColor, icon, iconBg } = getStatusConfig(status);

  const animationDuration = "0.4s";

  return (
    <Box
      position="fixed"
      top="24px"
      right="24px"
      zIndex="toast"
      animation={
        isClosing
          ? `${slideOut} ${animationDuration} ease-in-out forwards`
          : `${slideIn} ${animationDuration} ease-in-out`
      }
      transformOrigin="top"
    >
      <Flex
        maxW="sm"
        w="full"
        bg={bg}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        borderLeft="4px solid"
        borderColor={borderColor}
      >
        <Flex justifyContent="center" alignItems="center" w={12} bg={iconBg}>
          {icon}
        </Flex>

        <Box mx={3} py={3} px={2} w="full">
          <Text fontWeight="bold">{title}</Text>
          {description && (
            <Text mt={1} fontSize="sm">
              {description}
            </Text>
          )}
        </Box>
        <CloseButton onClick={onClose} size="sm" m={2} />
      </Flex>
    </Box>
  );
};

export default CustomToast;
