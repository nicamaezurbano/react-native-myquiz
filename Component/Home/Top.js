import { 
    Text, 
    View, 
    Image,
    TouchableOpacity,
    Modal,
  } from 'react-native';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from '../../utils/Constants';
import styles_general from '../../Styles/styles_general';
import styles_home from '../../Styles/styles_home';
import styles_modal from '../../Styles/styles_modal';
import React, {useState} from 'react';

const STATUSBAR_HEIGHT = getStatusBarHeight()
  
export default function Top({ title, navigation }) {

  const [modalSettingsVisible, setModalSettingsVisible] = useState(false);
  const [modalLogoutVisible, setModalLogoutVisible] = useState(false);

  return(
  <View style={styles.top}>
      <Text 
          style={[
          styles_general.textDark,
          styles_general.appText,
          ]}>Hi, {title}</Text>
      <TouchableOpacity
        onPress={() => setModalSettingsVisible(true)}>
        <Image
            style={styles_home.settings}
            source={require('../../Images/settings.png')}
        /> 
      </TouchableOpacity>
      
      {/* Modal for Settings Menu */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalSettingsVisible}
        onRequestClose={() => {
            setModalSettingsVisible(!modalSettingsVisible);
        }}
        >
            <View style={styles_modal.centeredView}>
                <View style={styles_modal.modalView}>
                  <View style={styles_modal.modalTitle}>
                    <Text style={[
                      styles_general.textBold, 
                      styles_general.textDark,
                      styles_general.appText,
                    ]}>Settings</Text>
                    
                    <TouchableOpacity
                        onPress={() => setModalSettingsVisible(!modalSettingsVisible)}>
                        <Image
                            style={styles_general.icon}
                            source={require('../../Images/icon-remove.png')}
                        /> 
                    </TouchableOpacity>
                  </View>
                    
                  <View style={styles_modal.modalBody}>
                    <View style={styles_modal.settingsItemDivider}></View>
                    
                    <TouchableOpacity style={styles_modal.settingsItem}
                    onPress={() => {setModalSettingsVisible(!modalSettingsVisible), navigation.navigate('EditName')}}>
                      <Text style={[
                        styles_general.textDark,
                        styles_general.appText,
                      ]}>Edit Name</Text>
                    </TouchableOpacity>

                    <View style={styles_modal.settingsItemDivider}></View>

                    <TouchableOpacity style={styles_modal.settingsItem}
                    onPress={() => {setModalSettingsVisible(!modalSettingsVisible), navigation.navigate('ChangePassword')}}>
                      <Text style={[
                        styles_general.textDark,
                        styles_general.appText,
                      ]}>Change Password</Text>
                    </TouchableOpacity>

                    <View style={styles_modal.settingsItemDivider}></View>

                    <TouchableOpacity style={styles_modal.settingsItem}
                    onPress={() => setModalLogoutVisible(true)}>
                      <Text style={[
                        styles_general.textDark,
                        styles_general.appText,
                      ]}>Logout</Text>
                    </TouchableOpacity>

                    <View style={styles_modal.settingsItemDivider}></View>

                  </View>
                </View>
            </View>
      </Modal>

      {/* Modal for logout confirmation */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalLogoutVisible}
        onRequestClose={() => {
            setModalLogoutVisible(!modalLogoutVisible);
        }}
        >
            <View style={styles_modal.centeredView}>
                <View style={styles_modal.modalView}>
                  <View style={styles_modal.modalTitle}>
                    <Text style={[
                      styles_general.textBold, 
                      styles_general.textDark,
                      styles_general.appText,
                    ]}>Logout</Text>
                    
                    <TouchableOpacity
                        onPress={() => setModalLogoutVisible(!modalLogoutVisible)}>
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
                    ]}>Are you sure you want to logout?</Text>
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
                    onPress={() => setModalLogoutVisible(!modalLogoutVisible)}>
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
  </View>
  );
}

const styles = StyleSheet.create({
  top:{
    backgroundColor: '#92B4EC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: STATUSBAR_HEIGHT+10,
    paddingBottom: 10,
  },
  });