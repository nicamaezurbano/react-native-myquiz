import { 
    ScrollView, 
    Text, 
    View, 
    Image, 
    TextInput,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles_authentication from '../../Styles/styles_authentication';
import styles_general from '../../Styles/styles_general';
import styles_home from '../../Styles/styles_home';
  
  export default function Login({ navigation }) {
    return (
      <ScrollView 
        style={styles_authentication.container}
        >
        <ImageBackground source={require('../../Images/bg.png')} resizeMode="cover">
            
            <StatusBar/>
          <View style={styles_authentication.appTitle}>
            <Text 
              style={[
                styles_general.appHeader,
                styles_general.textLight,
                styles_general.textBold,
                styles_authentication.title,
              ]}>MyQuiz</Text>
            <Image
              style={styles_authentication.img_logo}
              source={require('../../Images/MyQuiz-logo-light.png')}
            />
          </View>
          <View style={styles_authentication.form}>
            <TextInput
              style={[
                styles_authentication.input,
                styles_general.appText,
              ]}
              placeholder="Email"
            />
            <TextInput
              style={[
                styles_authentication.input,
                styles_general.appText,
              ]}
              placeholder="Password"
            />
            <TouchableOpacity>
              <Text
                style={[
                  styles_general.button_link,
                  styles_general.textDark,
                  styles_authentication.button
                ]}
                onPress={() => navigation.navigate('Home')}
                >
                Login
              </Text>
            </TouchableOpacity>
            <Text
              style={[
                styles_general.textDark,
                styles_general.appText,
              ]}>
              Don't have an account? 
  
              <Text
              style={[
                styles_general.button_link,
                styles_general.appText,
                styles_general.textDark,
              ]}
              onPress={() => navigation.navigate('Register')}
              > Register </Text>
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }