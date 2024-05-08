import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';

export const Container = styled.div`
  --padding: 16px;

  padding-left: var(--padding);
  padding-right: var(--padding);
  max-width: calc(1112px + var(--padding) * 2);
  margin-left: auto;
  margin-right: auto;

  @media ${QUERIES.tabletOnly} {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
