// app/(components)/FeatureCards.tsx
'use client';
import { Box, Grid, Heading, Text, Icon, Stack } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const features = [
  { title: 'Reliable Supply', desc: '14,000+ mélange and 1,000+ table-size catfish harvested per cycle.' },
  { title: 'In‑house Feed', desc: 'Own feed production reduces costs and improves FCR consistency.' },
  { title: 'Wholesale Ready', desc: 'Optimized for market women & bulk buyers with fair pricing.' },
  { title: 'Sustainability', desc: 'Fish wastewater fertilizes crops; moving toward integrated systems.' },
];

export default function FeatureCards() {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, md: 6 }}>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6}>
        {features.map((f) => (
          <Stack key={f.title} p={6} borderWidth="1px" rounded="2xl" bg="white" gap={2}>
            <Icon as={CheckCircleIcon} color="brand.500" boxSize={6} />
            <Heading size="md">{f.title}</Heading>
            <Text color="gray.600">{f.desc}</Text>
          </Stack>
        ))}
      </Grid>
    </Box>
  );
}