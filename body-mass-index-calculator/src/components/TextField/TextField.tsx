import styled from 'styled-components';
import { heading_m_styles } from '../Heading';
import { useId } from 'react';

interface TextFieldProps {
  metrics: string;
}

export function TextField({ metrics }: TextFieldProps) {
  const id = useId();

  return (
    <Label htmlFor={id}>
      <Input id={id} />
      <Metric>{metrics}</Metric>
    </Label>
  );
}

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

const Metric = styled.span`
  ${heading_m_styles};
  color: var(--color-blue);
  padding-right: ${24 / 16}rem;
  text-transform: lowercase;
`;

const Label = styled.label`
  border: 1px solid var(--color-dark-electric-blue);
  border-radius: ${12 / 16}rem;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  gap: 24px;

  &:has(${Input}:focus) {
    border-color: var(--color-blue);
  }
`;
