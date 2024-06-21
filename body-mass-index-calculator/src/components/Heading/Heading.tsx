import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { QUERIES } from '../../constants.ts';

type Props = PropsWithChildren<{ $size: 'xl' | 'l' | 'm' | 's'; as?: string }>;

const LEVELS = {
  xl: 1,
  l: 2,
  m: 3,
  s: 4,
};

export function Heading({
  $size,
  as = `h${LEVELS[$size]}`,
  children,
  ...delegated
}: Props) {
  return (
    <Wrapper $size={$size} as={as} {...delegated}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.h1<Pick<Props, '$size'>>`
  ${({ $size }) => SIZES_STYLES[$size]};
`;

const base_styles = css`
  color: var(--color-gunmetal);
  font-weight: 600;
  line-height: 110%;
`;

const heading_xl_styles = css`
  ${base_styles};
  font-size: ${48 / 16}rem;
  letter-spacing: -2.4px;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${64 / 16}rem;
    letter-spacing: -3.2px;
  }
`;

const heading_l_styles = css`
  ${base_styles};
  font-size: ${32 / 16}rem;
  letter-spacing: -1.6px;

  @media ${QUERIES.laptopAndUp} {
    font-size: ${48 / 16}rem;
    letter-spacing: -2.4px;
  }
`;

export const heading_m_styles = css`
  ${base_styles};
  font-size: ${24 / 16}rem;
  letter-spacing: -1.2px;
`;

const heading_s_styles = css`
  ${base_styles};
  font-size: ${20 / 16}rem;
  letter-spacing: -1px;
`;

const SIZES_STYLES = {
  xl: heading_xl_styles,
  l: heading_l_styles,
  m: heading_m_styles,
  s: heading_s_styles,
};
