import { Label } from '../Label';
import styled from 'styled-components';
import { InputText, InputTextProps } from '../InputText';
import {
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useId,
} from 'react';

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
      <Wrapper>
        <Label htmlFor={`field-text-${id}`} required={required}>
          {label}
        </Label>
        <InputText
          id={`field-text-${id}`}
          ref={ref}
          as={textarea ? 'textarea' : 'input'}
          $error={$error}
          {...delegated}
        />
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  display: grid;
  gap: var(--spacing-100);

  & label:has(+ ${InputText}:focus) {
    color: var(--color-green-600);
  }
`;
