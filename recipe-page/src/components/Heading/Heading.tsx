import styled, { css } from 'styled-components';
import type { PropsWithChildren } from 'react';
import { QUERIES } from '../../constants.ts';

type Props = PropsWithChildren & {
  level: 1 | 2 | 3;
  as?: string;
};

export function Heading({
  level,
  as = `h${level}`,
  children,
  ...delegated
}: Props) {
  return (
    <StyledHeading level={level} as={as} {...delegated}>
      {children}
    </StyledHeading>
  );
}

const baseStyle = css`
  line-height: 100%;
`;

const level1Style = css`
  font-family: 'Young Serif', serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  color: var(--color-dark-charcoal);

  @media ${QUERIES.laptopAndUp} {
    font-size: 40px;
  }
`;

const level2Style = css`
  font-family: 'Young Serif', serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  color: var(--color-brandy-red);
`;

const level3Style = css`
  font-family: 'Outfit', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: var(--color-dark-raspberry);
`;

const STYLES = [null, level1Style, level2Style, level3Style];

const StyledHeading = styled.div<Props>`
  ${baseStyle};
  ${({ level }) => STYLES[level]};
`;
