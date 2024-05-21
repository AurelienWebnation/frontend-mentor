import { Heading } from '../Heading';
import styled from 'styled-components';

interface Props {
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
}

export function Nutrition({ calories, carbs, protein, fat }: Props) {
  return (
    <Wrapper>
      <Heading level={2}>Nutrition</Heading>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        <tbody>
          <Row>
            <Data>Calories</Data>
            <Total>
              <strong>{calories}kcal</strong>
            </Total>
          </Row>
          <Row>
            <Data>Carbs</Data>
            <Total>
              <strong>{carbs}g</strong>
            </Total>
          </Row>
          <Row>
            <Data>Protein</Data>
            <Total>
              <strong>{protein}g</strong>
            </Total>
          </Row>
          <Row>
            <Data>Fat</Data>
            <Total>
              <strong>{fat}g</strong>
            </Total>
          </Row>
        </tbody>
      </table>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: var(--spacing-md);
`;

const Row = styled.tr`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-sm);
  padding: 12px var(--spacing-lg);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-white-coffee);
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

const Data = styled.td`
  flex: 1;
`;

const Total = styled(Data)`
  color: var(--color-brandy-red);
`;
