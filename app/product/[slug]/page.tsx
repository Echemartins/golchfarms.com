// app/product/[slug]/page.tsx
import { Box, Container, Heading, ListItem, Text, UnorderedList, Button } from '@chakra-ui/react';
import NavBar from '../../(components)/NavBar';
import Footer from '../../(components)/Footer';
import { notFound } from 'next/navigation';

const MAP: Record<string, { title: string; description: string; features: string[] }> = {
  'fresh-catfish': {
    title: 'Fresh Catfish',
    description: 'Mélange (≈0.5 kg) and table-size (≈1.0 kg) — harvested and delivered for market day.',
    features: ['Bulk/wholesale supply', 'Cold‑chain options on request', 'Consistent sizing per order'],
  },
  'dried-catfish': {
    title: 'Dried Catfish',
    description: 'Retail packs and wholesale dried fish — hygienically processed and packaged.',
    features: ['Moisture‑controlled drying', 'Retail/wholesale packaging', 'Stable shelf life'],
  },
  'fish-feed': {
    title: 'Golch Feed',
    description: 'Quality floating feed produced in‑house — bulk and retail bags available.',
    features: ['Cost‑effective', 'Stable quality', 'Suitable sizes for growth stages'],
  },
  'hatchery': {
    title: 'Hatchery',
    description: 'Fingerlings, juveniles, jumbo — healthy stock for farmers across Nigeria.',
    features: ['Healthy stock', 'Fast growth lines', 'Bulk farmer supply'],
  },
  'consultancy': {
    title: 'Consultancy',
    description: 'Farm setup, feed formulation, training — get your farm productive fast.',
    features: ['Site planning & pond design', 'Feed formulation guidance', 'Operations training'],
  },
};

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const data = MAP[params.slug];
  if (!data) return notFound();

  return (
    <Box>
      <NavBar />
      <Container maxW="6xl" py={16}>
        <Heading>{data.title}</Heading>
        <Text mt={3} color="gray.700">{data.description}</Text>
        <UnorderedList mt={6} spacing={2} color="gray.700">
          {data.features.map((f) => (
            <ListItem key={f}>{f}</ListItem>
          ))}
        </UnorderedList>
        <Button mt={8} colorScheme="brand" href="/support/contact" as="a">Get a Quote</Button>
      </Container>
      <Footer />
    </Box>
  );
}