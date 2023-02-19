import './styles/index.scss';
import AppRouter from 'app/providers/router';
import { useTheme } from 'shared/contexts/theme-context';
import { Navbar } from 'widgets';
import { classNames } from 'shared/libs';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

export default function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
