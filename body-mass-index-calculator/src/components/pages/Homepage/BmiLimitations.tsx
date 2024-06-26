import { Container } from '../../Container';
import { Heading } from '../../Heading';
import styled from 'styled-components';
import { Card } from '../../Card';
import { QUERIES } from '../../../constants.ts';

export function BmiLimitations() {
  return (
    <Wrapper>
      <Header>
        <Heading $size="l">Limitations of BMI</Heading>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </Header>

      <LimitationCardWrapper>
        <LimitationCard>
          <LimitationCardHeader>
            <img src="/images/icon-gender.svg" alt="Gender icon" />
            <Heading $size="s">Gender</Heading>
          </LimitationCardHeader>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </LimitationCard>

        <LimitationCard>
          <LimitationCardHeader>
            <img src="/images/icon-age.svg" alt="Cake icon" />
            <Heading $size="s">Age</Heading>
          </LimitationCardHeader>
          In aging individuals, increased body fat and muscle loss may cause BMI
          to underestimate body fat content.
        </LimitationCard>

        <LimitationCard>
          <LimitationCardHeader>
            <img src="/images/icon-muscle.svg" alt="Muscle icon" />
            <Heading $size="s">Muscle</Heading>
          </LimitationCardHeader>
          BMI may misclassify muscular individuals as overweight or obese, as it
          doesn't differentiate muscle from fat.
        </LimitationCard>

        <LimitationCard>
          <LimitationCardHeader>
            <img src="/images/icon-pregnancy.svg" alt="Pregnancy icon" />
            <Heading $size="s">Pregnancy</Heading>
          </LimitationCardHeader>
          Expectant mothers experience weight gain due to their growing baby.
          Maintaining a healthy pre-pregnancy BMI is advisable to minimise
          health risks for both mother and child.
        </LimitationCard>

        <LimitationCard>
          <LimitationCardHeader>
            <img src="/images/icon-race.svg" alt="Race icon" />
            <Heading $size="s">Race</Heading>
          </LimitationCardHeader>
          Certain health concerns may affect individuals of some Black and Asian
          origins at lower BMIs than others. To learn more, it is advised to
          discuss this with your GP or practice nurse.
        </LimitationCard>
      </LimitationCardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  margin-top: 72px;
  margin-bottom: 96px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 96px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 120px;
    margin-bottom: 120px;
  }
`;

const Header = styled.header`
  text-align: center;
  display: grid;
  gap: 32px;

  @media ${QUERIES.laptopAndUp} {
    max-width: 564px;
    text-align: revert;
  }
`;

const LimitationCardWrapper = styled.div`
  margin-top: 56px;
  display: grid;
  gap: 16px;
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    row-gap: 24px;
    column-gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${QUERIES.laptopAndUp} {
    transform: translateY(-180px);
    gap: 32px;
    margin-top: revert;
    grid-template-areas:
      'card1 card1 card1 card1'
      '. . card2 card3'
      'card4 card4 card5 card5';
  }
`;

const LimitationCard = styled(Card)`
  max-width: 365px;
  padding: 24px;
  display: grid;
  gap: 16px;

  @media ${QUERIES.tabletOnly} {
    grid-column: span 2;
    &:last-child {
      grid-column: 2 / span 2;
    }
    padding: 32px;
  }

  @media ${QUERIES.laptopAndUp} {
    &:nth-child(1) {
      grid-area: card1;
      margin-left: auto;
      margin-right: 99px;
    }

    &:nth-child(2) {
      grid-area: card2;
      margin-left: auto;
    }

    &:nth-child(3) {
      grid-area: card3;
    }

    &:nth-child(4) {
      grid-area: card4;
      margin-left: auto;
    }

    &:nth-child(5) {
      grid-area: card5;
    }
  }
`;

const LimitationCardHeader = styled.header`
  display: flex;
  gap: 16px;
  align-items: center;
`;
