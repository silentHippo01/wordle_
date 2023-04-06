import { useContext } from 'react';
import cls from './ThemeSwitcher.module.scss';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../../../app/Providers/ThemeProvider/lib/ThemeContext';


interface ThemeSwitcher {
    
}

export const ThemeSwitcher = (props: ThemeSwitcher) => {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeHandler = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return (
        <div className={cls.ThemeSwitcher}>
            <label id={cls.switch} className={cls.switch}>
                <input type="checkbox" onChange={changeHandler} id={cls.slider} />
                <span className={cls.slider}></span>
            </label>
        </div>
    );
};
