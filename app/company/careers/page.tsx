// app/company/careers/page.tsx
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import NavBar from '../../(components)/NavBar';
import Footer from '../../(components)/Footer';

export default function Careers() {
  return (
    <Box>
      <NavBar />
      <Container maxW="6xl" py={16}>
        <Heading>Careers</Heading>
        <Text mt={4} color="gray.700">We hire for hatchery tech, processing, logistics, and sales. Email your CV to careers@golch.ng.</Text>
      </Container>
      <Footer />
    </Box>
  );
}