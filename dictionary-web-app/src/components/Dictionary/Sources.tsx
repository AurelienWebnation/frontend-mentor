import type { DictionaryType } from './type.ts';
import { HorizontalLine } from '../HorizontalLine';
import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';
import { Source } from './Source.tsx';

export function Sources({ sourceUrls }: Pick<DictionaryType, 'sourceUrls'>) {
  return (
    <Wrapper>
      <HorizontalLine />
      {sourceUrls.map((url, index) => (
        <Source url={url} key={index} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin-top: 32px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 40px;
  }
`;
