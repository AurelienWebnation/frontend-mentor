import type { DictionaryType } from './type.ts';
import { Header } from './Header.tsx';
import { Meanings } from './Meanings.tsx';
import { Sources } from './Sources.tsx';
import styled from 'styled-components';

export function Result({
  word,
  phonetics,
  meanings,
  sourceUrls,
}: DictionaryType) {
  return (
    <Wrapper>
      <Header word={word} phonetics={phonetics} />
      <Meanings meanings={meanings} />
      <Sources sourceUrls={sourceUrls} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  &:last-child {
    padding-bottom: 84px;
  }
`;
