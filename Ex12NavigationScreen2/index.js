/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './Main';
import MainDrawer from './MainDrawer';
import MainMaterialTopTab from './MainMaterialTopTab';

//1. BottomTabNavigator 실습
//AppRegistry.registerComponent(appName, () => Main);

//2. MaterialTopTabNavigator 실습
//AppRegistry.registerComponent(appName, () => MainMaterialTopTab);

//3. DrawerNavigator 실습
AppRegistry.registerComponent(appName, () => MainDrawer);
