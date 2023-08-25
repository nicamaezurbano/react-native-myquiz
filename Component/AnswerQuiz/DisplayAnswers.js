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

  
export default function DisplayAnswers({ navigation }) {
    return (
      <View 
        style={[styles_general.bg_light,
        styles_answer_quiz.container]}
        >
        
        <Top title='Nica' navigation={navigation} />

        <Text style={[
            styles_general.button_link,
            styles_general.textDark,
        ]}
        onPress={()=>{navigation.navigate("Home")}}>
            Back
        </Text>

        <ScrollView>
            <View style={styles_answer_quiz.middleContainer}>
                <Text style={[
                    styles_general.appHeader, 
                    styles_general.textDark,
                    styles_general.textBold,
                    styles_general.centeredView,
                    ]}>
                    All about Computers
                </Text>
            </View>

            
            <QuestionItem id="1" title="Quiz 1" page="DisplayAnswers" />
            <QuestionItem id="1" title="Quiz 1" page="DisplayAnswers" />
            <QuestionItem id="1" title="Quiz 1" page="DisplayAnswers" />
            <QuestionItem id="1" title="Quiz 1" page="DisplayAnswers" />
            
        </ScrollView>
      </View>
    );
}