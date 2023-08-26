import { 
    Text, 
    TouchableOpacity, 
    Modal,
    Image,
    TextInput,
    View,
  } from 'react-native';
import { StyleSheet } from 'react-native';
import { getWindowWidth } from '../../utils/Constants';
import styles_general from '../../Styles/styles_general';
import styles_modal from '../../Styles/styles_modal';
import React, {useState} from 'react';
import Checkbox from 'expo-checkbox';

const windowWidth = getWindowWidth()
  
export default  function EditOption({ id, title, navigation, navigateTo}){

  const [modalEditOptionVisible, setModalEditOptionVisible] = useState(false);
  const [isOptionCorrect, setIsOptionCorrect] = useState(false);

  return(
    <>
      <TouchableOpacity style={styles.item} 
      onPress={() => {setModalEditOptionVisible(true)}}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      {/* Modal for editing option */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalEditOptionVisible}
        onRequestClose={() => {
            setModalEditOptionVisible(!modalEditOptionVisible);
        }}
        >
        <View style={styles_modal.centeredView}>
            <View style={styles_modal.modalView}>
                <View style={styles_modal.modalTitle}>
                    <Text style={[
                    styles_general.textBold, 
                    styles_general.textDark,
                    styles_general.appText,
                    ]}>Edit Option</Text>
                    
                    <TouchableOpacity
                        onPress={() => setModalEditOptionVisible(!modalEditOptionVisible)}>
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
                        placeholder="Edit your option here"
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
                      onPress={()=>{setModalEditOptionVisible(!modalEditOptionVisible)}}
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
      paddingHorizontal: 20,
      paddingVertical: 15,
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#212A3E',
      borderRadius: 15,
      borderWidth: 1,
      borderStyle: 'solid',
      width: windowWidth-40,
    },
    title: {
      fontSize: 16,
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