import {
  createContext,
  memo,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme.ts';

interface DarkThemeContext {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const defaultContextValue: DarkThemeContext = {
  isDarkTheme: false,
  toggleTheme: () => {},
};

export const DarkThemeContext =
  createContext<DarkThemeContext>(defaultContextValue);

const prefersColorSchemeMedia = window.matchMedia(
  '(prefers-color-scheme: dark)'
);

const isPrefersColorSchemeDark = prefersColorSchemeMedia.matches;

export const DarkThemeProvider = memo(function ({
  children,
}: PropsWithChildren) {
  const [isDarkTheme, setIsDarkTheme] = useState(isPrefersColorSchemeDark);

  const toggleTheme = useCallback(
    () => setIsDarkTheme((prevTheme) => !prevTheme),
    []
  );

  useEffect(() => {
    function setDarkThemeFromPrefersColorScheme(e: MediaQueryListEvent) {
      e.matches ? setIsDarkTheme(true) : setIsDarkTheme(false);
    }
    prefersColorSchemeMedia.addEventListener(
      'change',
      setDarkThemeFromPrefersColorScheme
    );

    return () =>
      prefersColorSchemeMedia.removeEventListener(
        'change',
        setDarkThemeFromPrefersColorScheme
      );
  }, []);

  const value = useMemo(
    () => (isDarkTheme ? theme.colors.dark : theme.colors.light),
    [isDarkTheme]
  );

  return (
    <DarkThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={value}>{children}</ThemeProvider>
    </DarkThemeContext.Provider>
  );
});
