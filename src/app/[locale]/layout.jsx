// layout.jsx

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';
import './styles/styles.css';
import './assets/css/all.css';
import './assets/css/meanmenu.min.css';
import './assets/sass/style.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

export default async function RootLayout({children, locale}) {
  console.log('locale: ', locale);
  const messages = await getMessages();
  // useEffect(() => {
  //   require('bootstrap/dist/js/bootstrap.min.js');
  // }, []);

  return (
    <html lang={locale}>
      <head>
        <meta name="description" content="STL | SaiGon Travel Lounge" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </head>

      <body>
        <NextIntlClientProvider messages={messages}>
          <NextTopLoader showSpinner={false} />
          {children}
          {/* <LanguageSwitcher
        /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
