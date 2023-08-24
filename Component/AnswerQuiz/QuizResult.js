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

  
export default function QuizResult({ navigation }) {
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
                styles_answer_quiz.centeredView,
                ]}>
                All about Computers
            </Text>
            <View style={styles_answer_quiz.reminders}>
                <Text style={[
                    styles_general.textDark,
                    styles_general.appText,
                    styles_answer_quiz.centeredView,
                    styles_answer_quiz.paragraph,
                ]}>
                    Quiz finished.
                </Text>
                <Text style={[
                    styles_general.textDark,
                    styles_general.appText,
                    styles_answer_quiz.centeredView,
                    styles_answer_quiz.paragraph,
                ]}>
                    Thanks fo completing this quiz.
                </Text>
                <Text style={[
                    styles_general.textDark,
                    styles_general.appText,
                    styles_general.textBold,
                    styles_answer_quiz.centeredView,
                    styles_answer_quiz.paragraph,
                ]}>
                    Result: 2/3
                </Text>
            </View>
        </View>

        <View style={styles_answer_quiz.bottomContainer}>
            <Button_primary_large title="Done" navigation={navigation} navigateTo="Home" />
            <Text style={[
                styles_general.button_link,
                styles_general.textDark,
                styles_general.appText,
                styles_answer_quiz.centeredView,
            ]}>
                View my answers
            </Text>
        </View>
      </View>
    );
}