import { Heading } from '../Heading';
import styled from 'styled-components';
import { List } from '../List';
import { instructions } from './data.tsx';

export function Instructions() {
  return (
    <Wrapper>
      <Heading level={2}>Instructions</Heading>
      <List elements={instructions} type="ordered" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: var(--spacing-md);
`;
