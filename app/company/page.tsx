// app/company/page.tsx (landing)
import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';
import NavBar from '../(components)/NavBar';
import Footer from '../(components)/Footer';

export default function CompanyLanding() {
  return (
    <Box>
      <NavBar />
      <Container maxW="6xl" py={16}>
        <Heading>About Golch</Heading>
        <Stack mt={4} spacing={4} color="gray.700">
          <Text>We are building a self‑sustaining, integrated aquaculture and crop system — supplying fresh & dried catfish, producing feed, and fertilizing crops with fish wastewater.</Text>
          <Text>Founded in 2022, Golch Farms has scaled through reinvestment and investor support, serving wholesale customers nationwide.</Text>
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
}