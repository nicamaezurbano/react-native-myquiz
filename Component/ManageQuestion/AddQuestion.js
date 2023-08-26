import { 
    Text, 
    TouchableOpacity,
    Modal,
    TextInput,
    Image,
    View,
  } from 'react-native';
import { StyleSheet } from 'react-native';
import styles_general from '../../Styles/styles_general';
import styles_modal from '../../Styles/styles_modal';
import React, {useState} from 'react';
  
export default function AddQuestion({navigation, navigateTo}){

  const [modalAddQuestionVisible, setModalAddQuestionVisible] = useState(false);

  return(
    <>
      <TouchableOpacity style={styles.item}
      onPress={() => {setModalAddQuestionVisible(true)}}>
        <Text style={[styles.title]}>+</Text>
      </TouchableOpacity>

      {/* Modal for adding question */}
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalAddQuestionVisible}
          onRequestClose={() => {
              setModalAddQuestionVisible(!modalAddQuestionVisible);
          }}
          >
          <View style={styles_modal.centeredView}>
              <View style={styles_modal.modalView}>
                  <View style={styles_modal.modalTitle}>
                      <Text style={[
                      styles_general.textBold, 
                      styles_general.textDark,
                      styles_general.appText,
                      ]}>Add Question</Text>
                      
                      <TouchableOpacity
                          onPress={() => setModalAddQuestionVisible(!modalAddQuestionVisible)}>
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
                          placeholder="Enter your question here"
                      />
                  </View>

                  <View style={styles_modal.modalFooter}>
                      <TouchableOpacity style={styles_modal.settingsItem}>
                        <Text style={[
                            styles_general.textDark,
                            styles_general.button_link,
                            styles_general.appText,
                        ]}
                        onPress={()=>{setModalAddQuestionVisible(!modalAddQuestionVisible); navigation.navigate(navigateTo, {id: "1"})}}
                        >DONE</Text>
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
      padding: 10,
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#FFE69A',
      borderRadius: 15,
      borderWidth: 3,
      borderStyle: 'solid',
      alignItems: 'center',
      elevation: 5,
    },
    title: {
      fontSize: 24,
      color: '#FFE69A',
    },
  });