import { 
    ScrollView, 
    Text, 
    TextInput, 
    View, 
  } from 'react-native';
import styles_general from '../../Styles/styles_general';
import styles_answer_quiz from '../../Styles/styles_answer_quiz';
import Button_primary_large from '../Customized/Button_primary_large';
import Top from '../Home/Top';

  
export default function StartQuiz({ navigation }) {
    return (
      <View 
        style={[styles_general.bg_light,
        styles_answer_quiz.start_quiz_container]}
        >
        
        <Top title='Nica' navigation={navigation} />

        <View style={styles_answer_quiz.middleContainer}>
            <Text style={[
                styles_general.appHeader, 
                styles_general.textDark,
                styles_general.textBold,
                styles_general.centeredView,
                ]}>
                All about Computers
            </Text>
            <View style={styles_answer_quiz.reminders}>
                <Text style={[
                    styles_general.textDark,
                    styles_general.appText,
                    styles_general.centeredView,
                    styles_answer_quiz.paragraph,
                ]}>
                    You are about to take this quiz.
                    Remember that you cannot stop or 
                    go back once it started.
                </Text>
                <Text style={[
                    styles_general.textDark,
                    styles_general.appText,
                    styles_general.centeredView,
                    styles_answer_quiz.paragraph,
                ]}>
                    There is no time limit so you
                    can take your time to finish it.
                </Text>
                <Text style={[
                    styles_general.textDark,
                    styles_general.appText,
                    styles_general.centeredView,
                    styles_answer_quiz.paragraph,
                ]}>
                    Good luck!
                </Text>
            </View>
        </View>

        <View style={styles_answer_quiz.bottomContainer}>
            <Button_primary_large title="Start" navigation={navigation} navigateTo="SubmitQuiz" />
        </View>
      </View>
    );
}