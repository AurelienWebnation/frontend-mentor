import type { ElementType, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';

type Props = PropsWithChildren & {
  level: 1 | 2 | 3 | 4 | 5;
  as?: ElementType | null;
};

export function Heading({ level, children, as = null, ...delegated }: Props) {
  return (
    <Wrapper level={level} as={as || `h${level}`} {...delegated}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<Props>`
  ${({ level }) => `font-size: var(--font-size-heading-${level})`};
  font-family: "Bellefair", sans-serif;
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: 400;
  
  ${({ level }) => level === 1 && `line-height: 125%`};
  @media (${QUERIES.tabletAndUp}) {
    ${({ level }) => level === 1 && `line-height: 100%`};
  }
  
  ${({ level }) =>
    level == 5 &&
    `
      font-family: "BarlowCondensed", sans-serif;
      color: var(--color-text);
      letter-spacing: 2.7px;
      
      @media (${QUERIES.tabletAndUp}) {
        letter-spacing: 3.375px;
      }
      
      @media (${QUERIES.laptopAndUp}) {
        letter-spacing: 4.725px;
      }
    `}};
`;
