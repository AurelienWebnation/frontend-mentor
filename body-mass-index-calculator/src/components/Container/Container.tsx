import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';

export const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;

  @media ${QUERIES.tabletAndUp} {
    padding-left: 43px;
    padding-right: 43px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-left: revert;
    padding-right: revert;
  }
`;
