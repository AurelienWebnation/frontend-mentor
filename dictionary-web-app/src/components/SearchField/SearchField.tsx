import styled from 'styled-components';

interface SearchFieldProps {
  error?: boolean;
}

export function SearchField({ error }: SearchFieldProps) {
  return (
    <Wrapper>
      <Label error={error}>
        <Input type="text" placeholder="Search for any word..." />
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
  padding: 20px 24px;
  background: transparent;
  width: 100%;
  font-weight: 700;
  font-size: var(--font-size-heading-s);

  &::placeholder {
    color: inherit;
    opacity: 0.25;
  }

  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  padding-right: 24px;
`;

const Error = styled.p`
  font-size: var(--font-size-heading-s);
  color: var(--color-red);
`;
