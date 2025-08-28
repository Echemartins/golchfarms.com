// app/(components)/ContactForm.tsx
'use client';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react';
import { useState } from 'react';


export default function ContactForm() {
const toast = useToast();
const [loading, setLoading] = useState(false);


async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
const form = new FormData(e.currentTarget);
setLoading(true);
try {
const res = await fetch('/api/inquiries', { method: 'POST', body: form });
if (!res.ok) throw new Error('Failed to send');
toast({ title: 'Sent!', status: 'success' });
e.currentTarget.reset();
} catch (error) {
console.error(error);
toast({ title: 'Something went wrong', status: 'error' });
} finally {
setLoading(false);
}
}


return (
<Box as="form" onSubmit={onSubmit} maxW="lg">
<FormControl isRequired><FormLabel>Name</FormLabel><Input name="name" /></FormControl>
<FormControl isRequired mt={3}><FormLabel>Email</FormLabel><Input name="email" type="email" /></FormControl>
<FormControl mt={3}><FormLabel>Phone</FormLabel><Input name="phone" /></FormControl>
<FormControl isRequired mt={3}><FormLabel>Message</FormLabel><Textarea name="message" rows={5} /></FormControl>
<Button mt={4} type="submit" isLoading={loading} colorScheme="brand">Send</Button>
</Box>
);
}