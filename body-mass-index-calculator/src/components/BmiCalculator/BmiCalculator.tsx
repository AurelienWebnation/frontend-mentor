import { Card } from '../Card';
import styled from 'styled-components';
import { Heading } from '../Heading';
import { useState } from 'react';
import { MetricInputs } from './MetricInputs.tsx';
import { ImperialOrMetricRadio } from './ImperialOrMetricRadio.tsx';
import type { Units, UnitsType } from './types.ts';
import { ImperialInputs } from './ImperialInputs.tsx';
import {
  getBmi,
  getBmiSentence,
  getIdealWeightRange,
} from './bmi-calculator.helpers.ts';
import { Result } from './Result.tsx';
import { QUERIES } from '../../constants.ts';

export function BmiCalculator() {
  const [unitType, setUnitType] = useState<UnitsType>('metric');
  const [units, setUnits] = useState<Units>({
    imperial: {
      feet: 0,
      inch: 0,
      stone: 0,
      pound: 0,
    },
    metric: {
      cm: 0,
      kg: 0,
    },
  });

  const bmi = getBmi(units.metric.kg, units.metric.cm / 100);
  const sentence = getBmiSentence(bmi);
  const idealWeight = getIdealWeightRange(units.metric.cm / 100);

  return (
    <Wrapper>
      <Heading $size="m" as="h2">
        Enter your details below
      </Heading>

      <ImperialOrMetricRadio unitType={unitType} setUnitType={setUnitType} />

      {unitType === 'metric' && (
        <MetricInputs units={units.metric} setState={setUnits} />
      )}
      {unitType === 'imperial' && (
        <ImperialInputs units={units.imperial} setState={setUnits} />
      )}

      <Result
        bmi={bmi}
        sentence={sentence}
        idealWeight={idealWeight}
        unitType={unitType}
      />
    </Wrapper>
  );
}

const Wrapper = styled(Card)`
  display: grid;
  gap: 24px;
  padding: 24px;

  @media ${QUERIES.tabletAndUp} {
    padding: 32px;
    gap: 32px;
  }
`;
