import { Heading } from '../Heading';
import styled from 'styled-components';
import { Card } from '../Card';
import { QUERIES } from '../../constants.ts';
import { AccordionItems } from '../AccordionItems';
import { FAQS } from '../../data';

export function App() {
  return (
    <Wrapper>
      <TopBackground />
      <Card>
        <Container>
          <Header>
            <StarIcon src="/images/icon-star.svg" alt="" />
            <Heading $level={1}>FAQs</Heading>
          </Header>
          <AccordionItems data={FAQS} defaultValue="what-is-frontend-mentor" />
        </Container>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  place-items: center;
  padding-left: 24px;
  padding-right: 24px;
  isolation: isolate;
`;

const TopBackground = styled.div`
  background-image: url('/images/background-pattern-mobile.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 232px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;

  @media ${QUERIES.tabletAndUp} {
    background-image: url('/images/background-pattern-desktop.svg');
    height: 320px;
  }
`;

const Container = styled.main`
  padding: 24px;
  max-width: 600px;

  @media ${QUERIES.tabletAndUp} {
    padding: 40px;
  }
`;

const Header = styled.header`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 24px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 32px;
  }
`;

const StarIcon = styled.img`
  width: 24px;
  height: 24px;

  @media ${QUERIES.tabletAndUp} {
    width: 40px;
    height: 40px;
  }
`;
