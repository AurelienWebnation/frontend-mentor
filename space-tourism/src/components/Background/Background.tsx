import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';

interface Props {
  mobile: string;
  tablet: string;
  desktop: string;
}

export const Background = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.mobile});
  background-size: cover;
  background-position: center;
  z-index: -1;

  @media ${QUERIES.tabletAndUp} {
    background-image: url(${(props) => props.tablet});
  }

  @media ${QUERIES.laptopAndUp} {
    background-image: url(${(props) => props.desktop});
  }
`;
