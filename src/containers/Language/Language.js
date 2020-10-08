import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { languageOptions, dictionaryList } from '../../languages';

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
});

// it provides the language context to app
export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState('en');

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
