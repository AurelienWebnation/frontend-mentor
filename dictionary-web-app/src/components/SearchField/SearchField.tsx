import styled from 'styled-components';

export function SearchField() {
  return (
    <Label>
      <Input type="text" placeholder="Search for any word..." />
      <Icon src="/images/icon-search.svg" alt="Search" />
    </Label>
  );
}

const Label = styled.label`
  background: var(--color-grey-3);
  display: flex;
  border-radius: 16px;

  &:has(input:focus) {
    outline: 1px solid var(--color-purple);
  }
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
