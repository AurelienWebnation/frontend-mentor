import styled from 'styled-components';
import IconPlaySvg from './assets/icon-play.svg';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { QUERIES } from '../../constants.ts';

export function PlayButton({ ...delegated }) {
  return (
    <button {...delegated}>
      <IconPlay />
      <VisuallyHidden>Play</VisuallyHidden>
    </button>
  );
}

export const IconPlay = styled(IconPlaySvg)`
  cursor: pointer;
  width: 48px;

  &:hover {
    circle {
      opacity: 1;
    }

    path {
      fill: var(--color-white);
    }
  }

  @media ${QUERIES.tabletAndUp} {
    width: revert;
  }
`;
