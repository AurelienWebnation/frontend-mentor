import styled from 'styled-components';
import { Heading } from '../../Heading';
import { Container } from '../../Container';
import { QUERIES } from '../../../constants.ts';

export function YourResult() {
  return (
    <Wrapper as="article">
      <PictureWrapper>
        <Picture
          src="/images/image-man-eating.webp"
          alt="A man eating a sushi"
        />
      </PictureWrapper>
      <Explanation>
        <Heading $size="l">What your BMI result means</Heading>
        <p>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </Explanation>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  margin-top: 72px;
  isolation: isolate;
  position: relative;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    min-height: 411px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 65px;
    grid-template-columns: 1fr 465px;
    gap: 131px;
    align-items: end;
  }

  &::before {
    display: none;

    @media ${QUERIES.laptopAndUp} {
      content: url('/images/pattern-curved-line-left.svg');
      display: revert;
      position: absolute;
      top: -36px;
      right: 27px;
    }
  }
`;

const PictureWrapper = styled.div`
  margin-left: -24px;
  margin-right: -24px;

  @media ${QUERIES.tabletAndUp} {
    margin-right: revert;
    margin-left: revert;
  }

  @media ${QUERIES.tabletOnly} {
    transform: translateX(-51px);
    margin-left: -70px;
  }
`;

const Picture = styled.img``;

const Explanation = styled.div`
  margin-top: 48px;
  display: grid;
  gap: 32px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: revert;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-bottom: 40px;
    gap: 35px;
  }
`;
