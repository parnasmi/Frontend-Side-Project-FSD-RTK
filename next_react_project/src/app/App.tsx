import AppRouter from 'app/providers/router';
import { useTheme } from 'shared/contexts/theme-context';
import { Navbar } from 'widgets';
import { classNames } from 'shared/libs';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { Counter } from 'entities/Counter/ui/Counter';

export default function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <Counter />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
