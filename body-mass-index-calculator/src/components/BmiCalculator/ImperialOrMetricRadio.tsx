import { InputRadio } from '../InputRadio';
import styled from 'styled-components';
import type { Dispatch, SetStateAction } from 'react';
import type { UnitsType } from './types.ts';
import { QUERIES } from '../../constants.ts';

interface ImperialOrMetricRadioProps {
  unitType: UnitsType;
  setUnitType: Dispatch<SetStateAction<UnitsType>>;
}

export function ImperialOrMetricRadio({
  unitType,
  setUnitType,
}: ImperialOrMetricRadioProps) {
  return (
    <Wrapper>
      <Group>
        <InputRadio
          name="unit"
          id="metric"
          value="metric"
          checked={unitType === 'metric'}
          onChange={() => setUnitType('metric')}
        />
        <Label htmlFor="metric">Metric</Label>
      </Group>
      <Group>
        <InputRadio
          name="unit"
          id="imperial"
          value="imperial"
          checked={unitType === 'imperial'}
          onChange={() => setUnitType('imperial')}
        />
        <Label htmlFor="imperial">Imperial</Label>
      </Group>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--color-gunmetal);
`;
