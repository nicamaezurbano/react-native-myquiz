import { 
    ScrollView, 
    Text, 
    View, 
    TouchableOpacity,
    Image,
    Modal,
    TextInput,
  } from 'react-native';
import styles_general from '../../Styles/styles_general';
import styles_manage_quiz from '../../Styles/styles_manage_quiz';
import styles_manage_question from '../../Styles/styles_manage_question';
import ItemList_primary from '../Customized/ItemList_primary';
import Top from '../Home/Top';
import React, {useState} from 'react';
import Button_primary_large from '../Customized/Button_primary_large';
import AddQuestionButton from '../Customized/Add_question_button';
import EditQuiz from '../ManageQuiz/EditQuiz';
import RemoveQuestion from './RemoveQuestion';

export default function DisplayQuestions({ navigation, route }) {

    const QuestionList = [
        {
            id: '1',
            title: 'Question One',
        },
        {
            id: '2',
            title: 'Question Two',
        },
        {
            id: '3',
            title: 'Question Three',
        },
        {
            id: '4',
            title: 'Question Four',
        },
        {
            id: '5',
            title: 'Question Five',
        },
        {
            id: '6',
            title: 'Question Six',
        },
        {
            id: '7',
            title: 'Question Seven',
        },
        {
            id: '8',
            title: 'Question Eight',
        },
    ];

    return (
        <View 
            style={[styles_general.bg_light,
            styles_manage_question.container]}
            >
        
            <Top title='Nica' navigation={navigation} />
        
            <Text style={[
                styles_general.button_link,
                styles_general.appText,
                styles_general.textDark,
                styles_general.btnBack,
                ]}
                onPress={()=>{navigation.navigate("DisplayQuizzes")}}
                >Back</Text>
                    
            <ScrollView>
                <View style={styles_manage_question.quizTitleContainer}>
                    <Text style={[
                        styles_general.appHeader, 
                        styles_general.textDark,
                        styles_general.textBold,
                        styles_general.centeredView,
                        styles_manage_question.quizTitle
                        ]}>
                        All about Computers
                    </Text>

                    <EditQuiz id={route.params.id.id} />

                </View>

                <View style={[styles_manage_question.copyCode]}>
                    <Text style={[
                        styles_general.appText, 
                        styles_general.textDark,
                        styles_general.centeredView,
                        ]}>
                        Access Code:  <Text style={styles_general.textBold}>abc123</Text>
                    </Text>
                    <TouchableOpacity>
                        <Image
                            style={[styles_general.icon, styles_manage_question.copyIcon
                            ]}
                            source={require('../../Images/icon-copy.png')}
                        /> 
                    </TouchableOpacity>
                </View>

                {QuestionList.map((item)=>(
                    <ManageQuestionItem key={item.id} id={item.id} title={item.title} navigation={navigation} navigateTo="" />
                ))}

                <AddQuestionButton navigation={navigation} navigateTo="DisplayOption" />
            </ScrollView>

            <View style={[
                styles_manage_question.bottomContainer
                ]}>
                <Button_primary_large title="Done" navigation={navigation} navigateTo="DisplayQuizzes" />
            </View>
        </View>
    );
}

function ManageQuestionItem({id, title, navigation, navigateTo}){
    return(
        <View style={styles_manage_quiz.quizItemContainer}>
            <ItemList_primary id={id} title={title} navigation={navigation} navigateTo={navigateTo} />
            <RemoveQuestion id={id} />
        </View>
    );
}