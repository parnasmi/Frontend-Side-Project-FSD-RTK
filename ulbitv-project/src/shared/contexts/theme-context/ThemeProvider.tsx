import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

// const isTheme = (value: any): value is Theme => typeof value === 'string' &&
// (Theme.DARK === value || Theme.LIGHT === value)

// const getDefaultTheme = (): Theme => {
//     const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
//     return isTheme(defaultTheme) ? defaultTheme : Theme.LIGHT;
// }

//another way of type checking with type guards⬆️

const getTheme = (theme: Theme | string | null): Theme | null => {
    return Object.values(Theme as any).some((item: Theme) => theme === item) ? (theme as Theme) : null;
}

interface ThemeProviderProps {
    children: React.ReactNode
    }

const defaultTheme: Theme = getTheme(localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
