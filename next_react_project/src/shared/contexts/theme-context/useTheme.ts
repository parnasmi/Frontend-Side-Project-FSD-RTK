import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    // const toggleTheme = () => {
    //     const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    //     setTheme(newTheme);
    //     localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    // }

    const toggleTheme = () => {
        setTheme?.((theme: Theme) => {
            const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
            document.body.className = newTheme;
            return newTheme;
        });
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
