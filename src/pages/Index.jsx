import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Our Website</Heading>
        <Text fontSize="lg">Explore our pages to learn more about us.</Text>
        <Button as={Link} to="/about" colorScheme="teal" size="lg">Learn More About Us</Button>
        <Button as={Link} to="/contact" colorScheme="teal" size="lg">Contact Us</Button>
      </VStack>
    </Container>
  );
};

export default Index;