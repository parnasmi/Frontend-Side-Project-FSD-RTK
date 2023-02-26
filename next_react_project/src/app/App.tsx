import AppRouter from 'app/providers/router';
import { Navbar } from 'widgets';
import { classNames } from 'shared/libs';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

export default function App() {
    return (
        <div className={classNames('app', {}, [])}>
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
