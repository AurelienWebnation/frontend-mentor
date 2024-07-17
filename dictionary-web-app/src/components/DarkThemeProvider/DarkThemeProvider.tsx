import {
  type ChangeEvent,
  createContext,
  type PropsWithChildren,
  useCallback,
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

export function DarkThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useBodyDataValue<Theme>('theme', 'light');

  const handleDarkThemeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setTheme(e.target.checked ? 'dark' : 'light'),
    []
  );

  return (
    <DarkThemeContext.Provider value={{ theme, handleDarkThemeChange }}>
      {children}
    </DarkThemeContext.Provider>
  );
}
