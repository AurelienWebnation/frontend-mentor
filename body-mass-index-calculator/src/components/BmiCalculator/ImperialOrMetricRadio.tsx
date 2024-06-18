import { InputRadio } from '../InputRadio';
import styled from 'styled-components';
import type { Dispatch, SetStateAction } from 'react';
import type { UnitsType } from './types.ts';

interface ImperialOrMetricRadioProps {
  unitType: UnitsType;
  setUnitType: Dispatch<SetStateAction<UnitsType>>;
}

export function ImperialOrMetricRadio({
  unitType,
  setUnitType,
}: ImperialOrMetricRadioProps) {
  return (
    <>
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
    </>
  );
}

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--color-gunmetal);
`;
