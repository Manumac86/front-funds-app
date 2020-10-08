import { useContext } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../containers/Language/Language';

/**
 * Text Component.
 * Get text according to id & current language
 *
 * @export Text
 *
 * @param {string} tid  The selected translation id.
 *
 * @return {string}
 */
export default function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
}

Text.propTypes = {
  tid: PropTypes.string.isRequired,
};
