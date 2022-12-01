import {Box} from '@mui/material';
import React from 'react';

import BottomNav from './navigation/bottomNav';
import TopNavigation from './navigation/topNavigation';
import Settings from './settings/settings';

const Layout = ({children, location}) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: {xs: 'none', sm: 'block'},
          displayPrint: 'none',
          maxWidth: 800,
          margin: 'auto',
        }}
      >
        <TopNavigation />
      </Box>
      <Box sx={{maxWidth: 800, margin: 'auto'}}>
        {children}
        <Box sx={{displayPrint: 'none', marginBottom: '56px'}}>
          <Settings />
        </Box>
      </Box>
      <BottomNav location={location} />
    </React.Fragment>
  );
};

export default Layout;
