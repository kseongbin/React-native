/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainComponent from './MainComponent';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainComponent);
