import styled from 'styled-components';
import { theme } from '../../constants.ts';

export const Button = styled.button`
  color: var(--color-white);
  font-size: var(--font-size-body-md);
  font-weight: 700;
  padding: ${theme.spacing[200] / theme.fontSizes.body.md}em
    ${theme.spacing[500] / theme.fontSizes.body.md}em;
  border-radius: ${8 / 16}em;
  background: var(--color-green-600);
  cursor: pointer;
  width: 100%;

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      var(--color-green-600, #0c7d69);
  }
`;
