import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import App from 'app/App';
import { ThemeProvider } from 'shared/contexts/theme-context';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

const providers = (
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
);

render(providers, document.getElementById('root'));
