import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';

import {
    Text,
} from 'react-native';
import profileIcon from './../assets/profile-icon.png';
import mapIcon from './../assets/map-icon.png';
// import logoutIcon from './../assets/logout-icon.png';
import bellIcon from './../assets/bell.png';
import MapModule from './MapModule';
import Notifications from './Notifications';
import Profile from './Profile';

const ProfileRoute = () => <Profile />;
const MapsRoute = () => <MapModule />;
const NotificationRoute = () => <Notifications />;
 
class Home extends Component{
    state = {
        index: 0,
        routes: [
          { key: 'mapsView', title: 'Maps', icon: mapIcon, color: '#009688' },
          { key: 'notification', title: 'Notification', icon: bellIcon, color: '#009688' },
          { key: 'profile', title: 'Profile', icon:profileIcon, color: '#009688' },
          // { key: 'logOut', title: 'Logout', icon: logoutIcon, color: '#009688' },
        ],
      };
      _handleIndexChange = index => this.setState({ index });
      _renderScene = BottomNavigation.SceneMap({
        mapsView: MapsRoute,
        notification: NotificationRoute,
        profile: ProfileRoute,
      });

     render(){
         return(
            <BottomNavigation
            navigationState={this.state}
            onIndexChange={this._handleIndexChange}
            renderScene={this._renderScene}
          />
         );
     }
 }

 export default Home;