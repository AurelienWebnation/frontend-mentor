import styled from 'styled-components';
import { Card } from '../Card';
import { Heading } from '../Heading';
import { Form } from '../Form';
import { QUERIES } from '../../constants.ts';

export function App() {
  return (
    <Wrapper>
      <FormWrapper>
        <Heading>Contact Us</Heading>
        <Form />
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  height: 100%;
  padding: var(--spacing-400) var(--spacing-200);

  @media ${QUERIES.tabletAndUp} {
    padding: var(--spacing-400) var(--spacing-200);
  }
`;

const FormWrapper = styled(Card)`
  padding: var(--spacing-300);
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    padding: var(--spacing-500);
    max-width: 690px;
  }

  @media ${QUERIES.laptopAndUp} {
    max-width: 736px;
  }
`;
