import { Heading } from '../../Heading';
import styled from 'styled-components';
import { QUERIES } from '../../../constants.ts';
import { Background } from '../../Background';

export function Homepage() {
  return (
    <>
      <Background
        mobile="/img/home/background-home-mobile.jpg"
        tablet="/img/home/background-home-tablet.jpg"
        desktop="/img/home/background-home-desktop.jpg"
      />
      <Wrapper>
        <Content>
          <Heading level={5} as="p">
            So, you want to travel to
          </Heading>
          <Heading level={1}>space</Heading>
          <Description>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Description>
        </Content>
        <RoundedButton>Explore</RoundedButton>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  padding-top: var(--spacing-7);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 106px;
    gap: var(--spacing-4);
    padding-left: revert;
    padding-right: revert;
  }

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    align-items: end;
    width: 100%;
    text-align: revert;
    justify-content: space-between;
    padding-left: 165px;
    padding-right: 165px;
    padding-top: revert;
    padding-bottom: var(--spacing-7);

    @media (min-height: 800px) {
      padding-bottom: 131px;
    }
  }
`;

const Content = styled.article`
  display: grid;
  gap: var(--spacing-3);

  @media ${QUERIES.tabletAndUp} {
    gap: var(--spacing-4);
  }
`;

const Description = styled.p`
  @media ${QUERIES.tabletAndUp} {
    max-width: 444px;
  }
`;

const RoundedButton = styled.a`
  width: 150px;
  height: 150px;
  background: var(--color-white);
  color: var(--color-black);
  font-size: var(--font-size-heading-4);
  font-family: 'Bellefair', sans-serif;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  border-radius: 50%;
  margin-top: auto;
  margin-bottom: var(--spacing-7);
  display: grid;
  place-items: center;

  @media ${QUERIES.tabletAndUp} {
    letter-spacing: 2px;
    width: 242px;
    height: 242px;
    margin-bottom: 90px;
  }

  @media ${QUERIES.laptopAndUp} {
    position: revert;
    align-self: flex-end;
    margin-bottom: revert;
  }
`;
