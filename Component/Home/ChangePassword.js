import { 
    ScrollView, 
    Text, 
    View, 
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles_general from '../../Styles/styles_general';
import styles_edit_name from '../../Styles/style_edit_name_and_password';
import styles_authentication from '../../Styles/styles_authentication';
import Button_primary_small from '../Customized/Button_primary_small';

  
export default function ChangePassword({ navigation }) {
    return (
        <ScrollView>
            <ImageBackground source={require('../../Images/bg.png')} resizeMode="cover">
            <StatusBar/>
            <TouchableOpacity style={styles_edit_name.backtohome}
            onPress={() => navigation.pop()}>
                <Image
                    style={styles_edit_name.backIcon}
                    source={require('../../Images/back.png')}
                /> 
            </TouchableOpacity>

            <View style={styles_edit_name.form}>
                <TextInput
                style={[
                    styles_authentication.input,
                    styles_general.appText,
                ]}
                placeholder="Old password"
                />

                <TextInput
                style={[
                    styles_authentication.input,
                    styles_general.appText,
                ]}
                placeholder="New password"
                />

                <View style={styles_edit_name.buttonSave}>
                   <Button_primary_small title="Save" /> 
                </View>
            </View>
            </ImageBackground>
        </ScrollView>
    );
}