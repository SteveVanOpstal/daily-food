import * as React from 'react';
import Layout from './src/components/layout';

const wrapPage = ({element, props}) => <Layout {...props}>{element}</Layout>;

export default wrapPage;
