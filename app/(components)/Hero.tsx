// app/(components)/Hero.tsx
'use client';
import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Hero() {
  return (
    <Box bgGradient="linear(to-b, white, gray.50)" className="gradient-bg">
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 6 }} pt={{ base: 14, md: 24 }} pb={{ base: 14, md: 24 }}>
        <Stack spacing={6} maxW={{ base: 'full', md: '3xl' }}>
          <Heading as="h1" size={{ base: '2xl', md: '3xl' }} lineHeight={1.1}>
            Fresh & Dried Catfish, Feed & Hatchery — delivered at scale.
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700">
            We nurture Clarias catfish from juvenile to mélange (0.5 kg) and table-size (1 kg), produce high‑quality fish feed, and supply Nigeria’s markets with dependable logistics.
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
            <Button as={NextLink} href="/product" size="lg" colorScheme="brand">Shop Fresh & Dried Fish</Button>
            <Button as={NextLink} href="/pricing" size="lg" variant="outline">View Price List</Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}