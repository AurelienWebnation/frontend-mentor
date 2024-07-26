import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';
import type { ComponentProps } from 'react';

type SearchFieldProps = ComponentProps<'input'> & {
  error?: boolean;
};

export function SearchField({ error, ...delegated }: SearchFieldProps) {
  return (
    <Wrapper>
      <Label error={error}>
        <Input type="text" {...delegated} />
        <Icon src="/images/icon-search.svg" alt="Search" />
      </Label>
      {error && <Error>Whoops, can’t be empty…</Error>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 8px;
`;

const Label = styled.label<SearchFieldProps>`
  background: var(--color-grey-3);
  display: flex;
  border-radius: 16px;

  &:has(input:focus) {
    outline: 1px solid var(--color-purple);
  }

  ${({ error }) => error && `outline: 1px solid var(--color-red);`}
`;

const Input = styled.input`
  padding: 16px 24px;
  background: transparent;
  width: 100%;
  font-weight: 700;
  font-size: var(--font-size-heading-s);

  &::placeholder {
    color: var(--color-black-3);
    opacity: 0.25;
  }

  &:focus {
    outline: none;
  }

  @media ${QUERIES.tabletAndUp} {
    padding: 20px 24px;
  }
`;

const Icon = styled.img`
  padding-right: 24px;
`;

const Error = styled.p`
  font-size: var(--font-size-heading-s);
  color: var(--color-red);
`;
