import { Container } from '../../Container';
import { Heading } from '../../Heading';
import { BmiCalculator } from '../../BmiCalculator';
import styled from 'styled-components';
import { QUERIES } from '../../../constants.ts';

export function Hero() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Detail>
          <Logo src="/images/logo.svg" alt="Back home" />
          <Heading $size="xl">
            Body Mass <br />
            Index Calculator
          </Heading>
          <HeroDescription>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </HeroDescription>
        </Detail>
        <BmiCalculatorWrapper>
          <BmiCalculator />
        </BmiCalculatorWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --height: 640px;
  @media ${QUERIES.laptopAndUp} {
    --height: 737px;
  }

  min-height: var(--height);
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    background: var(--color-gradiant-1);
    border-radius: 0 0 35px 35px;
    min-height: var(--height);
    z-index: -1;
    width: 100%;

    @media ${QUERIES.laptopAndUp} {
      width: min(978px, 100%);
      left: 24px;
      right: 24px;
    }
  }
`;

const ContentWrapper = styled(Container)`
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;

  @media ${QUERIES.laptopAndUp} {
    align-items: flex-start;
    text-align: revert;
    gap: 35px;
    width: min(calc(564px + 24px * 2), 100%);
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 32px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: calc(40px - 24px);
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 75px;
    margin-bottom: calc(127px - 35px);
    width: 64px;
    height: 64px;
  }
`;

const HeroDescription = styled.p`
  @media ${QUERIES.laptopAndUp} {
    width: min(465px, 100%);
  }
`;

const BmiCalculatorWrapper = styled.div`
  margin-top: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 40px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 167px;
  }
`;
