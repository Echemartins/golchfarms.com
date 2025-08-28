// app/(components)/MobileNav.tsx
'use client';
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, VStack, Link, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <VStack align="start" spacing={4} mt={8}>
            <Link as={NextLink} href="/product" onClick={onClose}>Product</Link>
            <Link as={NextLink} href="/company" onClick={onClose}>Company</Link>
            <Link as={NextLink} href="/support" onClick={onClose}>Support</Link>
            <Link as={NextLink} href="/pricing" onClick={onClose}>Pricing</Link>
            <Button as={NextLink} href="/product" onClick={onClose} colorScheme="brand" w="full">Shop Fresh & Dried Fish</Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}