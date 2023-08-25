import { 
    Text, 
    TouchableOpacity, 
    Image,
    Modal,
    View,
  } from 'react-native';
import { StyleSheet } from 'react-native';
import { getWindowWidth } from '../../utils/Constants';
import styles_modal from '../../Styles/styles_modal';
import styles_general from '../../Styles/styles_general';
import styles_manage_quiz from '../../Styles/styles_manage_quiz';
import React, {useState} from 'react';

const windowWidth = getWindowWidth()
  
export default function RemoveQuiz({ id, title, navigation, navigateTo}){
    
    const [modalRemoveQuizVisible, setModalRemoveQuizVisible] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState("");

    return(
        <>
            <TouchableOpacity
                onPress={() => {setSelectedQuiz(id); setModalRemoveQuizVisible(true)}}>
                <Image
                    style={[styles_general.icon,
                        styles_manage_quiz.removeIcon,
                    ]}
                    source={require('../../Images/icon-remove.png')}
                /> 
            </TouchableOpacity>

            
            {/* Modal for remove quiz */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalRemoveQuizVisible}
                onRequestClose={() => {
                    setModalRemoveQuizVisible(!modalRemoveQuizVisible);
                }}
                >
                <View style={styles_modal.centeredView}>
                    <View style={styles_modal.modalView}>
                        <View style={styles_modal.modalTitle}>
                            <Text style={[
                            styles_general.textBold, 
                            styles_general.textDark,
                            styles_general.appText,
                            ]}>Remove Quiz</Text>
                            
                            <TouchableOpacity
                                onPress={() => setModalRemoveQuizVisible(!modalRemoveQuizVisible)}>
                                <Image
                                    style={styles_general.icon}
                                    source={require('../../Images/icon-remove.png')}
                                /> 
                            </TouchableOpacity>
                        </View>
                            
                        <View style={styles_modal.modalBody}>
                            <Text style={[
                            styles_general.textDark,
                            styles_general.appText,
                            ]}>Are you sure you want to remove this quiz?</Text>
                            
                            <Text style={[
                            styles_general.textDark,
                            styles_modal.modalBody_modaltext2,
                            ]}>Removing a quiz will also remove all questions added and answers that has been submited.</Text>
                        </View>

                        <View style={styles_modal.modalFooter}>
                            <TouchableOpacity style={styles_modal.settingsItem}>
                            
                            <Text style={[
                                styles_general.textDark,
                                styles_general.button_link,
                                styles_general.appText,
                            ]}>Yes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles_modal.settingsItem}
                            onPress={() => setModalRemoveQuizVisible(!modalRemoveQuizVisible)}>
                            <Text style={[
                                styles_general.textDark,
                                styles_general.button_link,
                                styles_general.appText,
                            ]}>No</Text>
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