import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren & {
  level: 1 | 2;
  as: string | null;
};

export function Subheading({ level, as = null, children }: Props) {
  return (
    <Wrapper level={level} as={as || `h${level}`}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.p<Props>`
  ${({ level }) => `font-size: var(--font-size-subheading-${level})`};
  color: var(--color-white);
  text-transform: uppercase;
  font-family: 'Bellefair', sans-serif;

  ${({ level }) =>
    level == 2 &&
    `
      letter-spacing: 2.362px; 
      font-family: 'BarlowCondensed', sans-serif;
      
    `};
`;

export default Subheading;
