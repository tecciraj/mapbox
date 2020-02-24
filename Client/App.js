import React from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
import LoginPage from './Screens/Login';
import RegisterPage from './Screens/Register';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Notifications from './Screens/Notifications';

class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/Register" component={RegisterPage} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Profile" component={Profile} />
                    <Route exact path="/Notifications" component={Notifications} />
                </Switch>
            </NativeRouter>
        )
    }
}

export default App;