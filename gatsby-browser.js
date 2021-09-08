import * as React from 'react';
import Layout from './src/components/layout';
import store from './src/state/store';
import {Provider} from 'react-redux';
import Theme from './src/components/theme';

import '@fontsource/allison';
import '@fontsource/amatic-sc';
import '@fontsource/annie-use-your-telescope';
import '@fontsource/give-you-glory';
import '@fontsource/montserrat';
import '@fontsource/open-sans';
import '@fontsource/permanent-marker';
import '@fontsource/poppins';
import '@fontsource/sue-ellen-francisco';

export const wrapPageElement = ({element, props}) => <Layout {...props}>{element}</Layout>;

export const wrapRootElement = ({element, props}) => (
  <Provider store={store}>
    <Theme {...props}>{element}</Theme>
  </Provider>
);
