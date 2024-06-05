import styled from 'styled-components';
import { forwardRef, InputHTMLAttributes, useId } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const InputRadio = forwardRef<HTMLInputElement, Props>(
  ({ label, ...delegated }: Props, ref) => {
    const id = useId();

    return (
      <Wrapper>
        <Observer>
          <HiddenInput id={`input-radio-${id}`} {...delegated} ref={ref} />
          <Label htmlFor={`input-radio-${id}`}>
            <Checkbox />
            {label}
          </Label>
        </Observer>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  width: 100%;
`;

const HiddenInput = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
  width: 100%;
  border: 1px solid var(--color-grey-500);
  border-radius: 8px;
  padding: var(--spacing-150) var(--spacing-300);
  cursor: pointer;
  isolation: isolate;
  position: relative;
  transition: 200ms ease-in-out;

  &:hover {
    color: var(--color-green-600);
    background: revert !important;
  }
`;

const Checkbox = styled.span`
  width: 19.5px;
  height: 19.5px;
  border: 2px solid var(--color-grey-500);
  opacity: 0.5;
  border-radius: 50%;
  display: block;
`;

const Observer = styled.div`
  ${HiddenInput}:checked + ${Label} {
    color: var(--color-green-600);
    border-color: var(--color-green-600);
    background: var(--color-green-200);
  }

  ${HiddenInput}:checked + ${Label} ${Checkbox} {
    border-color: var(--color-green-600);
    opacity: 1;
    display: grid;
    place-items: center;

    &::after {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--color-green-600);
    }
  }
`;
