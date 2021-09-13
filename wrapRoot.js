import * as React from 'react';
import store from './src/state/store';
import {Provider} from 'react-redux';
import Theme from './src/components/theme';

import '@fontsource/permanent-marker';
import '@fontsource/annie-use-your-telescope';
import '@fontsource/give-you-glory';
import '@fontsource/montserrat';

const wrapRoot = ({element, props}) => (
  <Provider store={store}>
    <Theme {...props}>{element}</Theme>
  </Provider>
);

export default wrapRoot;
