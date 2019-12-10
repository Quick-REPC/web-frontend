import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Sentry from '@sentry/browser';

let environment = 'Development';

switch (window.location.origin) {
  case 'https://quickrepc-dev.netlify.com':
    environment = 'Staging';
    break;
  case 'https://quickrepc.com':
    environment = 'Production';
    break;
  default:
    environment = 'Development';
}

Sentry.init({ dsn: process.env.REACT_APP_SENTRY_KEY, environment });

ReactDOM.render(<App />, document.getElementById('root'));
