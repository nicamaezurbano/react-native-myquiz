import { StyleSheet } from 'react-native';
import { getWindowWidth, getWindowHeight, getStatusBarHeight } from '../utils/Constants';

const windowWidth = getWindowWidth();
const windowHeight = getWindowHeight();
const STATUSBAR_HEIGHT = getStatusBarHeight()


const styles_authentication = StyleSheet.create({
    container: {
        backgroundColor: '#92B4EC',
    },
    appTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: (windowHeight/2)+STATUSBAR_HEIGHT,
        // marginVertical: 20,
    },
    title: {
        marginVertical: 20,
    },
    img_logo: {
        width: windowWidth/2,
        height: windowWidth/2,
    },
    img_logo_smaller: {
        width: windowWidth/3,
        height: windowWidth/3,
    },
    form: {
        backgroundColor: '#FFD24C',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight/2,
    },
    appTitle_register: {
        height: (windowHeight/2)+STATUSBAR_HEIGHT-100,
    },
    form_register: {
        height: (windowHeight/2)+100,
    },
    input: {
        width: windowWidth-100,
        margin: 8,
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 5,
    },
    button: {
        marginBottom: 80,
    },
});

export default styles_authentication;