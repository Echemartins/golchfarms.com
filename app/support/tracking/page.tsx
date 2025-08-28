// app/support/tracking/page.tsx
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import NavBar from '../../(components)/NavBar';
import Footer from '../../(components)/Footer';

export default function TrackingPage() {
  return (
    <Box>
      <NavBar />
      <Container maxW="6xl" py={16}>
        <Heading>Order Tracking</Heading>
        <Text mt={4} color="gray.700">Tracking portal coming soon. For now, message dispatch with your order reference.</Text>
      </Container>
      <Footer />
    </Box>
  );
}