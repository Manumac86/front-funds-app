import { useContext } from 'react';
import { LanguageContext } from '../../containers/Language/Language';

// get text according to id & current language
export default function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
}
