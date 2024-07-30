import { Meaning } from './Meaning.tsx';
import type { DictionaryType } from './type.ts';

export function Meanings({ meanings }: Pick<DictionaryType, 'meanings'>) {
  return meanings.map(({ partOfSpeech, definitions, synonyms }, index) => (
    <Meaning
      partOfSpeech={partOfSpeech}
      definitions={definitions}
      synonyms={synonyms}
      key={index}
    />
  ));
}
