import * as Accordion from '@radix-ui/react-accordion';
import { AccordionItem } from './AccordionItem.tsx';
import type { AccordionItemProps } from '@radix-ui/react-accordion';

type AccordionItemsProps = {
  data: {
    title: string;
    content: string;
    id: string;
  }[];
  defaultValue?: AccordionItemProps['value'];
};

export function AccordionItems({ data, defaultValue }: AccordionItemsProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible={true}
      defaultValue={defaultValue || undefined}
    >
      {data.map((item) => (
        <AccordionItem key={item.id} value={item.id} {...item} />
      ))}
    </Accordion.Root>
  );
}
