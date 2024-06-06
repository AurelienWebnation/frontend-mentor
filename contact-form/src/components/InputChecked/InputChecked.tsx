import styled from 'styled-components';
import { forwardRef, useId } from 'react';
import { Label } from '../Label';

interface Props {
  label: string;
  required?: boolean;
}

export const InputChecked = forwardRef<HTMLInputElement, Props>(
  ({ label, required, ...delegated }: Props, ref) => {
    const id = useId();

    return (
      <Wrapper>
        <Input id={`input-checked-${id}`} ref={ref} {...delegated} />
        <Label htmlFor={`input-checked-${id}`} $withSpace={false}>
          {label}
        </Label>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 18px auto 1fr auto;
  gap: var(--spacing-200);
  align-items: center;
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  max-width: 18px;
  width: 100%;
  display: block;
  height: 18px;
  border: 2px solid var(--color-grey-500);
  border-radius: 2px;
  cursor: pointer;

  &:checked {
    border: revert;
    background: url('/images/icon-checkbox-check.svg') no-repeat center center;
  }
`;
