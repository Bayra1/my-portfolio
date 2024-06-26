import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import en from './locales/en.json';
import mn from './locales/mn.json';

const messages = {
  en,
  mn
};

function App() {
  const [locale, setLocale] = useState('en');

  const switchLanguage = () => {
    setLocale(locale === 'en' ? 'mn' : 'en');
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <button onClick={switchLanguage}>
          {locale === 'en' ? 'Switch to Mongolian' : 'Switch to English'}
        </button>
        <h1>
          <FormattedMessage id="greeting" defaultMessage="Hello" />
        </h1>
        <p>
          <FormattedMessage id="welcome" defaultMessage="Welcome to our website" />
        </p>
      </div>
    </IntlProvider>
  );
}

export default App;
