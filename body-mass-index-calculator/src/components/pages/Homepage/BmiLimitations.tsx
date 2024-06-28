import { Container } from '../../Container';
import { Heading } from '../../Heading';
import styled from 'styled-components';
import { Card } from '../../Card';
import { QUERIES } from '../../../constants.ts';

export function BmiLimitations() {
  return (
    <Wrapper as="section">
      <Header>
        <Heading $size="l">Limitations of BMI</Heading>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </Header>

      <GenderCard>
        <LimitationCardHeader>
          <img src="/images/icon-gender.svg" alt="Gender icon" />
          <Heading $size="s" as="p">
            Gender
          </Heading>
        </LimitationCardHeader>
        <p>
          The development and body fat composition of girls and boys vary with
          age. Consequently, a child's age and gender are considered when
          evaluating their BMI.
        </p>
      </GenderCard>

      <AgeCard>
        <LimitationCardHeader>
          <img src="/images/icon-age.svg" alt="Cake icon" />
          <Heading $size="s" as="p">
            Age
          </Heading>
        </LimitationCardHeader>
        In aging individuals, increased body fat and muscle loss may cause BMI
        to underestimate body fat content.
      </AgeCard>

      <MuscleCard>
        <LimitationCardHeader>
          <img src="/images/icon-muscle.svg" alt="Muscle icon" />
          <Heading $size="s" as="p">
            Muscle
          </Heading>
        </LimitationCardHeader>
        BMI may misclassify muscular individuals as overweight or obese, as it
        doesn't differentiate muscle from fat.
      </MuscleCard>

      <PregnancyCard>
        <LimitationCardHeader>
          <img src="/images/icon-pregnancy.svg" alt="Pregnancy icon" />
          <Heading $size="s" as="p">
            Pregnancy
          </Heading>
        </LimitationCardHeader>
        Expectant mothers experience weight gain due to their growing baby.
        Maintaining a healthy pre-pregnancy BMI is advisable to minimise health
        risks for both mother and child.
      </PregnancyCard>

      <RaceCard>
        <LimitationCardHeader>
          <img src="/images/icon-race.svg" alt="Race icon" />
          <Heading $size="s" as="p">
            Race
          </Heading>
        </LimitationCardHeader>
        Certain health concerns may affect individuals of some Black and Asian
        origins at lower BMIs than others. To learn more, it is advised to
        discuss this with your GP or practice nurse.
      </RaceCard>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  margin-top: 72px;
  padding-bottom: 96px;
  display: flex;
  flex-direction: column;
  --gap: 16px;
  gap: var(--gap);
  width: 100%;
  position: relative;
  isolation: isolate;

  &::before {
    content: url('/images/pattern-curved-line-right.svg');
    position: absolute;
    top: 251px;
    left: 165px;
  }

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    margin-top: 96px;
    row-gap: 24px;
    column-gap: 15px;
    grid-template-areas:
      'header header'
      'gender age'
      'muscle pregnancy'
      'race race';
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'header header header gender gender gender'
      'test test age age muscle muscle'
      'pregnancy pregnancy pregnancy race race race';
    margin-top: 120px;
    padding-bottom: 120px;
    gap: 32px;

    & > header {
      margin-right: 100px;
    }
  }
`;

const Header = styled.header`
  text-align: center;
  display: grid;
  gap: 32px;
  margin-bottom: calc(56px - var(--gap));
  grid-area: header;

  @media ${QUERIES.laptopAndUp} {
    width: 564px;
    text-align: revert;
    margin-bottom: revert;
  }
`;

const LimitationCard = styled(Card)`
  max-width: 365px;
  width: 100%;
  padding: 24px;
  display: grid;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    padding: 32px;
  }
`;

const LimitationCardHeader = styled.header`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const GenderCard = styled(LimitationCard)`
  grid-area: gender;

  @media ${QUERIES.tabletOnly} {
    justify-self: end;
  }
`;

const AgeCard = styled(LimitationCard)`
  grid-area: age;
`;

const MuscleCard = styled(LimitationCard)`
  grid-area: muscle;

  @media ${QUERIES.tabletOnly} {
    justify-self: end;
  }
`;

const PregnancyCard = styled(LimitationCard)`
  grid-area: pregnancy;

  @media ${QUERIES.laptopAndUp} {
    justify-self: center;
  }
`;

const RaceCard = styled(LimitationCard)`
  grid-area: race;

  @media ${QUERIES.tabletAndUp} {
    justify-self: center;
  }

  @media ${QUERIES.laptopAndUp} {
    justify-self: start;
  }
`;
