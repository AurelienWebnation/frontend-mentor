import { ToggleButton } from '../ToggleButton';
import styled from 'styled-components';
import MoonIconSVG from './assets/icon-moon.svg';
import { useContext } from 'react';
import { DarkThemeContext } from '../DarkThemeProvider';
import { QUERIES } from '../../constants.ts';

export function ToggleDarkTheme() {
  const { theme, handleDarkThemeChange } = useContext(DarkThemeContext);

  return (
    <Wrapper>
      <ToggleButton
        handleChange={handleDarkThemeChange}
        checked={theme === 'dark'}
      />
      <MoonIcon />
    </Wrapper>
  );
}

const MoonIcon = styled(MoonIconSVG)`
  width: 20px;
  height: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${QUERIES.tabletAndUp} {
    gap: 20px;
  }

  &:has(input:checked) {
    ${MoonIcon} {
      & > path {
        stroke: var(--color-purple);
      }
    }
  }
`;
