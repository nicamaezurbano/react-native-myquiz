import { StyleSheet } from 'react-native';
import { getWindowHeight, getWindowWidth, getStatusBarHeight } from '../utils/Constants';

const windowWidth = getWindowWidth()
const windowHeight = getWindowHeight()
const STATUSBAR_HEIGHT = getStatusBarHeight()

const styles_answer_quiz = StyleSheet.create({
    container: {
        height: windowHeight+STATUSBAR_HEIGHT,
    },
    input: {
        margin: 8,
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
    bottomContainer: {
        padding: 20,
    },
    reminders: {
        margin: 30,
    },
    paragraph: {
        marginVertical: 20,
    },
    btnSubmit: {
        marginVertical: 20,
    },
});

export default styles_answer_quiz;