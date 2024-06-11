import * as Accordion from '@radix-ui/react-accordion';
import { AccordionItem } from './AccordionItem.tsx';
import styled from 'styled-components';

type AccordionItemsProps = {
  data: {
    title: string;
    content: string;
  }[];
};

export function AccordionItems({ data }: AccordionItemsProps) {
  return (
    <Wrapper collapsible={true}>
      {data.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled(Accordion.Root)``;
