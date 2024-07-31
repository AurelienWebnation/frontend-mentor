import styled from 'styled-components';
import { TypoSelectionMenu } from '../TypoSelectionMenu';
import { QUERIES } from '../../constants.ts';
import { ToggleDarkTheme } from '../ToggleDarkTheme';

export function Header() {
  return (
    <Wrapper>
      <Logo src="/images/logo.svg" alt="Back home" />
      <TypoSelectionMenu />
      <Separator />
      <ToggleDarkTheme />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  margin-top: 24px;
  align-items: center;
  position: relative;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 58px;
  }
`;

const Logo = styled.img`
  margin-right: auto;
  height: 32px;

  @media ${QUERIES.tabletAndUp} {
    height: 37px;
  }
`;

const Separator = styled.div`
  width: 1px;
  background-color: var(--color-grey-2);
  align-self: stretch;
  margin-left: 16px;
  margin-right: 16px;
`;
