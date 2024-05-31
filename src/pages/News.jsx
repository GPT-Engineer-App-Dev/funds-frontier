import { Box, Text, Link, VStack, Heading } from "@chakra-ui/react";

const News = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={4}>Latest News</Heading>
    <VStack spacing={4} align="start">
      <Box>
        <Heading as="h3" size="md">News Article 1</Heading>
        <Text>This is a summary of the first news article.</Text>
        <Link color="teal.500" href="/">Read more</Link>
      </Box>
      <Box>
        <Heading as="h3" size="md">News Article 2</Heading>
        <Text>This is a summary of the second news article.</Text>
        <Link color="teal.500" href="/">Read more</Link>
      </Box>
      <Box>
        <Heading as="h3" size="md">News Article 3</Heading>
        <Text>This is a summary of the third news article.</Text>
        <Link color="teal.500" href="/">Read more</Link>
      </Box>
    </VStack>
    <Link color="teal.500" href="/">Go back to Home</Link>
  </Box>
);

export default News;