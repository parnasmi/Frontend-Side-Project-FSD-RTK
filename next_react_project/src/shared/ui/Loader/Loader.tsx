import { classNames } from '@/shared/libs';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <span style={{ display: 'none' }}>Loading...</span>
        <div />
        <div />
        <div />
        <div />
    </div>
);
