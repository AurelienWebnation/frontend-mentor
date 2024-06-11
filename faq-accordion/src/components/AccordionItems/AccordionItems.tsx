import * as Accordion from '@radix-ui/react-accordion';
import { AccordionItem } from './AccordionItem.tsx';

type AccordionItemsProps = {
  data: {
    title: string;
    content: string;
  }[];
};

export function AccordionItems({ data }: AccordionItemsProps) {
  return (
    <Accordion.Root type="single" collapsible={true}>
      {data.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </Accordion.Root>
  );
}
