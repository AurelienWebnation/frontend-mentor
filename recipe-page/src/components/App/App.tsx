import { Heading } from '../Heading';
import styled from 'styled-components';
import { PreparationTime } from '../PreparationTime';
import { Ingredients } from '../Ingredients';
import { Separator } from '../Separator';
import { Instructions } from '../Instructions';
import { Nutrition } from '../Nutrition';
import { QUERIES } from '../../constants.ts';

export function App() {
  return (
    <main>
      <Container>
        <FeaturedImage alt="omelette" src="/images/image-omelette.jpeg" />
        <Recipe>
          <Introduction>
            <Heading level={1}>Simple Omelette Recipe</Heading>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </Introduction>
          <PreparationTime preparation={5} cooking={5} />
          <Ingredients />
          <Separator />
          <Instructions />
          <Separator />
          <Nutrition calories={277} carbs={0} protein={20} fat={22} />
        </Recipe>
      </Container>
    </main>
  );
}

const Container = styled.div`
  max-width: calc(656px + var(--spacing-xl) * 2);
  margin-left: auto;
  margin-right: auto;
  padding: var(--spacing-xl) var(--spacing-lg);
  background-color: var(--color-white);

  @media ${QUERIES.laptopAndUp} {
    border-radius: 24px;
    margin-top: 123px;
    margin-bottom: 124px;
    padding-left: var(--spacing-xl);
    padding-right: var(--spacing-xl);
  }
`;

const FeaturedImage = styled.img`
  width: calc(100% + var(--spacing-lg) * 2);
  margin-left: calc(var(--spacing-lg) * -1);
  margin-right: calc(var(--spacing-lg) * -1);
  margin-top: calc(var(--spacing-xl) * -1);

  @media ${QUERIES.laptopAndUp} {
    width: 100%;
    border-radius: 12px;
    margin: revert;
  }
`;

const Recipe = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;

const Introduction = styled.div`
  display: grid;
  gap: var(--spacing-md);
`;
