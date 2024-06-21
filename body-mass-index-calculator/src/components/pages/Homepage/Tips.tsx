import styled from 'styled-components';
import { Heading } from '../../Heading';
import { Container } from '../../Container';
import { QUERIES } from '../../../constants.ts';

export function Tips() {
  return (
    <Wrapper>
      <TipsContainer>
        <TipsGroup>
          <img src="/images/icon-eating.svg" alt="Eating icon" />
          <Content>
            <Heading $size="m">Healthy eating</Heading>
            <p>
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </Content>
        </TipsGroup>

        <TipsGroup>
          <img src="/images/icon-exercise.svg" alt="Exercise icon" />
          <Content>
            <Heading $size="m">Regular exercise</Heading>
            <p>
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </Content>
        </TipsGroup>

        <TipsGroup>
          <img src="/images/icon-sleep.svg" alt="Sleep icon" />
          <Content>
            <Heading $size="m">Adequate sleep</Heading>
            <p>
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </Content>
        </TipsGroup>
      </TipsContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 71px;
  padding-top: 56px;
  padding-bottom: 56px;
  isolation: isolate;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--color-gradiant-1);
    opacity: 0.25;
    z-index: -1;
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: 96px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-left: 24px;
    margin-right: 24px;

    &::after {
      border-radius: 35px;
    }
  }
`;

const TipsContainer = styled(Container)`
  display: grid;
  gap: 40px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`;

const TipsGroup = styled.article`
  display: grid;
  gap: 32px;

  @media ${QUERIES.tabletAndUp} {
    align-items: center;
    grid-template-columns: auto 1fr;
    gap: 40px;
  }

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: revert;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 24px;
`;
