import { Header } from '../Header';
import styled from 'styled-components';
import { Button } from '../Button';
import { Spacer } from '../Spacer';
import { QUERIES } from '../../constants.ts';
import { Container } from '../Container';
import { ContentTableList } from '../ContentTableList';
import { Footer } from '../Footer';

export function App() {
  return (
    <>
      <Hero>
        <Container>
          <Header />
          <Title>
            Data <Underlined>tailored</Underlined> to your needs.
          </Title>
          <Spacer height={40} />
          <Button>Learn more</Button>
          <HeroImage
            src="/images/image-hero.webp"
            alt="Iphone with statistics data"
          />
        </Container>
      </Hero>
      <ContentTableBackground>
        <ContentTableList />
      </ContentTableBackground>
      <AboutWrapper>
        <AuthorPicture
          src="/images/image-founder.webp"
          alt="Louis Graham, the founder of Workit"
        />
        <AboutDescription>
          <h2>Be the first to test</h2>
          <p>
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </p>
          <Button>Apply for access</Button>
        </AboutDescription>
      </AboutWrapper>
      <Footer />
    </>
  );
}

const Hero = styled.div`
  background: url('/images/home-hero-background.svg') no-repeat bottom / cover;
  color: var(--color-white);
  text-align: center;
  position: relative;
  z-index: 2;

  @media ${QUERIES.tabletAndUp} {
    background:
      url('/images/bg-pattern-1.svg') no-repeat -227px 71px,
      url('/images/bg-pattern-2.svg') no-repeat calc(100% + 94px) 250px,
      url('/images/home-hero-background.svg') no-repeat bottom / cover;
  }

  @media ${QUERIES.laptopAndUp} {
    background:
      url('/images/bg-pattern-1.svg') no-repeat -138px 116px,
      url('/images/bg-pattern-2.svg') no-repeat calc(100% + 48px) 314px,
      url('/images/home-hero-background.svg') no-repeat bottom / cover;
  }
`;

const Underlined = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-decoration-color: var(--color-accent);
  text-underline-offset: 10px;
`;

const Title = styled.h1`
  max-width: 635px;
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroImage = styled.img`
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(64px);
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    max-width: 480px;
  }

  @media ${QUERIES.laptopAndUp} {
    max-width: 715px;
  }
`;

const ContentTableBackground = styled.section`
  background: url('/images/content-table-background.svg') no-repeat bottom /
    cover;
  padding-top: calc(64px * 2);
  padding-bottom: 12%;
  text-align: center;
  margin-bottom: 100px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 250px;
  }
`;

const AboutWrapper = styled(Container)`
  isolation: isolate;
  position: relative;
  margin-bottom: 74px;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-bottom: 80px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 3;
      background: url('/images/bg-pattern-3.svg') no-repeat 90% 60%;
      transform: translateY(100px);
      pointer-events: none;
    }
  }
`;

const AuthorPicture = styled.img`
  max-width: 265px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(50px);

  @media ${QUERIES.tabletAndUp} {
    transform: translateY(-55%);
  }

  @media ${QUERIES.laptopAndUp} {
    max-width: 477px;
    transform: translateY(-35%);
  }
`;

const AboutDescription = styled.article`
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
