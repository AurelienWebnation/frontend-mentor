import styled from 'styled-components';

interface Props {
  required?: boolean;
}

export function Required({ required = true }: Props) {
  return required ? <Wrapper> *</Wrapper> : <Wrapper> optional</Wrapper>;
}

const Wrapper = styled.span`
  color: var(--color-green-600);
`;
