// app/support/faq/page.tsx
import { Box, Container, Heading } from '@chakra-ui/react';
import NavBar from '../../(components)/NavBar';
import Footer from '../../(components)/Footer';
import FAQ from '../../(components)/FAQ';

export default function FAQPage() {
  return (
    <Box>
      <NavBar />
      <Container maxW="6xl" py={16}>
        <Heading>Frequently Asked Questions</Heading>
        <Box mt={6}>
          <FAQ />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}