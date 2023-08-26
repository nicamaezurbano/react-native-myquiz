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
import Checkbox from 'expo-checkbox';
  
export default function AddOption({navigation, navigateTo}){

  const [modalAddOptionVisible, setModalAddOptionVisible] = useState(false);
  const [isOptionCorrect, setIsOptionCorrect] = useState(false);

  return(
    <>
      <TouchableOpacity style={styles.item}
      onPress={() => {setModalAddOptionVisible(true)}}>
        <Text style={[styles.title]}>+</Text>
      </TouchableOpacity>

      {/* Modal for adding option */}
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalAddOptionVisible}
          onRequestClose={() => {
              setModalAddOptionVisible(!modalAddOptionVisible);
          }}
          >
          <View style={styles_modal.centeredView}>
              <View style={styles_modal.modalView}>
                  <View style={styles_modal.modalTitle}>
                      <Text style={[
                      styles_general.textBold, 
                      styles_general.textDark,
                      styles_general.appText,
                      ]}>Add Option</Text>
                      
                      <TouchableOpacity
                          onPress={() => setModalAddOptionVisible(!modalAddOptionVisible)}>
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
                          placeholder="Enter your option here"
                      />
                        <View style={styles.wrapper}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isOptionCorrect}
                                onValueChange={setIsOptionCorrect}
                                color={isOptionCorrect ? '#92B4EC' : undefined}
                                />
                            <Text style={[
                                styles_general.appText, 
                                styles_general.textDark]}
                                >Is this the corect answer?
                            </Text>
                        </View>
                        
                  </View>

                  <View style={styles_modal.modalFooter}>
                      <TouchableOpacity style={styles_modal.settingsItem}>
                        <Text style={[
                            styles_general.textDark,
                            styles_general.button_link,
                            styles_general.appText,
                        ]}
                        onPress={()=>{setModalAddOptionVisible(!modalAddOptionVisible)}}
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
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#FFE69A',
      borderRadius: 15,
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      elevation: 5,
    },
    title: {
      fontSize: 24,
      color: '#FFE69A',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      paddingVertical: 15,
      width: 250-74,
      alignItems: 'center',
    },
    checkbox: {
      margin: 8,
    },
  });