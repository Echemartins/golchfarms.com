// app/support/page.tsx (landing)
import { Box, Container, Heading, Text, Stack, Link } from '@chakra-ui/react';
import NavBar from '../(components)/NavBar';
import Footer from '../(components)/Footer';
import NextLink from 'next/link';

export default function SupportLanding() {
  return (
    <Box>
      <NavBar />
      <Container maxW="6xl" py={16}>
        <Heading>Support</Heading>
        <Stack mt={4} spacing={3} color="gray.700">
          <Text>Find answers, contact the team, or track your order.</Text>
          <Link as={NextLink} href="/support/faq">FAQ</Link>
          <Link as={NextLink} href="/support/contact">Contact</Link>
          <Link as={NextLink} href="/support/tracking">Order Tracking</Link>
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
}