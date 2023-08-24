import { StyleSheet } from 'react-native';
import { getWindowWidth, getWindowHeight, getStatusBarHeight } from '../utils/Constants';

const windowWidth = getWindowWidth();
const windowHeight = getWindowHeight();
const STATUSBAR_HEIGHT = getStatusBarHeight()


const styles_edit = StyleSheet.create({
    container: {
        height: windowHeight+STATUSBAR_HEIGHT,
    },
    backtohome: {
        backgroundColor: '#FFD24C',
        // paddingTop: 50,
        // paddingBottom: 70,
        paddingHorizontal: 15,
        borderBottomEndRadius: 999,
        borderBottomRightRadius: 999,
        width: windowWidth/2,
        height: (windowWidth/2)+50,
        justifyContent: 'center',
    },
    backIcon: {
        width: 100,
        height: 100,
    },
    form: {
        alignItems: 'center',
        height: (windowHeight+STATUSBAR_HEIGHT)-(windowWidth/2)-50,
        paddingVertical: 70,
    },
    buttonSave: {
        marginTop: 50,
    },
});

export default styles_edit;