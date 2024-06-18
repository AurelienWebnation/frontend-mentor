import styled from 'styled-components';
import { heading_m_styles } from '../Heading';
import type { InputHTMLAttributes } from 'react';

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  aside?: string;
  id: string;
};

export function InputText({ aside, id, ...delegated }: InputTextProps) {
  return (
    <Label htmlFor={id}>
      <Input id={id} {...delegated} />
      <Aside>{aside}</Aside>
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  gap: 24px;
  border: 1px solid var(--color-dark-electric-blue);
  border-radius: ${12 / 16}rem;

  &:has(input:focus) {
    border-color: var(--color-blue);
  }
`;

const Input = styled.input.attrs({ type: 'text' })`
  ${heading_m_styles};
  height: 100%;
  padding-top: ${20 / 16}rem;
  padding-bottom: ${20 / 16}rem;
  padding-left: ${24 / 16}rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Aside = styled.span`
  ${heading_m_styles};
  color: var(--color-blue);
  padding-right: ${24 / 16}rem;
  text-transform: lowercase;
`;
