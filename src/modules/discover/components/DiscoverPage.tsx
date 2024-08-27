"use client";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Footer from "@/modules/common/layout/components/Footer";

const HomePage = () => {
  return (
    <Box
      position="relative"
      minH="100vh"
      color="white"
      p="8"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(to-tl, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3), transparent)"
        zIndex="1"
      />

      {/* Background Image */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage="url('/bg for website.png')" // Replace with the correct path
        backgroundSize="cover"
        backgroundPosition="center"
        zIndex="0"
      />

      {/* Main Content */}
      <Box position="relative" zIndex="2">
        <Flex direction="column" align="center" justify="center" mb="8">
          <Heading
            as="h1"
            fontSize={["3xl", "4xl", "5xl"]} // Smaller font size for mobile
            fontWeight="extrabold"
            textAlign="center"
            textTransform="uppercase"
            letterSpacing="wider" // Adjust to your preference
            mb="4"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          >
            DAO Records
          </Heading>
          <Text
            fontSize={["md", "lg", "xl"]}  // Smaller font sizes for mobile
            fontWeight="bold"  // Make the text bold
            textAlign="center"  // Center the text
            mb="8"  // Margin at the bottom
            color="cyan.300"  // A bright, attention-grabbing color
            textShadow="1px 1px 3px rgba(0, 0, 0, 0.8)"  // Add some text shadow for depth
            letterSpacing="wide"  // Increase letter spacing
          >
            Empowering Unsigned Artists Through the Power of Blockchain
          </Text>
        </Flex>

        {/* Image and Content Section */}
        <Flex
          direction={["column", "column", "row"]} // Stack items vertically on small screens, side by side on larger screens
          justify="space-between"
          align="center"
          flexWrap="wrap"
          gap="8"
          bg="rgba(0, 0, 0, 0.7)" // Adding transparency for better readability
          p="6"
          borderRadius="md"
        >
          {/* Image Box */}
          <Box
            flex="1"
            w={["100%", "100%", "60%"]} // Full width on small screens, 60% on larger screens
            mb={["4", "4", "0"]} // Add margin bottom on small screens
            bg="rgba(255, 255, 255, 0.1)" // Slight transparency for the content box
            p="6"
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
          >
            <Image
              src="/Dao Records.png" // Use the correct path to your image
              alt="DAO Records"
              borderRadius="md"
              objectFit="cover"
              w="100%"
              h="auto" // Automatically adjust height based on aspect ratio
              mb="4"
            />
          </Box>

          {/* Story Box */}
          <Box
            flex="1"
            w={["100%", "100%", "40%"]} // Full width on small screens, 40% on larger screens
            bg="rgba(255, 255, 255, 0.1)" // Slight transparency for the content box
            p={["4", "6"]} // Smaller padding for mobile
            borderRadius="md"
            boxShadow="lg"
            color="white"
          >
            <Heading
              as="h2"
              size="lg"
              mb="4"
              textAlign="left"
              color="white"
              textShadow="1px 1px 2px rgba(0, 0, 0, 0.8)"
              fontSize={["lg", "xl"]} // Adjust heading size for mobile
            >
              DAO RECORDS STORY
            </Heading>
            <Text
              fontSize={["sm", "md"]} // Smaller text size for mobile
              lineHeight="1.2"
              textAlign="justify" // Justify text for better readability
              textShadow="1px 1px 2px rgba(0, 0, 0, 0.8)"
            >
              Mission Statement... Our mission is to empower independent music and promote social causes through the power of music. As a decentralized autonomous organization (DAO) governed by a board of directors, we strive to support artists who are passionate about creating meaningful and impactful music that resonates with people around the world.
              <br /><br />
              By leveraging the transparency and security of blockchain technology, we aim to create a more equitable and accessible music industry that provides greater value to both artists and fans. Our goal is to foster a community of like-minded individuals who share our vision and are dedicated to supporting independent music and social causes.
              <br /><br />
              But why Blockchain you ask? Transparency: The blockchain provides a transparent and immutable ledger, which means that all transactions and ownership of assets (e.g. music rights) are recorded on a public ledger that cannot be altered. This can provide greater transparency for artists and fans alike, as they can track the ownership and use of their music.
            </Text>
          </Box>
        </Flex>
      </Box>
      
      {/* Footer Component */}
      <Footer /> {/* Ensure that the Footer is placed within the main Box */}
    </Box>
  );
};

export default HomePage;
