/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/i18/i18next';

AppRegistry.registerComponent(appName, () => App);
