// app/(components)/StatsStrip.tsx
import { Box, Flex, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

export default function StatsStrip() {
  return (
    <Box bg="gray.50" py={10}>
      <Flex maxW="7xl" mx="auto" px={{ base: 4, md: 6 }} gap={6} wrap="wrap" justify="space-between">
        <StatBox label="Monthly Juveniles" value="15k–20k" />
        <StatBox label="Mélange per cycle" value="14,000+" />
        <StatBox label="Table-size per cycle" value="1,000+" />
        <StatBox label="Feed weekly" value="500 kg" />
      </Flex>
    </Box>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <Stat minW={{ base: '45%', md: 'auto' }}>
      <StatLabel color="gray.600">{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
    </Stat>
  );
}