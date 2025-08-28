// app/(components)/NavBar.tsx
'use client';
import { Box, Flex, HStack, Link, Button, IconButton, useDisclosure, Menu, MenuButton, MenuList, MenuItem, Spacer } from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import MobileNav from './MobileNav';

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box as="header" position="sticky" top={0} zIndex={100} bg="white" boxShadow="sm">
      <Flex maxW="7xl" mx="auto" px={{ base: 4, md: 6 }} py={3} align="center">
        <HStack spacing={3}>
          {/* <NextLink href="/" passHref>
            <Link fontWeight={800} fontSize="xl">GOLCH</Link>
          </NextLink> */}
          <Link as={NextLink} href="/" fontWeight={800} fontSize="xl">GOLCH</Link>
        </HStack>
        <HStack spacing={6} ml={10} display={{ base: 'none', md: 'flex' }}>
          <Link as={NextLink} href="/product">Product</Link>
          <Link as={NextLink} href="/company">Company</Link>
          <Link as={NextLink} href="/support">Support</Link>
          <Link as={NextLink} href="/pricing">Pricing</Link>
        </HStack>
        <Spacer />
        <HStack spacing={3} display={{ base: 'none', md: 'flex' }}>
          <Menu>
            <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>Login</MenuButton>
            <MenuList>
              <MenuItem as={NextLink} href="/login?tab=clients">Clients</MenuItem>
              <MenuItem as={NextLink} href="/login?tab=investors">Investors</MenuItem>
            </MenuList>
          </Menu>
          <Button as={NextLink} href="/product" colorScheme="brand">Shop Fresh & Dried Fish</Button>
        </HStack>
        <IconButton aria-label="Open menu" icon={<HamburgerIcon />} display={{ base: 'inline-flex', md: 'none' }} onClick={onOpen} ml={2} />
      </Flex>
      <MobileNav isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}