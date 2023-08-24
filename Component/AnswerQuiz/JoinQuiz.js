import { 
    ScrollView, 
    Text, 
    TextInput, 
    View, 
  } from 'react-native';
import styles_general from '../../Styles/styles_general';
import styles_answer_quiz from '../../Styles/styles_answer_quiz';
import Button_primary_large from '../Customized/Button_primary_large';
import Button_secondary_large from '../Customized/Button_secondary_large';
import Top from '../Home/Top';

  
export default function JoinQuiz({ navigation }) {
    return (
      <View 
        style={[styles_general.bg_light,
        styles_answer_quiz.container]}
        >
        
        <Top title='Nica' navigation={navigation} />

        <View style={styles_answer_quiz.middleContainer}>
            <Text style={[
                styles_general.appHeader, 
                styles_general.textDark,
                styles_answer_quiz.centeredView
                ]}>
                Please enter your
            </Text>
            <Text style={[
                styles_general.appHeader, 
                styles_general.textDark,
                styles_general.textBold,
                styles_answer_quiz.centeredView
                ]}>
                Access Code
            </Text>
            <TextInput style={[
                styles_general.appText,
                styles_answer_quiz.input,
              ]}
              placeholder="Access Code"/>
              
            <Text style={[
                styles_general.textDark,
                styles_general.appText,
                styles_answer_quiz.centeredView
            ]}>
                Access code allows you to 
                
            </Text>
            <Text style={[
                styles_general.textDark,
                styles_general.appText,
                styles_answer_quiz.centeredView
            ]}>participate a quiz.
            </Text>
        </View>

        <View style={styles_answer_quiz.bottomContainer}>
            <Button_primary_large title="Join quiz" navigation={navigation} navigateTo="StartQuiz" />

            <Text style={[
                styles_general.textDark,
                styles_general.appText,
                styles_answer_quiz.centeredView
            ]}>
                or
            </Text>

            <Button_secondary_large title="Create quiz" />
        </View>
      </View>
    );
}