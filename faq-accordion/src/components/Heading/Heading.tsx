import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { QUERIES } from '../../constants.ts';

type Props = PropsWithChildren<{ $level: 1 | 2; as?: string }>;

export function Heading({
  $level,
  as = `h${$level}`,
  children,
  ...delegated
}: Props) {
  return (
    <Wrapper $level={$level} as={as} {...delegated}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.h1<Pick<Props, '$level'>>`
  ${({ $level }) => $level === 1 && level1Style}
  ${({ $level }) => $level === 2 && level2Style}
`;

const level1Style = css`
  font-size: ${32 / 16}rem;
  color: var(--color-dark-purple);
  font-weight: 700;
  line-height: 1;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${56 / 16}rem;
  }
`;

const level2Style = css`
  font-size: ${16 / 16}rem;
  color: var(--color-dark-purple);
  font-weight: 600;
  line-height: 1;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${18 / 16}rem;
  }
`;
