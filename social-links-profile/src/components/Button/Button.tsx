import styled from 'styled-components';

export const Button = styled.a`
  --base-font-size: 16px;
  background-color: var(--color-grey);
  font-weight: 700;
  padding-top: ${12 / 16}em;
  padding-bottom: ${12 / 16}em;
  border-radius: ${8 / 16}em;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: var(--color-neon-green);
    color: var(--color-grey);
  }
`;
