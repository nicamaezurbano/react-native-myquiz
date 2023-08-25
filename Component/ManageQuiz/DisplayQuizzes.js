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
import styles_modal from '../../Styles/styles_modal';
import React, {useState} from 'react';

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
    
    const [modalRemoveQuizVisible, setModalRemoveQuizVisible] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState("");

    return(
        <View style={styles_manage_quiz.quizItemContainer}>
            <ItemList_primary id={id} title={title} navigation={navigation} navigateTo={navigateTo} />

            <TouchableOpacity
                onPress={() => {setSelectedQuiz(id); setModalRemoveQuizVisible(true)}}>
                <Image
                    style={[styles_general.icon,
                        styles_manage_quiz.removeIcon,
                    ]}
                    source={require('../../Images/icon-remove.png')}
                /> 
            </TouchableOpacity>

            
            {/* Modal for logout confirmation */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalRemoveQuizVisible}
                onRequestClose={() => {
                    setModalRemoveQuizVisible(!modalRemoveQuizVisible);
                }}
                >
                <View style={styles_modal.centeredView}>
                    <View style={styles_modal.modalView}>
                        <View style={styles_modal.modalTitle}>
                            <Text style={[
                            styles_general.textBold, 
                            styles_general.textDark,
                            styles_general.appText,
                            ]}>Remove Quiz</Text>
                            
                            <TouchableOpacity
                                onPress={() => setModalRemoveQuizVisible(!modalRemoveQuizVisible)}>
                                <Image
                                    style={styles_general.icon}
                                    source={require('../../Images/icon-remove.png')}
                                /> 
                            </TouchableOpacity>
                        </View>
                            
                        <View style={styles_modal.modalBody}>
                            <Text style={[
                            styles_general.textDark,
                            styles_general.appText,
                            ]}>Are you sure you want to remove this quiz?</Text>
                            
                            <Text style={[
                            styles_general.textDark,
                            styles_modal.modalBody_modaltext2,
                            ]}>Removing a quiz will also remove all questions added and answers that has been submited.</Text>
                        </View>

                        <View style={styles_modal.modalFooter}>
                            <TouchableOpacity style={styles_modal.settingsItem}>
                            
                            <Text style={[
                                styles_general.textDark,
                                styles_general.button_link,
                                styles_general.appText,
                            ]}>Yes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles_modal.settingsItem}
                            onPress={() => setModalRemoveQuizVisible(!modalRemoveQuizVisible)}>
                            <Text style={[
                                styles_general.textDark,
                                styles_general.button_link,
                                styles_general.appText,
                            ]}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}