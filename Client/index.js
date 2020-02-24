/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      primary: '#009688',
      accent: '#f1c40f',
    }
  };

const Main = () => {
    <PaperProvider theme={theme}>
        <App />
    </PaperProvider>
}

AppRegistry.registerComponent(appName, () => App);
