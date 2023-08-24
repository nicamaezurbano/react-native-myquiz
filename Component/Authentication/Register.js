import { 
    ScrollView, 
    Text, 
    View, 
    Image, 
    TextInput,
    ImageBackground,
  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles_authentication from '../../Styles/styles_authentication';
import styles_general from '../../Styles/styles_general';
  
  export default function Register({ navigation }) {
    return (
      <ScrollView 
        style={styles_authentication.container}
        >
        <ImageBackground source={require('../../Images/bg.png')} resizeMode="cover">
            <StatusBar/>
          <View style={[styles_authentication.appTitle,
            styles_authentication.appTitle_register,
            ]}>
            <Text 
              style={[
                styles_general.appHeader,
                styles_general.textLight,
                styles_general.textBold,
                styles_authentication.title,
              ]}>Create account</Text>
            <Image
              style={styles_authentication.img_logo_smaller}
              source={require('../../Images/MyQuiz-logo-light.png')}
            />
          </View>
          <View style={[styles_authentication.form,
            styles_authentication.form_register,
            ]}>
            <TextInput
              style={[
                styles_authentication.input,
                styles_general.appText,
              ]}
              value=""
              placeholder="First name"
            />
            <TextInput
              style={[
                styles_authentication.input,
                styles_general.appText,
              ]}
              value=""
              placeholder="Last name"
            />
            <TextInput
              style={[
                styles_authentication.input,
                styles_general.appText,
              ]}
              value=""
              placeholder="Email"
            />
            <TextInput
              style={[
                styles_authentication.input,
                styles_general.appText,
              ]}
              value=""
              placeholder="Password"
            />
            <Text
              style={[
                styles_general.button_link,
                styles_general.textDark,
                styles_authentication.button
              ]}
              onPress={() => navigation.navigate('Login')}
              >Register
            </Text>
            <Text
              style={[
                styles_general.textDark,
                styles_general.appText,
              ]}>
              Already have an account? 
  
              <Text
              style={[
                styles_general.button_link,
                styles_general.appText,
                styles_general.textDark,
              ]}
              onPress={() => navigation.navigate('Login')}
              > Login </Text>
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }