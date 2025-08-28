// app/company/sustainability/page.tsx
import { Box, Container, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import NavBar from '../../(components)/NavBar';
import Footer from '../../(components)/Footer';

export default function Sustainability() {
  return (
    <Box>
      <NavBar />
      <Container maxW="6xl" py={16}>
        <Heading>Sustainability</Heading>
        <Text mt={4} color="gray.700">We reuse fish wastewater to fertilize crops and continually improve feed efficiency to lower costs and environmental impact.</Text>
        <UnorderedList mt={6} color="gray.700" spacing={2}>
          <ListItem>Wastewater irrigation trials successful; scaling in phase 2.</ListItem>
          <ListItem>Feed production in‑house to stabilize quality & cost.</ListItem>
          <ListItem>Goal: fully integrated, self‑sustaining farm system.</ListItem>
        </UnorderedList>
      </Container>
      <Footer />
    </Box>
  );
}