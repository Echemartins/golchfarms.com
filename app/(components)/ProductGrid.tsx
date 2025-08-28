// app/(components)/ProductGrid.tsx
import { Box, Grid, Heading, Text, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

const items = [
  { slug: 'fresh-catfish', title: 'Fresh Catfish', desc: 'Mélange 0.5 kg & Table‑size 1 kg — bulk supply for markets.' },
  { slug: 'dried-catfish', title: 'Dried Catfish', desc: 'Retail packs & wholesale dried fish, hygienically processed.' },
  { slug: 'fish-feed', title: 'Golch Feed', desc: 'Quality floating feed — bulk & retail options.' },
  { slug: 'hatchery', title: 'Hatchery', desc: 'Fingerlings, juveniles, jumbo — healthy stock for farmers.' },
  { slug: 'consultancy', title: 'Consultancy', desc: 'Farm setup, feed formulation & training services.' },
];

export default function ProductGrid() {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, md: 6 }}>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
        {items.map((p) => (
          <Box key={p.slug} p={6} borderWidth="1px" rounded="2xl" bg="white">
            <Heading size="md">{p.title}</Heading>
            <Text mt={2} color="gray.600">{p.desc}</Text>
            <Button as={NextLink} href={`/product/${p.slug}`} mt={4} colorScheme="brand">Explore</Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}