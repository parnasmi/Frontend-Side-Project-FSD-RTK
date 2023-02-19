import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/libs';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE= 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        type = 'button',
        ...otherProps
    } = props;

    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={type}
            className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
