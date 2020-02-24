import React from 'react';
import { registerRootComponent } from 'expo';
import { NativeRouter, Switch, Route } from 'react-router-native';
import LoginPage from './../../Screens/Login';
import RegisterPage from './../../Screens/Register';
import Home from './../../Screens/Home'

class RouteManager extends React.Component {
    render() {
        return (
            <NativeRouter>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/Register" component={RegisterPage} />
                    <Route exact path="/Home" component={Home} />
                </Switch>
            </NativeRouter>
        )
    }
}

export default registerRootComponent(RouteManager);