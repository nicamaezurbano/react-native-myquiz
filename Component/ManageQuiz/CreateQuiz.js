import { 
    ScrollView, 
    Text, 
    TextInput, 
    View, 
  } from 'react-native';
import styles_general from '../../Styles/styles_general';
import styles_manage_quiz from '../../Styles/styles_manage_quiz';
import Button_primary_large from '../Customized/Button_primary_large';
import Button_secondary_large from '../Customized/Button_secondary_large';
import Top from '../Home/Top';

  
export default function CreateQuiz({ navigation }) {
    return (
      <View 
        style={[styles_general.bg_light,
        styles_manage_quiz.container]}
        >
        
        <Top title='Nica' navigation={navigation} />
        
        <ScrollView>
            <View style={styles_manage_quiz.middleContainer}>
                <Text style={[
                    styles_general.appHeader, 
                    styles_general.textDark,
                    styles_manage_quiz.centeredView
                    ]}>
                    Create your
                </Text>
                <Text style={[
                    styles_general.appHeader, 
                    styles_general.textDark,
                    styles_general.textBold,
                    styles_manage_quiz.centeredView
                    ]}>
                    Quiz
                </Text>
                <TextInput style={[
                    styles_general.appText,
                    styles_manage_quiz.input,
                ]}
                placeholder="Title"/>
                
                <Text style={[
                    styles_general.textDark,
                    styles_general.appText,
                    styles_manage_quiz.centeredView
                ]}>
                    Your title should be creative
                    
                </Text>
                <Text style={[
                    styles_general.textDark,
                    styles_general.appText,
                    styles_manage_quiz.centeredView
                ]}>and interesting.
                </Text>
            </View>
        </ScrollView>

        <View style={styles_manage_quiz.bottomContainer}>
            <Button_primary_large title="Next" navigation={navigation} navigateTo="StartQuiz" />
        </View>
      </View>
    );
}