import styled from 'styled-components';
import IconPlaySvg from './assets/icon-play.svg';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

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

  &:hover {
    circle {
      opacity: 1;
    }

    path {
      fill: var(--color-white);
    }
  }
`;
