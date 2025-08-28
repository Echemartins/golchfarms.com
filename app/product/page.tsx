// app/product/page.tsx
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import NavBar from '../(components)/NavBar';
import Footer from '../(components)/Footer';
import ProductGrid from '../(components)/ProductGrid';

export default function ProductLanding() {
  return (
    <Box>
      <NavBar />
      <Container maxW="7xl" py={16}>
        <Heading>Our Products</Heading>
        <Text mt={3} color="gray.700">Fresh & dried catfish, Golch feed, hatchery stock, and professional consultancy.</Text>
        <Box mt={8}>
          <ProductGrid />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}