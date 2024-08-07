import { SearchField } from '../SearchField';
import styled from 'styled-components';
import { type ChangeEvent, useCallback, useEffect, useState } from 'react';
import { QUERIES } from '../../constants.ts';
import type { DictionaryType } from './type.ts';
import { Results } from './Results.tsx';
import useSWR from 'swr';
import { MoonLoader } from 'react-spinners';
import { ErrorMessage } from './ErrorMessage.tsx';
import { fetcher } from './fetcher.ts';

export function Dictionary() {
  const [word, setWord] = useState('');
  const [debouncedWord, setDebouncedWord] = useState('');
  const [inputError, setInputError] = useState('');

  const {
    data: results,
    error,
    isLoading,
  } = useSWR<DictionaryType[] | null>(
    debouncedWord
      ? `https://api.dictionaryapi.dev/api/v2/entries/en/${debouncedWord}`
      : null,
    fetcher
  );

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setInputError('Whoops, can’t be empty…');
    } else {
      setInputError('');
    }

    setWord(event.target.value);
  }, []);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedWord(word);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [word]);

  return (
    <Wrapper>
      <SearchField
        placeholder="Search for any word..."
        value={word}
        onChange={handleChange}
        $error={inputError}
      />

      {results && results.length > 0 && <Results results={results} />}

      {isLoading && (
        <LoaderWrapper>
          <MoonLoader color="var(--color-purple)" size={50} />
        </LoaderWrapper>
      )}

      {error && <ErrorMessage error={error} />}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin-top: 24px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 51.5px;
  }
`;

const LoaderWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: 84px;
`;
