import { Text } from '../Text';
import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';
import { HorizontalLine } from '../HorizontalLine';
import type { MeaningType } from './type.ts';

export function Meaning({ partOfSpeech, definitions, synonyms }: MeaningType) {
  return (
    <Wrapper>
      <Header>
        <Text $weight={true} $italic={true} $size="m">
          {partOfSpeech}
        </Text>
        <HorizontalLine />
      </Header>

      <Text $color="grey" $size="s">
        Meaning
      </Text>
      <List>
        {definitions.map(({ definition, example }, index) => (
          <li key={index}>
            <DefinitionWrapper>
              {definition}
              {example && <Text $color="grey">“{example}”</Text>}
            </DefinitionWrapper>
          </li>
        ))}
      </List>

      {synonyms && synonyms.length > 0 && (
        <Synonyms>
          <Text $color="grey" $size="s">
            Synonyms
          </Text>
          <div>
            <Synonym $color="purple" $size="s" $weight={true}>
              {synonyms.join(', ')}
            </Synonym>
          </div>
        </Synonyms>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.article`
  margin-top: 32px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 42px;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    gap: 32px;
    margin-bottom: 42px;
  }
`;

const DefinitionWrapper = styled.div`
  display: grid;
  gap: 13px;
`;

const Synonyms = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
`;

const Synonym = styled(Text)`
  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.ul`
  margin-top: 17px;
  display: grid;
  gap: 13px;
  margin-left: var(--spacing-xs);

  & > li {
    display: grid;
    grid-template-columns: 5px auto;
    gap: 20px;
  }

  & > li::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background: var(--color-purple);
    /* optical alignment */
    transform: translateY(10px);
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: 27px;
    margin-left: 22px;
  }
`;
