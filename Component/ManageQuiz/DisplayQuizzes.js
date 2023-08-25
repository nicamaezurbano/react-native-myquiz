import { 
    ScrollView, 
    Text, 
    View, 
    TouchableOpacity,
    Image,
    Modal,
  } from 'react-native';
import styles_general from '../../Styles/styles_general';
import styles_home from '../../Styles/styles_home';
import styles_manage_quiz from '../../Styles/styles_manage_quiz';
import ItemList_primary from '../Customized/ItemList_primary';
import Button_primary_small from '../Customized/Button_primary_small';
import Top from '../Home/Top';
import React, {useState} from 'react';
import RemoveQuiz from './RemoveQuiz';

export default function DisplayQuizzes({ navigation }) {

    const QuizList = [
        {
            id: '1',
            title: 'Quiz One',
        },
        {
            id: '2',
            title: 'Quiz Two',
        },
        {
            id: '3',
            title: 'Quiz Three',
        },
        {
            id: '4',
            title: 'Quiz Four',
        },
        {
            id: '5',
            title: 'Quiz Five',
        },
        {
            id: '6',
            title: 'Quiz Six',
        },
        {
            id: '7',
            title: 'Quiz Seven',
        },
        {
            id: '8',
            title: 'Quiz Eight',
        },
    ];

    return (
        <View 
            style={[styles_general.bg_light,
            styles_home.container]}
            >
        
            <Top title='Nica' navigation={navigation} />
        
            <Text style={[
                styles_general.button_link,
                styles_general.appText,
                styles_general.textDark,
                styles_general.btnBack,
                ]}
                onPress={()=>{navigation.navigate("Home")}}
                >Back</Text>


            <Text style={[
                styles_general.appText, 
                styles_general.textDark,
                styles_general.centeredView,
                styles_manage_quiz.displayQuizTopText,
                ]}>
                Your created quiz will appear here. 
            </Text>
                    
            <ScrollView>
                {QuizList.map((item)=>(
                    <ManageQuizItem key={item.id} id={item.id} title={item.title} navigation={navigation} navigateTo="DisplayQuestions" />
                ))}
            </ScrollView>

            <View style={[
                styles_home.bottom
                ]}>
                <Button_primary_small title="Create quiz" navigation={navigation} navigateTo="CreateQuiz" />
            </View>
        </View>
    );
}

function ManageQuizItem({id, title, navigation, navigateTo}){
    return(
        <View style={styles_manage_quiz.quizItemContainer}>
            <ItemList_primary id={id} title={title} navigation={navigation} navigateTo={navigateTo} />
            <RemoveQuiz id={id} />
        </View>
    );
}