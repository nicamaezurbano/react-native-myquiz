import { 
    ScrollView, 
    Text, 
    View, 
  } from 'react-native';
import styles_general from '../../Styles/styles_general';
import styles_home from '../../Styles/styles_home';
import ItemList_primary from '../Customized/ItemList_primary';
import Button_primary_large from '../Customized/Button_primary_large';
import Button_secondary_large from '../Customized/Button_secondary_large';
import Button_primary_small from '../Customized/Button_primary_small';
import Button_secondary_small from '../Customized/Button_secondary_small';
import Top from './Top';

  
export default function Home({ navigation }) {

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
            styles_home.btnManage,
            ]}
            onPress={()=>{navigation.navigate("DisplayQuizzes")}}
            >Manage MyQuiz</Text>

        {(QuizList == undefined || QuizList == null) ?
                
            <>
                <View style={styles_home.middle}>
                
                    <Text style={[
                        styles_general.appHeader, 
                        styles_general.textDark,
                        ]}>
                        Ooops!
                    </Text>
                    <Text style={[
                        styles_general.appText, 
                        styles_general.textDark,
                        ]}>
                        You don't have any quiz yet.
                    </Text>
                </View>

                <View style={[
                        styles_home.bottom_null
                        ]}>
                    <Button_primary_large title="Create quiz" navigation={navigation} navigateTo="CreateQuiz" />
                    <Button_secondary_large title="Join quiz" navigation={navigation} navigateTo="JoinQuiz" />
                </View>
            </>
                
            :
            <>
                <ScrollView>
                    {QuizList.map((item)=>(<ItemList_primary key={item.id} id={item.id} title={item.title} navigation={navigation} navigateTo="DisplayAnswers" />))}
                </ScrollView>

                <View style={[
                        styles_home.bottom
                        ]}>
                    <Button_primary_small title="Create quiz" navigation={navigation} navigateTo="CreateQuiz" />
                    
                    <Button_secondary_small title="Join quiz" navigation={navigation} navigateTo="JoinQuiz" />
                </View>
            </>
        }
      </View>
    );
}