import styled from 'styled-components';
import { type ChangeEvent, useId } from 'react';

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export function ToggleButton({ handleChange, checked }: Props) {
  const checkboxId = useId();

  return (
    <Label htmlFor={checkboxId}>
      <Checkbox id={checkboxId} checked={checked} onChange={handleChange} />
    </Label>
  );
}

const Label = styled.label`
  --label-width: 40px;

  background: var(--color-grey-1);
  display: inline-block;
  width: var(--label-width);
  height: 20px;
  border-radius: 10px;
  position: relative;

  &:has(input:checked) {
    background: var(--color-purple);
  }

  /* Fix checkbox position bug when body font-size change */
  font-size: 14px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  --checkbox-width: 14px;
  --padding: 3px;

  appearance: none;
  width: 14px;
  height: 14px;
  background: var(--color-white);
  border-radius: 50%;
  transform: translateX(3px) translateY(3px);
  transition: transform 300ms ease-in-out;

  &:checked {
    transform: translateX(
        calc(var(--label-width) - var(--checkbox-width) - var(--padding))
      )
      translateY(var(--padding));
  }
`;
