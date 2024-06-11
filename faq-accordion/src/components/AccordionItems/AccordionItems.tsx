import * as Accordion from '@radix-ui/react-accordion';
import { AccordionItem } from './AccordionItem.tsx';

type AccordionItemsProps = {
  data: {
    title: string;
    content: string;
  }[];
  defaultValue?: number;
};

export function AccordionItems({ data, defaultValue }: AccordionItemsProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible={true}
      defaultValue={`accordion-${defaultValue}` || undefined}
    >
      {data.map((item, index) => (
        <AccordionItem key={index} id={index} {...item} />
      ))}
    </Accordion.Root>
  );
}
