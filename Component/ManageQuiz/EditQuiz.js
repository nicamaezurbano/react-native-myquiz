import { 
    Text, 
    TouchableOpacity, 
    Image,
    Modal,
    View,
    TextInput,
  } from 'react-native';
import { StyleSheet } from 'react-native';
import { getWindowWidth } from '../../utils/Constants';
import styles_modal from '../../Styles/styles_modal';
import styles_general from '../../Styles/styles_general';
import styles_manage_question from '../../Styles/styles_manage_question';
import React, {useState} from 'react';

const windowWidth = getWindowWidth()
  
export default function EditQuiz({ id, title, navigation, navigateTo}){
    
    const [modalEditQuizVisible, setModalEditQuizVisible] = useState(false);
    // const [selectedQuizID, setSelectedQuizID] = useState("");

    return(
        <>
            <TouchableOpacity
                onPress={() => {setModalEditQuizVisible(true), console.log(id)}}>
                <Image
                    style={[styles_general.icon,
                        styles_manage_question.editQuizIcon,
                    ]}
                    source={require('../../Images/icon-edit.png')}
                /> 
            </TouchableOpacity>

            
            {/* Modal for editing quiz */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalEditQuizVisible}
                onRequestClose={() => {
                    setModalEditQuizVisible(!modalEditQuizVisible);
                }}
                >
                <View style={styles_modal.centeredView}>
                    <View style={styles_modal.modalView}>
                        <View style={styles_modal.modalTitle}>
                            <Text style={[
                            styles_general.textBold, 
                            styles_general.textDark,
                            styles_general.appText,
                            ]}>Edit Quiz</Text>
                            
                            <TouchableOpacity
                                onPress={() => setModalEditQuizVisible(!modalEditQuizVisible)}>
                                <Image
                                    style={styles_general.icon}
                                    source={require('../../Images/icon-remove.png')}
                                /> 
                            </TouchableOpacity>
                        </View>
                            
                        <View style={styles_modal.modalBody}>
                            <TextInput 
                                style={[
                                    styles_general.appText,
                                    styles_modal.modal_input,
                                ]}
                                placeholder="Edit here"
                            />
                        </View>

                        <View style={styles_modal.modalFooter}>
                            <TouchableOpacity style={styles_modal.settingsItem}>
                            
                            <Text style={[
                                styles_general.textDark,
                                styles_general.button_link,
                                styles_general.appText,
                            ]}>DONE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#212A3E',
      borderRadius: 15,
      borderWidth: 3,
      borderStyle: 'solid',
      width: windowWidth-40,
    },
    title: {
      fontSize: 16,
    },
  });