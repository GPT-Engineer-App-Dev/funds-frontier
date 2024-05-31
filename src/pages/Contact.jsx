import { Box, Text, Link } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <Text fontSize="2xl" mb={4}>Contact Us</Text>
    <Text mb={4}>This is the Contact page.</Text>
    <Link color="teal.500" href="/">Go back to Home</Link>
  </Box>
);

export default Contact;