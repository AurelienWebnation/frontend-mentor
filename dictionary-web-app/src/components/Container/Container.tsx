import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';

export const Container = styled.div`
  max-width: 689px;
  margin: 0 auto;

  @media ${QUERIES.tabletAndUp} {
    max-width: 737px;
  }
`;
