import styled from 'styled-components';
import type { InputTextProps } from './types.ts';

export const InputText = styled.input<InputTextProps>`
  border: var(--border-width) solid var(--color-grey-500);
  padding: var(--spacing-150) var(--spacing-300);
  border-radius: 8px;
  font-size: var(--font-size-md);

  &:hover,
  &:focus {
    border-color: var(--color-green-600);
  }

  &:focus {
    outline: none;
  }

  ${({ $error }) => $error && `border-color: var(--color-red);`}
`;

InputText.defaultProps = {
  type: 'text',
};
