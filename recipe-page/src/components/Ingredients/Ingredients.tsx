import styled from 'styled-components';
import { Heading } from '../Heading';
import { List } from '../List';
import { ingredients } from './data.ts';

export function Ingredients() {
  return (
    <Wrapper>
      <Heading level={2}>Ingredients</Heading>
      <List elements={ingredients} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: var(--spacing-md);
`;
