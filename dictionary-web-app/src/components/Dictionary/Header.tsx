import styled from 'styled-components';
import { QUERIES } from '../../constants.ts';
import { Heading } from '../Heading';
import { PlayButton } from '../PlayButton';
import { Text } from '../Text';
import type { DictionaryType } from './type.ts';
import { usePlayAudio } from './use-play-audio.hook.ts';

type Props = Pick<DictionaryType, 'phonetics'> & {
  word: string;
};

export function Header({ word, phonetics }: Props) {
  const phoneticWithAudio = phonetics.find((phonetic) => phonetic.audio);
  const phoneticAudioUrl = phoneticWithAudio?.audio;
  const phoneticText = phoneticWithAudio?.text;

  const playAudio = usePlayAudio(phoneticAudioUrl);

  return (
    <Wrapper>
      <div>
        <Heading $level="l">{word}</Heading>
        <Phonetic $size="m" $color="purple">
          {phoneticText}
        </Phonetic>
      </div>
      {phoneticAudioUrl && <PlayButton onClick={playAudio} />}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Phonetic = styled(Text)`
  margin-top: 8px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 11px;
  }
`;
