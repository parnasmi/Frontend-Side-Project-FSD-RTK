import React, { memo } from 'react';
import { classNames } from '@/shared/libs';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted } = props;

    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
    );
});
