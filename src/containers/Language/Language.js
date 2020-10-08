import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { languageOptions, dictionaryList } from '../../languages';

/**
 * The LanguageContext Component.
 * Creates the language context with default selected language.
 *
 * @export LanguageContext
 */
export const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
});

/**
 * The LanguageProvider.
 * It provides the language context to app
 *
 * @export LanguageProvider
 *
 * @return {JSX}
 */
export function LanguageProvider({ children }) {
  /**
   * The userLanguage state for when a language is selected.
   * @type {string}
   */
  const [userLanguage, setUserLanguage] = useState('en');

  /**
   * The language provider callback to change the selected language.
   * It receives the selected language and set the user Language Context.
   *
   * @type {Object}
   */
  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : 'en';
      setUserLanguage(newLanguage);
      window.localStorage.setItem('rcml-lang', newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
