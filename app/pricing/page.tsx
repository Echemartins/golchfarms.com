// app/pricing/page.tsx
'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Table, Thead, Tbody, Tr, Th, Td,
  Spinner,
  Alert, AlertIcon
} from '@chakra-ui/react';
import NavBar from '../(components)/NavBar';
import Footer from '../(components)/Footer';

type PriceItem = {
  _id: string;
  name: string;
  unit?: string;
  price: number;
  category?: string;
};

export default function PricingPage() {
  const [items, setItems] = useState<PriceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const res = await fetch('/api/price-list', { signal: ctrl.signal, cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: PriceItem[] = await res.json();
        setItems(Array.isArray(data) ? data : []);
      } catch (e: any) {
        if (e.name !== 'AbortError') setErr(e?.message ?? 'Failed to load price list');
      } finally {
        setLoading(false);
      }
    })();
    return () => ctrl.abort();
  }, []);

  return (
    <Box>
      <NavBar />
      <Container maxW="6xl" py={16}>
        <Heading>Retail Price List</Heading>

        {loading && (
          <Box mt={8}><Spinner /></Box>
        )}

        {err && (
          <Alert status="error" mt={6}>
            <AlertIcon />
            {err}
          </Alert>
        )}

        {!loading && !err && (
          <Box mt={8} overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Item</Th>
                  <Th>Unit</Th>
                  <Th isNumeric>Price (₦)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {items.map(it => (
                  <Tr key={it._id}>
                    <Td>{it.name}</Td>
                    <Td>{it.unit || '-'}</Td>
                    <Td isNumeric>{Number(it.price).toLocaleString()}</Td>
                  </Tr>
                ))}
                {items.length === 0 && (
                  <Tr>
                    <Td colSpan={3}>No items yet.</Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </Box>
        )}
      </Container>
      <Footer />
    </Box>
  );
}
