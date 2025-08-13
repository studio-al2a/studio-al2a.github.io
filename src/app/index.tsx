import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { registerSW } from 'virtual:pwa-register';

import '../styles/index.css';
import App from './App';
import { store } from './store/store';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('A new version of the app is available. Refresh to update?')) {
      updateSW?.();
    }
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
