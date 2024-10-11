import { ToggleButton } from '../ToggleButton';
import styled from 'styled-components';

import { useContext } from 'react';
import { DarkThemeContext } from '../DarkThemeProvider';
import { QUERIES } from '../../constants.ts';

export function ToggleDarkTheme() {
  const { isDarkTheme, toggleTheme } = useContext(DarkThemeContext);

  return (
    <Wrapper>
      <ToggleButton onClick={toggleTheme} $isActive={isDarkTheme} icon="moon" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${QUERIES.tabletAndUp} {
    gap: 20px;
  }

  &:has(input:checked) {
    .test {
      & > path {
        stroke: var(--color-purple);
      }
    }
  }
`;
