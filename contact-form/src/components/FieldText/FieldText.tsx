import { Label } from '../Label';
import styled, { css } from 'styled-components';
import { InputText } from '../InputText';
import {
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useId,
} from 'react';
import type { Props as InputTextProps } from '../InputText';

type Props = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> &
  InputTextProps & {
    label: string;
    required?: boolean;
    textarea?: boolean;
  };

export const FieldText = forwardRef<HTMLInputElement, Props>(
  (
    { label, required = true, $error, textarea = false, ...delegated }: Props,
    ref
  ) => {
    const id = useId();

    return (
      <Wrapper $error={$error}>
        <Label htmlFor={`field-text-${id}`} required={required}>
          {label}
        </Label>
        <InputText
          id={`field-text-${id}`}
          {...delegated}
          ref={ref}
          as={textarea ? 'textarea' : 'input'}
        />
      </Wrapper>
    );
  }
);

const Wrapper = styled.div<InputTextProps>`
  display: grid;
  gap: var(--spacing-100);

  & label:has(+ ${InputText}:focus) {
    color: var(--color-green-600);
  }

  ${({ $error }) => $error && errorStyles}
`;

const errorStyles = css`
  ${InputText} {
    border-color: var(--color-red);
  }
`;
