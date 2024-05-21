import { Heading } from '../Heading';
import styled from 'styled-components';
import { List } from '../List';
import { Card } from '../Card';
import { QUERIES } from '../../constants.ts';

interface Props {
  preparation: number;
  cooking: number;
}

export function PreparationTime({ preparation, cooking }: Props) {
  const data = [
    `<strong>Total:</strong> Approximately ${preparation + cooking} minutes`,
    `<strong>Preparation:</strong> ${preparation} minutes`,
    `<strong>Cooking:</strong> ${cooking} minutes`,
  ];

  return (
    <Card>
      <Preparation>
        <Heading level={3} as="h2">
          Preparation time
        </Heading>
        <List elements={data} />
      </Preparation>
    </Card>
  );
}

const Preparation = styled.div`
  display: grid;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);

  @media ${QUERIES.laptopAndUp} {
    padding: 28px;
  }
`;
