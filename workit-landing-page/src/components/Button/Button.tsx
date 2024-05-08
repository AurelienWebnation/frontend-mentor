import styled from 'styled-components';

export const Button = styled.button`
  --border-width: 2px;
  font-weight: 700;
  background-color: var(--color-accent);
  color: var(--color-primary);
  padding-top: calc(${13 / 16}em - var(--border-width));
  padding-bottom: calc(${16 / 16}em - var(--border-width));
  padding-left: calc(${25.5 / 16}em - var(--border-width));
  padding-right: calc(${24.5 / 16}em - var(--border-width));
  border: 2px solid transparent;
  cursor: pointer;
  width: fit-content;
  transition: 200ms;

  &:hover {
    background-color: transparent;
    color: var(--color-accent);
    border-color: var(--color-accent);
  }
`;
