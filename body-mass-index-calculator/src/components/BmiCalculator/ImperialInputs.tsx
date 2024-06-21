import styled from 'styled-components';
import { InputText } from '../InputText';
import {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useCallback,
  useId,
} from 'react';
import { Label } from '../Label';
import type { ImperialUnits, Units } from './types.ts';
import { round } from '../../utils.ts';
import { convertOtherStateValues } from './bmi-calculator.helpers.ts';
import { QUERIES } from '../../constants.ts';

interface ImperialInputsProps {
  units: ImperialUnits;
  setState: Dispatch<SetStateAction<Units>>;
}

export function ImperialInputs({ units, setState }: ImperialInputsProps) {
  const heightFtId = useId();
  const heightInId = useId();
  const weightStId = useId();
  const weightLbsId = useId();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nextValue = value === '' ? 0 : parseInt(value);

    setState((prev) => ({
      ...prev,
      imperial: {
        ...prev.imperial,
        [name]: nextValue,
      },
    }));

    convertOtherStateValues(name, nextValue, setState);
  }, []);

  return (
    <Wrapper>
      <div>
        <Label htmlFor={heightFtId}>Height</Label>
        <InputGroup>
          <InputText
            aside="ft"
            id={heightFtId}
            value={round(units.feet, 2)}
            name="feet"
            onChange={handleChange}
          />
          <InputText
            aside="in"
            id={heightInId}
            value={round(units.inch, 2)}
            name="inch"
            onChange={handleChange}
          />
        </InputGroup>
      </div>
      <div>
        <Label htmlFor={weightStId}>Weight</Label>
        <InputGroup>
          <InputText
            aside="st"
            id={weightStId}
            value={round(units.stone, 2)}
            name="stone"
            onChange={handleChange}
          />
          <InputText
            aside="lbs"
            id={weightLbsId}
            value={round(units.pound, 2)}
            name="pound"
            onChange={handleChange}
          />
        </InputGroup>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    gap: 24px;
  }
`;
