import { 
    ScrollView, 
    Text, 
    View, 
  } from 'react-native';
import styles_general from '../../Styles/styles_general';
import styles_answer_quiz from '../../Styles/styles_answer_quiz';
import Button_primary_large from '../Customized/Button_primary_large';
import Top from '../Home/Top';
import QuestionItem from '../Customized/QuestionItem';

  
export default function SubmitQuiz({ navigation }) {
    return (
      <View 
        style={[styles_general.bg_light,
        styles_answer_quiz.container]}
        >
        
        <Top title='Nica' navigation={navigation} />

        <ScrollView>
            <View style={styles_answer_quiz.middleContainer}>
                <Text style={[
                    styles_general.appHeader, 
                    styles_general.textDark,
                    styles_general.textBold,
                    styles_answer_quiz.centeredView,
                    ]}>
                    All about Computers
                </Text>
            </View>

            
            <QuestionItem id="1" title="Quiz 1" />
            <QuestionItem id="1" title="Quiz 1" />
            <QuestionItem id="1" title="Quiz 1" />
            <QuestionItem id="1" title="Quiz 1" />
            
            <View style={styles_answer_quiz.btnSubmit}>
                <Button_primary_large title="Submit" />
            </View>
        </ScrollView>
      </View>
    );
}