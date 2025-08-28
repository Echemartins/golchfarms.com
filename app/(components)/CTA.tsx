// app/(components)/CTA.tsx
import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function CTA() {
  return (
    <Box bg="brand.50" py={16}>
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 6 }}>
        <Stack align="center" spacing={4} textAlign="center">
          <Heading size={{ base: 'lg', md: 'xl' }}>Ready to order fresh or dried catfish?</Heading>
          <Text color="gray.700">Get a wholesale quote or shop the catalog now.</Text>
          <Stack direction={{ base: 'column', sm: 'row' }}>
            <Button as={NextLink} href="/product" colorScheme="brand">Shop Products</Button>
            <Button as={NextLink} href="/support/contact" variant="outline">Get a Quote</Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}