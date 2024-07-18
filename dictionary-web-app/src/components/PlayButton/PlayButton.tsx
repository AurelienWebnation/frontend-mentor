import styled from 'styled-components';
import IconPlaySvg from './assets/icon-play.svg';

export function PlayButton({ ...delegated }) {
  return (
    <button {...delegated}>
      <IconPlay />
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
