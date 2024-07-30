import { Text } from '../Text';
import styled from 'styled-components';
import type { CustomError } from './type.ts';

interface Props {
  error: CustomError;
}

export function ErrorMessage({ error }: Props) {
  return (
    <Wrapper>
      <img src="/images/sad-emoji.png" alt="Sad Emoji" />
      <Title $size="s" $weight={true}>
        {error.message}
      </Title>
      <Info $color="grey">{error.info}</Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  margin-top: 132px;
`;

const Title = styled(Text)`
  margin-top: 44px;
`;

const Info = styled(Text)`
  margin-top: 24px;
`;
