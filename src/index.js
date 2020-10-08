import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider } from './containers/Language/Language';

/**
 * Render the App Component in the root element.
 */
ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById('root'),
);
