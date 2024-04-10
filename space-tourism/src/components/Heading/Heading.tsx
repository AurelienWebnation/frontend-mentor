import type { ElementType, PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren & {
  level: 1 | 2 | 3 | 4 | 5;
  as?: ElementType | null;
};

export function Heading({ level, children, as = null, ...delegated }: Props) {
  return (
    <Wrapper level={level} {...delegated} as={as || `h${level}`}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<Props>`
  ${({ level }) => `font-size: var(--font-size-heading-${level})`};
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: 400;
  
  ${({ level }) =>
    level == 5 &&
    `
      font-family: "BarlowCondensed", sans-serif;
      color: var(--color-text);
      letter-spacing: 4.725px;
    `}};
`;
