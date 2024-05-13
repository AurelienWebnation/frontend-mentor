import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';
import { Features } from '../Features';
import { Footer } from '../Footer';
import { Founder } from '../Founder';
import { Hero } from '../Hero';

export function App() {
  return (
    <>
      <Hero />
      <ContentTableBackground>
        <Features />
      </ContentTableBackground>
      <Founder />
      <Footer />
    </>
  );
}

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
