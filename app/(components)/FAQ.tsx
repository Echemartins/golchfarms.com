// app/(components)/FAQ.tsx
'use client';


import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';


const items = [
  { q: 'Do you deliver nationwide?', a: 'We deliver within Nigeria via partner logistics. Bulk orders can be scheduled per market day.' },
  { q: 'What sizes do you sell fresh?', a: 'Mélange (≈0.5 kg) and table-size (≈1.0 kg).' },
  { q: 'Do you sell feed?', a: 'Yes, Golch Feed is available in bulk/retail. Contact us for monthly supply.' },
];

export default function FAQ() {
  return (
    <Accordion allowMultiple>
      {items.map((it) => (
        <AccordionItem key={it.q}>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                {it.q}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{it.a}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}