export interface DictionaryType {
  word: string;
  meanings: MeaningType[];
  sourceUrls: string[];
  phonetics: PhoneticType[];
}

export interface MeaningType {
  partOfSpeech: string;
  definitions: DefinitionType[];
  synonyms?: string[];
}

export interface DefinitionType {
  definition: string;
  example?: string;
}

export interface PhoneticType {
  text: string;
  audio?: string;
}

export type CustomError = Error & { info?: string };
