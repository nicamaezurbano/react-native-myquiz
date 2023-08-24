import { StyleSheet } from 'react-native';
import { getWindowHeight, getWindowWidth, getStatusBarHeight } from '../utils/Constants';

const windowWidth = getWindowWidth()
const windowHeight = getWindowHeight()
const STATUSBAR_HEIGHT = getStatusBarHeight()

const styles_manage_quiz = StyleSheet.create({
    container: {
        height: windowHeight+STATUSBAR_HEIGHT,
        justifyContent: 'space-between',
    },
    input: {
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 5,
        borderColor: "#e7e7e7",
        borderStyle: "solid",
        borderWidth: 3 ,
        marginVertical: 30,
        marginHorizontal: 20,
    },
    middleContainer: {
        paddingVertical: 50,
        paddingHorizontal: 20,
    },
    centeredView: {
        textAlign: 'center',
    },
    bottomContainer: {
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 15,
    }
});

export default styles_manage_quiz;