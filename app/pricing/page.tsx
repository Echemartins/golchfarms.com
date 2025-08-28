'use client';
import { useEffect, useState } from 'react';
import {
Box,
Container,
Heading,
Table,
Thead,
Tbody,
Tr,
Th,
Td,
Spinner,
Alert,
AlertIcon,
} from '@chakra-ui/react';
import NavBar from '../(components)/NavBar';
import Footer from '../(components)/Footer';


export type PriceItem = {
_id: string;
name: string;
unit?: string;
price: number;
category?: string;
};


function getErrorMessage(err: unknown): string {
if (err instanceof Error) return err.message;
try { return JSON.stringify(err); } catch { return String(err); }
}


export default function PricingPage() {
const [items, setItems] = useState<PriceItem[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);


useEffect(() => {
const ctrl = new AbortController();
(async () => {
try {
setError(null);
const res = await fetch('/api/price-list', { signal: ctrl.signal, cache: 'no-store' });
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const data: PriceItem[] = await res.json();
setItems(Array.isArray(data) ? data : []);
} catch (err: unknown) {
if (err instanceof DOMException && err.name === 'AbortError') return;
setError(getErrorMessage(err));
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
<Box mt={8} overflowX="auto">
{loading ? (
<Spinner />
) : error ? (
<Alert status="error"><AlertIcon />{error}</Alert>
) : (
<Table variant="simple">
<Thead>
<Tr>
<Th>Item</Th>
<Th>Unit</Th>
<Th isNumeric>Price (₦)</Th>
</Tr>
</Thead>
<Tbody>
{items.map((it) => (
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
)}
</Box>
</Container>
<Footer />
</Box>
);
}