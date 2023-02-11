import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'app/App';
import { ThemeProvider } from 'shared/contexts/theme-context';
import 'shared/config/i18n/i18n';

const providers = (
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);

render(providers, document.getElementById('root'));
