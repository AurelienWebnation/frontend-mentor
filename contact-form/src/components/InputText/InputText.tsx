import styled from 'styled-components';
import type { FieldError } from 'react-hook-form';

export interface Props {
  $error?: boolean | FieldError;
}

export const InputText = styled.input<Props>`
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
