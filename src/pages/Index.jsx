import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Global Market Rally Continues",
    description: "Stocks around the world are seeing gains as economic optimism grows.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Giants Face New Regulations",
    description: "Governments are imposing stricter rules on technology companies.",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more articles as needed
];

const trendingTopics = [
  "Inflation Rates",
  "Cryptocurrency",
  "Climate Change",
  "Elections",
  // Add more topics as needed
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="md">Financial Times</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading size="lg" mb={4}>Latest News</Heading>
          <VStack spacing={4}>
            {articles.map((article, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
                <Image src={article.imageUrl} alt={article.title} />
                <Box p={4}>
                  <Heading size="md">{article.title}</Heading>
                  <Text mt={2}>{article.description}</Text>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" p={4} bg="gray.100">
          <Heading size="lg" mb={4}>Trending Topics</Heading>
          <VStack spacing={2} align="start">
            {trendingTopics.map((topic, index) => (
              <Text key={index}>{topic}</Text>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={4}>
        <Flex justifyContent="space-between">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
            <Link as={RouterLink} to="/terms">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;