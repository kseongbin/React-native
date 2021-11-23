/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MyApp from './MyApp';
import {name as appName} from './app.json';

//앱이 처음 실행시킬 컴포넌트(Component)를 등록
AppRegistry.registerComponent(appName, () => MyApp);
