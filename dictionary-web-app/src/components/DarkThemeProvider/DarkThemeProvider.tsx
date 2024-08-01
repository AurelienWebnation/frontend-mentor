import {
  type ChangeEvent,
  createContext,
  memo,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useBodyDataValue } from '../../hooks/use-body-data-value.hook.ts';

interface DarkThemeContext {
  theme: Theme;
  handleDarkThemeChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const defaultContextValue: DarkThemeContext = {
  theme: 'light',
  handleDarkThemeChange: () => {},
};

export const DarkThemeContext =
  createContext<DarkThemeContext>(defaultContextValue);

type Theme = 'light' | 'dark';

const prefersColorSchemeMedia = window.matchMedia(
  '(prefers-color-scheme: dark)'
);
const isPrefersColorSchemeDark = prefersColorSchemeMedia.matches;

export const DarkThemeProvider = memo(function ({
  children,
}: PropsWithChildren) {
  const [theme, setTheme] = useBodyDataValue<Theme>(
    'theme',
    isPrefersColorSchemeDark ? 'dark' : 'light'
  );

  const handleDarkThemeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setTheme(e.target.checked ? 'dark' : 'light'),
    []
  );

  useEffect(() => {
    function setDarkThemeFromPrefersColorScheme(e: MediaQueryListEvent) {
      e.matches ? setTheme('dark') : setTheme('light');
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

  const value = useMemo(() => ({ theme, handleDarkThemeChange }), [theme]);

  return (
    <DarkThemeContext.Provider value={value}>
      {children}
    </DarkThemeContext.Provider>
  );
});
