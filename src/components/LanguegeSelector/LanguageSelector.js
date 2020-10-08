import React, { useContext, useEffect } from 'react';

import { languageOptions } from '../../languages';
import { LanguageContext } from '../../containers/Language/Language';

// Styles
import './LanguageSelector.scss';

/**
 * The Language Selector Component
 *
 * @export LanguageSelector
 * @return {JSX}
 */
export default function LanguageSelector() {
  /**
   * The Language context to change the language.
   * @type {Object}
   */
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  /**
   * Set selected language by calling context method.
   *
   * @param {event} event  The select language event.
   */
  const handleLanguageChange = (event) => userLanguageChange(event.target.value);

  /**
   * Set the default language from localStorage. If no data, use the user browser language.
   */
  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem('rcml-lang');
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <select
      className="languageSelector"
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  );
}
