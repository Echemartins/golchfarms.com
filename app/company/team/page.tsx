// app/company/team/page.tsx
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import NavBar from '../../(components)/NavBar';
import Footer from '../../(components)/Footer';

export default function Team() {
  return (
    <Box>
      <NavBar />
      <Container maxW="6xl" py={16}>
        <Heading>Team</Heading>
        <Text mt={4} color="gray.700">A nimble operations & production team focused on quality supply and farmer support. (Add profiles/photos later.)</Text>
      </Container>
      <Footer />
    </Box>
  );
}