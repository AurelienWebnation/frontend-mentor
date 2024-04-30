import { Heading } from '../../Heading';
import styled from 'styled-components';
import { QUERIES } from '../../../constants.ts';
import { Background } from '../../Background';
import { Subheading } from '../../Subheading';

export function Destination() {
  return (
    <>
      <Background
        mobile="/img/destination/background-destination-mobile.jpg"
        tablet="/img/destination/background-destination-tablet.jpg"
        desktop="/img/destination/background-destination-desktop.jpg"
      />
      <Wrapper>
        <Header>
          <HeadingWrapper>
            <Heading level={5} as="h1">
              <Number>01</Number>Pick your destination
            </Heading>
          </HeadingWrapper>
          <PlanetPicture src="/img/destination/image-moon.png" alt="" />
          <Nav>
            <li>Moon</li>
            <li>Mars</li>
            <li>Europa</li>
            <li>Titan</li>
          </Nav>
        </Header>

        <Content>
          <Heading level={2} as="h2">
            Moon
          </Heading>
          <Description>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </Description>
          <Separator />
          <FurtherInformationWrapper>
            <FurtherInformation>
              <Subheading level={2}>AVG. DISTANCE</Subheading>
              <Subheading level={1}>384,400 km</Subheading>
            </FurtherInformation>
            <FurtherInformation>
              <Subheading level={2}>Est. travel time</Subheading>
              <Subheading level={1}>3 days</Subheading>
            </FurtherInformation>
          </FurtherInformationWrapper>
        </Content>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  padding-top: var(--spacing-4);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  text-align: center;
  max-width: 1110px;
  margin-left: auto;
  margin-right: auto;

  @media ${QUERIES.tabletAndUp} {
    padding-top: var(--spacing-6);
    padding-left: var(--spacing-6);
    padding-right: var(--spacing-6);
  }

  @media ${QUERIES.laptopAndUp} {
    padding-top: 76px;
    padding-left: revert;
    padding-right: revert;
  }
`;

const HeadingWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    align-self: flex-start;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media ${QUERIES.tabletAndUp} {
    gap: 60px;
    margin-bottom: 32px;
  }
`;

const Content = styled.article`
  display: grid;
  justify-content: center;
`;

const Description = styled.p`
  max-width: 573px;
`;

const Number = styled.span`
  color: var(--color-white);
  opacity: 0.25;
  font-weight: 700;
  padding-right: 18px;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 28px;
  }
`;

const PlanetPicture = styled.img`
  width: 170px;
  height: 170px;
  margin-left: auto;
  margin-right: auto;

  @media ${QUERIES.tabletAndUp} {
    width: 300px;
    height: 300px;
  }
`;

const Nav = styled.ul`
  display: flex;
  gap: var(--spacing-4);
  font-family: 'BarlowCondensed', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  min-height: 28px;
`;

const Separator = styled.hr`
  margin-top: var(--spacing-5);
  margin-bottom: var(--spacing-5);
  height: 1px;
  background: #383b4b;
  max-width: 573px;
`;

const FurtherInformationWrapper = styled.section`
  display: grid;
  gap: var(--spacing-5);
  margin-bottom: 58px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(2, 1fr);
    gap: revert;
  }
`;

const FurtherInformation = styled.div`
  display: grid;
  gap: var(--spacing-2);
`;
