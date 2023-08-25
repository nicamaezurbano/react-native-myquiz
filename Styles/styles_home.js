import { StyleSheet } from 'react-native';
import { getWindowHeight, getStatusBarHeight } from '../utils/Constants';

const windowHeight = getWindowHeight()
const STATUSBAR_HEIGHT = getStatusBarHeight()

const styles_home = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: windowHeight+STATUSBAR_HEIGHT,
    },
    middle: {
        alignItems: 'center',
    },
    bottom_null: {
        paddingVertical: 90,
        paddingHorizontal: 20,
    },
    bottom: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    settings: {
        width: 30,
        height: 30,
    },
});

export default styles_home;