import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }} _activeLink={{ bg: 'teal.700' }}>
            Home
          </Link>
          <Link as={NavLink} to="/about" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }} _activeLink={{ bg: 'teal.700' }}>
            About
          </Link>
          <Link as={NavLink} to="/contact" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }} _activeLink={{ bg: 'teal.700' }}>
            Contact
          </Link>
          <Link as={NavLink} to="/news" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }} _activeLink={{ bg: 'teal.700' }}>
            News
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;