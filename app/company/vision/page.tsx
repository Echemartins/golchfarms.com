// app/company/vision/page.tsx
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import NavBar from '../../(components)/NavBar';
import Footer from '../../(components)/Footer';

export default function Vision() {
  return (
    <Box>
      <NavBar />
      <Container maxW="6xl" py={16}>
        <Heading>Vision & Story</Heading>
        <Text mt={4} color="gray.700">We aim to integrate aquaculture, feed production, and crop farming into a closed loop system, creating jobs and affordable protein for Nigeria.</Text>
      </Container>
      <Footer />
    </Box>
  );
}