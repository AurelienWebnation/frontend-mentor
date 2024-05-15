import { Container } from '../Container';
import { Header } from '../Header';
import { Spacer } from '../Spacer';
import { Button } from '../Button';
import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';
import { Heading } from '../Heading';
import { wavyClipPath } from '../GlobalStyle';

export function Hero({ ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <Container>
        <Header />
        <Title level={1}>
          Data <Underlined>tailored</Underlined> to
          <br /> your needs.
        </Title>
        <Spacer height={40} />
        <Button>Learn more</Button>
        <IphoneImage
          src="/images/image-hero.webp"
          alt="Iphone with statistics data"
        />
        <PatternImageLeft alt="" src="/images/bg-pattern-1.svg" />
        <PatternImageRight alt="" src="/images/bg-pattern-2.svg" />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --height: 482px;

  color: var(--color-white);
  text-align: center;
  height: var(--height);
  position: relative;
  overflow-x: clip;

  @media ${QUERIES.tabletAndUp} {
    --height: 540px;
  }

  @media ${QUERIES.laptopAndUp} {
    --height: 730px;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    height: var(--height);
    inset: 0;
    background: var(--color-primary);
    z-index: -1;
    ${wavyClipPath};

    @media ${QUERIES.tabletAndUp} {
      --height: 540px;
    }

    @media ${QUERIES.laptopAndUp} {
      --height: 730px;
    }
  }
`;

const Underlined = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-decoration-color: var(--color-accent);
  text-underline-offset: 6px;

  @media ${QUERIES.laptopAndUp} {
    text-underline-offset: 10px;
  }
`;

const Title = styled(Heading)`
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;
`;

const IphoneImage = styled.img`
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(64px);
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    max-width: 514px;
    transform: translateY(55px);
  }

  @media ${QUERIES.laptopAndUp} {
    max-width: 767px;
    transform: translateY(50px);
  }
`;

const PatternImageLeft = styled.img`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: block;
    position: absolute;
    top: 71.12px;
    left: -227px;
  }

  @media ${QUERIES.laptopAndUp} {
    top: 116px;
    left: -138px;
  }
`;

const PatternImageRight = styled.img`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: block;
    position: absolute;
    top: 250px;
    right: -94px;
  }

  @media ${QUERIES.laptopAndUp} {
    top: 314px;
    right: -48px;
  }
`;
