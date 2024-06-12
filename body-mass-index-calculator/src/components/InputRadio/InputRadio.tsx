import styled from 'styled-components';

export const InputRadio = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  background-color: transparent;
  margin: 0;
  width: 31px;
  height: 31px;
  border: 1px solid hsl(190, 23%, 53%);
  border-radius: 50%;
  display: grid;
  place-content: center;

  &:hover {
    border-color: var(--color-blue);
  }

  &:checked {
    border: revert;
    background-color: hsl(227 92% 58% / 0.15);

    &::before {
      transform: scale(1);
    }
  }

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--color-blue);
    transform: scale(0);
    transition: 150ms ease-in-out;
  }
`;
