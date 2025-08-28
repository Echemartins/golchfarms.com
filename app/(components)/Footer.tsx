// app/(components)/Footer.tsx
import { Box, Flex, Grid, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Footer() {
  return (
    <Box as="footer" bg="gray.50" mt={20} py={10} borderTop="1px" borderColor="gray.100">
      <Flex maxW="7xl" mx="auto" px={{ base: 4, md: 6 }} direction="column" gap={8}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr 1fr' }} gap={6}>
          <Box>
            <Text fontWeight={800} fontSize="lg">GOLCH</Text>
            <Text mt={3} color="gray.600">Fresh & dried catfish, feed, hatchery, and consultancy—serving Nigeria’s markets.</Text>
          </Box>
          <Box>
            <Text fontWeight={700} mb={3}>Product</Text>
            <FooterLink href="/product/fresh-catfish" label="Fresh Catfish" />
            <FooterLink href="/product/dried-catfish" label="Dried Catfish" />
            <FooterLink href="/product/fish-feed" label="Golch Feed" />
            <FooterLink href="/product/hatchery" label="Hatchery" />
            <FooterLink href="/product/consultancy" label="Consultancy" />
          </Box>
          <Box>
            <Text fontWeight={700} mb={3}>Company</Text>
            <FooterLink href="/company/vision" label="Vision & Story" />
            <FooterLink href="/company/sustainability" label="Sustainability" />
            <FooterLink href="/company/team" label="Team" />
            <FooterLink href="/company/careers" label="Careers" />
          </Box>
          <Box>
            <Text fontWeight={700} mb={3}>Support</Text>
            <FooterLink href="/support/faq" label="FAQ" />
            <FooterLink href="/support/contact" label="Contact" />
            <FooterLink href="/support/tracking" label="Order Tracking" />
            <FooterLink href="/pricing" label="Pricing" />
          </Box>
        </Grid>
        <Flex justify="space-between" align="center" borderTop="1px" borderColor="gray.100" pt={4}>
          <Text color="gray.600">© {new Date().getFullYear()} Golch Farms Limited</Text>
          <Flex gap={6}>
            <Link as={NextLink} href="#">Terms</Link>
            <Link as={NextLink} href="#">Privacy</Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link as={NextLink} href={href} display="block" color="gray.700" mb={2}>{label}</Link>
  );
}