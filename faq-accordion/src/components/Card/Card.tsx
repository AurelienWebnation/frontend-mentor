import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';

export const Card = styled.div`
  border-radius: ${8 / 16}rem;
  background-color: var(--color-white);
  box-shadow: 0 32px 56px 0 rgba(80, 0, 118, 0.1);

  @media ${QUERIES.tabletAndUp} {
    border-radius: ${16 / 16}rem;
  }
`;
