import styled from 'styled-components';

export const InputText = styled.input`
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
`;

InputText.defaultProps = {
  type: 'text',
};
