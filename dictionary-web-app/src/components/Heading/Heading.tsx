import type { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { QUERIES } from '../../constants.ts';

type Props = PropsWithChildren<{ $level: 'l' | 'm' | 's'; as?: string }>;

const LEVELS = {
  l: 1,
  m: 2,
  s: 3,
};

export function Heading({
  $level,
  as = `h${LEVELS[$level]}`,
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
  ${({ $level }) => SIZES_STYLES[$level]};
`;

const l_styles = css`
  font-size: var(--font-size-heading-l);
  font-weight: 700;

  @media ${QUERIES.tabletAndUp} {
    line-height: 77px;
  }
`;

const m_styles = css`
  line-height: 29px;

  font-size: var(--font-size-heading-m);
`;

const s_styles = css`
  line-height: 24px;

  font-size: var(--font-size-heading-s);
`;

const SIZES_STYLES = {
  l: l_styles,
  m: m_styles,
  s: s_styles,
};
