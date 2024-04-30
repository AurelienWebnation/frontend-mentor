import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type Props = PropsWithChildren & {
  level: 1 | 2;
};

export function Subheading({ level, children }: Props) {
  return <Wrapper level={level}>{children}</Wrapper>;
}

const Wrapper = styled.p<Props>`
  ${({ level }) => `font-size: var(--font-size-subheading-${level})`};
  color: var(--color-white);
  text-transform: uppercase;

  ${({ level }) => HEADING[level]};
`;

const subheading1 = css`
  font-family: 'Bellefair', sans-serif;
`;

const subheading2 = css`
  font-family: 'BarlowCondensed', sans-serif;
  letter-spacing: 2.362px;
`;

const HEADING = {
  1: subheading1,
  2: subheading2,
};
