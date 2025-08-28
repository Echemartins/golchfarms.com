// app/support/contact/page.tsx
import { Box, Container, Heading } from '@chakra-ui/react';
import NavBar from '../../(components)/NavBar';
import Footer from '../../(components)/Footer';
import ContactForm from '../../(components)/ContactForm';

export default function ContactPage() {
  return (
    <Box>
      <NavBar />
      <Container maxW="6xl" py={16}>
        <Heading>Contact</Heading>
        <Box mt={6}>
          <ContactForm />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}