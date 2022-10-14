import { component$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';
import { LocaleProvider } from '~/context/locale';

export default component$(() => (
  <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body lang="en">
      <LocaleProvider>
        <RouterOutlet />
      </LocaleProvider>
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
));
