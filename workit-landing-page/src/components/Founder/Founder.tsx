import { Heading } from '../Heading';
import { Button } from '../Button';
import styled from 'styled-components';
import { Container } from '../Container';
import { QUERIES } from '../../constants.ts';

export function Founder() {
  return (
    <Wrapper as="section">
      <Picture
        src="/images/image-founder.webp"
        alt="Louis Graham, the founder of Workit"
      />
      <Description>
        <Heading level={2}>Be the first to test</Heading>
        <p>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <Button>Apply for access</Button>
        <PatternImage alt="" src="/images/bg-pattern-3.svg" />
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  isolation: isolate;
  position: relative;
  margin-top: 100.29px;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`;

const Picture = styled.img`
  max-width: 265px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -50px;

  @media ${QUERIES.laptopAndUp} {
    max-width: 477px;
  }
`;

const Description = styled.article`
  display: grid;
  place-items: center;
  height: fit-content;
  gap: 24px;
  background-color: var(--color-primary);
  color: var(--color-white);
  text-align: center;
  padding: 32px;
  position: relative;
  z-index: 2;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 151px;
    margin-left: -25%;
    text-align: left;
    place-items: start;
    padding: 56px;
    padding-top: 48px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-left: -15%;
    padding: 64px;
    gap: 32px;
  }
`;

const PatternImage = styled.img`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: block;
    position: absolute;
    top: 269.29px;
    right: 12.69px;
  }

  @media ${QUERIES.laptopAndUp} {
    top: 263.29px;
    right: 72.69px;
  }
`;
