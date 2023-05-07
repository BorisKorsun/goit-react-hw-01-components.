import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@emotion/react';

import { App } from 'components/App';
import './index.css';
import Profile from 'components/Profile/Profile';

import user from 'data/user.json';

import theme from './constants/theme';

const { avatar, location, tag, username, stats } = user;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App>
      <Profile 
      avatar={avatar} 
      location={location} 
      username ={username} 
      tag ={tag} 
      views={stats.views} 
      likes={stats.likes}
      followers={stats.followers}/>
    </App>
    </ThemeProvider>
  </React.StrictMode>
);
