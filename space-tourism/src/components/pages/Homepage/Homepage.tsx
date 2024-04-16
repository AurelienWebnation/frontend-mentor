import { Heading } from '../../Heading';
import styled from 'styled-components';
import { QUERIES } from '../../../constants.ts';

export function Homepage() {
  return (
    <Wrapper>
      <Background />
      <Heading level={5} as="p">
        So, you want to travel to
      </Heading>
      <Heading level={1}>space</Heading>
      <Description>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </Description>
      <RoundedButton>Explore</RoundedButton>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin-top: var(--spacing-7);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-3);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
`;

const Description = styled.p`
  text-align: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: url('/img/home/background-home-mobile.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;

  @media ${QUERIES.tabletAndUp} {
    background-image: url('/img/home/background-home-tablet.jpg');
  }

  @media ${QUERIES.laptopAndUp} {
    background-image: url('/img/home/background-home-desktop.jpg');
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
  position: absolute;
  bottom: var(--spacing-7);
  display: grid;
  place-items: center;

  @media ${QUERIES.tabletAndUp} {
    letter-spacing: 2px;
  }
`;
