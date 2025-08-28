'use client';


import { useEffect, useState } from 'react';
import { Box, Container, Heading, Table, Thead, Tbody, Tr, Th, Td, Spinner } from '@chakra-ui/react';
import NavBar from '../(components)/NavBar';
import Footer from '../(components)/Footer';


export default function PricingPage() {
const [items, setItems] = useState<any[]>([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
fetch('/api/price-list')
.then((res) => res.json())
.then((data) => setItems(data))
.catch((err) => console.error('Failed to load prices', err))
.finally(() => setLoading(false));
}, []);


return (
<Box>
<NavBar />
<Container maxW="6xl" py={16}>
<Heading>Retail Price List</Heading>
<Box mt={8} overflowX="auto">
{loading ? (
<Spinner />
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
{items.map((it: any) => (
<Tr key={it._id}>
<Td>{it.name}</Td>
<Td>{it.unit || '-'}</Td>
<Td isNumeric>{Number(it.price).toLocaleString()}</Td>
</Tr>
))}
</Tbody>
</Table>
)}
</Box>
</Container>
<Footer />
</Box>
);
}