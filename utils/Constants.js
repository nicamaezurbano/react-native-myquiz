import {Dimensions} from 'react-native';
import Constants from 'expo-constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const StatusBarHeight = Constants.statusBarHeight

export function getWindowWidth(){
    return windowWidth;
};

export function getWindowHeight(){
    return windowHeight;
};

export function getStatusBarHeight(){
    return StatusBarHeight;
};