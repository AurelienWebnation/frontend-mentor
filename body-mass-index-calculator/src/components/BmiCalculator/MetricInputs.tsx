import { InputText } from '../InputText';
import styled from 'styled-components';
import {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useCallback,
  useId,
} from 'react';
import { Label } from '../Label';
import type { MetricUnits, Units } from './types.ts';
import { round } from '../../utils.ts';
import { convertOtherStateValues } from './bmi-calculator.helpers.ts';

interface MetricInputsProps {
  units: MetricUnits;
  setState: Dispatch<SetStateAction<Units>>;
}

export function MetricInputs({ units, setState }: MetricInputsProps) {
  const cmId = useId();
  const kgId = useId();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nextValue = value === '' ? 0 : parseInt(value);

    setState((prev) => ({
      ...prev,
      metric: {
        ...prev.metric,
        [name]: nextValue,
      },
    }));

    convertOtherStateValues(name, nextValue, setState);
  }, []);

  return (
    <Wrapper>
      <div>
        <Label htmlFor={cmId}>Height</Label>
        <InputText
          aside="cm"
          id={cmId}
          value={round(units.cm)}
          name="cm"
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor={cmId}>Weight</Label>
        <InputText
          aside="kg"
          id={kgId}
          value={round(units.kg, 2)}
          name="kg"
          onChange={handleChange}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 16px;
`;
