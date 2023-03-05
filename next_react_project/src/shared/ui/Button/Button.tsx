import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import { classNames, Mod } from 'shared/libs';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    children?: ReactNode;
}

export const Button = memo((props:ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mod = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
