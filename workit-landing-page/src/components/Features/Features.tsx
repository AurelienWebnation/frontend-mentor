import styled from 'styled-components';
import { Container } from '../Container';
import { QUERIES } from '../../constants.ts';
import { Heading } from '../Heading';

export function Features() {
  return (
    <Wrapper>
      <Grid>
        <Item>
          <Number>1</Number>
          <HeadingWrapper>
            <Heading level={3} as="h2">
              Actionable insights
            </Heading>
          </HeadingWrapper>
          <Description>
            Optimize your products, improve customer satisfaction and stay ahead
            of the competition with our product data analytics.
          </Description>
        </Item>

        <Item>
          <Number>2</Number>
          <HeadingWrapper>
            <Heading level={3} as="h2">
              Data-driven decisions
            </Heading>
          </HeadingWrapper>
          <Description>
            Make data-driven decisions with our product data analytics. Our
            AI-generated reports help you unlock insights hidden in your product
            data.
          </Description>
        </Item>

        <Item>
          <Number>3</Number>
          <HeadingWrapper>
            <Heading level={3} as="h2">
              Always affordable
            </Heading>
          </HeadingWrapper>
          <Description>
            Always affordable pricing that scales with your business. Get
            top-quality product data analytics services without hidden costs or
            unexpected fees.
          </Description>
        </Item>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: url('/images/content-table-background.svg') no-repeat bottom /
    cover;
  padding-top: calc((64px + 80px) * 2);
  padding-bottom: 12%;
  text-align: center;
  margin-bottom: 100px;
  margin-top: -80px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 250px;
  }
`;

const Grid = styled(Container)`
  display: grid;
  gap: 40px;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 26px;
  }
`;

const Item = styled.article`
  @media ${QUERIES.tabletAndUp} {
    display: grid;
    align-items: center;
    grid-template-areas:
      'number title'
      'number description';
    text-align: left;
    max-width: 573px;
    margin: 0 auto;
  }

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    max-width: 100%;
    text-align: center;
  }
`;

const HeadingWrapper = styled.div`
  grid-area: title;
  color: var(--color-primary);
`;

const Number = styled.span`
  grid-area: number;
  font-family: 'Fraunces', 'serif';
  display: grid;
  place-items: center;
  width: 48px;
  height: 46px;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  border: 1px solid var(--color-primary);
  border-radius: 100%;

  @media ${QUERIES.tabletAndUp} {
    margin-right: 32px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 56px;
  }
`;

const Description = styled.p`
  grid-area: description;
  margin-top: 16px;

  @media ${QUERIES.laptopAndUp} {
    margin-top: 28px;
  }
`;
