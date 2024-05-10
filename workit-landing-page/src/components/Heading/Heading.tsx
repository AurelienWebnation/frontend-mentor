import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { QUERIES } from '../../constants.ts';

type Levels = 1 | 2 | 3;

type Props = PropsWithChildren & {
  level: Levels;
  as?: string;
  className?: string;
};

export function Heading({
  level,
  as = `h${level}`,
  children,
  className,
}: Props) {
  return (
    <Wrapper $level={level} as={as} className={className}>
      {children}
    </Wrapper>
  );
}

type WrapperProps = {
  $level: Levels;
};

const Wrapper = styled.div<WrapperProps>`
  font-family: 'Fraunces', sans-serif;
  letter-spacing: -2px;

  ${({ $level }) => LEVELS[$level - 1]}
`;

const Level1 = css`
  font-size: ${50 / 16}rem;
  line-height: 1;
  font-weight: 600;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${60 / 16}rem;
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: ${80 / 16}rem;
  }
`;

const Level2 = css`
  font-size: ${32 / 16}rem;
  line-height: 48px;

  @media ${QUERIES.tabletAndUp} {
    font-size: ${48 / 16}rem;
    line-height: 56px;
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: ${56 / 16}rem;
    line-height: 64px;
  }
`;

const Level3 = css`
  font-size: ${28 / 16}rem;
  line-height: 36px;

  @media ${QUERIES.laptopAndUp} {
    font-size: ${32 / 16}rem;
    line-height: 40px;
  }
}
`;

const LEVELS = [Level1, Level2, Level3];
