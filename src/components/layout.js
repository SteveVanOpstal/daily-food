import React from 'react';
import TopNavigation from './navigation/topNavigation';
import BottomNavigation from './navigation/bottomNavigation';
import {Box} from '@material-ui/core';
import Settings from './settings/settings';

const Layout = ({children, location}) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: {xs: 'none', sm: 'block'},
          displayPrint: 'none',
        }}
      >
        <TopNavigation />
      </Box>
      <Box sx={{maxWidth: 800, width: '100%'}}>
        {children}
        <Box sx={{displayPrint: 'none', marginBottom: '56px'}}>
          <Settings />
        </Box>
      </Box>
      <BottomNavigation location={location} />
    </React.Fragment>
  );
};

export default Layout;
