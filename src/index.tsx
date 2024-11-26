import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "react-oidc-context";
import { getIdPConfig } from './lib/get-idp-config';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <AuthProvider {...getIdPConfig()}>
        <App />
      </AuthProvider>
    </React.StrictMode>,
  );
}
