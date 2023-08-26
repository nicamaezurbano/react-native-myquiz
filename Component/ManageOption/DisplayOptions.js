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
import EditOption from './EditOption';
import Top from '../Home/Top';
import React, {useState} from 'react';
import Button_primary_large from '../Customized/Button_primary_large';
import EditQuestion from '../ManageQuestion/EditQuestion';
import AddOption from './AddOption';
import RemoveOption from './RemoveOption';

export default function DisplayOptions({ navigation, route }) {

    const OptionList = [
        {
            id: '1',
            title: 'Option One',
        },
        {
            id: '2',
            title: 'Option Two',
        },
        {
            id: '3',
            title: 'Option Three',
        },
        {
            id: '4',
            title: 'Option Four',
        },
        {
            id: '5',
            title: 'Option Five',
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
                onPress={()=>{navigation.navigate("DisplayQuestions")}}
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
                        Question 1
                    </Text>

                    <EditQuestion id={route.params.id.id} />

                </View>

                <Text style={[
                    styles_general.appText, 
                    styles_general.textDark,
                    styles_manage_question.textOption,
                    ]}>
                    Options:
                </Text>

                {OptionList.map((item)=>(
                    <ManageOptionItem key={item.id} id={item.id} title={item.title} navigation={navigation} navigateTo="" />
                ))}

                <AddOption />
            </ScrollView>

            <View style={[
                styles_manage_question.bottomContainer
                ]}>
                <Button_primary_large title="Done" navigation={navigation} navigateTo="DisplayQuizzes" />
            </View>
        </View>
    );
}

function ManageOptionItem({id, title, navigation, navigateTo}){
    return(
        <View style={styles_manage_quiz.quizItemContainer}>
            <EditOption id={id} title={title} navigation={navigation} navigateTo={navigateTo} />
            <RemoveOption id={id} />
        </View>
    );
}