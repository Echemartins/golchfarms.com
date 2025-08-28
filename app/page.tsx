import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import NavBar from './(components)/NavBar';
import Footer from './(components)/Footer';
import Hero from './(components)/Hero';
import FeatureCards from './(components)/FeatureCards';
import StatsStrip from './(components)/StatsStrip';   
import ProductGrid from './(components)/ProductGrid';
import CTA from './(components)/CTA';
import FAQ from './(components)/FAQ';

export default function HomePage() {
  return (
    <Box>
      <NavBar />
      <Hero />
      <Box mt={10}>
        <StatsStrip />
      </Box>
      <Box mt={16}>
        <Container maxW="7xl">
          <Stack spacing={6}>
            <Heading size="lg">Why Golch</Heading>
            <FeatureCards />
          </Stack>
        </Container>
      </Box>
      <Box mt={16}>
        <Container maxW="7xl">
          <Stack spacing={6}>
            <Heading size="lg">Products</Heading>
            <ProductGrid />
          </Stack>
        </Container>
      </Box>
      <Box mt={16}>
        <Container maxW="7xl">
          <Stack spacing={6}>
            <Heading size="lg">FAQs</Heading>
            <FAQ />
          </Stack>
        </Container>
      </Box>
      <Box mt={16}>
        <CTA />
      </Box>
      <Footer />
    </Box>
  );
}