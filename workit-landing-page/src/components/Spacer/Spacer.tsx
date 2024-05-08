import styled from 'styled-components';

interface Props {
  height?: number;
  width?: number;
}

export const Spacer = styled.span<Props>`
  display: block;
  background: transparent;
  ${(p) => p.height && `height: ${p.height}px;`}
  ${(p) => p.width && `width: ${p.width}px;`}
`;
