import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';

export function Header() {
  return (
    <Wrapper>
      <a href="/">
        <img src="/images/logo-light.svg" alt="Back to home" />
      </a>
      <CTA href="#">Apply for access</CTA>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  padding-top: 32px;
  background: var(--color-primary);

  @media ${QUERIES.laptopAndUp} {
    padding-top: 58px;
  }
`;

const CTA = styled.a`
  margin-left: auto;
  border-bottom: 3px solid var(--color-accent);
  color: var(--color-white);

  &:hover {
    color: var(--color-accent);
  }
`;
