import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </BrowserRouter>
)
