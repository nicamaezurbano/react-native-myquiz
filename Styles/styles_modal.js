import { StyleSheet } from 'react-native';

const styles_modal = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(130,130,130,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: 250,
        // height: 200,
    },
    modalTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalBody_settings: {
        marginTop: 25,
        alignItems: 'center',
    },
    modalBody: {
        marginTop: 25,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    modalBody_modaltext2: {
        marginTop: 15,
    },
    modalFooter: {
        marginHorizontal: 40,
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    
    settingsItem: {
        marginVertical: 8,
    },
    settingsItemDivider: {
        height: 1,
        width: 220,
        backgroundColor: '#e7e7e7',
    },

    modal_input: {
        borderColor: '#212A3E',
        borderBottomWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 250-40,
    },
});

export default styles_modal;