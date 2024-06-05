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
            <Icon />
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
  font-size: var(--font-size-body-md);
  cursor: pointer;
  isolation: isolate;
  position: relative;
  transition: 200ms ease-in-out;

  &:hover {
    color: var(--color-green-600);
    background: revert !important;
  }
`;

const Icon = styled.span`
  background: url('/images/icon-radio-unselected.svg') no-repeat;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
`;

const Observer = styled.div`
  ${HiddenInput}:checked + ${Label} {
    color: var(--color-green-600);
    border-color: var(--color-green-600);
    background: var(--color-green-200);
  }

  ${HiddenInput}:checked + ${Label} ${Icon} {
    opacity: 1;
    background: url('/images/icon-radio-selected.svg') no-repeat;
  }
`;
