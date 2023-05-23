import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppRouter from './providers/router';
import { Navbar } from '@/widgets';
import { classNames } from '@/shared/libs';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/contexts/theme-context';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch';
import { getUserInited, userActions } from '@/entities/User';

export default function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
