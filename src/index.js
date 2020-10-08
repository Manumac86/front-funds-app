import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider } from './containers/Language/Language';

/**
 * Renders the App Component in the root element.
 * The main app is wrapped by the LanguageProvider,
 * so the entire App have access the LanguageContext.
 */
ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById('root'),
);
