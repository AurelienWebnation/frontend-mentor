import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';

export const Container = styled.div`
  max-width: 688px;
  margin: 0 auto;

  @media ${QUERIES.laptopAndUp} {
    max-width: 737px;
  }
`;
