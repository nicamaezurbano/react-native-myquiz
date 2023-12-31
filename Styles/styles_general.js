import { StyleSheet } from 'react-native';

const styles_general = StyleSheet.create({
    appHeader: {
        fontSize: 35,
    },
    appText: {
        fontSize: 16,
    },
    textLight: {
        color: '#FFF',
    },
    textDark: {
        color: '#251749',
    },
    textBold: {
        fontWeight: 'bold',
    },
    button_link: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        margin: 10,
    },
    icon: {
        width: 25,
        height: 25,
        alignSelf: 'flex-end',
    },
    bg_light: {
        backgroundColor: '#F2F2F2',
    },
    centeredView: {
        textAlign: 'center',
    },
    btnManage: {
        alignSelf: 'flex-end',
        marginVertical: 20,
        marginRight: 20,
    },
    btnBack: {
        alignSelf: 'flex-start',
        marginVertical: 20,
        marginLeft: 20,
    },
});

export default styles_general;