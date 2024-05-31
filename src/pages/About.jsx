import { Box, Text, Link } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Text fontSize="2xl" mb={4}>About Us</Text>
    <Text mb={4}>This is the About page.</Text>
    <Link color="teal.500" href="/">Go back to Home</Link>
  </Box>
);

export default About;