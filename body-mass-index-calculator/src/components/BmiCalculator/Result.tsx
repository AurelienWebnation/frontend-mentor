import { Heading } from '../Heading';
import { round } from '../../utils.ts';
import styled from 'styled-components';
import { Card } from '../Card';
import type { IdealWeight, UnitsType } from './types.ts';
import { QUERIES } from '../../constants.ts';

interface ResultProps {
  bmi: number;
  sentence: string;
  idealWeight: IdealWeight;
  unitType: UnitsType;
}

export function Result({ bmi, sentence, idealWeight, unitType }: ResultProps) {
  if (bmi === Infinity || Number.isNaN(bmi)) return;
  if (!bmi) return;

  return (
    <Wrapper>
      <header>
        <p>Your BMI is...</p>
        <Heading $size="xl" as="p">
          {round(bmi, 1)}
        </Heading>
      </header>

      <Suggestion>
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
      </Suggestion>
    </Wrapper>
  );
}

const Wrapper = styled(Card)`
  background-color: var(--color-blue);
  padding: 32px;

  & * {
    color: var(--color-pure-white);
  }

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 24px;

    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
`;

const Suggestion = styled.p`
  font-size: var(--font-size-body-s);
`;

const StrongText = styled.strong`
  font-weight: 700;
`;
