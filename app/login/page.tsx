// app/login/page.tsx
import { Box, Container, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Text, Input, Button, Stack } from '@chakra-ui/react';
import NavBar from '../(components)/NavBar';
import Footer from '../(components)/Footer';

export default function LoginPage() {
  return (
    <Box>
      <NavBar />
      <Container maxW="md" py={16}>
        <Heading mb={6}>Login</Heading>
        <Tabs isFitted>
          <TabList>
            <Tab>Clients</Tab>
            <Tab>Investors</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <AuthForm role="Client" />
            </TabPanel>
            <TabPanel>
              <AuthForm role="Investor" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer />
    </Box>
  );
}

function AuthForm({ role }: { role: string }) {
  return (
    <Stack spacing={4}>
      <Text color="gray.700">Private portal for {role} (coming soon).</Text>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button colorScheme="brand">Sign In</Button>
    </Stack>
  );
}