import type { DictionaryType } from './type.ts';
import { Result } from './Result.tsx';
import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';

interface ResultsProps {
  results: DictionaryType[];
}

export function Results({ results }: ResultsProps) {
  return (
    <Wrapper>
      {results.map(({ word, phonetics, meanings, sourceUrls }, index) => (
        <Result
          word={word}
          phonetics={phonetics}
          meanings={meanings}
          sourceUrls={sourceUrls}
          key={index}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 28px;
  display: grid;
  gap: 50px;

  @media ${QUERIES.tabletAndUp} {
    gap: 84px;
    margin-top: 45px;
  }
`;
