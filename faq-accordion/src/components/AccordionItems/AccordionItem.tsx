import { Heading } from '../Heading';
import * as Accordion from '@radix-ui/react-accordion';
import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';
import type { AccordionItemProps } from '@radix-ui/react-accordion';

interface Props {
  title: string;
  content: string;
  value: AccordionItemProps['value'];
}

export function AccordionItem({ title, content, value }: Props) {
  console.log();

  return (
    <Item value={value}>
      <Trigger>
        <Heading $level={2} as="span">
          {title}
        </Heading>
      </Trigger>
      <Content>{content}</Content>
    </Item>
  );
}

const Item = styled(Accordion.Item)`
  &:not(:last-child)::after {
    content: '';
    display: block;
    border-bottom: 1px solid var(--color-light-pink);
    margin-top: 20px;
    margin-bottom: 20px;

    @media ${QUERIES.tabletAndUp} {
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
`;

const Trigger = styled(Accordion.Trigger)`
  text-align: left;
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover * {
    color: var(--color-pink);
  }

  &[data-state='open'] {
    &::after {
      content: url('/images/icon-minus.svg');
      width: 30px;
      height: 30px;
    }
  }

  &[data-state='closed'] {
    &::after {
      content: url('/images/icon-plus.svg');
      width: 30px;
      height: 30px;
    }
  }
`;

const Content = styled(Accordion.Content)`
  margin-top: 24px;
`;
