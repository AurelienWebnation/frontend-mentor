import {
  type ChangeEvent,
  createContext,
  memo,
  type PropsWithChildren,
  useCallback,
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

export const DarkThemeProvider = memo(function ({
  children,
}: PropsWithChildren) {
  const [theme, setTheme] = useBodyDataValue<Theme>('theme', 'light');

  const handleDarkThemeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setTheme(e.target.checked ? 'dark' : 'light'),
    []
  );

  const value = useMemo(() => ({ theme, handleDarkThemeChange }), [theme]);

  return (
    <DarkThemeContext.Provider value={value}>
      {children}
    </DarkThemeContext.Provider>
  );
});
