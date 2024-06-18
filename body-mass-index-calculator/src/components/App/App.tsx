import styled from 'styled-components';
import { Heading } from '../Heading';
import { BmiCalculator } from '../BmiCalculator';

export function App() {
  return (
    <>
      <Header>
        <Hero>
          <Logo src="/images/logo.svg" alt="Back home" />
          <Heading $size="xl">
            Body Mass <br />
            Index Calculator
          </Heading>
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </Hero>
        <BmiCalculatorWrapper>
          <BmiCalculator />
        </BmiCalculatorWrapper>
      </Header>
    </>
  );
}

const Container = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;

const Header = styled.header``;

const Hero = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  height: 640px;
  background: var(--color-gradiant-1);
  text-align: center;
  border-radius: 0 0 35px 35px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 32px;
`;

const BmiCalculatorWrapper = styled(Container)`
  margin-top: -169px;
`;
