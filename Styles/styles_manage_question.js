import { StyleSheet } from 'react-native';
import { getWindowHeight, getWindowWidth, getStatusBarHeight } from '../utils/Constants';

const windowWidth = getWindowWidth()
const windowHeight = getWindowHeight()
const STATUSBAR_HEIGHT = getStatusBarHeight()

const styles_manage_question = StyleSheet.create({
    container: {
        height: windowHeight+STATUSBAR_HEIGHT,
        justifyContent: 'space-between',
    },
    quizTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quizTitle: {
        margin: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#212A3E',
        borderRadius: 15,
        borderStyle: 'solid',
        width: windowWidth-40,
    },
    editQuizIcon: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    copyIcon: {
        marginLeft: 10,
    },
    bottomContainer: {
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 15,
    },
    copyCode: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 20,
    },

    textOption: {
        margin: 20,
    },
});

export default styles_manage_question;