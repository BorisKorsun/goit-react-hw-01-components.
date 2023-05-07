import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@emotion/react';

import { App } from 'components/App';
import './index.css';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends';

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

      <Statistics 
      stats={data}
      title={'Upload stats'}/>
      <FriendList friends={friends}/>
    </App>
    </ThemeProvider>
  </React.StrictMode>
);
