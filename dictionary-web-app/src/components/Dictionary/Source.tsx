import { Text } from '../Text';
import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';

interface SourceProp {
  url: string;
}

export function Source({ url }: SourceProp) {
  return (
    <Wrapper>
      <Text $color="grey" $size="body-s" $style="underline">
        Source
      </Text>
      <LinkWrapper>
        <Text
          as="a"
          target="_blank"
          $size="body-s"
          href={url}
          $style="underline"
        >
          {url}
        </Text>
        <img src="/images/icon-new-window.svg" alt="External link" />
      </LinkWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 24px;
  display: grid;
  gap: 8px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 21px;
    display: flex;
    gap: 25px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;
