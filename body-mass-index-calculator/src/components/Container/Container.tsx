import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;

  @media ${QUERIES.tabletAndUp} {
    max-width: 686px;
  }

  @media ${QUERIES.laptopAndUp} {
    max-width: 1160px;
    padding-left: revert;
    padding-right: revert;
  }
`;
