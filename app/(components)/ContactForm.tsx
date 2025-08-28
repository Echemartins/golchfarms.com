// app/(components)/ContactForm.tsx
'use client';
import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast, VStack } from '@chakra-ui/react';

export default function ContactForm({ source = 'website/contact' }: { source?: string }) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    setLoading(true);
    try {
      const res = await fetch('/api/inquiries', { method: 'POST', body: JSON.stringify({ ...payload, source }), headers: { 'Content-Type': 'application/json' } });
      if (!res.ok) throw new Error('Failed');
      toast({ title: 'Message sent', status: 'success' });
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast({ title: 'Something went wrong', status: 'error' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box as="form" onSubmit={onSubmit} maxW="xl">
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" placeholder="Your name" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" placeholder="you@example.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input name="phone" placeholder="0803…" />
        </FormControl>
        <FormControl>
          <FormLabel>Subject</FormLabel>
          <Input name="subject" placeholder="Wholesale order / Quote / Support" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea name="message" rows={5} placeholder="Tell us what you need…" />
        </FormControl>
        <Button type="submit" colorScheme="brand" isLoading={loading}>Send</Button>
      </VStack>
    </Box>
  );
}