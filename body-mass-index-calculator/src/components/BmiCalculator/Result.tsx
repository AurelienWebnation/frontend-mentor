import { Heading } from '../Heading';
import { round } from '../../utils.ts';
import styled from 'styled-components';
import { Card } from '../Card';
import type { IdealWeight, UnitsType } from './types.ts';

interface ResultProps {
  bmi: number;
  sentence: string;
  idealWeight: IdealWeight;
  unitType: UnitsType;
}

export function Result({ bmi, sentence, idealWeight, unitType }: ResultProps) {
  if (bmi === Infinity || Number.isNaN(bmi)) return;

  return (
    <Wrapper>
      <header>
        <p>Your BMI is...</p>
        <Heading $size="xl" as="p">
          {round(bmi, 1)}
        </Heading>
      </header>

      <p>
        Your BMI suggests {sentence}. Your ideal weight is between{' '}
        {unitType === 'metric' && (
          <StrongText>
            {idealWeight.minKg}kgs - {idealWeight.maxKg}kgs
          </StrongText>
        )}
        {unitType === 'imperial' && (
          <StrongText>
            {idealWeight.minStone}st {idealWeight.minPounds}lbs -{' '}
            {idealWeight.maxStone}st {idealWeight.maxPounds}lbs
          </StrongText>
        )}
        .
      </p>
    </Wrapper>
  );
}

const Wrapper = styled(Card)`
  background-color: var(--color-blue);
  padding: 32px;
  overflow: scroll;

  & * {
    color: var(--color-pure-white);
  }
`;

const StrongText = styled.strong`
  font-weight: 700;
`;
