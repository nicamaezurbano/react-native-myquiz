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
import styles_modal from '../../Styles/styles_modal';
import React, {useState} from 'react';
import Button_primary_large from '../Customized/Button_primary_large';
import AddQuestionButton from '../Customized/Add_question_button';

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
    
    const [modalEditQuizVisible, setModalEditQuizVisible] = useState(false);
    const [selectedQuizID, setSelectedQuizID] = useState(route.params.id.id);

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
                ]}>Back</Text>
                    
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
                    <TouchableOpacity
                        onPress={() => {setModalEditQuizVisible(true), console.log(selectedQuizID)}}>
                        <Image
                            style={[styles_general.icon,
                                styles_manage_question.editQuizIcon,
                            ]}
                            source={require('../../Images/icon-edit.png')}
                        /> 
                    </TouchableOpacity>
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
                    <ManageQuestionItem key={item.id} id={item.id} title={item.title} navigation={navigation} navigateTo="DisplayQuestions" />
                ))}

                <AddQuestionButton navigation={navigation} navigateTo="DisplayOption" />
            </ScrollView>

            <View style={[
                styles_manage_question.bottomContainer
                ]}>
                <Button_primary_large title="Done" navigation={navigation} navigateTo="DisplayQuizzes" />
            </View>


            {/* Modal for editing quiz */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalEditQuizVisible}
                onRequestClose={() => {
                    setModalEditQuizVisible(!modalEditQuizVisible);
                }}
                >
                <View style={styles_modal.centeredView}>
                    <View style={styles_modal.modalView}>
                        <View style={styles_modal.modalTitle}>
                            <Text style={[
                            styles_general.textBold, 
                            styles_general.textDark,
                            styles_general.appText,
                            ]}>Edit Quiz</Text>
                            
                            <TouchableOpacity
                                onPress={() => setModalEditQuizVisible(!modalEditQuizVisible)}>
                                <Image
                                    style={styles_general.icon}
                                    source={require('../../Images/icon-remove.png')}
                                /> 
                            </TouchableOpacity>
                        </View>
                            
                        <View style={styles_modal.modalBody}>
                            <TextInput 
                                style={[
                                    styles_general.appText,
                                    styles_modal.modal_input,
                                ]}
                                placeholder="Edit here"
                            />
                        </View>

                        <View style={styles_modal.modalFooter}>
                            <TouchableOpacity style={styles_modal.settingsItem}>
                            
                            <Text style={[
                                styles_general.textDark,
                                styles_general.button_link,
                                styles_general.appText,
                            ]}>DONE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

function ManageQuestionItem({id, title, navigation, navigateTo}){
    
    const [modalRemoveQuestionVisible, setModalRemoveQuestionVisible] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState("");

    return(
        <View style={styles_manage_quiz.quizItemContainer}>
            <ItemList_primary id={id} title={title} navigation={navigation} navigateTo={navigateTo} />

            <TouchableOpacity
                onPress={() => {setSelectedQuestion(id); setModalRemoveQuestionVisible(true)}}>
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
                visible={modalRemoveQuestionVisible}
                onRequestClose={() => {
                    setModalRemoveQuestionVisible(!modalRemoveQuestionVisible);
                }}
                >
                <View style={styles_modal.centeredView}>
                    <View style={styles_modal.modalView}>
                        <View style={styles_modal.modalTitle}>
                            <Text style={[
                            styles_general.textBold, 
                            styles_general.textDark,
                            styles_general.appText,
                            ]}>Remove Question</Text>
                            
                            <TouchableOpacity
                                onPress={() => setModalRemoveQuestionVisible(!modalRemoveQuestionVisible)}>
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
                            ]}>Are you sure you want to remove this question?</Text>
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
                            onPress={() => setModalRemoveQuestionVisible(!modalRemoveQuestionVisible)}>
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