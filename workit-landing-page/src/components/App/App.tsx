import { Features } from '../Features';
import { Footer } from '../Footer';
import { Founder } from '../Founder';
import { Hero } from '../Hero';
import styled from 'styled-components';

export function App() {
  return (
    <>
      <StackingContext>
        <Hero style={{ zIndex: 2 }} />
        <main style={{ zIndex: 1 }}>
          <Features />
          <Founder />
        </main>
      </StackingContext>
      <Footer />
    </>
  );
}

const StackingContext = styled.div`
  isolation: isolate;
`;
